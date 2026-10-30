import { Biology3DModel } from '../types/biology';

export const MODELS_DATA: Biology3DModel[] = [
  {
    id: 'heart',
    titleBn: 'মানব হৃৎপিণ্ড: প্রকোষ্ঠ ও রক্ত সংবহন ৩ডি',
    titleEn: 'Human Heart 3D with Chambers & Flow',
    chapterNumber: 6,
    categoryBn: 'মানব সংবহনতন্ত্র (৬ষ্ঠ অধ্যায়)',
    modelType: 'heart',
    descriptionBn: 'মানবদেহের পাম্পযন্ত্র হৃৎপিণ্ডের ৪টি প্রকোষ্ঠ—ডান অলিন্দ (Right Atrium), ডান নিলয় (Right Ventricle), বাম অলিন্দ (Left Atrium) ও বাম নিলয় (Left Ventricle), মহাধমনী (Aorta Arch), মহাশিরা (Vena Cava) এবং ফুসফুসীয় ধমনী (Pulmonary Artery)। এতে রয়েছে বাস্তবসম্মত হৃৎস্পন্দন (Heartbeat Systole-Diastole) এবং অক্সিজেনযুক্ত লাল (O2-rich) ও কার্বন ডাই-অক্সাইডযুক্ত নীল (CO2-rich) রক্তকণিকা প্রবাহ।',
    keyFeaturesBn: [
      'ডান অলিন্দ (Right Atrium) ও ডান নিলয় (Right Ventricle)',
      'বাম অলিন্দ (Left Atrium) ও বাম নিলয় (Left Ventricle)',
      'মহাধমনী (Aorta Arch) ও ৩টি প্রধান শাখা ধমনী',
      'ফুসফুসীয় ধমনী (Pulmonary Artery) ও মহাশিরা (Vena Cava)',
      'হৃৎস্পন্দন সংকোচন-প্রসারণ (Cardiac Systole & Diastole)',
      'দ্বিমুখী রক্ত সংবহন কণা প্রবাহ (Double Circulation Particle Stream)'
    ],
    educationalNotesBn: 'এসএসসি পরীক্ষার জন্য গুরুত্বপূর্ণ: অলিন্দের প্রসারণ (ডায়াস্টোল ০.৭ সে.) ও সংকোচন (সিস্টোল ০.১ সে.), নিলয়ের সংকোচন (০.৩ সে.) ও প্রসারণ (০.৫ সে.)। বাম নিলয়ের প্রাচীর সবচেয়ে পুরু কারণ এটি সারা দেহে মহাধমনী দিয়ে রক্ত পাঠায়।'
  },
  {
    id: 'dna',
    titleBn: 'ডিএনএ ডাবল হেলিক্স ৩ডি মডেল',
    titleEn: 'DNA Double Helix 3D Structure',
    chapterNumber: 12,
    categoryBn: 'বংশগতি ও আণবিক জীববিজ্ঞান (১২শ অধ্যায়)',
    modelType: 'dna',
    descriptionBn: 'ওয়াটসন-ক্রিক প্রস্তাবিত দ্বি-সূত্রক ডিঅক্সিরাইবোনিউক্লিক এসিডের (DNA) ত্রিমাত্রিক প্যাঁচানো সিঁড়ির গঠন। এতে অ্যাডেনিন (Adenine-A), থায়ামিন (Thymine-T), গুয়ানিন (Guanine-G) ও সাইটোসিন (Cytosine-C) বেস জোড় এবং চিনি-ফসফেট ব্যাকবোন (Sugar-Phosphate Backbone) স্পষ্টভাবে দৃশ্যমান।',
    keyFeaturesBn: [
      'দ্বি-সূত্রক প্যাঁচানো সিঁড়ি (Double Helix Polymer)',
      'অ্যাডেনিন ও থায়ামিন বন্ধনী: A = T (Double Hydrogen Bond)',
      'গুয়ানিন ও সাইটোসিন বন্ধনী: G ≡ C (Triple Hydrogen Bond)',
      'ডিঅক্সিরাইবোজ শর্করা ও ফসফেট ব্যাকবোন (Sugar-Phosphate Backbone)',
      'প্রতিটি পূর্ণ ঘূর্ণনের দৈর্ঘ্য ৩৪Å (3.4 nm) এবং ১০ জোড়া বেস'
    ],
    educationalNotesBn: 'ডিএনএ-র ব্যাস ২ ন্যানোমিটার (২০Å), প্রতিটি ঘূর্ণনের দৈর্ঘ্য ৩.৪ ন্যানোমিটার (৩৪Å) এবং পাশাপাশি দুটি বেস জোড়ের দূরত্ব ০.৩৪ ন্যানোমিটার (৩.৪Å)।'
  },
  {
    id: 'plant_cell',
    titleBn: 'উদ্ভিদকোষের ত্রিমাত্রিক গঠন',
    titleEn: 'Plant Cell 3D Anatomy',
    chapterNumber: 2,
    categoryBn: 'কোষীয় জীববিদ্যা (২য় অধ্যায়)',
    modelType: 'plant_cell',
    descriptionBn: 'একটি আদর্শ সপুষ্পক উদ্ভিদকোষের ত্রিমাত্রিক ক্রস-সেকশন যাতে সেলুলোজের তৈরি পুরু জড় কোষ প্রাচীর (Cell Wall), সালোকসংশ্লেষণকারী ক্লোরোপ্লাস্ট (Chloroplast), বৃহৎ কেন্দ্রীয় কোষ গহ্বর (Central Vacuole), দ্বি-ঝিল্লিযুক্ত মাইটোকন্ড্রিয়া (Mitochondria) এবং সুগঠিত নিউক্লিয়াস (Nucleus) অন্তর্ভুক্ত।',
    keyFeaturesBn: [
      'পুরু জড় কোষ প্রাচীর (Cell Wall) ও মধ্যপর্দা',
      'সালোকসংশ্লেষণকারী সবুজ ক্লোরোপ্লাস্ট (Chloroplast)',
      'কোষরস ধারণকারী বৃহৎ কেন্দ্রীয় গহ্বর (Central Vacuole)',
      'দ্বি-ঝিল্লিযুক্ত শক্তিঘর মাইটোকন্ড্রিয়া (Mitochondria)',
      'ক্রোমাটিন তন্তুযুক্ত কেন্দ্রিকা নিউক্লিয়াস (Nucleus)'
    ],
    educationalNotesBn: 'প্রাণিকোষের সাথে উদ্ভিদকোষের ৩টি প্রধান পার্থক্য: ১) কোষ প্রাচীর থাকে, ২) প্লাস্টিড থাকে, ৩) বৃহৎ কেন্দ্রীয় গহ্বর থাকে।'
  },
  {
    id: 'neuron',
    titleBn: 'মানব স্নায়ুকোষ বা নিউরন ৩ডি',
    titleEn: 'Motor Neuron 3D Structure',
    chapterNumber: 10,
    categoryBn: 'স্নায়ুতন্ত্র ও সমন্বয় (১০ম অধ্যায়)',
    modelType: 'neuron',
    descriptionBn: 'মানব স্নায়ুতন্ত্রের মৌলিক গঠন ও কাজের একক নিউরনের ত্রিমাত্রিক মডেল। উদ্দীপনা গ্রহণকারী শাখা ডেনড্রাইট (Dendrites), নিউক্লিয়াসযুক্ত কোষদেহ (Soma), দীর্ঘ বিদ্যুৎপরিবাহী অ্যাক্সন (Axon), মায়েলিন আবরণী (Myelin Sheath) এবং প্রান্তীয় সাইন্যাপ্টিক টার্মিনাল নোব (Synaptic Terminal)।',
    keyFeaturesBn: [
      'তাড়না গ্রহণকারী শাখা ডেনড্রাইট (Dendrites)',
      'নিউক্লিয়াস ও নিজল দানাযুক্ত কোষদেহ (Soma / Cell Body)',
      'মায়েলিন আচ্ছাদিত বিদ্যুৎপরিবাহী অ্যাক্সন (Myelinated Axon)',
      'র‍্যানভিয়ারের খাঁজ (Node of Ranvier) ও টার্মিনাল নোব (Synaptic Knobs)',
      'অনৈচ্ছিক বিদ্যুৎ গতিতে স্নায়ু সংকেত পরিবহন (Action Potential)'
    ],
    educationalNotesBn: 'মায়েলিন আবরণের কারণে স্নায়ু উদ্দীপনা লাফিয়ে লাফিয়ে পরিবাহিত হয় (Saltatory Conduction), যার গতিবেগ প্রতি সেকেন্ডে ১০০ মিটারের বেশি হতে পারে।'
  },
  {
    id: 'virus',
    titleBn: 'টি২ ব্যাকটেরিওফায ভাইরাস ৩ডি',
    titleEn: 'Bacteriophage T2 Virus 3D Model',
    chapterNumber: 1,
    categoryBn: 'অকোষীয় জীবাণু (১ম অধ্যায়)',
    modelType: 'virus',
    descriptionBn: 'ব্যাকটেরিয়া আক্রমণকারী টি২ ব্যাকটেরিওফায (Bacteriophage T2) ভাইরাসের ত্রিমাত্রিক গঠন। এর প্রোটিন নির্মিত বহুতলীয় মাথা (Icosahedral Head), দ্বিসূত্রক ডিএনএ কোর (DNA Core), সংকোচনশীল কলার বা গ্রীবা (Collar), লেজ বা প্রচ্ছদ (Sheath), ৬টি স্পর্শক তন্তু (Tail Fibers) এবং সূঁচালো বেসপ্লেট (Baseplate)।',
    keyFeaturesBn: [
      'প্রোটিন ক্যাপসিড মাথা (Capsid Head) ও ডিএনএ কোর (DNA Core)',
      'সংকোচনশীল লেজ বা প্রচ্ছদ (Contractile Sheath)',
      'ব্যাকটেরিয়ার গায়ে নোঙর করার ৬টি স্পর্শক তন্তু (Tail Fibers)',
      'লাইসোজাইম এনজাইমযুক্ত সূঁচালো বেসপ্লেট (Baseplate & Spikes)'
    ],
    educationalNotesBn: 'ভাইরাসকে জীব ও জড়ের মধ্যবর্তী সেতু বলা হয় কারণ পোষক কোষের বাইরে এটি সম্পূর্ণ নিষ্ক্রিয় স্ফটিকের ন্যায় আচরণ করে।'
  },
  {
    id: 'nephron',
    titleBn: 'বৃক্কের নেফ্রন ও মালপিজিয়ান বডি ৩ডি',
    titleEn: 'Nephron & Glomerulus 3D Structure',
    chapterNumber: 8,
    categoryBn: 'রেচন প্রক্রিয়া (৮ম অধ্যায়)',
    modelType: 'nephron',
    descriptionBn: 'বৃক্কের গঠন ও কাজের একক নেফ্রনের ত্রিমাত্রিক রূপ। বোম্যানস ক্যাপসুলের (Bowman Capsule) কাপ-আকৃতির দ্বিস্তর প্রাচীর, গ্লোমেরুলাসের (Glomerulus) ৫০টি কৈশিক জালিকা, প্রক্সিমাল প্যাঁচানো নালিকা (PCT), ইউ-আকৃতির হেনলির লুপ (Loop of Henle), ডিস্টাল নালিকা (DCT) এবং সংগ্রাহী নালিকা (Collecting Duct)।',
    keyFeaturesBn: [
      'বোম্যানস ক্যাপসুল (Bowman Capsule) ও গ্লোমেরুলাস (Glomerulus)',
      'অ্যাফারেন্ট ও ইফারেন্ট রক্তনালি (Afferent/Efferent Arterioles)',
      'প্রক্সিমাল প্যাঁচানো নালিকা (Proximal Convoluted Tubule)',
      'ইউ-আকৃতির হেনলির লুপ (Loop of Henle)',
      'সংগ্রাহী নালিকা (Collecting Duct)'
    ],
    educationalNotesBn: 'মানবদেহের দুটি বৃক্কে প্রায় ২০-২৪ লক্ষ নেফ্রন থাকে যা দৈনিক প্রায় ১৭০-১৮০ লিটার ফিল্ট্রেট তৈরি করে এবং প্রায় ১.৫ লিটার মূত্র নির্গত করে।'
  },
  {
    id: 'flower',
    titleBn: 'আদর্শ ফুলের পঞ্চস্তবক ৩ডি অ্যানাটমি',
    titleEn: 'Flower Anatomy 3D Model',
    chapterNumber: 11,
    categoryBn: 'সপুষ্পক উদ্ভিদের প্রজনন (১১শ অধ্যায়)',
    modelType: 'flower',
    descriptionBn: 'একটি আদর্শ সপুষ্পক ফুলের ৫টি অপরিহার্য ও সাহায্যকারী স্তবক: পুষ্পাক্ষ (Receptacle), সবুজ রক্ষাকারী বৃতি (Sepals / Calyx), রঙিন দলমন্ডল (Petals / Corolla), পরাগধানী ও পুংদণ্ডযুক্ত পুংস্তবক (Stamen) এবং গর্ভমুণ্ড, গর্ভদণ্ড ও গর্ভাশয়যুক্ত স্ত্রীস্তবক (Carpel / Pistil)।',
    keyFeaturesBn: [
      'পুষ্পাক্ষ ভিত্তি (Receptacle / Thalamus)',
      'সবুজ রক্ষাকারী বৃতি (Sepals / Calyx)',
      'কীটপতঙ্গ আকর্ষণকারী রঙিন পাপড়ি (Petals / Corolla)',
      'পরাগধানী ও পুংদণ্ড সমন্বিত পুংকেশর (Anther & Filament)',
      'গর্ভমুণ্ড, গর্ভদণ্ড ও ডিম্বাশয় সমন্বিত গর্ভপত্র (Stigma, Style & Ovary)'
    ],
    educationalNotesBn: 'বৃতি ও দলমন্ডল সাহায্যকারী স্তবক এবং পুংস্তবক ও স্ত্রীস্তবক সরাসরি জননকোষ তৈরি করায় এদের অত্যাবশ্যকীয় স্তবক বলা হয়।'
  }
];
