export interface SubTopic {
  id: string;
  titleBn: string;
  titleEn: string;
  summaryBn: string;
  detailsBn: string[];
  keyTermsBn: { term: string; definition: string }[];
  examTipsBn?: string;
}

export interface ChapterVisualMeta {
  type: 'diagram' | 'model' | 'animation';
  id: string;
  titleBn: string;
  badgeBn: string;
  descriptionBn: string;
}

export interface Chapter {
  id: number;
  numberBn: string;
  titleBn: string;
  titleEn: string;
  category: 'cell_genetics' | 'physiology_nutrition' | 'human_biology' | 'botany_ecology';
  categoryBn: string;
  overviewBn: string;
  importanceBn: string;
  subTopics: SubTopic[];
  relatedModelId?: string;
  relatedDiagramId?: string;
  relatedAnimationId?: string;
  nctbKeyPointsBn: string[];
  textbookFiguresBn: string[];
  visuals: ChapterVisualMeta[];
}

export interface DiagramHotspot {
  id: string;
  labelBn: string;
  labelEn: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  descriptionBn: string;
  functionBn: string;
  organelleId?: string;
  locationBn?: string;
  examTipsBn?: string;
}

export interface InteractiveDiagram {
  id: string;
  titleBn: string;
  titleEn: string;
  chapterNumber: number;
  imageSrc?: string;
  imageAlt: string;
  vectorType?: 'respiratory' | 'ecosystem' | 'neuron_detailed' | 'bacteria_cell';
  descriptionBn: string;
  hotspots: DiagramHotspot[];
}

export interface Biology3DModel {
  id: string;
  titleBn: string;
  titleEn: string;
  chapterNumber: number;
  categoryBn: string;
  descriptionBn: string;
  gltfSrc?: string; // WebAR glTF/GLB url
  usdzSrc?: string; // iOS AR Quick Look
  modelType: 'dna' | 'plant_cell' | 'heart' | 'virus' | 'neuron' | 'nephron' | 'flower';
  keyFeaturesBn: string[];
  educationalNotesBn: string;
}

export interface AnimationStage {
  stageNumber: number;
  titleBn: string;
  titleEn: string;
  durationMs: number;
  descriptionBn: string;
  keyMoleculesBn: string[];
}

export interface BiologicalAnimation {
  id: string;
  titleBn: string;
  titleEn: string;
  chapterNumber: number;
  descriptionBn: string;
  processType:
    | 'mitosis'
    | 'photosynthesis'
    | 'circulation'
    | 'reflex_arc'
    | 'digestion'
    | 'respiration'
    | 'reproduction'
    | 'biotech';
  stages: AnimationStage[];
}

export type QuestionImportance = 'high' | 'medium' | 'standard';

export type QuestionType = 'creative' | 'definition' | 'difference' | 'mcq' | 'structure_function';

export interface ExamCreativeAnswerPart {
  part: 'ক' | 'খ' | 'গ' | 'ঘ';
  marks: number;
  questionTextBn: string;
  answerBn: string;
  markingGuideBn: string;
}

export interface SSCExamQuestion {
  id: string;
  chapterNumber: number;
  chapterTitleBn: string;
  topicTitleBn: string;
  questionTextBn: string;
  questionType: QuestionType;
  questionTypeLabelBn: string;
  importance: QuestionImportance;
  importanceLabelBn: string;
  importanceReasonBn: string;
  completeAnswerBn: string;
  easyExplanationBn: string;
  examSampleAnswerBn?: string;
  creativeParts?: ExamCreativeAnswerPart[];
  keyTermsToIncludeBn: string[];
  marksGuideBn: string;
  commonMistakesBn: string[];
  relatedDiagramId?: string;
  relatedModelId?: string;
  relatedOrganelleId?: string;
}

export interface LearningProgress {
  chapterId: number;
  chapterTitleBn: string;
  chapterNumberBn: string;
  topicTitleBn?: string;
  timestamp: number;
}
