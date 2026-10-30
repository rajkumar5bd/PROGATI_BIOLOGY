import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { MODELS_DATA } from '../data/modelsData';
import { MODEL_PARTS_MAP, ModelPartInfo } from '../data/modelPartsData';
import { Biology3DModel } from '../types/biology';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Layers,
  HelpCircle,
  CheckCircle2,
  Smartphone,
  Sparkles,
  Info,
  Heart,
  Droplet,
  Box,
  Eye,
  EyeOff,
  Crosshair,
  Award,
  Zap,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { OrganelleExplorerModal } from './OrganelleExplorerModal';

interface ThreeDModelViewerProps {
  initialModelId?: string;
  onOpenArHelp: () => void;
}

interface ProjectedLabel {
  part: ModelPartInfo;
  screenX: number;
  screenY: number;
  inFront: boolean;
}

export const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({
  initialModelId = 'neuron',
  onOpenArHelp
}) => {
  const [selectedModelId, setSelectedModelId] = useState<string>(initialModelId);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'threejs' | 'webar'>('threejs');
  const [arSupported, setArSupported] = useState<boolean | null>(null);

  // Label and Interaction States
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [labelMode, setLabelMode] = useState<'full' | 'compact'>('full');
  const [selectedPartId, setSelectedPartId] = useState<string>('soma');

  // Organelle Explorer Modal State
  const [isOrganelleModalOpen, setIsOrganelleModalOpen] = useState<boolean>(false);
  const [activeOrganelleModalId, setActiveOrganelleModalId] = useState<string>('nucleus');

  // Heart-specific controls
  const [heartbeatActive, setHeartbeatActive] = useState<boolean>(true);
  const [bloodFlowActive, setBloodFlowActive] = useState<boolean>(true);

  // 3D Projected Screen Labels State
  const [projectedLabels, setProjectedLabels] = useState<ProjectedLabel[]>([]);

  // Refs for Three.js Lifecycle
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const bloodParticlesGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const isDraggingRef = useRef<boolean>(false);
  const mouseStartPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const previousMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseVecRef = useRef<THREE.Vector2>(new THREE.Vector2());

  const activeModel: Biology3DModel =
    MODELS_DATA.find((m) => m.id === selectedModelId) || MODELS_DATA[0];

  const currentModelParts: ModelPartInfo[] =
    MODEL_PARTS_MAP[activeModel.modelType] || [];

  const activePart: ModelPartInfo | undefined =
    currentModelParts.find((p) => p.id === selectedPartId) || currentModelParts[0];

  // Device & AR Detection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setArSupported(isMobile);
      if (isMobile) {
        setLabelMode('compact');
      }
    }
  }, []);

  // Update selection if initialModelId changes from parent
  useEffect(() => {
    if (initialModelId) {
      setSelectedModelId(initialModelId);
    }
  }, [initialModelId]);

  // Reset selected part when model changes
  useEffect(() => {
    const parts = MODEL_PARTS_MAP[activeModel.modelType];
    if (parts && parts.length > 0) {
      // Default to main structure: soma for neuron, ra for heart, bowman for nephron, etc.
      setSelectedPartId(parts[0].id);
    }
  }, [selectedModelId, activeModel.modelType]);

  // Select structure handler
  const handleSelectPart = useCallback((partId: string) => {
    setSelectedPartId(partId);
    highlightMesh(partId);
  }, []);

  // Highlight 3D Mesh by partId
  const highlightMesh = (partId: string) => {
    if (!modelGroupRef.current) return;
    modelGroupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && mat.emissive) {
          if (mesh.userData?.partId === partId) {
            mat.emissive.setHex(0xf97316); // Orange highlight
            mat.emissiveIntensity = 0.45;
          } else {
            mat.emissive.setHex(0x000000);
            mat.emissiveIntensity = 0.0;
          }
        }
      }
    });
  };

  // Main Three.js Scene Setup & Model Construction
  useEffect(() => {
    if (viewMode !== 'threejs' || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 440;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Position camera comfortably for biology models
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(12, 18, 16);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-14, -8, -10);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf97316, 0.4);
    rimLight.position.set(0, 15, -12);
    scene.add(rimLight);

    // Build the biological 3D mesh
    const modelGroup = new THREE.Group();
    buildBiologicalGeometry(modelGroup, activeModel.modelType, wireframe);
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Blood particles for Heart model
    const bloodParticlesGroup = new THREE.Group();
    if (activeModel.modelType === 'heart') {
      setupBloodFlowParticles(bloodParticlesGroup);
      modelGroup.add(bloodParticlesGroup);
    }
    bloodParticlesGroupRef.current = bloodParticlesGroup;

    // Highlight initial selected part
    if (selectedPartId) {
      highlightMesh(selectedPartId);
    }

    const clock = new THREE.Clock();
    const tempProjVec = new THREE.Vector3();

    // Render & Animation Loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Auto rotation
      if (autoRotate && modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += 0.006;
      }

      // Heartbeat pulse simulation
      if (activeModel.modelType === 'heart' && modelGroupRef.current) {
        if (heartbeatActive) {
          const beatCycle = (elapsedTime * 1.3) % 1; // 78 bpm
          let scale = 1;
          if (beatCycle < 0.15) {
            scale = 1 + Math.sin(beatCycle * Math.PI * 6.6) * 0.035; // Atrial systole
          } else if (beatCycle >= 0.2 && beatCycle < 0.45) {
            scale = 1 + Math.sin((beatCycle - 0.2) * Math.PI * 4) * 0.07; // Ventricular systole
          }
          modelGroupRef.current.scale.set(scale, scale, scale);
        } else {
          modelGroupRef.current.scale.set(1, 1, 1);
        }

        // Blood particles flow
        if (bloodParticlesGroupRef.current && bloodFlowActive) {
          bloodParticlesGroupRef.current.children.forEach((child) => {
            const mesh = child as THREE.Mesh;
            const speed = mesh.userData.speed || 0.02;
            mesh.userData.progress = (mesh.userData.progress + speed) % 1;
            const curve = mesh.userData.curve as THREE.Curve<THREE.Vector3>;
            if (curve) {
              const point = curve.getPoint(mesh.userData.progress);
              mesh.position.copy(point);
            }
          });
          bloodParticlesGroupRef.current.visible = true;
        } else if (bloodParticlesGroupRef.current) {
          bloodParticlesGroupRef.current.visible = false;
        }
      }

      // Project 3D Part Anchor Coordinates to 2D Screen Space
      if (showLabels && modelGroupRef.current && cameraRef.current && containerRef.current) {
        const curParts = MODEL_PARTS_MAP[activeModel.modelType] || [];
        const canvasW = containerRef.current.clientWidth;
        const canvasH = containerRef.current.clientHeight;

        const updatedLabels: ProjectedLabel[] = curParts.map((part) => {
          tempProjVec.set(part.position[0], part.position[1], part.position[2]);
          // Transform local part coordinate to world space
          tempProjVec.applyMatrix4(modelGroupRef.current!.matrixWorld);
          // Project to NDC [-1, 1]
          tempProjVec.project(cameraRef.current!);

          const screenX = (tempProjVec.x * 0.5 + 0.5) * canvasW;
          const screenY = (-tempProjVec.y * 0.5 + 0.5) * canvasH;
          const inFront = tempProjVec.z < 1.0;

          return {
            part,
            screenX,
            screenY,
            inFront
          };
        });

        setProjectedLabels(updatedLabels);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Mouse / Touch Controls with Click-to-Identify Distinction
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      mouseStartPosRef.current = { x: e.clientX, y: e.clientY };
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !modelGroupRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      modelGroupRef.current.rotation.y += deltaX * 0.01;
      modelGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      // Check if it was a click (distance moved < 6px)
      const dist = Math.hypot(
        e.clientX - mouseStartPosRef.current.x,
        e.clientY - mouseStartPosRef.current.y
      );
      if (dist < 6 && containerRef.current && cameraRef.current && modelGroupRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseVecRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseVecRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycasterRef.current.setFromCamera(mouseVecRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(
          modelGroupRef.current.children,
          true
        );

        for (const hit of intersects) {
          let obj: THREE.Object3D | null = hit.object;
          while (obj && obj !== modelGroupRef.current) {
            if (obj.userData?.partId) {
              handleSelectPart(obj.userData.partId);
              return;
            }
            obj = obj.parent;
          }
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        const touch = e.touches[0];
        mouseStartPosRef.current = { x: touch.clientX, y: touch.clientY };
        previousMousePositionRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !modelGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      modelGroupRef.current.rotation.y += deltaX * 0.012;
      modelGroupRef.current.rotation.x += deltaY * 0.012;

      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;

      if (e.changedTouches.length === 1 && containerRef.current && cameraRef.current && modelGroupRef.current) {
        const touch = e.changedTouches[0];
        const dist = Math.hypot(
          touch.clientX - mouseStartPosRef.current.x,
          touch.clientY - mouseStartPosRef.current.y
        );

        if (dist < 8) {
          const rect = containerRef.current.getBoundingClientRect();
          mouseVecRef.current.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
          mouseVecRef.current.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

          raycasterRef.current.setFromCamera(mouseVecRef.current, cameraRef.current);
          const intersects = raycasterRef.current.intersectObjects(
            modelGroupRef.current.children,
            true
          );

          for (const hit of intersects) {
            let obj: THREE.Object3D | null = hit.object;
            while (obj && obj !== modelGroupRef.current) {
              if (obj.userData?.partId) {
                handleSelectPart(obj.userData.partId);
                return;
              }
              obj = obj.parent;
            }
          }
        }
      }
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 440;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, [selectedModelId, viewMode, wireframe, heartbeatActive, bloodFlowActive, autoRotate, showLabels, handleSelectPart, activeModel.modelType]);

  // Setup directional blood flow particles for Heart
  const setupBloodFlowParticles = (group: THREE.Group) => {
    group.clear();

    const blueCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(2.2, 4.0, -0.4),
      new THREE.Vector3(2.0, 1.5, 0),
      new THREE.Vector3(1.6, 0.4, 0.5),
      new THREE.Vector3(1.2, -1.0, 0.6),
      new THREE.Vector3(0.5, -0.2, 0.8),
      new THREE.Vector3(-0.4, 1.8, 0.8),
      new THREE.Vector3(-0.6, 3.2, 0.9)
    ]);

    const redCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.2, 1.5, -0.6),
      new THREE.Vector3(-1.6, 0.6, -0.2),
      new THREE.Vector3(-1.2, -1.2, 0.4),
      new THREE.Vector3(-0.8, -1.8, 0.2),
      new THREE.Vector3(0.2, 1.0, 0),
      new THREE.Vector3(0.5, 3.2, 0),
      new THREE.Vector3(-1.2, 4.4, 0),
      new THREE.Vector3(-2.2, 1.2, -0.4)
    ]);

    const particleGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const redMaterial = new THREE.MeshBasicMaterial({ color: 0xf87171 });

    for (let i = 0; i < 14; i++) {
      const p = new THREE.Mesh(particleGeo, blueMaterial);
      p.userData = {
        curve: blueCurve,
        progress: i / 14,
        speed: 0.007 + Math.random() * 0.002
      };
      group.add(p);
    }

    for (let i = 0; i < 16; i++) {
      const p = new THREE.Mesh(particleGeo, redMaterial);
      p.userData = {
        curve: redCurve,
        progress: i / 16,
        speed: 0.008 + Math.random() * 0.002
      };
      group.add(p);
    }
  };

  // Build biological geometries with strict raycasting tags (userData.partId)
  const buildBiologicalGeometry = (
    group: THREE.Group,
    type: Biology3DModel['modelType'],
    isWireframe: boolean
  ) => {
    group.clear();

    if (type === 'neuron') {
      // 1. Cell Body (Soma) - Main organic star-shaped center
      const somaMat = new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        roughness: 0.4,
        metalness: 0.1,
        transparent: true,
        opacity: 0.88,
        wireframe: isWireframe
      });
      const somaGeo = new THREE.SphereGeometry(1.8, 32, 32);
      somaGeo.scale(1.2, 1, 0.9);
      const soma = new THREE.Mesh(somaGeo, somaMat);
      soma.position.set(0, 3.8, 0);
      soma.userData = { partId: 'soma' };
      group.add(soma);

      // Cytoplasm organic granules (Nissl bodies)
      const granuleMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8 });
      for (let g = 0; g < 12; g++) {
        const gran = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12), granuleMat);
        gran.position.set(
          (Math.random() - 0.5) * 1.6,
          3.8 + (Math.random() - 0.5) * 1.2,
          (Math.random() - 0.5) * 1.0
        );
        gran.userData = { partId: 'soma' };
        group.add(gran);
      }

      // 2. Nucleus (Prominent dark sphere inside cell body)
      const nucMat = new THREE.MeshStandardMaterial({
        color: 0x1e3a8a,
        roughness: 0.3,
        metalness: 0.2,
        wireframe: isWireframe
      });
      const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.72, 24, 24), nucMat);
      nucleus.position.set(0, 3.8, 0.35);
      nucleus.userData = { partId: 'nucleus' };
      group.add(nucleus);

      // Nucleolus inside nucleus
      const nucleolusMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
      const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), nucleolusMat);
      nucleolus.position.set(0.1, 3.9, 0.5);
      nucleolus.userData = { partId: 'nucleus' };
      group.add(nucleolus);

      // 3. Dendrites (Branching arbor emerging from soma)
      const dendriteMat = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        roughness: 0.45,
        wireframe: isWireframe
      });
      for (let d = 0; d < 8; d++) {
        const angle = (d / 8) * Math.PI * 2;
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(Math.cos(angle) * 1.5, 3.8 + Math.sin(angle) * 1.2, 0),
          new THREE.Vector3(Math.cos(angle) * 2.8, 4.8 + Math.sin(angle) * 1.8, (d % 2 ? 0.6 : -0.6)),
          new THREE.Vector3(Math.cos(angle) * 4.2, 5.2 + Math.sin(angle) * 2.6, (d % 2 ? 0.8 : -0.8))
        );
        const branch = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 16, 0.16, 8, false),
          dendriteMat
        );
        branch.userData = { partId: 'dendrites' };
        group.add(branch);

        // Sub-branches (Spines)
        const subCurve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(Math.cos(angle) * 2.8, 4.8 + Math.sin(angle) * 1.8, 0),
          new THREE.Vector3(Math.cos(angle + 0.3) * 3.6, 5.6 + Math.sin(angle) * 2.2, 0.3),
          new THREE.Vector3(Math.cos(angle + 0.4) * 4.6, 6.2 + Math.sin(angle) * 2.8, -0.2)
        );
        const subBranch = new THREE.Mesh(
          new THREE.TubeGeometry(subCurve, 12, 0.1, 8, false),
          dendriteMat
        );
        subBranch.userData = { partId: 'dendrites' };
        group.add(subBranch);
      }

      // 4. Axon (Central elongated cylinder from axon hillock down to terminals)
      const axonMat = new THREE.MeshStandardMaterial({
        color: 0x60a5fa,
        roughness: 0.3,
        wireframe: isWireframe
      });
      // Axon Hillock (Tapering conical neck)
      const hillockGeo = new THREE.CylinderGeometry(0.2, 0.8, 1.2, 16);
      const hillock = new THREE.Mesh(hillockGeo, axonMat);
      hillock.position.set(0, 2.5, 0);
      hillock.userData = { partId: 'axon' };
      group.add(hillock);

      // Long central axon core
      const axonGeo = new THREE.CylinderGeometry(0.18, 0.18, 8.8, 16);
      const axonCore = new THREE.Mesh(axonGeo, axonMat);
      axonCore.position.set(0, -1.8, 0);
      axonCore.userData = { partId: 'axon' };
      group.add(axonCore);

      // 5. Myelin Sheaths (5 distinct Schwann-cell lipid sleeves along axon)
      const myelinMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15, // Golden yellow lipid
        roughness: 0.35,
        wireframe: isWireframe
      });
      const myelinPositions = [1.8, 0.3, -1.2, -2.7, -4.2];
      myelinPositions.forEach((yPos) => {
        const myelin = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.5, 1.1, 8, 16),
          myelinMat
        );
        myelin.position.set(0, yPos, 0);
        myelin.userData = { partId: 'myelin_sheath' };
        group.add(myelin);

        // Schwann cell nucleus bump on sheath
        const schwannNucMat = new THREE.MeshStandardMaterial({ color: 0xca8a04 });
        const schwannNuc = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), schwannNucMat);
        schwannNuc.position.set(0.48, yPos, 0.15);
        schwannNuc.userData = { partId: 'myelin_sheath' };
        group.add(schwannNuc);
      });

      // 6. Nodes of Ranvier (Distinct constriction gaps between myelin sheaths)
      const ranvierMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        roughness: 0.2
      });
      const ranvierPositions = [1.05, -0.45, -1.95, -3.45];
      ranvierPositions.forEach((yPos) => {
        const nodeRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.24, 0.06, 8, 16),
          ranvierMat
        );
        nodeRing.position.set(0, yPos, 0);
        nodeRing.rotation.x = Math.PI / 2;
        nodeRing.userData = { partId: 'ranvier_nodes' };
        group.add(nodeRing);
      });

      // 7. Axon Terminals & Synaptic Knobs (Terminal telodendria branches at base)
      const termBranchMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });
      const knobMat = new THREE.MeshStandardMaterial({
        color: 0x1d4ed8,
        roughness: 0.3
      });
      for (let s = 0; s < 5; s++) {
        const angle = (s / 5) * Math.PI * 2;
        const knob = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), knobMat);
        knob.position.set(Math.cos(angle) * 1.8, -6.6, Math.sin(angle) * 1.8);
        knob.userData = { partId: 'axon_terminals' };
        group.add(knob);

        const terminalCyl = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 1.4, 8),
          termBranchMat
        );
        terminalCyl.position.set(Math.cos(angle) * 0.9, -5.8, Math.sin(angle) * 0.9);
        terminalCyl.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(Math.cos(angle) * 1.8, -1.2, Math.sin(angle) * 1.8).normalize()
        );
        terminalCyl.userData = { partId: 'axon_terminals' };
        group.add(terminalCyl);
      }
    } else if (type === 'heart') {
      // 1. Right Atrium
      const raMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.4, wireframe: isWireframe });
      const raGeo = new THREE.SphereGeometry(1.6, 24, 24);
      raGeo.scale(1, 1.1, 0.9);
      const raMesh = new THREE.Mesh(raGeo, raMat);
      raMesh.position.set(2.0, 0.8, 0.3);
      raMesh.userData = { partId: 'ra' };
      group.add(raMesh);

      // 2. Right Ventricle
      const rvMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4, wireframe: isWireframe });
      const rvGeo = new THREE.ConeGeometry(2.0, 3.6, 24);
      const rvMesh = new THREE.Mesh(rvGeo, rvMat);
      rvMesh.position.set(1.1, -1.4, 0.6);
      rvMesh.rotation.z = 0.2;
      rvMesh.userData = { partId: 'rv' };
      group.add(rvMesh);

      // 3. Left Atrium
      const laMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.4, wireframe: isWireframe });
      const laGeo = new THREE.SphereGeometry(1.5, 24, 24);
      const laMesh = new THREE.Mesh(laGeo, laMat);
      laMesh.position.set(-1.7, 0.8, -0.4);
      laMesh.userData = { partId: 'la' };
      group.add(laMesh);

      // 4. Left Ventricle (Thick apex)
      const lvMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35, wireframe: isWireframe });
      const lvGeo = new THREE.ConeGeometry(2.3, 4.4, 28);
      const lvMesh = new THREE.Mesh(lvGeo, lvMat);
      lvMesh.position.set(-1.1, -1.6, 0.4);
      lvMesh.rotation.z = -0.15;
      lvMesh.userData = { partId: 'lv' };
      group.add(lvMesh);

      // 5. Aorta Arch
      const aortaMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.25, wireframe: isWireframe });
      const aortaCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.2, 1.2, 0),
        new THREE.Vector3(0.1, 4.0, 0),
        new THREE.Vector3(-1.8, 4.2, 0),
        new THREE.Vector3(-2.2, 1.0, -0.4)
      );
      const aorta = new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 32, 0.65, 16, false), aortaMat);
      aorta.userData = { partId: 'aorta' };
      group.add(aorta);

      for (let i = 0; i < 3; i++) {
        const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.1, 12), aortaMat);
        branch.position.set(-0.8 + i * 0.5, 4.3, 0);
        branch.userData = { partId: 'aorta' };
        group.add(branch);
      }

      // 6. Superior Vena Cava
      const cavaMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.3, wireframe: isWireframe });
      const cava = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 4.2, 16), cavaMat);
      cava.position.set(2.2, 2.2, -0.3);
      cava.userData = { partId: 'svc' };
      group.add(cava);

      // 7. Pulmonary Artery trunk
      const pulmMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, wireframe: isWireframe });
      const pulm = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 3.2, 16), pulmMat);
      pulm.position.set(-0.4, 2.0, 0.9);
      pulm.rotation.z = -0.45;
      pulm.userData = { partId: 'pa' };
      group.add(pulm);
    } else if (type === 'nephron') {
      // 1. Bowman's Capsule Cup
      const cupMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3, wireframe: isWireframe });
      const cupGeo = new THREE.SphereGeometry(2.0, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.65);
      const cup = new THREE.Mesh(cupGeo, cupMat);
      cup.position.set(-2.0, 3.0, 0);
      cup.rotation.x = Math.PI;
      cup.userData = { partId: 'bowman' };
      group.add(cup);

      // 2. Glomerulus capillary tuft inside cup
      const glomMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2 });
      const glom = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2, 1), glomMat);
      glom.position.set(-2.0, 3.2, 0);
      glom.userData = { partId: 'glomerulus' };
      group.add(glom);

      // 3. PCT loop
      const pctMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
      const pctCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.0, 2.0, 0),
        new THREE.Vector3(-1.0, 1.5, 0.8),
        new THREE.Vector3(-2.2, 0.5, 0.4),
        new THREE.Vector3(-1.2, -0.8, 0)
      ]);
      const pct = new THREE.Mesh(new THREE.TubeGeometry(pctCurve, 24, 0.25, 8, false), pctMat);
      pct.userData = { partId: 'pct' };
      group.add(pct);

      // 4. Loop of Henle (U-shape downward)
      const henleMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8 });
      const henleCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.2, -0.8, 0),
        new THREE.Vector3(-1.2, -4.5, 0),
        new THREE.Vector3(0, -5.5, 0),
        new THREE.Vector3(1.2, -4.5, 0),
        new THREE.Vector3(1.2, -0.5, 0)
      ]);
      const henle = new THREE.Mesh(new THREE.TubeGeometry(henleCurve, 32, 0.2, 8, false), henleMat);
      henle.userData = { partId: 'henle' };
      group.add(henle);

      // 5. Collecting duct
      const ductMat = new THREE.MeshStandardMaterial({ color: 0xeab308 });
      const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 9, 16), ductMat);
      duct.position.set(3.0, -1.0, 0);
      duct.userData = { partId: 'collecting_duct' };
      group.add(duct);
    } else if (type === 'flower') {
      // 1. Receptacle base
      const receptMat = new THREE.MeshStandardMaterial({ color: 0x15803d });
      const recept = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.6, 1.4, 16), receptMat);
      recept.position.set(0, -2.5, 0);
      recept.userData = { partId: 'receptacle' };
      group.add(recept);

      // 2. Green Sepals
      for (let s = 0; s < 5; s++) {
        const ang = (s / 5) * Math.PI * 2;
        const sepal = new THREE.Mesh(new THREE.ConeGeometry(0.8, 2.0, 8), receptMat);
        sepal.position.set(Math.cos(ang) * 1.5, -2.0, Math.sin(ang) * 1.5);
        sepal.rotation.z = Math.cos(ang) * 0.8;
        sepal.rotation.x = Math.sin(ang) * 0.8;
        sepal.userData = { partId: 'sepals' };
        group.add(sepal);
      }

      // 3. Colored Petals
      const petalMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        roughness: 0.3,
        side: THREE.DoubleSide
      });
      for (let p = 0; p < 5; p++) {
        const ang = (p / 5) * Math.PI * 2;
        const petal = new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 16, 0, Math.PI), petalMat);
        petal.position.set(Math.cos(ang) * 2.2, -0.6, Math.sin(ang) * 2.2);
        petal.rotation.y = ang + Math.PI / 2;
        petal.rotation.x = 0.5;
        petal.userData = { partId: 'petals' };
        group.add(petal);
      }

      // 4. Central Pistil
      const pistilMat = new THREE.MeshStandardMaterial({ color: 0x84cc16 });
      const ovary = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), pistilMat);
      ovary.position.set(0, -1.6, 0);
      ovary.userData = { partId: 'pistil' };
      group.add(ovary);

      const styleTube = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 3.2, 12), pistilMat);
      styleTube.position.set(0, 0.2, 0);
      styleTube.userData = { partId: 'pistil' };
      group.add(styleTube);

      const stigmaMat = new THREE.MeshStandardMaterial({ color: 0x65a30d });
      const stigma = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.15, 8, 16), stigmaMat);
      stigma.position.set(0, 1.8, 0);
      stigma.rotation.x = Math.PI / 2;
      stigma.userData = { partId: 'pistil' };
      group.add(stigma);

      // 5. Stamens
      const antherMat = new THREE.MeshStandardMaterial({ color: 0xfacc15 });
      const filMat = new THREE.MeshStandardMaterial({ color: 0xd9f99d });
      for (let a = 0; a < 6; a++) {
        const ang = (a / 6) * Math.PI * 2;
        const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.6, 8), filMat);
        fil.position.set(Math.cos(ang) * 0.9, -0.2, Math.sin(ang) * 0.9);
        fil.userData = { partId: 'stamen' };
        group.add(fil);

        const anther = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.4, 4, 8), antherMat);
        anther.position.set(Math.cos(ang) * 0.9, 1.2, Math.sin(ang) * 0.9);
        anther.userData = { partId: 'stamen' };
        group.add(anther);
      }
    } else if (type === 'dna') {
      const turns = 3;
      const pointsPerTurn = 24;
      const totalPoints = turns * pointsPerTurn;
      const radius = 3.2;
      const height = 14;

      const backboneMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, wireframe: isWireframe });
      const sphereGeo = new THREE.SphereGeometry(0.3, 16, 16);
      const adenMat = new THREE.MeshStandardMaterial({ color: 0x10b981, wireframe: isWireframe });
      const thymMat = new THREE.MeshStandardMaterial({ color: 0xef4444, wireframe: isWireframe });
      const guanMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, wireframe: isWireframe });
      const cytoMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, wireframe: isWireframe });

      for (let i = 0; i < totalPoints; i++) {
        const t = (i / totalPoints) * turns * Math.PI * 2;
        const y = (i / totalPoints) * height - height / 2;

        const x1 = Math.cos(t) * radius;
        const z1 = Math.sin(t) * radius;
        const x2 = Math.cos(t + Math.PI) * radius;
        const z2 = Math.sin(t + Math.PI) * radius;

        const sphere1 = new THREE.Mesh(sphereGeo, backboneMat);
        sphere1.position.set(x1, y, z1);
        sphere1.userData = { partId: 'backbone' };
        group.add(sphere1);

        const sphere2 = new THREE.Mesh(sphereGeo, backboneMat);
        sphere2.position.set(x2, y, z2);
        sphere2.userData = { partId: 'backbone' };
        group.add(sphere2);

        if (i % 2 === 0) {
          const midX = (x1 + x2) / 2;
          const midZ = (z1 + z2) / 2;
          const isAT = (i / 2) % 2 === 0;
          const baseMat1 = isAT ? adenMat : guanMat;
          const baseMat2 = isAT ? thymMat : cytoMat;

          const cylGeo1 = new THREE.CylinderGeometry(0.12, 0.12, radius, 8);
          const rung1 = new THREE.Mesh(cylGeo1, baseMat1);
          rung1.position.set((x1 + midX) / 2, y, (z1 + midZ) / 2);
          rung1.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(midX - x1, 0, midZ - z1).normalize()
          );
          rung1.userData = { partId: isAT ? 'adenine_thymine' : 'guanine_cytosine' };
          group.add(rung1);

          const cylGeo2 = new THREE.CylinderGeometry(0.12, 0.12, radius, 8);
          const rung2 = new THREE.Mesh(cylGeo2, baseMat2);
          rung2.position.set((midX + x2) / 2, y, (midZ + z2) / 2);
          rung2.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(x2 - midX, 0, z2 - midZ).normalize()
          );
          rung2.userData = { partId: isAT ? 'adenine_thymine' : 'guanine_cytosine' };
          group.add(rung2);
        }
      }
    } else if (type === 'plant_cell') {
      // 1. Cell Wall (outer rigid translucent green box)
      const wallMat = new THREE.MeshStandardMaterial({
        color: 0x15803d,
        transparent: true,
        opacity: 0.35,
        wireframe: isWireframe
      });
      const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 5), wallMat);
      wallMesh.userData = { partId: 'cell_wall' };
      group.add(wallMesh);

      // 2. Plasma Membrane (delicate inner membrane box)
      const pmMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.25,
        wireframe: true
      });
      const pmMesh = new THREE.Mesh(new THREE.BoxGeometry(7.6, 5.6, 4.6), pmMat);
      pmMesh.userData = { partId: 'plasma_membrane' };
      group.add(pmMesh);

      // 3. Central Vacuole (large central light-blue reservoir with tonoplast)
      const vacuoleMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.65,
        roughness: 0.1,
        wireframe: isWireframe
      });
      const vacuole = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 3.2, 16), vacuoleMat);
      vacuole.position.set(-1.2, 0.2, 0);
      vacuole.userData = { partId: 'vacuole' };
      group.add(vacuole);

      // 4. Nucleus (dense spherical body with nucleolus)
      const nucMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.4, wireframe: isWireframe });
      const nucleus = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24), nucMat);
      nucleus.position.set(2.2, 0.6, 0.4);
      nucleus.userData = { partId: 'nucleus' };
      group.add(nucleus);

      const nucleolusMat = new THREE.MeshStandardMaterial({ color: 0x4c1d95 });
      const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), nucleolusMat);
      nucleolus.position.set(2.4, 0.7, 0.6);
      nucleolus.userData = { partId: 'nucleus' };
      group.add(nucleolus);

      // 5. Chloroplasts (green discs with grana)
      const chloroMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.3 });
      const chloroGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.3, 16);
      [[1.8, -1.8, 1.2], [-2.4, -1.8, 1.4], [2.0, 1.8, -1.0], [-2.0, 1.8, -1.0]].forEach((pos) => {
        const chloro = new THREE.Mesh(chloroGeo, chloroMat);
        chloro.position.set(pos[0], pos[1], pos[2]);
        chloro.rotation.x = Math.PI / 4;
        chloro.userData = { partId: 'chloroplast' };
        group.add(chloro);
      });

      // 6. Mitochondria (sausage shaped capsules)
      const mitoMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.4 });
      const mito1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.8, 8, 16), mitoMat);
      mito1.position.set(1.5, -0.8, -1.2);
      mito1.rotation.z = Math.PI / 3;
      mito1.userData = { partId: 'mitochondria' };
      group.add(mito1);

      const mito2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.8, 8, 16), mitoMat);
      mito2.position.set(-1.0, -1.8, -1.0);
      mito2.rotation.y = Math.PI / 4;
      mito2.userData = { partId: 'mitochondria' };
      group.add(mito2);

      // 7. Golgi Apparatus (curved discs / cisternae)
      const golgiMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.3 });
      for (let g = 0; g < 4; g++) {
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.6 - g * 0.08, 0.6 - g * 0.08, 0.08, 16), golgiMat);
        disc.position.set(0.6, 1.8 + g * 0.12, 1.2);
        disc.rotation.x = 0.4;
        disc.userData = { partId: 'golgi' };
        group.add(disc);
      }

      // 8. Endoplasmic Reticulum (folds surrounding nucleus)
      const erMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.4 });
      const erCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.8, -0.2, 0.8),
        new THREE.Vector3(2.6, -0.4, 0.9),
        new THREE.Vector3(2.8, -0.8, 0.4),
        new THREE.Vector3(2.2, -1.1, 0.6)
      ]);
      const erMesh = new THREE.Mesh(new THREE.TubeGeometry(erCurve, 20, 0.16, 8, false), erMat);
      erMesh.userData = { partId: 'er' };
      group.add(erMesh);

      // 9. Ribosomes (protein granules)
      const riboMat = new THREE.MeshStandardMaterial({ color: 0xec4899 });
      for (let r = 0; r < 14; r++) {
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), riboMat);
        dot.position.set(
          1.6 + (Math.random() - 0.5) * 1.5,
          -0.6 + (Math.random() - 0.5) * 1.2,
          0.8 + (Math.random() - 0.5) * 1.0
        );
        dot.userData = { partId: 'ribosome' };
        group.add(dot);
      }
    } else if (type === 'virus') {
      const headMat = new THREE.MeshStandardMaterial({ color: 0x059669, wireframe: isWireframe });
      const headGeo = new THREE.IcosahedronGeometry(2.5, 0);
      headGeo.scale(1, 1.3, 1);
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.set(0, 3.8, 0);
      head.userData = { partId: 'capsid_head' };
      group.add(head);

      const dnaMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, wireframe: true });
      const innerDna = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 1), dnaMat);
      innerDna.position.set(0, 3.8, 0);
      innerDna.userData = { partId: 'dna_core' };
      group.add(innerDna);

      const sheathMat = new THREE.MeshStandardMaterial({ color: 0x0f766e, wireframe: isWireframe });
      const sheath = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 4.0, 16), sheathMat);
      sheath.position.set(0, 0.5, 0);
      sheath.userData = { partId: 'collar_sheath' };
      group.add(sheath);

      const plateMat = new THREE.MeshStandardMaterial({ color: 0x047857 });
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.3, 6), plateMat);
      plate.position.set(0, -1.5, 0);
      plate.userData = { partId: 'baseplate' };
      group.add(plate);

      const fiberMat = new THREE.MeshStandardMaterial({ color: 0x064e3b });
      for (let f = 0; f < 6; f++) {
        const angle = (f / 6) * Math.PI * 2;
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(Math.cos(angle) * 1.0, -1.5, Math.sin(angle) * 1.0),
          new THREE.Vector3(Math.cos(angle) * 3.0, -2.4, Math.sin(angle) * 3.0),
          new THREE.Vector3(Math.cos(angle) * 3.6, -4.5, Math.sin(angle) * 3.6)
        );
        const fiber = new THREE.Mesh(new THREE.TubeGeometry(curve, 12, 0.1, 8, false), fiberMat);
        fiber.userData = { partId: 'tail_fibers' };
        group.add(fiber);
      }
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? 0.85 : 1.15;
    cameraRef.current.position.z = Math.max(
      6,
      Math.min(32, cameraRef.current.position.z * factor)
    );
  };

  const handleResetCamera = () => {
    if (!cameraRef.current || !modelGroupRef.current) return;
    cameraRef.current.position.set(0, 0, 18);
    modelGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <section id="3d-models" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>ইন্টারেক্টিভ ত্রিমাত্রিক জীববিজ্ঞান ল্যাব</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              এসএসসি জীববিজ্ঞান ৩ডি অ্যানাটমি ও WebAR
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              মডেলের প্রতিটি অঙ্গ হাত দিয়ে স্পর্শ বা ক্লিক করে গঠন, কাজ এবং পরীক্ষার গুরুত্বপূর্ণ প্রশ্নোত্তর জানুন।
              স্ক্রিনে দৃশ্যমান দ্বিভাষিক লেবেলগুলো সরাসরি মডেলের সাথে ঘুরবে।
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {MODELS_DATA.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedModelId(model.id);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedModelId === model.id
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {model.titleBn.split(' ')[0]} {model.titleBn.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Viewport & Control Deck Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main 3D Canvas Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden relative shadow-xs flex flex-col">
            {/* Viewport Toolbar */}
            <div className="px-4 py-3 bg-white/95 backdrop-blur-xs border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <span className="text-xs font-bold text-slate-800">{activeModel.titleBn}</span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  (অধ্যায় {activeModel.chapterNumber})
                </span>
              </div>

              {/* View mode & Label toggles */}
              <div className="flex items-center gap-2">
                {/* Labels Visibility Toggle */}
                <button
                  onClick={() => setShowLabels(!showLabels)}
                  title={showLabels ? 'লেবেল লুকান' : 'লেবেল দেখান'}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    showLabels
                      ? 'bg-orange-50 text-orange-700 font-semibold border border-orange-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {showLabels ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span>{showLabels ? 'লেবেল চালু' : 'লেবেল লুকানো'}</span>
                </button>

                {/* Compact vs Full Label Mode */}
                {showLabels && (
                  <button
                    onClick={() => setLabelMode(labelMode === 'full' ? 'compact' : 'full')}
                    title="লেবেল প্রদর্শন মোড পরিবর্তন"
                    className="px-2 py-1 text-[11px] font-medium rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 hidden sm:inline"
                  >
                    {labelMode === 'full' ? 'সংক্ষিপ্ত পিন' : 'সম্পূর্ণ নাম'}
                  </button>
                )}

                <button
                  onClick={() => setViewMode('threejs')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                    viewMode === 'threejs'
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  ৩ডি ভিউ
                </button>
                <button
                  onClick={() => setViewMode('webar')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                    viewMode === 'webar'
                      ? 'bg-orange-500 text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  ওয়েব এআর
                </button>
              </div>
            </div>

            {/* Special Controls for Heart */}
            {activeModel.modelType === 'heart' && viewMode === 'threejs' && (
              <div className="px-4 py-2 bg-rose-50/80 border-b border-rose-100 flex flex-wrap items-center justify-between gap-2 z-10 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHeartbeatActive(!heartbeatActive)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      heartbeatActive
                        ? 'bg-rose-500 text-white shadow-2xs'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${heartbeatActive ? 'fill-current animate-ping' : ''}`} />
                    <span>হৃৎস্পন্দন {heartbeatActive ? 'চালু' : 'বন্ধ'}</span>
                  </button>

                  <button
                    onClick={() => setBloodFlowActive(!bloodFlowActive)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-semibold transition-all ${
                      bloodFlowActive
                        ? 'bg-blue-600 text-white shadow-2xs'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    <Droplet className="w-3.5 h-3.5" />
                    <span>রক্ত সংবহন কণা {bloodFlowActive ? 'চালু' : 'বন্ধ'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    CO2 রক্ত (শিরা)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    O2 রক্ত (ধমনী)
                  </span>
                </div>
              </div>
            )}

            {/* 3D Canvas Area */}
            <div className="relative w-full h-[400px] sm:h-[460px] bg-slate-900/5 select-none overflow-hidden">
              {viewMode === 'threejs' ? (
                <>
                  <div
                    ref={containerRef}
                    className="w-full h-full cursor-grab active:cursor-grabbing"
                    title="ঘোরাতে টানুন, যেকোনো অংশে ক্লিক করে বিস্তারিত জানুন"
                  />

                  {/* SVG Overlay for Leader Lines & Pin Connectors */}
                  {showLabels && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                      {projectedLabels.map((lbl) => {
                        if (!lbl.inFront) return null;
                        const isSelected = selectedPartId === lbl.part.id;
                        return (
                          <g key={`line-${lbl.part.id}`}>
                            {/* Anchor ring at 3D coordinate */}
                            <circle
                              cx={lbl.screenX}
                              cy={lbl.screenY}
                              r={isSelected ? 6 : 4}
                              fill={isSelected ? '#f97316' : '#ffffff'}
                              stroke={isSelected ? '#c2410c' : lbl.part.color}
                              strokeWidth={isSelected ? 2.5 : 2}
                              className="transition-all duration-150"
                            />
                            {isSelected && (
                              <circle
                                cx={lbl.screenX}
                                cy={lbl.screenY}
                                r={11}
                                fill="none"
                                stroke="#f97316"
                                strokeWidth={1.5}
                                opacity={0.7}
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>
                  )}

                  {/* Interactive Overlaid HTML Labels on 3D Model */}
                  {showLabels && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      {projectedLabels.map((lbl) => {
                        if (!lbl.inFront) return null;
                        const isSelected = selectedPartId === lbl.part.id;

                        // Position label near anchor point with offset
                        const isRightSide = lbl.screenX > 180;
                        const offsetX = isRightSide ? 14 : -14;
                        const offsetY = -14;

                        return (
                          <div
                            key={`label-${lbl.part.id}`}
                            style={{
                              transform: `translate(${lbl.screenX + offsetX}px, ${lbl.screenY + offsetY}px) ${
                                !isRightSide ? 'translateX(-100%)' : ''
                              }`,
                              transition: 'transform 0.05s ease-out'
                            }}
                            className="absolute top-0 left-0 pointer-events-auto"
                          >
                            <button
                              onClick={() => handleSelectPart(lbl.part.id)}
                              className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-md backdrop-blur-md transition-all text-left ${
                                isSelected
                                  ? 'bg-slate-900 text-white ring-2 ring-orange-500 scale-105 font-bold z-30'
                                  : 'bg-white/95 text-slate-800 hover:bg-white hover:shadow-lg border border-slate-200/90'
                              }`}
                            >
                              {/* Number Badge */}
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                  isSelected
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-slate-100 text-slate-700 group-hover:bg-orange-100 group-hover:text-orange-700'
                                }`}
                              >
                                {lbl.part.number}
                              </span>

                              {/* Label Text */}
                              {labelMode === 'full' ? (
                                <div className="leading-tight">
                                  <span className="text-[11px] font-bold block whitespace-nowrap">
                                    {lbl.part.nameBn.split(' ')[0]} {lbl.part.nameBn.split(' ')[1] || ''}
                                  </span>
                                  <span className="text-[9px] text-slate-400 font-medium block whitespace-nowrap">
                                    {lbl.part.nameEn}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-[11px] font-bold whitespace-nowrap">
                                  {lbl.part.nameBn.split(' ')[0]}
                                </span>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Floating Canvas Controls Toolbar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-30">
                    <div className="flex items-center gap-1 p-1 bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-200/80 pointer-events-auto">
                      <button
                        onClick={() => handleZoom('in')}
                        title="জুম ইন (+)"
                        className="p-1.5 text-slate-600 hover:text-orange-600 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleZoom('out')}
                        title="জুম আউট (-)"
                        className="p-1.5 text-slate-600 hover:text-orange-600 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleResetCamera}
                        title="ক্যামেরা রিসেট"
                        className="p-1.5 text-slate-600 hover:text-orange-600 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <div className="w-px h-4 bg-slate-200 mx-0.5" />
                      <button
                        onClick={() => setAutoRotate(!autoRotate)}
                        title="স্বয়ংক্রিয় ঘূর্ণন"
                        className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                          autoRotate
                            ? 'bg-orange-50 text-orange-700 font-semibold border border-orange-200'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        ঘূর্ণন {autoRotate ? 'চালু' : 'বন্ধ'}
                      </button>
                      <button
                        onClick={() => setWireframe(!wireframe)}
                        title="তারের জালিকা (Wireframe) ভিউ"
                        className={`p-1.5 rounded-lg transition-colors ${
                          wireframe
                            ? 'bg-orange-50 text-orange-700 border border-orange-200'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Layers className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                      <Crosshair className="w-3.5 h-3.5 text-orange-500" />
                      <span>মডেলের অংশে ক্লিক করে শনাক্ত করুন</span>
                    </div>
                  </div>
                </>
              ) : (
                /* Google Model-Viewer WebAR View */
                <div className="w-full h-full relative flex flex-col items-center justify-center bg-slate-900/5 p-6 text-center">
                  {activeModel.gltfSrc && !activeModel.gltfSrc.includes('modelviewer.dev') ? (
                    <model-viewer
                      src={activeModel.gltfSrc}
                      alt={activeModel.titleBn}
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      camera-controls
                      auto-rotate
                      shadow-intensity="1"
                      touch-action="pan-y"
                      style={{ width: '100%', height: '100%' }}
                    >
                      <div
                        slot="ar-button"
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
                      >
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-xl shadow-lg font-semibold text-xs tracking-wide transition-all transform hover:-translate-y-0.5">
                          <Smartphone className="w-4 h-4" />
                          আপনার পড়ার টেবিলে এআর (AR)-এ দেখুন
                        </button>
                      </div>
                    </model-viewer>
                  ) : (
                    <div className="max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-md text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                            WebAR নির্দেশিকা
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                            মোবাইলে অগমেন্টেড রিয়ালিটি (AR)
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            (WebAR Biological Asset Guide)
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        বিজ্ঞানসম্মত সঠিক উপস্থাপনা বজায় রাখতে এবং শিক্ষার্থীদের নির্ভুল অভিজ্ঞতা দিতে পাঠ্যপুস্তকের জীববৈজ্ঞানিক ৩ডি অ্যানাটমি সরাসরি আমাদের মূল <strong>"ত্রিমাত্রিক ৩ডি ভিউয়ার"</strong>-এ লেবেল ও স্পন্দনসহ দেখুন।
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => setViewMode('threejs')}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                        >
                          <Box className="w-3.5 h-3.5 text-orange-400" />
                          <span>ত্রিমাত্রিক ৩ডি ভিউয়ে ফিরে যান</span>
                        </button>
                        <button
                          onClick={onOpenArHelp}
                          className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-medium transition-colors"
                        >
                          এআর ব্যবহারের নিয়ম
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                    <button
                      onClick={onOpenArHelp}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white/90 hover:bg-white rounded-lg shadow-xs border border-slate-200 transition-colors"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
                      এআর ব্যবহারের নিয়ম
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Anatomical Parts Strip */}
            <div className="p-3 bg-slate-100/90 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-600" />
                  <span>অঙ্গসংস্থানিক অংশসমূহ (ক্লিক করে নির্বাচন ও বিস্তারিত দেখুন):</span>
                </span>
                <span className="text-[11px] text-slate-400">
                  মোট {currentModelParts.length}টি অংশ
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentModelParts.map((part) => (
                  <button
                    key={part.id}
                    onClick={() => handleSelectPart(part.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg font-medium transition-all ${
                      selectedPartId === part.id
                        ? 'bg-slate-900 text-white shadow-xs font-bold ring-2 ring-orange-500'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200/80'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        selectedPartId === part.id
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {part.number}
                    </span>
                    <span>{part.nameBn.split(' ')[0]} {part.nameBn.split(' ')[1] || ''}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Educational Summary Bar */}
            <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-orange-500 shrink-0" />
                <span>
                  <strong>শিক্ষণীয় গুরুত্ব:</strong> {activeModel.educationalNotesBn}
                </span>
              </div>
              <button
                onClick={onOpenArHelp}
                className="text-orange-600 font-semibold hover:underline shrink-0"
              >
                মোবাইলে এআর নির্দেশিকা
              </button>
            </div>
          </div>

          {/* Model Educational Details & Click-to-Identify 5-Field Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Dedicated Selected Structure Info Card (5-Point Standard) */}
            {activePart ? (
              <div className="bg-white border-2 border-orange-500/30 rounded-3xl p-5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none" />

                {/* Header with Number and Bilingual Name */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-orange-500 text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                        {activePart.number}
                      </span>
                      <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                        {activePart.badgeBn}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {activePart.nameBn}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {activePart.nameEn}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200 shrink-0">
                    ৩ডি নির্বাচিত
                  </span>
                </div>

                {/* 5-Field Detailed Breakdown */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {/* Field 1: সহজ বাংলায় গঠন ও অবস্থান */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                      <Zap className="w-3.5 h-3.5 text-orange-500" />
                      <span>১. গঠন ও অবস্থান (Structure & Location):</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activePart.structureLocationBn}
                    </p>
                  </div>

                  {/* Field 2: কাজ বা Function */}
                  <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-1">
                      <Crosshair className="w-3.5 h-3.5 text-blue-600" />
                      <span>২. কাজ বা বায়োলজিক্যাল ফাংশন (Function):</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activePart.functionBn}
                    </p>
                  </div>

                  {/* Field 3: SSC পরীক্ষার উপযোগী গুরুত্বপূর্ণ তথ্য */}
                  <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>৩. এসএসসি পরীক্ষার জরুরি টিপস (SSC Exam Tip):</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {activePart.examTipsBn}
                    </p>
                  </div>

                  {/* Individual Organelle Detailed View CTA */}
                  {activeModel.modelType === 'plant_cell' && (
                    <button
                      onClick={() => {
                        setActiveOrganelleModalId(activePart.id);
                        setIsOrganelleModalOpen(true);
                      }}
                      className="w-full mt-2 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <Box className="w-3.5 h-3.5 text-orange-400" />
                      <span>এই অঙ্গাণুর পৃথক বিশদ অভ্যন্তরীণ রূপ অন্বেষণ করুন</span>
                    </button>
                  )}
                </div>
              </div>
            ) : null}

            {/* Model Overall Concept & Textbook Features */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-lg border border-orange-200">
                  {activeModel.categoryBn}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeModel.titleEn}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-2">
                {activeModel.titleBn}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeModel.descriptionBn}
              </p>

              {/* Key Features List */}
              <div className="border-t border-slate-100 pt-3">
                <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5">
                  পাঠ্যবইয়ের প্রধান অঙ্গসংস্থানিক বৈশিষ্ট্য:
                </h5>
                <ul className="space-y-1.5">
                  {activeModel.keyFeaturesBn.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WebAR Quick Launcher Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-sm border border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-orange-500 text-white rounded-xl shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    মোবাইলে WebAR অভিজ্ঞতা
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    অ্যান্ড্রয়েড ফোনে Google Scene Viewer অথবা আইফোনে Quick Look দিয়ে মডেলটি
                    আপনার পড়ার টেবিলে বাস্তব স্কেলে রেখে ৩৬০° ঘুরে দেখুন।
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('webar')}
                      className="px-3.5 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      এআর মোড সক্রিয় করুন
                    </button>
                    <button
                      onClick={onOpenArHelp}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium rounded-xl border border-white/10 transition-colors"
                    >
                      নির্দেশিকা
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Organelle Explorer Modal */}
      <OrganelleExplorerModal
        isOpen={isOrganelleModalOpen}
        initialOrganelleId={activeOrganelleModalId}
        onClose={() => setIsOrganelleModalOpen(false)}
      />
    </section>
  );
};
