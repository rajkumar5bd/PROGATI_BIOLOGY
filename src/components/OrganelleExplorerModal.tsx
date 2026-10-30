import React, { useState } from 'react';
import { ORGANELLES_DATA, OrganelleDetail, OrganelleSubstructure } from '../data/organellesData';
import {
  X,
  Box,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Zap,
  CheckCircle2,
  Award,
  ChevronRight,
  Info,
  Layers,
  ArrowLeft,
  Check
} from 'lucide-react';

interface OrganelleExplorerModalProps {
  isOpen: boolean;
  initialOrganelleId?: string;
  onClose: () => void;
  onOpen3DView?: (modelId: string) => void;
}

export const OrganelleExplorerModal: React.FC<OrganelleExplorerModalProps> = ({
  isOpen,
  initialOrganelleId = 'nucleus',
  onClose,
  onOpen3DView
}) => {
  const [selectedOrganelleId, setSelectedOrganelleId] = useState<string>(initialOrganelleId);
  const [selectedSubstructureId, setSelectedSubstructureId] = useState<string | null>(null);
  const [showSubstructureLabels, setShowSubstructureLabels] = useState<boolean>(true);

  React.useEffect(() => {
    if (initialOrganelleId) {
      setSelectedOrganelleId(initialOrganelleId);
      const organelle = ORGANELLES_DATA.find((o) => o.id === initialOrganelleId);
      if (organelle && organelle.substructures.length > 0) {
        setSelectedSubstructureId(organelle.substructures[0].id);
      }
    }
  }, [initialOrganelleId]);

  if (!isOpen) return null;

  const currentOrganelle: OrganelleDetail =
    ORGANELLES_DATA.find((o) => o.id === selectedOrganelleId) || ORGANELLES_DATA[0];

  const activeSubstructure: OrganelleSubstructure | undefined =
    currentOrganelle.substructures.find((s) => s.id === selectedSubstructureId) ||
    currentOrganelle.substructures[0];

  const handleSelectOrganelle = (id: string) => {
    setSelectedOrganelleId(id);
    const org = ORGANELLES_DATA.find((o) => o.id === id);
    if (org && org.substructures.length > 0) {
      setSelectedSubstructureId(org.substructures[0].id);
    } else {
      setSelectedSubstructureId(null);
    }
  };

  // Render scientifically accurate SVG cutaways for individual organelles
  const renderOrganelleIllustration = () => {
    const isSelected = (id: string) => selectedSubstructureId === id;

    switch (currentOrganelle.id) {
      case 'mitochondria':
        return (
          <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="mitoOuterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
              <linearGradient id="mitoMatrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="100%" stopColor="#450a0a" />
              </linearGradient>
            </defs>

            {/* 1. Outer Membrane */}
            <path
              d="M 60 160 C 60 60, 440 60, 440 160 C 440 260, 60 260, 60 160 Z"
              fill="url(#mitoOuterGrad)"
              stroke={isSelected('mito_outer_membrane') ? '#f97316' : '#9a3412'}
              strokeWidth={isSelected('mito_outer_membrane') ? '6' : '3'}
              className="cursor-pointer transition-all hover:opacity-90"
              onClick={() => setSelectedSubstructureId('mito_outer_membrane')}
            />

            {/* 2. Inner Membrane & Matrix Base */}
            <path
              d="M 75 160 C 75 80, 425 80, 425 160 C 425 240, 75 240, 75 160 Z"
              fill="url(#mitoMatrixGrad)"
              stroke={isSelected('mito_inner_membrane') ? '#ef4444' : '#b91c1c'}
              strokeWidth={isSelected('mito_inner_membrane') ? '5' : '2'}
              className="cursor-pointer transition-all"
              onClick={() => setSelectedSubstructureId('mito_inner_membrane')}
            />

            {/* 3. Cristae Infoldings */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('mito_cristae')}
            >
              {/* Cristae loops from top & bottom */}
              <path
                d="M 120 95 C 130 140, 150 180, 150 200 C 145 210, 130 210, 130 190 C 130 150, 110 120, 105 100
                   M 180 90 C 185 130, 205 180, 210 210 C 200 220, 190 215, 185 180 C 175 140, 165 110, 165 92
                   M 250 88 C 255 140, 260 190, 265 225 C 255 230, 245 220, 245 170 C 240 130, 235 100, 235 88
                   M 320 92 C 320 140, 310 180, 310 210 C 300 215, 290 210, 295 170 C 300 130, 305 105, 305 92
                   M 380 105 C 375 140, 360 175, 355 195 C 345 200, 340 190, 345 160 C 350 130, 365 115, 365 105
                   M 150 225 C 160 185, 175 145, 180 130
                   M 220 230 C 225 190, 235 150, 240 135
                   M 290 230 C 295 190, 305 155, 310 135
                   M 360 220 C 360 185, 365 160, 370 140"
                fill="none"
                stroke={isSelected('mito_cristae') ? '#facc15' : '#f87171'}
                strokeWidth={isSelected('mito_cristae') ? '7' : '4.5'}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 4. Mitochondrial DNA Loop in Matrix */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('mito_matrix')}
            >
              <ellipse
                cx="210"
                cy="160"
                rx="25"
                ry="12"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <ellipse
                cx="330"
                cy="150"
                rx="20"
                ry="10"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
            </g>

            {/* 5. ATP Synthase Particles on cristae */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('mito_atp_synthase')}
            >
              {[
                [135, 130],
                [142, 170],
                [195, 120],
                [202, 160],
                [250, 140],
                [258, 180],
                [315, 135],
                [308, 175],
                [365, 145]
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={isSelected('mito_atp_synthase') ? '4.5' : '3'}
                  fill={isSelected('mito_atp_synthase') ? '#fbbf24' : '#fef08a'}
                  stroke="#b45309"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Labels overlay if enabled */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-white pointer-events-none">
                <text x="70" y="50" fill="#ea580c">
                  ১. বহিঃপর্দা (Outer Membrane)
                </text>
                <line x1="120" y1="55" x2="150" y2="75" stroke="#ea580c" strokeWidth="1.5" />

                <text x="320" y="45" fill="#ef4444">
                  ২. অন্তঃপর্দা (Inner Membrane)
                </text>
                <line x1="360" y1="50" x2="380" y2="85" stroke="#ef4444" strokeWidth="1.5" />

                <text x="210" y="270" fill="#facc15">
                  ৩. ক্রিস্টি (Cristae Folds)
                </text>
                <line x1="250" y1="255" x2="250" y2="225" stroke="#facc15" strokeWidth="1.5" />

                <text x="60" y="275" fill="#f87171">
                  ৪. ধাত্র (Matrix)
                </text>
                <line x1="90" y1="260" x2="110" y2="230" stroke="#f87171" strokeWidth="1.5" />

                <text x="360" y="275" fill="#fbbf24">
                  ৫. এটিপি সিন্থেটেজ (ATP Synthase)
                </text>
                <line x1="390" y1="260" x2="365" y2="190" stroke="#fbbf24" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'chloroplast':
        return (
          <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="chloroEnvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="chloroStromaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>

            {/* 1. Double Membrane Envelope */}
            <ellipse
              cx="250"
              cy="160"
              rx="200"
              ry="115"
              fill="url(#chloroEnvGrad)"
              stroke={isSelected('chloro_envelope') ? '#22c55e' : '#14532d'}
              strokeWidth={isSelected('chloro_envelope') ? '6' : '3'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('chloro_envelope')}
            />

            {/* 2. Stroma Matrix */}
            <ellipse
              cx="250"
              cy="160"
              rx="185"
              ry="100"
              fill="url(#chloroStromaGrad)"
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('chloro_stroma')}
            />

            {/* 3. Stroma Lamellae / Frets connecting grana */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('chloro_lamellae')}
            >
              <path
                d="M 150 140 L 250 135 L 350 145 M 150 180 L 250 185 L 350 175"
                stroke={isSelected('chloro_lamellae') ? '#ca8a04' : '#15803d'}
                strokeWidth={isSelected('chloro_lamellae') ? '6' : '3.5'}
                fill="none"
              />
            </g>

            {/* 4. Grana Stacks & Thylakoid Discs */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('chloro_grana')}
            >
              {/* Left Grana */}
              {[110, 125, 140, 155, 170, 185, 200].map((y, i) => (
                <ellipse
                  key={`g1-${i}`}
                  cx="150"
                  cy={y}
                  rx="32"
                  ry="9"
                  fill={isSelected('chloro_grana') ? '#16a34a' : '#14532d'}
                  stroke="#166534"
                  strokeWidth="1.5"
                />
              ))}

              {/* Center Grana */}
              {[105, 120, 135, 150, 165, 180, 195, 210].map((y, i) => (
                <ellipse
                  key={`g2-${i}`}
                  cx="250"
                  cy={y}
                  rx="34"
                  ry="9.5"
                  fill={isSelected('chloro_grana') ? '#22c55e' : '#15803d'}
                  stroke="#14532d"
                  strokeWidth="1.5"
                />
              ))}

              {/* Right Grana */}
              {[115, 130, 145, 160, 175, 190, 205].map((y, i) => (
                <ellipse
                  key={`g3-${i}`}
                  cx="350"
                  cy={y}
                  rx="30"
                  ry="8.5"
                  fill={isSelected('chloro_grana') ? '#16a34a' : '#14532d'}
                  stroke="#166534"
                  strokeWidth="1.5"
                />
              ))}
            </g>

            {/* Starch granules & plastoglobuli */}
            <ellipse cx="200" cy="110" rx="14" ry="7" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            <ellipse cx="300" cy="205" rx="12" ry="6" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />

            {/* Labels overlay */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="45" fill="#15803d">
                  ১. দ্বিস্তর আবরণী (Double Envelope)
                </text>
                <line x1="120" y1="50" x2="150" y2="70" stroke="#15803d" strokeWidth="1.5" />

                <text x="320" y="45" fill="#166534">
                  ২. স্ট্রোমা ম্যাট্রিক্স (Stroma)
                </text>
                <line x1="360" y1="50" x2="380" y2="100" stroke="#166534" strokeWidth="1.5" />

                <text x="70" y="275" fill="#14532d">
                  ৩. গ্রানাম স্তূপ (Grana Stacks)
                </text>
                <line x1="120" y1="260" x2="150" y2="215" stroke="#14532d" strokeWidth="1.5" />

                <text x="280" y="275" fill="#ca8a04">
                  ৪. স্ট্রোমা ল্যামেলি (Lamellae)
                </text>
                <line x1="310" y1="260" x2="280" y2="185" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'nucleus':
        return (
          <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="nucEnvelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
              <linearGradient id="nucPlasmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            {/* 1. Nuclear Envelope with Pores Cutaway */}
            <circle
              cx="250"
              cy="160"
              r="120"
              fill="url(#nucEnvelopeGrad)"
              stroke={isSelected('nuclear_envelope') ? '#a855f7' : '#5b21b6'}
              strokeWidth={isSelected('nuclear_envelope') ? '6' : '3'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('nuclear_envelope')}
            />

            {/* 2. Nucleoplasm interior */}
            <circle
              cx="250"
              cy="160"
              r="110"
              fill="url(#nucPlasmGrad)"
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('nucleoplasm')}
            />

            {/* 3. Nuclear Pores on Envelope Perimeter */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('nuclear_pore')}
            >
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const px = 250 + Math.cos(rad) * 115;
                const py = 160 + Math.sin(rad) * 115;
                return (
                  <circle
                    key={deg}
                    cx={px}
                    cy={py}
                    r={isSelected('nuclear_pore') ? '5' : '3.5'}
                    fill={isSelected('nuclear_pore') ? '#6366f1' : '#312e81'}
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* 4. Chromatin Network */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('chromatin')}
            >
              <path
                d="M 170 140 Q 200 110 220 150 T 280 130 T 320 180 T 260 210 T 200 190 T 170 140
                   M 190 120 Q 240 100 270 120 T 310 150 T 290 220 T 210 230
                   M 230 180 Q 210 230 250 240 T 310 200"
                fill="none"
                stroke={isSelected('chromatin') ? '#9333ea' : '#6b21a8'}
                strokeWidth={isSelected('chromatin') ? '4.5' : '2.5'}
                strokeLinecap="round"
              />
            </g>

            {/* 5. Nucleolus dense core */}
            <circle
              cx="260"
              cy="150"
              r="34"
              fill={isSelected('nucleolus') ? '#3b0764' : '#4c1d95'}
              stroke={isSelected('nucleolus') ? '#facc15' : '#2e1065'}
              strokeWidth={isSelected('nucleolus') ? '3.5' : '2'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('nucleolus')}
            />

            {/* Labels overlay */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="70" y="45" fill="#7c3aed">
                  ১. নিউক্লিয়ার আবরণী (Envelope)
                </text>
                <line x1="130" y1="50" x2="180" y2="80" stroke="#7c3aed" strokeWidth="1.5" />

                <text x="320" y="45" fill="#4338ca">
                  ২. নিউক্লিয়ার রন্ধ্র (Nuclear Pore)
                </text>
                <line x1="360" y1="50" x2="335" y2="85" stroke="#4338ca" strokeWidth="1.5" />

                <text x="320" y="160" fill="#4c1d95">
                  ৩. নিউক্লিওলাস (Nucleolus)
                </text>
                <line x1="320" y1="155" x2="285" y2="150" stroke="#4c1d95" strokeWidth="1.5" />

                <text x="70" y="275" fill="#7e22ce">
                  ৪. ক্রোমাটিন তন্তু (Chromatin)
                </text>
                <line x1="120" y1="260" x2="190" y2="210" stroke="#7e22ce" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'endoplasmic_reticulum':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="erRoughGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="erSmoothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Nuclear envelope boundary connection */}
            <path
              d="M 50 160 Q 80 120 80 80 L 60 70"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="6"
              strokeDasharray="4 2"
              opacity="0.6"
            />
            <text x="35" y="65" className="text-[9px] font-bold fill-violet-700 pointer-events-none">
              নিউক্লিয়ার পর্দা সংলগ্ন
            </text>

            {/* 1. Rough ER Cisternae (Parallel stacked sacs) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('er_rough')}
            >
              {/* Cisterna 1 */}
              <path
                d="M 100 90 C 140 70 190 95 240 85 C 270 78 290 92 310 90"
                fill="none"
                stroke="url(#erRoughGrad)"
                strokeWidth={isSelected('er_rough') ? '16' : '12'}
                strokeLinecap="round"
              />
              {/* Cisterna 2 */}
              <path
                d="M 100 125 C 145 105 195 130 250 120 C 285 112 305 125 325 120"
                fill="none"
                stroke="url(#erRoughGrad)"
                strokeWidth={isSelected('er_rough') ? '16' : '12'}
                strokeLinecap="round"
              />
              {/* Cisterna 3 */}
              <path
                d="M 105 160 C 150 140 200 165 255 155 C 290 148 310 160 330 155"
                fill="none"
                stroke="url(#erRoughGrad)"
                strokeWidth={isSelected('er_rough') ? '16' : '12'}
                strokeLinecap="round"
              />
              {/* Cisterna 4 */}
              <path
                d="M 115 195 C 155 178 205 200 255 190 C 285 184 305 195 325 190"
                fill="none"
                stroke="url(#erRoughGrad)"
                strokeWidth={isSelected('er_rough') ? '16' : '12'}
                strokeLinecap="round"
              />

              {/* Ribosome granules on Rough ER outer surface */}
              {[
                [110, 80], [130, 75], [160, 76], [185, 85], [215, 83], [245, 78], [275, 78], [295, 84],
                [115, 115], [140, 108], [170, 114], [200, 122], [230, 118], [260, 112], [290, 112],
                [120, 150], [150, 142], [180, 149], [210, 157], [240, 151], [270, 148], [300, 148],
                [130, 185], [160, 180], [190, 186], [220, 192], [250, 184], [280, 182]
              ].map(([rx, ry], idx) => (
                <circle
                  key={`r-dot-${idx}`}
                  cx={rx}
                  cy={ry}
                  r="2.8"
                  fill={isSelected('er_rough') ? '#f43f5e' : '#ec4899'}
                  stroke="#ffffff"
                  strokeWidth="0.6"
                />
              ))}
            </g>

            {/* 2. Cisternae Lumen Highlight */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('er_cisternae')}
            >
              <path
                d="M 103 125 C 145 105 195 130 250 120 C 285 112 305 125 322 120"
                fill="none"
                stroke={isSelected('er_cisternae') ? '#38bdf8' : '#7dd3fc'}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 108 160 C 150 140 200 165 255 155 C 290 148 310 160 327 155"
                fill="none"
                stroke={isSelected('er_cisternae') ? '#38bdf8' : '#7dd3fc'}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* 3. Smooth ER Tubules (Branching tubular network without ribosomes) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('er_smooth')}
            >
              <path
                d="M 310 90 Q 350 80 370 110 T 410 100 T 440 120
                   M 325 120 Q 365 115 385 140 T 435 140
                   M 330 155 Q 360 165 390 180 T 440 185
                   M 370 110 L 385 140 L 390 180
                   M 410 100 L 435 140 L 440 185"
                fill="none"
                stroke={isSelected('er_smooth') ? '#0284c7' : 'url(#erSmoothGrad)'}
                strokeWidth={isSelected('er_smooth') ? '11' : '8'}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 4. Transport Vesicles budding off */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('er_vesicles')}
            >
              {[
                { cx: 345, cy: 75, r: 9 },
                { cx: 450, cy: 95, r: 10 },
                { cx: 460, cy: 140, r: 11 },
                { cx: 445, cy: 210, r: 9.5 },
                { cx: 360, cy: 220, r: 8.5 }
              ].map((ves, i) => (
                <circle
                  key={`ves-${i}`}
                  cx={ves.cx}
                  cy={ves.cy}
                  r={ves.r}
                  fill={isSelected('er_vesicles') ? '#7dd3fc' : '#bae6fd'}
                  stroke={isSelected('er_vesicles') ? '#0284c7' : '#0ea5e9'}
                  strokeWidth="2"
                />
              ))}
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="35" fill="#0369a1">
                  ১. অমসৃণ রেটিকুলাম (Rough ER)
                </text>
                <line x1="120" y1="40" x2="160" y2="70" stroke="#0369a1" strokeWidth="1.5" />

                <text x="350" y="35" fill="#0284c7">
                  ২. মসৃণ রেটিকুলাম (Smooth ER)
                </text>
                <line x1="390" y1="40" x2="410" y2="90" stroke="#0284c7" strokeWidth="1.5" />

                <text x="50" y="275" fill="#0284c7">
                  ৩. সিস্টার্নি ও লুমেন (Cisternae Lumen)
                </text>
                <line x1="110" y1="260" x2="180" y2="165" stroke="#0284c7" strokeWidth="1.5" />

                <text x="340" y="275" fill="#0369a1">
                  ৪. পরিবহন ভেসিকল (Transport Vesicles)
                </text>
                <line x1="390" y1="260" x2="445" y2="215" stroke="#0369a1" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'golgi':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="golgiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            {/* 1. Cis Face (Forming Face - Convex side towards nucleus/ER) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('golgi_cis_face')}
            >
              <path
                d="M 140 85 Q 260 50 380 85"
                fill="none"
                stroke={isSelected('golgi_cis_face') ? '#f59e0b' : '#fbbf24'}
                strokeWidth={isSelected('golgi_cis_face') ? '14' : '10'}
                strokeLinecap="round"
              />
              {/* Incoming ER vesicles fusing */}
              <circle cx="210" cy="55" r="7" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
              <circle cx="310" cy="58" r="6.5" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            </g>

            {/* 2. Cisternae Stacks (Curved parallel sacs) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('golgi_cisternae')}
            >
              {/* Sac 1 */}
              <path
                d="M 130 115 Q 260 85 390 115"
                fill="none"
                stroke="url(#golgiGrad)"
                strokeWidth={isSelected('golgi_cisternae') ? '14' : '11'}
                strokeLinecap="round"
              />
              {/* Sac 2 */}
              <path
                d="M 125 145 Q 260 120 395 145"
                fill="none"
                stroke="url(#golgiGrad)"
                strokeWidth={isSelected('golgi_cisternae') ? '14' : '11'}
                strokeLinecap="round"
              />
              {/* Sac 3 */}
              <path
                d="M 130 175 Q 260 155 390 175"
                fill="none"
                stroke="url(#golgiGrad)"
                strokeWidth={isSelected('golgi_cisternae') ? '14' : '11'}
                strokeLinecap="round"
              />
            </g>

            {/* 3. Trans Face (Maturing Face - Concave side towards plasma membrane) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('golgi_trans_face')}
            >
              <path
                d="M 145 205 Q 260 190 375 205"
                fill="none"
                stroke={isSelected('golgi_trans_face') ? '#ea580c' : '#b45309'}
                strokeWidth={isSelected('golgi_trans_face') ? '14' : '10'}
                strokeLinecap="round"
              />
            </g>

            {/* 4. Secretory Vesicles & Lysosome precursor buds */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('golgi_secretory_vesicles')}
            >
              {[
                { cx: 120, cy: 220, r: 10 },
                { cx: 165, cy: 235, r: 12 },
                { cx: 230, cy: 240, r: 14 },
                { cx: 300, cy: 242, r: 13 },
                { cx: 365, cy: 232, r: 11 },
                { cx: 405, cy: 215, r: 9.5 }
              ].map((ves, i) => (
                <circle
                  key={`gv-${i}`}
                  cx={ves.cx}
                  cy={ves.cy}
                  r={ves.r}
                  fill={isSelected('golgi_secretory_vesicles') ? '#fde047' : '#fef08a'}
                  stroke={isSelected('golgi_secretory_vesicles') ? '#ca8a04' : '#d97706'}
                  strokeWidth="2"
                />
              ))}
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="35" fill="#d97706">
                  ১. সিস-ফেস / প্রবেশ তল (Cis Face)
                </text>
                <line x1="130" y1="40" x2="220" y2="70" stroke="#d97706" strokeWidth="1.5" />

                <text x="340" y="35" fill="#b45309">
                  ২. সিস্টার্নি স্তূপ (Cisternae Stacks)
                </text>
                <line x1="380" y1="40" x2="350" y2="120" stroke="#b45309" strokeWidth="1.5" />

                <text x="50" y="280" fill="#ea580c">
                  ৩. ট্রান্স-ফেস / প্রস্থান তল (Trans Face)
                </text>
                <line x1="120" y1="265" x2="200" y2="210" stroke="#ea580c" strokeWidth="1.5" />

                <text x="330" y="280" fill="#b45309">
                  ৪. ক্ষরণকারী ভেসিকল (Secretory Vesicles)
                </text>
                <line x1="380" y1="265" x2="310" y2="245" stroke="#b45309" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'ribosome':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="riboLargeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>
              <linearGradient id="riboSmallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>

            {/* 1. Large Subunit (60S in Eukaryotes) */}
            <path
              d="M 160 155 C 150 90 230 65 260 65 C 290 65 370 90 360 155 C 330 170 300 160 260 160 C 220 160 190 170 160 155 Z"
              fill="url(#riboLargeGrad)"
              stroke={isSelected('ribo_large_subunit') ? '#f43f5e' : '#9d174d'}
              strokeWidth={isSelected('ribo_large_subunit') ? '5' : '2.5'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('ribo_large_subunit')}
            />

            {/* A, P, E tRNA binding sites indication on large subunit */}
            <g className="opacity-80 pointer-events-none text-[9px] font-bold fill-white">
              <rect x="215" y="105" width="22" height="35" rx="4" fill="#9d174d" stroke="#ffffff" strokeWidth="0.8" />
              <text x="222" y="126">E</text>
              <rect x="249" y="105" width="22" height="35" rx="4" fill="#9d174d" stroke="#ffffff" strokeWidth="0.8" />
              <text x="256" y="126">P</text>
              <rect x="283" y="105" width="22" height="35" rx="4" fill="#9d174d" stroke="#ffffff" strokeWidth="0.8" />
              <text x="290" y="126">A</text>
            </g>

            {/* 2. Small Subunit (40S in Eukaryotes) */}
            <path
              d="M 180 180 C 180 170 210 168 260 168 C 310 168 340 170 340 180 C 335 220 300 230 260 230 C 220 230 185 220 180 180 Z"
              fill="url(#riboSmallGrad)"
              stroke={isSelected('ribo_small_subunit') ? '#fb7185' : '#be123c'}
              strokeWidth={isSelected('ribo_small_subunit') ? '5' : '2.5'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('ribo_small_subunit')}
            />

            {/* 3. mRNA strand binding cleft */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('ribo_mrna_cleft')}
            >
              {/* mRNA ribbon strand passing horizontally */}
              <path
                d="M 80 168 Q 180 160 260 165 T 340 170 Q 400 175 440 168"
                fill="none"
                stroke={isSelected('ribo_mrna_cleft') ? '#facc15' : '#eab308'}
                strokeWidth={isSelected('ribo_mrna_cleft') ? '6' : '3.5'}
                strokeLinecap="round"
              />
              {/* mRNA codons ticks */}
              {[120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420].map((cx, i) => (
                <line key={`cd-${i}`} x1={cx} y1="163" x2={cx} y2="171" stroke="#a16207" strokeWidth="2" />
              ))}
              <text x="90" y="158" className="text-[9px] font-bold fill-amber-700 pointer-events-none">
                5' mRNA 3'
              </text>
            </g>

            {/* 4. Polypeptide exit tunnel & growing amino acid chain */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('ribo_exit_tunnel')}
            >
              {/* Tunnel path inside large subunit pointing upward */}
              <path
                d="M 260 100 L 260 60"
                stroke={isSelected('ribo_exit_tunnel') ? '#38bdf8' : '#64748b'}
                strokeWidth="6"
                strokeDasharray="2 2"
              />
              {/* Nascent polypeptide beads emerging at top */}
              {[
                { cx: 260, cy: 50, color: '#3b82f6' },
                { cx: 255, cy: 38, color: '#10b981' },
                { cx: 268, cy: 28, color: '#f59e0b' },
                { cx: 258, cy: 18, color: '#ec4899' },
                { cx: 272, cy: 12, color: '#8b5cf6' }
              ].map((aa, i) => (
                <circle
                  key={`aa-${i}`}
                  cx={aa.cx}
                  cy={aa.cy}
                  r="5"
                  fill={aa.color}
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="45" fill="#be185d">
                  ১. বৃহৎ সাব-ইউনিট (Large Subunit 60S)
                </text>
                <line x1="140" y1="50" x2="200" y2="85" stroke="#be185d" strokeWidth="1.5" />

                <text x="320" y="30" fill="#3b82f6">
                  ৪. প্রোটিন নির্গমন নালি (Exit Tunnel)
                </text>
                <line x1="360" y1="35" x2="280" y2="35" stroke="#3b82f6" strokeWidth="1.5" />

                <text x="45" y="275" fill="#ca8a04">
                  ৩. এমআরএনএ খাঁজ (mRNA Cleft)
                </text>
                <line x1="110" y1="260" x2="160" y2="175" stroke="#ca8a04" strokeWidth="1.5" />

                <text x="330" y="275" fill="#be123c">
                  ২. ক্ষুদ্র সাব-ইউনিট (Small Subunit 40S)
                </text>
                <line x1="380" y1="260" x2="310" y2="210" stroke="#be123c" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'plasma_membrane':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="proteinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Extracellular / Intracellular boundary texts */}
            <text x="30" y="45" className="text-[9px] font-bold fill-slate-400 pointer-events-none">
              কোষের বহিঃস্থ জলীয় পরিবেশ (Extracellular Fluid)
            </text>
            <text x="30" y="275" className="text-[9px] font-bold fill-slate-400 pointer-events-none">
              সাইটোপ্লাজম বা কোষের অভ্যন্তর (Cytoplasm / Intracellular)
            </text>

            {/* 1. Phospholipid Bilayer (Two rows of hydrophilic heads with dual hydrophobic tails) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('pm_phospholipid_bilayer')}
            >
              {/* Outer leaflet and inner leaflet heads */}
              {[40, 60, 80, 100, 120, 140, 200, 220, 240, 310, 330, 350, 420, 440, 460, 480].map((x) => (
                <g key={`pl-${x}`}>
                  {/* Top outer head */}
                  <circle
                    cx={x}
                    cy="95"
                    r="7.5"
                    fill={isSelected('pm_phospholipid_bilayer') ? '#60a5fa' : '#3b82f6'}
                    stroke="#1d4ed8"
                    strokeWidth="1"
                  />
                  {/* Top tails */}
                  <path d={`M ${x - 2} 103 Q ${x - 5} 125 ${x - 3} 140 M ${x + 2} 103 Q ${x + 5} 125 ${x + 3} 140`} stroke="#ca8a04" strokeWidth="1.5" fill="none" />
                  {/* Bottom tails */}
                  <path d={`M ${x - 2} 205 Q ${x - 5} 185 ${x - 3} 165 M ${x + 2} 205 Q ${x + 5} 185 ${x + 3} 165`} stroke="#ca8a04" strokeWidth="1.5" fill="none" />
                  {/* Bottom inner head */}
                  <circle
                    cx={x}
                    cy="215"
                    r="7.5"
                    fill={isSelected('pm_phospholipid_bilayer') ? '#60a5fa' : '#3b82f6'}
                    stroke="#1d4ed8"
                    strokeWidth="1"
                  />
                </g>
              ))}
            </g>

            {/* 2. Integral / Transmembrane Protein Channel */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('pm_integral_proteins')}
            >
              {/* Channel Protein 1 (Left Transmembrane Barrel) */}
              <rect
                x="155"
                y="80"
                width="36"
                height="150"
                rx="14"
                fill="url(#proteinGrad)"
                stroke={isSelected('pm_integral_proteins') ? '#93c5fd' : '#1e40af'}
                strokeWidth={isSelected('pm_integral_proteins') ? '4' : '2'}
              />
              {/* Central transport pore */}
              <line x1="173" y1="80" x2="173" y2="230" stroke="#93c5fd" strokeWidth="2.5" strokeDasharray="3 3" />

              {/* Channel Protein 2 (Right Transmembrane Globular) */}
              <rect
                x="365"
                y="75"
                width="42"
                height="160"
                rx="16"
                fill="url(#proteinGrad)"
                stroke={isSelected('pm_integral_proteins') ? '#93c5fd' : '#1e40af'}
                strokeWidth={isSelected('pm_integral_proteins') ? '4' : '2'}
              />
            </g>

            {/* 3. Peripheral Protein (Outer & Inner surfaces) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('pm_peripheral_proteins')}
            >
              <ellipse
                cx="275"
                cy="75"
                rx="24"
                ry="15"
                fill={isSelected('pm_peripheral_proteins') ? '#38bdf8' : '#0284c7'}
                stroke="#0369a1"
                strokeWidth="1.5"
              />
              <ellipse
                cx="275"
                cy="235"
                rx="26"
                ry="16"
                fill={isSelected('pm_peripheral_proteins') ? '#38bdf8' : '#0284c7'}
                stroke="#0369a1"
                strokeWidth="1.5"
              />
            </g>

            {/* 4. Glycocalyx (Carbohydrate tree branching off glycoprotein) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('pm_glycocalyx')}
            >
              <path
                d="M 386 75 L 386 45 L 366 30 M 386 45 L 406 25"
                stroke={isSelected('pm_glycocalyx') ? '#10b981' : '#059669'}
                strokeWidth="2.5"
                fill="none"
              />
              <circle cx="366" cy="30" r="4.5" fill="#34d399" stroke="#059669" strokeWidth="1" />
              <circle cx="406" cy="25" r="4.5" fill="#34d399" stroke="#059669" strokeWidth="1" />
              <circle cx="386" cy="45" r="4.5" fill="#34d399" stroke="#059669" strokeWidth="1" />
            </g>

            {/* 5. Cholesterol molecules in fatty acid core */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('pm_cholesterol')}
            >
              {[
                { x: 105, y: 150 },
                { x: 225, y: 155 },
                { x: 335, y: 148 },
                { x: 445, y: 152 }
              ].map((ch, idx) => (
                <rect
                  key={`chol-${idx}`}
                  x={ch.x}
                  y={ch.y}
                  width="12"
                  height="16"
                  rx="3"
                  fill={isSelected('pm_cholesterol') ? '#facc15' : '#eab308'}
                  stroke="#a16207"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="40" y="25" fill="#2563eb">
                  ১. ফসফোলিপিড বাইলেয়ার (Lipid Bilayer)
                </text>
                <line x1="120" y1="30" x2="100" y2="85" stroke="#2563eb" strokeWidth="1.5" />

                <text x="320" y="15" fill="#059669">
                  ৪. গ্লাইকোক্যালিক্স (Glycocalyx)
                </text>
                <line x1="380" y1="20" x2="386" y2="40" stroke="#059669" strokeWidth="1.5" />

                <text x="50" y="300" fill="#1d4ed8">
                  ২. ইনটিগ্রাল প্রোটিন (Integral Channel)
                </text>
                <line x1="120" y1="285" x2="173" y2="235" stroke="#1d4ed8" strokeWidth="1.5" />

                <text x="230" y="300" fill="#0284c7">
                  ৩. পেরিফেরাল প্রোটিন (Peripheral)
                </text>
                <line x1="280" y1="285" x2="275" y2="252" stroke="#0284c7" strokeWidth="1.5" />

                <text x="390" y="300" fill="#ca8a04">
                  ৫. কোলেস্টেরল (Cholesterol)
                </text>
                <line x1="430" y1="285" x2="340" y2="165" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'cell_wall':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="secWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
            </defs>

            {/* Cross-section of plant cell wall junction between cell 1 and cell 2 */}
            {/* Cell 1 Interior Label */}
            <text x="30" y="160" className="text-[10px] font-bold fill-slate-400 pointer-events-none">
              কোষ-১ সাইটোপ্লাজম
            </text>
            {/* Cell 2 Interior Label */}
            <text x="400" y="160" className="text-[10px] font-bold fill-slate-400 pointer-events-none">
              কোষ-২ সাইটোপ্লাজম
            </text>

            {/* 3. Secondary Cell Wall (Thick inner lignified layers on both sides) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('cw_secondary_wall')}
            >
              {/* Left Secondary Wall */}
              <rect
                x="140"
                y="60"
                width="40"
                height="190"
                fill="url(#secWallGrad)"
                stroke={isSelected('cw_secondary_wall') ? '#22c55e' : '#14532d'}
                strokeWidth={isSelected('cw_secondary_wall') ? '4' : '1.5'}
              />
              {/* Right Secondary Wall */}
              <rect
                x="330"
                y="60"
                width="40"
                height="190"
                fill="url(#secWallGrad)"
                stroke={isSelected('cw_secondary_wall') ? '#22c55e' : '#14532d'}
                strokeWidth={isSelected('cw_secondary_wall') ? '4' : '1.5'}
              />
            </g>

            {/* 2. Primary Cell Wall (Cellulose microfibril layer) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('cw_primary_wall')}
            >
              {/* Left Primary Wall */}
              <rect
                x="185"
                y="60"
                width="35"
                height="190"
                fill={isSelected('cw_primary_wall') ? '#4ade80' : '#22c55e'}
                stroke="#16a34a"
                strokeWidth="1.5"
              />
              {/* Right Primary Wall */}
              <rect
                x="290"
                y="60"
                width="35"
                height="190"
                fill={isSelected('cw_primary_wall') ? '#4ade80' : '#22c55e'}
                stroke="#16a34a"
                strokeWidth="1.5"
              />
            </g>

            {/* 1. Middle Lamella (Central pectin cement layer) */}
            <rect
              x="225"
              y="60"
              width="60"
              height="190"
              fill={isSelected('cw_middle_lamella') ? '#bef264' : '#84cc16'}
              stroke={isSelected('cw_middle_lamella') ? '#65a30d' : '#4d7c0f'}
              strokeWidth={isSelected('cw_middle_lamella') ? '4' : '1.5'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('cw_middle_lamella')}
            />

            {/* 4. Plasmodesmata Channels (Pores spanning across both walls) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('cw_plasmodesmata')}
            >
              {/* Upper plasmodesma pore */}
              <rect
                x="135"
                y="95"
                width="240"
                height="22"
                rx="6"
                fill="#fef08a"
                stroke={isSelected('cw_plasmodesmata') ? '#ca8a04' : '#eab308'}
                strokeWidth={isSelected('cw_plasmodesmata') ? '3.5' : '1.5'}
              />
              {/* Desmotubule core */}
              <line x1="135" y1="106" x2="375" y2="106" stroke="#0284c7" strokeWidth="3" />

              {/* Lower plasmodesma pore */}
              <rect
                x="135"
                y="185"
                width="240"
                height="22"
                rx="6"
                fill="#fef08a"
                stroke={isSelected('cw_plasmodesmata') ? '#ca8a04' : '#eab308'}
                strokeWidth={isSelected('cw_plasmodesmata') ? '3.5' : '1.5'}
              />
              {/* Desmotubule core */}
              <line x1="135" y1="196" x2="375" y2="196" stroke="#0284c7" strokeWidth="3" />
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="35" fill="#15803d">
                  ৩. গৌণ প্রাচীর (Secondary Wall)
                </text>
                <line x1="120" y1="40" x2="160" y2="60" stroke="#15803d" strokeWidth="1.5" />

                <text x="210" y="25" fill="#4d7c0f">
                  ১. মধ্যপর্দা (Middle Lamella)
                </text>
                <line x1="255" y1="30" x2="255" y2="60" stroke="#4d7c0f" strokeWidth="1.5" />

                <text x="340" y="35" fill="#16a34a">
                  ২. প্রাথমিক প্রাচীর (Primary Wall)
                </text>
                <line x1="380" y1="40" x2="310" y2="60" stroke="#16a34a" strokeWidth="1.5" />

                <text x="180" y="285" fill="#ca8a04">
                  ৪. প্লাজমোডেসমাটা নালিকা (Plasmodesmata Channels)
                </text>
                <line x1="255" y1="270" x2="255" y2="207" stroke="#ca8a04" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'vacuole':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="cellSapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="60%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>

            {/* Surrounding cytoplasm context */}
            <rect x="30" y="20" width="460" height="270" rx="30" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="45" y="45" className="text-[9px] font-bold fill-slate-400 pointer-events-none">
              সাইটোপ্লাজমীয় অঞ্চল (Cytoplasm)
            </text>

            {/* 1. Tonoplast Membrane (Single semi-permeable boundary) */}
            <rect
              x="80"
              y="55"
              width="360"
              height="200"
              rx="60"
              fill="url(#cellSapGrad)"
              stroke={isSelected('vac_tonoplast') ? '#0284c7' : '#0369a1'}
              strokeWidth={isSelected('vac_tonoplast') ? '6' : '3.5'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('vac_tonoplast')}
            />

            {/* V-ATPase Proton pump complexes on Tonoplast perimeter */}
            {[
              { x: 150, y: 55 }, { x: 260, y: 55 }, { x: 370, y: 55 },
              { x: 150, y: 255 }, { x: 260, y: 255 }, { x: 370, y: 255 }
            ].map((pt, i) => (
              <circle
                key={`pump-${i}`}
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#f59e0b"
                stroke="#b45309"
                strokeWidth="1"
              />
            ))}

            {/* 2. Cell Sap (Vacuolar Fluid) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('vac_cell_sap')}
            >
              {/* Soft fluid swirl paths */}
              <path
                d="M 120 120 Q 200 90 280 130 T 400 110"
                fill="none"
                stroke={isSelected('vac_cell_sap') ? '#38bdf8' : '#67e8f9'}
                strokeWidth="2.5"
                opacity="0.6"
              />
              <path
                d="M 130 180 Q 220 210 320 170 T 390 190"
                fill="none"
                stroke={isSelected('vac_cell_sap') ? '#38bdf8' : '#67e8f9'}
                strokeWidth="2.5"
                opacity="0.6"
              />
              <text x="210" y="155" className="text-[12px] font-bold fill-sky-900/60 pointer-events-none">
                কোষরস (Cell Sap)
              </text>
            </g>

            {/* 3. Calcium Oxalate Crystals & Raphides */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('vac_crystals')}
            >
              {/* Bundle of needle-like raphides */}
              <g transform="translate(140, 130)">
                {[-15, -10, -5, 0, 5, 10, 15].map((off, idx) => (
                  <line
                    key={`rf-${idx}`}
                    x1={off}
                    y1="-18"
                    x2={off + 8}
                    y2="18"
                    stroke={isSelected('vac_crystals') ? '#0284c7' : '#0369a1'}
                    strokeWidth={isSelected('vac_crystals') ? '3' : '2'}
                  />
                ))}
              </g>

              {/* Prismatic druses / star crystals */}
              <polygon
                points="340,140 348,150 360,148 352,158 356,170 344,164 334,172 336,160 326,152 338,150"
                fill={isSelected('vac_crystals') ? '#ffffff' : '#f0fdf4'}
                stroke={isSelected('vac_crystals') ? '#0284c7' : '#059669'}
                strokeWidth="1.5"
              />
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="35" fill="#0369a1">
                  ১. টনোপ্লাস্ট ঝিল্লি (Tonoplast Membrane)
                </text>
                <line x1="140" y1="40" x2="200" y2="55" stroke="#0369a1" strokeWidth="1.5" />

                <text x="330" y="35" fill="#0284c7">
                  ২. জলীয় কোষরস (Cell Sap)
                </text>
                <line x1="370" y1="40" x2="340" y2="100" stroke="#0284c7" strokeWidth="1.5" />

                <text x="80" y="285" fill="#0369a1">
                  ৩. ক্যালসিয়াম ক্রিস্টাল ও রেফিড (Raphides)
                </text>
                <line x1="150" y1="270" x2="148" y2="160" stroke="#0369a1" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      case 'lysosome':
        return (
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px] select-none">
            <defs>
              <linearGradient id="lysoMemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <linearGradient id="lysoLumenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fee2e2" />
                <stop offset="100%" stopColor="#fca5a5" />
              </linearGradient>
            </defs>

            {/* 1. Single Phospholipid Protective Membrane */}
            <circle
              cx="260"
              cy="160"
              r="115"
              fill="url(#lysoMemGrad)"
              stroke={isSelected('lyso_membrane') ? '#ef4444' : '#7f1d1d'}
              strokeWidth={isSelected('lyso_membrane') ? '6' : '3.5'}
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('lyso_membrane')}
            />

            {/* Glycosylated protective inner lining */}
            <circle
              cx="260"
              cy="160"
              r="104"
              fill="url(#lysoLumenGrad)"
              stroke="#b91c1c"
              strokeWidth="1.5"
            />

            {/* 3. H+ ATPase Proton Pumps along membrane */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('lyso_proton_pump')}
            >
              {[30, 80, 130, 180, 230, 280, 330].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const px = 260 + Math.cos(rad) * 110;
                const py = 160 + Math.sin(rad) * 110;
                return (
                  <circle
                    key={`lp-${deg}`}
                    cx={px}
                    cy={py}
                    r={isSelected('lyso_proton_pump') ? '6.5' : '4.5'}
                    fill={isSelected('lyso_proton_pump') ? '#f97316' : '#ea580c'}
                    stroke="#ffffff"
                    strokeWidth="1"
                  />
                );
              })}
            </g>

            {/* 2. Acid Hydrolases Matrix (Enzyme molecules in lumen) */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('lyso_enzymes')}
            >
              {[
                [230, 120], [270, 115], [300, 135], [220, 150], [260, 155], [290, 170],
                [235, 190], [275, 195], [315, 185], [200, 175], [240, 210]
              ].map(([ex, ey], idx) => (
                <circle
                  key={`enz-${idx}`}
                  cx={ex}
                  cy={ey}
                  r="6"
                  fill={isSelected('lyso_enzymes') ? '#b91c1c' : '#dc2626'}
                  stroke="#ffffff"
                  strokeWidth="0.8"
                />
              ))}
              <text x="215" y="175" className="text-[10px] font-bold fill-red-950/60 pointer-events-none">
                pH ~ 4.8 পাচক এনজাইম
              </text>
            </g>

            {/* 4. Phagolysosome digestion / engulfed bacterium vacuole */}
            <g
              className="cursor-pointer"
              onClick={() => setSelectedSubstructureId('lyso_phagosome')}
            >
              <ellipse
                cx="315"
                cy="145"
                rx="24"
                ry="18"
                fill="#fef2f2"
                stroke={isSelected('lyso_phagosome') ? '#991b1b' : '#ef4444'}
                strokeWidth={isSelected('lyso_phagosome') ? '3' : '1.5'}
                strokeDasharray="3 2"
              />
              {/* Fragmented target inside */}
              <rect x="305" y="140" width="16" height="8" rx="3" fill="#64748b" opacity="0.7" />
            </g>

            {/* Clean External Bilingual Labels with Non-overlapping Leader Lines */}
            {showSubstructureLabels && (
              <g className="text-[10px] font-bold fill-slate-900 pointer-events-none">
                <text x="60" y="35" fill="#991b1b">
                  ১. একক লিপিড ঝিল্লি (Single Membrane)
                </text>
                <line x1="130" y1="40" x2="190" y2="85" stroke="#991b1b" strokeWidth="1.5" />

                <text x="320" y="35" fill="#ea580c">
                  ৩. এইচ-প্লাস প্রোটন পাম্প (Proton Pump)
                </text>
                <line x1="360" y1="40" x2="340" y2="85" stroke="#ea580c" strokeWidth="1.5" />

                <text x="50" y="280" fill="#dc2626">
                  ২. পাচক এনজাইম (Acid Hydrolases)
                </text>
                <line x1="120" y1="265" x2="235" y2="190" stroke="#dc2626" strokeWidth="1.5" />

                <text x="330" y="280" fill="#991b1b">
                  ৪. ফ্যাগোলাইসোজোম পাচন (Phagosome)
                </text>
                <line x1="380" y1="265" x2="330" y2="160" stroke="#991b1b" strokeWidth="1.5" />
              </g>
            )}
          </svg>
        );

      default:
        return (
          <div className="w-full h-[260px] bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-200">
            <h4 className="text-base font-bold text-slate-900 mb-1">
              {currentOrganelle.nameBn}
            </h4>
            <p className="text-xs text-slate-500 max-w-md mb-3">
              {currentOrganelle.subtitleBn}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-5xl w-full p-4 sm:p-6 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden my-auto">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">উদ্ভিদকোষের মূল চিত্রে ফিরুন</span>
            </button>
            <div className="w-px h-5 bg-slate-200" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>পৃথক অঙ্গাণু বিশদ অন্বেষণ ল্যাব (Organelle Explorer)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentOrganelle.has3DSupport && onOpen3DView && (
              <button
                onClick={() => {
                  onClose();
                  onOpen3DView(currentOrganelle.id);
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-xl text-xs font-bold transition-all shadow-2xs"
              >
                <Box className="w-3.5 h-3.5 text-orange-600" />
                <span>৩ডি অ্যানাটমিতে দেখুন</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Organelles Navigation Bar */}
        <div className="py-2.5 overflow-x-auto flex items-center gap-1.5 shrink-0 border-b border-slate-100 bg-slate-50/70 -mx-4 sm:-mx-6 px-4 sm:px-6">
          {ORGANELLES_DATA.map((org) => (
            <button
              key={org.id}
              onClick={() => handleSelectOrganelle(org.id)}
              className={`px-3 py-1.5 text-xs rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedOrganelleId === org.id
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>{org.nameBn.split(' ')[0]} {org.nameBn.split(' ')[1] || ''}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-md ${
                  selectedOrganelleId === org.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {org.cellType === 'plant' ? 'উদ্ভিদ' : org.cellType === 'both' ? 'উভয়' : 'প্রাণী'}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Main Body Grid */}
        <div className="overflow-y-auto flex-1 mt-4 pr-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 7 cols: Illustration / Substructure Viewer */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                      {currentOrganelle.badgeBn}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                      {currentOrganelle.nameBn}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {currentOrganelle.nameEn}
                    </p>
                  </div>

                  <button
                    onClick={() => setShowSubstructureLabels(!showSubstructureLabels)}
                    className="p-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1"
                    title={showSubstructureLabels ? 'লেবেল লুকান' : 'লেবেল দেখান'}
                  >
                    {showSubstructureLabels ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">লেবেল</span>
                  </button>
                </div>

                {/* SVG Visual Representation */}
                <div className="mt-3 bg-white rounded-2xl p-3 border border-slate-200 shadow-2xs overflow-hidden flex items-center justify-center">
                  {renderOrganelleIllustration()}
                </div>
              </div>

              {/* Interactive Substructures Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-orange-600" />
                    <span>অভ্যন্তরীণ উপ-অংশসমূহ (ক্লিক করে বিস্তারিত দেখুন):</span>
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {currentOrganelle.substructures.length}টি অংশ
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentOrganelle.substructures.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubstructureId(sub.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-xl font-medium transition-all ${
                        selectedSubstructureId === sub.id
                          ? 'bg-slate-900 text-white font-bold ring-2 ring-orange-500 shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          selectedSubstructureId === sub.id
                            ? 'bg-orange-500 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {sub.number}
                      </span>
                      <span>{sub.nameBn.split(' ')[0]} {sub.nameBn.split(' ')[1] || ''}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Dedicated 5-Field Detail Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Selected Substructure Detail Card */}
              {activeSubstructure && (
                <div className="bg-orange-50/60 border border-orange-200 rounded-2xl p-4 shadow-xs animate-fadeIn">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-orange-800 flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">
                        {activeSubstructure.number}
                      </span>
                      <span>নির্বাচিত উপ-অংশ</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {activeSubstructure.nameEn}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {activeSubstructure.nameBn}
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="bg-white/90 p-2.5 rounded-xl border border-orange-100">
                      <span className="font-bold text-slate-800 block mb-0.5">
                        অবস্থান ও গঠন:
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {activeSubstructure.locationBn}
                      </p>
                    </div>

                    <div className="bg-white/90 p-2.5 rounded-xl border border-orange-100">
                      <span className="font-bold text-blue-900 block mb-0.5">
                        প্রধান কাজ ও ভূমিকা:
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {activeSubstructure.functionBn}
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                      <span className="font-bold text-emerald-900 block mb-0.5">
                        এসএসসি পরীক্ষার টিপস:
                      </span>
                      <p className="text-emerald-800 leading-relaxed font-medium">
                        {activeSubstructure.examTipsBn}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Organelle Overall Overview & Biological Function */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
                <div>
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-orange-500" />
                    <span>১. সহজ বাংলায় অঙ্গাণুর পরিচিতি</span>
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {currentOrganelle.overviewBn}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-orange-500" />
                    <span>২. প্রধান শারীরবৃত্তীয় কাজ (Main Function)</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    {currentOrganelle.mainFunctionBn}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>৩. কার্যপ্রণালী ও কোষীয় অবস্থান</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
                    {currentOrganelle.howItWorksBn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer Action Bar */}
        <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-orange-500 shrink-0" />
            <span>
              <strong>বোর্ড টিপস:</strong> {currentOrganelle.examTipsBn}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
            >
              <Check className="w-4 h-4 text-orange-400" />
              <span>উদ্ভিদকোষের মূল ডায়াগ্রামে ফিরে যান</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
