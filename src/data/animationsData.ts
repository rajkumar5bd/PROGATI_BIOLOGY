import { BiologicalAnimation } from '../types/biology';

export const ANIMATIONS_DATA: BiologicalAnimation[] = [
  {
    id: 'mitosis_animation',
    titleBn: 'মাইটোসিস কোষ বিভাজন পর্যায়ক্রম',
    titleEn: 'Mitosis Cell Division Stages',
    chapterNumber: 3,
    processType: 'mitosis',
    descriptionBn: 'মাতৃকোষের ধারাবাহিক সমীকরণিক বিভাজনে দুটি সমগুণসম্পন্ন অপত্য কোষ সৃষ্টির ৫টি পর্যায়। প্রতিটি ধাপে ক্রোমোজোমের সংকোচন, বিষুবীয় অঞ্চলে সমাবেশ, মেরুমুখী চলন ও অপত্য নিউক্লিয়াস পুনর্গঠন পর্যবেক্ষণ করুন।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. প্রোফেজ (Prophase)',
        titleEn: 'Prophase - Chromosome Condensation',
        durationMs: 3000,
        descriptionBn: 'নিউক্লিয়াস আকারে বড় হয়। ক্রোমোজোম থেকে জলবিয়োজন (Dehydration) শুরু হওয়ায় এরা খাটো ও মোটা হতে থাকে। সেন্ট্রোমিয়ার ব্যতীত ক্রোমোজোম লম্বালম্বি দুটি ক্রোমাটিডে বিভক্ত হয়।',
        keyMoleculesBn: ['ক্রোমাটিন তন্তু', 'সেন্ট্রোমিয়ার', 'নিউক্লিয়ার মেমব্রেন']
      },
      {
        stageNumber: 2,
        titleBn: '২. প্রো-মেটাফেজ (Prometaphase)',
        titleEn: 'Prometaphase - Spindle Apparatus Formation',
        durationMs: 3000,
        descriptionBn: 'দুই মেরুবিশিষ্ট স্পিন্ডল যন্ত্রের আবির্ভাব ঘটে। ক্রোমোজোমের সেন্ট্রোমিয়ার স্পিন্ডল তন্তুর সাথে যুক্ত হয় (ট্রাকশন ফাইবার)। নিউক্লিয়ার পর্দা ও নিউক্লিওলাস সম্পূর্ণ বিলুপ্ত হতে থাকে।',
        keyMoleculesBn: ['স্পিন্ডল তন্তু', 'কাইনেটোকোর', 'ট্রাকশন ফাইবার']
      },
      {
        stageNumber: 3,
        titleBn: '৩. মেটাফেজ (Metaphase)',
        titleEn: 'Metaphase - Equatorial Alignment',
        durationMs: 3500,
        descriptionBn: 'সকল ক্রোমোজোম স্পিন্ডল যন্ত্রের বিষুবীয় অঞ্চলে (Equator) সাজানো হয়; এই চলনকে মেটাকাইনেসিস বলে। এই ধাপে ক্রোমোজোমগুলো সবচেয়ে খাটো, মোটা ও স্পষ্ট দেখায়। সেন্ট্রোমিয়ার পুরোপুরি বিভক্ত হয়।',
        keyMoleculesBn: ['বিষুবীয় রেখা', 'মেটাকাইনেসিস', 'বিভক্ত সেন্ট্রোমিয়ার']
      },
      {
        stageNumber: 4,
        titleBn: '৪. অ্যানাফেজ (Anaphase)',
        titleEn: 'Anaphase - Chromatid Separation',
        durationMs: 3500,
        descriptionBn: 'প্রতিটি ক্রোমোজোমের অপত্য ক্রোমাটিড দুটি পরস্পরের বিপরীত মেরুর দিকে ধাবিত হয়। সেন্ট্রোমিয়ারের অগ্রগমনের ভিত্তিতে ক্রোমোজোমগুলো V, L, J বা I অক্ষরের আকার ধারণ করে।',
        keyMoleculesBn: ['অপত্য ক্রোমোজোম', 'মেরুমুখী চলন', 'V, L, J, I রূপ']
      },
      {
        stageNumber: 5,
        titleBn: '৫. টেলোফেজ ও সাইটোকাইনেসিস (Telophase)',
        titleEn: 'Telophase - Daughter Cell Formation',
        durationMs: 4000,
        descriptionBn: 'মেরুতে পৌঁছানো অপত্য ক্রোমোজোমে পানিযোজন ঘটে এরা লম্বা ও সরু হয়। নিউক্লিয়ার পর্দা ও নিউক্লিওলাসের পুনর্আবির্ভাব ঘটে। উদ্ভিদকোষে কোষপ্লেট তৈরির মাধ্যমে দুটি অপত্য কোষ গঠিত হয়।',
        keyMoleculesBn: ['কোষপ্লেট', 'পুনর্গঠিত নিউক্লিয়াস', 'দুটি অপত্য কোষ (2n)']
      }
    ]
  },
  {
    id: 'photosynthesis_animation',
    titleBn: 'সালোকসংশ্লেষণ: আলোক ও ক্যালভিন চক্র',
    titleEn: 'Photosynthesis Biochemical Stages',
    chapterNumber: 4,
    processType: 'photosynthesis',
    descriptionBn: 'সবুজ উদ্ভিদে সৌরশক্তিকে রাসায়নিক স্থিতিশক্তিতে রূপান্তরের দুটি পর্যায়: থাইলাকয়েডের আলোক নির্ভর পর্যায় এবং স্ট্রোমার ক্যালভিন চক্র (C3 শর্করা তৈরি)।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. সৌর ফোটন শোষণ ও ক্লোরোফিল সক্রিয়করণ',
        titleEn: 'Photon Absorption & Chlorophyll Excitation',
        durationMs: 3000,
        descriptionBn: 'সূর্যের আলোক ফোটন ক্লোরোপ্লাস্টের থাইলাকয়েডে অবস্থিত ক্লোরোফিল-এ অণু কর্তৃক শোষিত হয়ে ইলেকট্রনকে উচ্চ শক্তিস্তরে উন্নীত করে।',
        keyMoleculesBn: ['সৌর ফোটন কণা', 'ক্লোরোফিল অণু', 'উত্তেজিত ইলেকট্রন']
      },
      {
        stageNumber: 2,
        titleBn: '২. পানির ফটোলাইসিস (Photolysis of Water)',
        titleEn: 'Photolysis - Oxygen Release',
        durationMs: 3000,
        descriptionBn: 'সূর্যালোক ও ম্যাঙ্গানিজ এনজাইমের উপস্থিতিতে পানি জারিত হয়ে অক্সিজেন গ্যাস, হাইড্রোজেন প্রোটন ও মুক্ত ইলেকট্রন সৃষ্টি করে। উৎপাদিত অক্সিজেন বায়ুমণ্ডলে নিঃসৃত হয়।',
        keyMoleculesBn: ['2H2O → 4H+ + 4e- + O2↑', 'অক্সিজেন গ্যাস', 'প্রোটন গ্রেডিয়েন্ট']
      },
      {
        stageNumber: 3,
        titleBn: '৩. ফটোফসফোরাইলেশন ও NADPH তৈরি',
        titleEn: 'Photophosphorylation (ATP & NADPH)',
        durationMs: 3500,
        descriptionBn: 'ইলেকট্রন পরিবহন শৃঙ্খল দিয়ে ইলেকট্রন প্রবাহের সময় ADP-র সাথে অজৈব ফসফেট যুক্ত হয়ে ATP তৈরি হয় এবং NADP+ বিজারিত হয়ে NADPH + H+ (আত্মীকরণ শক্তি) উৎপন্ন করে।',
        keyMoleculesBn: ['ADP + Pi → ATP', 'NADP+ → NADPH', 'আত্মীকরণ শক্তি']
      },
      {
        stageNumber: 4,
        titleBn: '৪. স্ট্রোমায় ক্যালভিন চক্র ও শর্করা সংশ্লেষণ',
        titleEn: 'Calvin Cycle - Carbon Fixation into Glucose',
        durationMs: 4000,
        descriptionBn: 'স্ট্রোমায় রুবিসকো এনজাইমের সাহায্যে বায়ুমণ্ডলীয় CO2 রাইবুলোজ-১,৫-বিসফসফেটের সাথে যুক্ত হয়ে গ্লুকোজ তৈরি করে।',
        keyMoleculesBn: ['CO2 গ্যাস', 'RuBisCO এনজাইম', 'গ্লুকোজ (C6H12O6)']
      }
    ]
  },
  {
    id: 'digestion_animation',
    titleBn: 'মানব পরিপাকতন্ত্রে খাদ্য পরিপাক প্রক্রিয়া',
    titleEn: 'Human Digestive Process & Enzymes',
    chapterNumber: 5,
    processType: 'digestion',
    descriptionBn: 'মুখবিবর থেকে শুরু করে পাকস্থলী ও ক্ষুদ্রান্ত্রে শর্করা, আমিষ ও স্নেহজাতীয় খাদ্যের ধারাবাহিক রাসায়নিক পরিপাক ও শোষণ প্রক্রিয়া।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. মুখবিবরে চর্বণ ও টায়ালিন ক্রিয়া',
        titleEn: 'Mouth Ingestion & Salivary Amylase',
        durationMs: 3000,
        descriptionBn: 'দাঁতের সাহায্যে খাদ্য চর্বণ হয় এবং লালারসের টায়ালিন ও মলটেজ এনজাইম জটিল সিদ্ধ শর্করাকে ভেঙে মলটোজে রূপান্তর করে। গলধঃকরণের পর বোলাস তৈরি হয়।',
        keyMoleculesBn: ['লালাগ্রন্থি', 'টায়ালিন এনজাইম', 'মলটোজ']
      },
      {
        stageNumber: 2,
        titleBn: '২. অন্ননালির পেরিস্টালসিস তরঙ্গ',
        titleEn: 'Esophageal Peristalsis Wave',
        durationMs: 2500,
        descriptionBn: 'অন্ননালির অনুদৈর্ঘ্য ও বৃত্তাকার পেশির ছন্দময় সংকোচন-প্রসারণের (পেরিস্টালসিস) মাধ্যমে খাদ্যমণ্ড পাকস্থলীতে নেমে আসে।',
        keyMoleculesBn: ['বৃত্তাকার পেশি', 'পেরিস্টালসিস তরঙ্গ', 'কার্ডিয়াক স্ফিংটার']
      },
      {
        stageNumber: 3,
        titleBn: '৩. পাকস্থলীতে অ্যাসিড ও পেপসিন পাচন',
        titleEn: 'Gastric Acid & Pepsin Proteolysis',
        durationMs: 3500,
        descriptionBn: 'গ্যাস্ট্রিক রসের হাইড্রোক্লোরিক অ্যাসিড (HCl) জীবাণু ধ্বংস করে এবং নিষ্ক্রিয় পেপসিনোজেনকে সক্রিয় পেপসিনে পরিণত করে যা আমিষকে পেপটোনে ভাঙে। তৈরি হয় অম্লীয় কাইম।',
        keyMoleculesBn: ['HCl অ্যাসিড (pH 1.5-2)', 'পেপসিন এনজাইম', 'কাইম (Chyme)']
      },
      {
        stageNumber: 4,
        titleBn: '৪. ক্ষুদ্রান্ত্রে ক্ষারীয় পরিপাক ও ভিলাই শোষণ',
        titleEn: 'Intestinal Digestion & Villi Absorption',
        durationMs: 4000,
        descriptionBn: 'ডিওডেনামে পিত্তরস স্নেহকে ইমালসিফাই করে। অগ্ন্যাশয় রসের ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ দ্বারা পুষ্টি উপাদান ভেঙে যথাক্রমে অ্যামিনো এসিড, গ্লুকোজ ও ফ্যাটি এসিডে পরিণত হয় এবং ইলিয়ামের ভিলাই রক্তে শোষণ করে।',
        keyMoleculesBn: ['পিত্তরস', 'ট্রিপসিন ও লাইপেজ', 'ভিলাই (Villi)']
      }
    ]
  },
  {
    id: 'circulation_animation',
    titleBn: 'হৃৎপিণ্ডের রক্ত সংবহন ও স্পন্দন চক্র',
    titleEn: 'Double Circulation & Cardiac Cycle',
    chapterNumber: 6,
    processType: 'circulation',
    descriptionBn: 'মানবদেহে অবিরাম রক্ত সঞ্চালনের চারটি ধাপ: অলিন্দের প্রসারণ ও রক্ত গ্রহণ, নিলয়ে রক্ত প্রবাহ, নিলয়ের সংকোচন এবং মহাশিরা ও মহাধমনী পথে রক্ত সঞ্চালন।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. অলিন্দের ডায়াস্টোল (রক্ত গ্রহণ)',
        titleEn: 'Atrial Diastole - Venous Filling',
        durationMs: 3000,
        descriptionBn: 'উভয় অলিন্দ প্রসারিত হয়। ঊর্ধ্ব ও নিম্ন মহাশিরা দিয়ে CO2-যুক্ত রক্ত ডান অলিন্দে এবং ফুসফুসীয় শিরা দিয়ে O2-যুক্ত রক্ত বাম অলিন্দে প্রবেশ করে। সময়কাল প্রায় ০.৭ সেকেন্ড।',
        keyMoleculesBn: ['CO2-যুক্ত রক্ত (মহাশিরা)', 'O2-যুক্ত রক্ত (ফুসফুসীয় শিরা)']
      },
      {
        stageNumber: 2,
        titleBn: '২. অলিন্দের সিস্টোল ও নিলয়ে প্রবাহ',
        titleEn: 'Atrial Systole - Ventricular Filling',
        durationMs: 2500,
        descriptionBn: 'উভয় অলিন্দ সংকুচিত হয় (সময়কাল ০.১ সেকেন্ড)। ট্রাইকাস্পিড ও বাইকাস্পিড কপাটিকা খুলে গিয়ে যথাক্রমে ডান ও বাম নিলয়ে রক্ত প্রবেশ করায়।',
        keyMoleculesBn: ['ট্রাইকাস্পিড কপাটিকা', 'বাইকাস্পিড কপাটিকা']
      },
      {
        stageNumber: 3,
        titleBn: '৩. নিলয়ের সিস্টোল ও কপাটিকা বন্ধ (Lab)',
        titleEn: 'Ventricular Systole - Ejection Phase',
        durationMs: 3000,
        descriptionBn: 'নিলয়দ্বয় সজোরে সংকুচিত হয় (সময়কাল ০.৩ সেকেন্ড)। কপাটিকা দুটি সশব্দে বন্ধ হয় যা "লাব" (Lub) শব্দ তৈরি করে। সেমিলুনার কপাটিকা উন্মুক্ত হয়ে রক্ত ধমনীতে প্রবেশ করে।',
        keyMoleculesBn: ['প্রথম হৃৎশব্দ (Lub)', 'সেমিলুনার কপাটিকা উন্মুক্ত']
      },
      {
        stageNumber: 4,
        titleBn: '৪. ফুসফুসীয় ও সার্বিক দেহ সংবহন (Dub)',
        titleEn: 'Systemic & Pulmonary Circulation',
        durationMs: 3500,
        descriptionBn: 'ডান নিলয় থেকে CO2-যুক্ত রক্ত ফুসফুসে গিয়ে পরিশোধিত হয় এবং বাম নিলয় থেকে মহাধমনী (Aorta) দিয়ে O2-যুক্ত রক্ত সমগ্র দেহকোষে প্রবাহিত হয়। সেমিলুনার কপাটিকা বন্ধের শব্দ "ডাব" (Dub)।',
        keyMoleculesBn: ['মহাধমনী প্রবাহ', 'ফুসফুসীয় শোধন', 'দ্বিতীয় হৃৎশব্দ (Dub)']
      }
    ]
  },
  {
    id: 'respiration_animation',
    titleBn: 'মানব শ্বাসক্রিয়া ও অ্যালভিওলাসে গ্যাস বিনিময়',
    titleEn: 'Human Respiration & Alveolar Gas Exchange',
    chapterNumber: 7,
    processType: 'respiration',
    descriptionBn: 'প্রশ্বাস-নিশ্বাস চলাকালীন ডায়াফ্রামের উঠানামা এবং ফুসফুসের অ্যালভিওলাই কৈশিক জালিকায় অক্সিজেন ও কার্বন ডাই-অক্সাইডের ব্যাপন প্রক্রিয়া।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. প্রশ্বাস (Inspiration - ফুসফুসে বায়ু প্রবেশ)',
        titleEn: 'Inspiration - Diaphragm Contraction',
        durationMs: 3000,
        descriptionBn: 'মধ্যচ্ছদা বা ডায়াফ্রাম সংকুচিত হয়ে নিচে নেমে আসে এবং ইন্টারকোস্টাল পেশির টানে বক্ষপিঞ্জর উপরে ও বাইরে প্রসারিত হয়। বক্ষগহ্বরের আয়তন বেড়ে যাওয়ায় বায়ুমণ্ডল থেকে ফুসফুসে অক্সিজেনযুক্ত বায়ু ঢোকে।',
        keyMoleculesBn: ['ডায়াফ্রাম পেশি', 'বক্ষগহ্বর প্রসারণ', 'O2 সমৃদ্ধ বাতাস']
      },
      {
        stageNumber: 2,
        titleBn: '২. অ্যালভিওলাসের কৈশিক জালিকায় ব্যাপন',
        titleEn: 'Alveolar-Capillary Gas Diffusion',
        durationMs: 3500,
        descriptionBn: 'অ্যালভিওলাসের অতি পাতলা আর্দ্র প্রাচীর ভেদ করে বায়ুর অক্সিজেন রক্তের হিমোগ্লোবিনে প্রবেশ করে (অক্সিহিমোগ্লোবিন গঠন) এবং রক্তের অতিরিক্ত কার্বন ডাই-অক্সাইড অ্যালভিওলাসে ব্যাপিত হয়।',
        keyMoleculesBn: ['অ্যালভিওলাই প্রাচীর', 'হিমোগ্লোবিন + O2', 'CO2 ব্যাপন']
      },
      {
        stageNumber: 3,
        titleBn: '৩. নিঃশ্বাস (Expiration - বাতাস নির্গমন)',
        titleEn: 'Expiration - Passive Recoil',
        durationMs: 3000,
        descriptionBn: 'ডায়াফ্রাম শিথিল হয়ে ধনুকের মতো উপরে ওঠে এবং বক্ষপিঞ্জর স্বাভাবিক অবস্থায় ফিরে আসে। ফলে ফুসফুসের ওপর চাপ সৃষ্টি হয় এবং দূষিত CO2-যুক্ত বাতাস বাইরে নির্গত হয়।',
        keyMoleculesBn: ['ডায়াফ্রাম প্রসারণ', 'ফুসফুসীয় চাপ বৃদ্ধি', 'CO2 নির্গমন']
      }
    ]
  },
  {
    id: 'reflex_arc_animation',
    titleBn: 'প্রতিবর্ত চাপ ও তাৎক্ষণিক স্নায়ু তাড়না',
    titleEn: 'Reflex Arc & Immediate Impulse',
    chapterNumber: 10,
    processType: 'reflex_arc',
    descriptionBn: 'আকস্মিক বাহ্যিক উদ্দীপনার (যেমন গরম পাত্র বা সুইয়ের খোঁচা) জবাবে অনৈচ্ছিক তাৎক্ষণিক আত্মরক্ষামূলক স্নায়বিক সাড়া। সংবেদী থেকে সুষুম্নাকাণ্ড হয়ে মোটর নিউরন ও পেশিতে সংকেত প্রবাহ।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. উদ্দীপনা গ্রহণ (Receptor Activation)',
        titleEn: 'Stimulus Sensed by Skin Receptors',
        durationMs: 2500,
        descriptionBn: 'ত্বকে অবস্থিত তাপ বা ব্যথানালির গ্রাহক কোষ (Receptor) তীব্র উদ্দীপনা গ্রহণ করে বৈদ্যুতিক আয়নিত স্নায়ু তাড়না সৃষ্টি করে।',
        keyMoleculesBn: ['ত্বকের গ্রাহক কোষ', 'অ্যাকশন পটেনশিয়াল', 'Na+/K+ আয়ন বিনিময়']
      },
      {
        stageNumber: 2,
        titleBn: '২. অনুভূতিবাহী নিউরনে তাড়না সঞ্চালন',
        titleEn: 'Afferent Sensory Neuron Conduction',
        durationMs: 2500,
        descriptionBn: 'সংবেদী নিউরনের ডেনড্রাইট থেকে অ্যাক্সন হয়ে মায়েলিন আবরণের মধ্য দিয়ে বিদ্যুৎগতিতে সুষুম্নাকাণ্ডের ডরসাল রুটে তাড়না প্রবেশ করে।',
        keyMoleculesBn: ['সেন্সরি নিউরন', 'মায়েলিন আবরণ', 'ডরসাল রুট']
      },
      {
        stageNumber: 3,
        titleBn: '৩. সুষুম্নাকাণ্ডে বিশ্লেষণী নিউরন (Interneuron)',
        titleEn: 'Spinal Cord Synaptic Integration',
        durationMs: 2500,
        descriptionBn: 'মস্তিষ্কে যাওয়ার আগেই সুষুম্নাকাণ্ডের ধূসর পদার্থে অবস্থিত সহযোগী বা রিলে নিউরন দ্রুত সংকেতটি মোটরে রিলে করে দেয় যাতে কোনো কালক্ষেপণ না হয়।',
        keyMoleculesBn: ['ইন্টারনিউরন', 'সুষুম্নাকাণ্ডের ধূসর বস্তু', 'সাইন্যাপ্স']
      },
      {
        stageNumber: 4,
        titleBn: '৪. আজ্ঞাবাহী নিউরন ও পেশির দ্রুত সংকোচন',
        titleEn: 'Efferent Motor Response & Muscle Pull',
        durationMs: 3000,
        descriptionBn: 'মোটর নিউরন দিয়ে আজ্ঞাবহ সংকেত হাতের পেশিতে (কার্যকারক অঙ্গ / Effector) পৌঁছায় এবং পেশি দ্রুত সংকুচিত হয়ে হাতকে অপসরণ করে।',
        keyMoleculesBn: ['মোটর নিউরন', 'নিউরোট্রান্সমিটার (ACh)', 'পেশি সংকোচন']
      }
    ]
  },
  {
    id: 'reproduction_animation',
    titleBn: 'সপুষ্পক উদ্ভিদের দ্বিনিষেক ও ভ্রূণ সৃষ্টি',
    titleEn: 'Plant Double Fertilization Process',
    chapterNumber: 11,
    processType: 'reproduction',
    descriptionBn: 'পরাগায়নের পর গর্ভমুণ্ডে পরাগরেণুর অঙ্কুরোদগম, পরাগনালির গর্ভাশয়ে প্রবেশ এবং ভ্রূণথলিতে একই সাথে দুটি পুংগ্যামেট দ্বারা দ্বিনিষেক ক্রিয়া সম্পন্ন হওয়া।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. পরাগায়ন ও পরাগরেণু অঙ্কুরোদগম',
        titleEn: 'Pollen Germination on Stigma',
        durationMs: 3000,
        descriptionBn: 'গর্ভমুণ্ডের আঠালো রসে পরাগরেণু আটকে গিয়ে রস শোষণ করে স্ফীত হয় এবং একটি পরাগনালি (Pollen tube) গর্ভদণ্ডের মধ্য দিয়ে বাড়তে থাকে।',
        keyMoleculesBn: ['পরাগরেণু (n)', 'গর্ভমুণ্ড রস', 'পরাগনালি বৃদ্ধি']
      },
      {
        stageNumber: 2,
        titleBn: '২. পরাগনালির মধ্য দিয়ে পুংগ্যামেট গমন',
        titleEn: 'Male Gametes Migration',
        durationMs: 3000,
        descriptionBn: 'পরাগনালির ভেতরে জনন নিউক্লিয়াসটি মাইটোসিস প্রক্রিয়ায় দুটি হ্যাপ্লয়েড (n) পুংগ্যামেটে বিভক্ত হয়ে অগ্রবর্তী ডিম্বকের দিকে অগ্রসর হয়।',
        keyMoleculesBn: ['নালিকা নিউক্লিয়াস', 'দুটি পুংগ্যামেট (n)', 'ডিম্বক রন্ধ্র']
      },
      {
        stageNumber: 3,
        titleBn: '৩. দ্বিনিষেক (Double Fertilization)',
        titleEn: 'Double Fertilization in Embryo Sac',
        durationMs: 3500,
        descriptionBn: 'ভ্রূণথলিতে একটি পুংগ্যামেট (n) ডিম্বাণুর (n) সাথে মিলিত হয়ে ডিপ্লয়েড জাইগোট (2n) গঠন করে। অপর পুংগ্যামেটটি (n) গৌণ নিউক্লিয়াসের (2n) সাথে মিলিত হয়ে ট্রিপ্লয়েড শস্য নিউক্লিয়াস (3n Endosperm) তৈরি করে।',
        keyMoleculesBn: ['জাইগোট (2n)', 'শস্য নিউক্লিয়াস (3n)', 'দ্বিনিষেক']
      },
      {
        stageNumber: 4,
        titleBn: '৪. বীজ ও ফল গঠন',
        titleEn: 'Seed and Fruit Transformation',
        durationMs: 3000,
        descriptionBn: 'নিষেকের পর জাইগোট ভ্রূণে পরিণত হয়, ডিম্বকটি রূপ নেয় কঠিনে আবৃত বীজে এবং সম্পূর্ণ গর্ভাশয়টি ফুলে উঠে সুস্বাদু ফলে পরিণত হয়।',
        keyMoleculesBn: ['ডিম্বক → বীজ', 'গর্ভাশয় → ফল', 'ভ্রূণ বিকাশ']
      }
    ]
  },
  {
    id: 'biotech_animation',
    titleBn: 'রিকম্বিন্যান্ট ডিএনএ ও ইনসুলিন ক্লোনিং',
    titleEn: 'Recombinant DNA & Gene Cloning',
    chapterNumber: 14,
    processType: 'biotech',
    descriptionBn: 'জেনেটিক ইঞ্জিনিয়ারিংয়ের মাধ্যমে মানব ইনসুলিন জিনকে ব্যাকটেরিয়ার প্লাজমিডে সংযুক্ত করে বাণিজ্যিকভাবে রিকম্বিন্যান্ট ডিএনএ তৈরির ধারাবাহিক ধাপ।',
    stages: [
      {
        stageNumber: 1,
        titleBn: '১. কাঙ্ক্ষিত জিন ও প্লাজমিড ডিএনএ পৃথকীকরণ',
        titleEn: 'Gene Identification & Plasmid Isolation',
        durationMs: 3000,
        descriptionBn: 'মানুষের কোষের ক্রোমোজোম থেকে ইনসুলিন তৈরি কারক কাঙ্ক্ষিত জিন এবং ই. কোলাই (E. coli) ব্যাকটেরিয়া থেকে স্বপ্রজননশীল প্লাজমিড ডিএনএ আলাদা করা হয়।',
        keyMoleculesBn: ['ইনসুলিন জিন', 'প্লাজমিড ভেক্টর', 'ই. কোলাই ব্যাকটেরিয়া']
      },
      {
        stageNumber: 2,
        titleBn: '২. রেস্ট্রিকশন এনজাইম দ্বারা নির্দিষ্ট খণ্ড কাটা',
        titleEn: 'Restriction Enzyme Digestion',
        durationMs: 3000,
        descriptionBn: 'আণবিক কাঁচি খ্যাত রেস্ট্রিকশন এনজাইম (যেমন EcoRI) দ্বারা প্লাজমিড বলয় এবং মানুষের ডিএনএ-কে সুনির্দিষ্ট ক্ষারক শৃঙ্খলে আঠালো প্রান্তসহ কাটা হয়।',
        keyMoleculesBn: ['রেস্ট্রিকশন এনজাইম (EcoRI)', 'আণবিক কাঁচি', 'আঠালো প্রান্ত (Sticky Ends)']
      },
      {
        stageNumber: 3,
        titleBn: '৩. ডিএনএ লাইগেজ দ্বারা প্লাজমিডে জিন সংযোজন',
        titleEn: 'DNA Ligase Ligation',
        durationMs: 3500,
        descriptionBn: 'কাটা প্লাজমিডের উন্মুক্ত প্রান্তে আণবিক আঠা খ্যাত ডিএনএ লাইগেজ এনজাইমের সাহায্যে মানব ইনসুলিন জিন জোড়া লাগিয়ে রিকম্বিন্যান্ট প্লাজমিড তৈরি করা হয়।',
        keyMoleculesBn: ['ডিএনএ লাইগেজ (আণবিক আঠা)', 'রিকম্বিন্যান্ট প্লাজমিড (rDNA)']
      },
      {
        stageNumber: 4,
        titleBn: '৪. ব্যাকটেরিয়ায় প্রবেশ ও ইনসুলিন উৎপাদন',
        titleEn: 'Transformation & Industrial Cloning',
        durationMs: 3500,
        descriptionBn: 'রূপান্তরের মাধ্যমে রিকম্বিন্যান্ট প্লাজমিড পোষক ব্যাকটেরিয়ায় প্রবেশ করানো হয়। উপযুক্ত ফার্মেন্টারে ব্যাকটেরিয়ার দ্বি-ভাজনে লক্ষ লক্ষ ক্লোন তৈরি হয় যা থেকে খাঁটি মানব ইনসুলিন আহরণ করা হয়।',
        keyMoleculesBn: ['ট্রান্সফরমেশন', 'ক্লোনিং', 'বাণিজ্যিক মানব ইনসুলিন']
      }
    ]
  }
];
