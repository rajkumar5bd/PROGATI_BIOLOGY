import { InteractiveDiagram } from '../types/biology';

export const DIAGRAMS_DATA: InteractiveDiagram[] = [
  // Chapter 1: Five Kingdoms Classification
  {
    id: 'five_kingdoms_diagram',
    titleBn: 'জীবজগতের পাঁচ রাজ্য শ্রেণিবিন্যাস (Five Kingdoms Classification)',
    titleEn: 'Whittaker & Margulis 5 Kingdoms of Life',
    chapterNumber: 1,
    imageSrc: '/src/assets/images/five_kingdoms_classification_1793279622629.jpg',
    imageAlt: 'Margulis and Whittaker Five Kingdoms of living organisms classification diagram',
    descriptionBn: 'বিজ্ঞানী হুইটেকার (১৯৬৯) এবং মারগুলিসের (১৯৭৪) সংশোধিত জীবজগতের পঞ্চরাজ্য শ্রেণিবিন্যাস—মনেরা, প্রোটিস্টা, ফানজাই, প্লান্টি এবং অ্যানিম্যালিয়া। প্রতিটি রাজ্যের বৈশিষ্ট্য ও জীবগোষ্ঠী জানতে ক্লিক করুন।',
    hotspots: [
      {
        id: 'kingdom_monera',
        labelBn: 'মনেরা রাজ্য (Kingdom Monera)',
        labelEn: 'Kingdom Monera (Prokaryotes)',
        xPercent: 17,
        yPercent: 64,
        descriptionBn: 'আদিকোষী (Prokaryotic), এককোষী, ফিলামেন্টাস বা কলোনিয়াল জীব। সুগঠিত নিউক্লিয়াস ও মেমব্রেনযুক্ত কোনো অঙ্গাণু থাকে না; কেবল রাইবোসোম থাকে। কোষ প্রাচীর পেপটিডোগ্লাইক্যান নির্মিত।',
        functionBn: 'বাস্তুতন্ত্রে নাইট্রোজেন সংবন্ধন, খনিজ চক্র এবং জৈব পদার্থের বিয়োজন ঘটায়। উদাহরণ: ই. কোলাই ব্যাকটেরিয়া (Escherichia coli), নীলাভ-সবুজ শৈবাল।'
      },
      {
        id: 'kingdom_protista',
        labelBn: 'প্রোটিস্টা রাজ্য (Kingdom Protista)',
        labelEn: 'Kingdom Protista (Protozoa & Unicellular Algae)',
        xPercent: 50,
        yPercent: 64,
        descriptionBn: 'প্রকৃতকোষী (Eukaryotic), এককোষী বা দলবদ্ধ বহুকোষী সজীব প্রাণী ও শৈবাল। সুগঠিত নিউক্লিয়াস, ক্রোমাটিন তন্তু এবং মেমব্রেনযুক্ত সকল সাইটোপ্লাজমীয় অঙ্গাণু থাকে।',
        functionBn: 'জলজ বাস্তুতন্ত্রের খাদ্যশৃঙ্খলে প্রাথমিক খাদক ও অটোট্রফ হিসেবে শক্তি সঞ্চালন করে। উদাহরণ: অ্যামিবা (Amoeba proteus), প্যারামেসিয়াম (Paramecium)।'
      },
      {
        id: 'kingdom_fungi',
        labelBn: 'ফানজাই রাজ্য (Kingdom Fungi)',
        labelEn: 'Kingdom Fungi (Mushrooms & Yeast)',
        xPercent: 35,
        yPercent: 32,
        descriptionBn: 'ক্লোরোপ্লাস্টহীন, মৃতজীবী বা পরজীবী ছত্রাক। এদের দেহ হাইফা সমন্বয়ে মাইসেলিয়াম গঠন করে। কোষ প্রাচীর কাইটিন (Chitin) নির্মিত এবং খাদ্য গ্লাইকোজেন রূপে সঞ্চিত থাকে।',
        functionBn: 'প্রকৃতির প্রধান ঝাড়ুদার ও বিয়োজক হিসেবে জটিল জৈব যৌগকে সরল অজৈব পুষ্টিতে রূপান্তর করে মাটিতে ফিরিয়ে দেয়। উদাহরণ: মাশরুম (Agaricus), ইস্ট।'
      },
      {
        id: 'kingdom_plantae',
        labelBn: 'প্লান্টি রাজ্য (Kingdom Plantae)',
        labelEn: 'Kingdom Plantae (Green Plants)',
        xPercent: 61,
        yPercent: 32,
        descriptionBn: 'স্বভোজী (Autotrophic), বহুকোষী সবুজ উদ্ভিদ। এদের কোষে সেলুলোজ নির্মিত শক্ত কোষ প্রাচীর, বৃহৎ ভ্যাকুওল এবং সালোকসংশ্লেষণকারী ক্লোরোপ্লাস্ট প্লাস্টিড থাকে।',
        functionBn: 'সৌরশক্তিকে রাসায়নিক শক্তিতে আবদ্ধ করে সমগ্র জীবজগতের জন্য খাদ্য ও অক্সিজেন (O2) উৎপাদন করে। উদাহরণ: আম গাছ (Mangifera indica), সূর্যমুখী।'
      },
      {
        id: 'kingdom_animalia',
        labelBn: 'অ্যানিম্যালিয়া রাজ্য (Kingdom Animalia)',
        labelEn: 'Kingdom Animalia (Animals)',
        xPercent: 86,
        yPercent: 34,
        descriptionBn: 'পরভোজী (Heterotrophic), বহুকোষী ইউক্যারিওটিক প্রাণী। এদের কোষে কোনো কোষ প্রাচীর, প্লাস্টিড বা বৃহৎ ভ্যাকুওল থাকে না। উন্নত স্নায়ুতন্ত্র ও চলনক্ষমতা রয়েছে।',
        functionBn: 'খাদ্য গ্রহণ ও হজমের মাধ্যমে বাস্তুতন্ত্রে বিভিন্ন ট্রফিক লেভেলে খাদক হিসেবে পুষ্টি চক্র নিয়ন্ত্রণ করে। উদাহরণ: রয়েল বেঙ্গল টাইগার (Panthera tigris), মানুষ।'
      }
    ]
  },

  // Chapter 2: Plant Cell (Complete 16 Functional Structures)
  {
    id: 'plant_cell_diagram',
    titleBn: 'উদ্ভিদকোষের চিহ্নিত চিত্র ও অঙ্গাণুসমূহ (Plant Cell Anatomy)',
    titleEn: 'Plant Cell Anatomical Diagram',
    chapterNumber: 2,
    imageSrc: '/src/assets/images/plant_cell_diagram_1793201609775.jpg',
    imageAlt: 'Plant cell anatomical cross-section diagram',
    descriptionBn: 'একটি আদর্শ সপুষ্পক উদ্ভিদকোষের ক্রস-সেকশন ডায়াগ্রাম। প্রতিটি মার্কারের ওপর ক্লিক করে তার সুনির্দিষ্ট বাংলা ও ইংরেজি নাম, গঠন, শারীরবৃত্তীয় কাজ ও এসএসসি পরীক্ষার টিপস জানুন। প্রতিটি গুরুত্বপূর্ণ অঙ্গাণুর জন্য রয়েছে পৃথক ডেডিকেটেড এক্সপ্লোরার ভিউ।',
    hotspots: [
      {
        id: 'cell_wall',
        labelBn: 'কোষপ্রাচীর (Cell Wall)',
        labelEn: 'Cell Wall',
        organelleId: 'cell_wall',
        xPercent: 28,
        yPercent: 20,
        locationBn: 'উদ্ভিদকোষের সর্ববহিঃস্থ শক্ত ও পুরু জড় প্রাচীর যা প্লাজমা মেমব্রেনকে আবৃত করে রাখে।',
        descriptionBn: 'উদ্ভিদকোষের অনন্য জড় ও পুরু বহিরাবরণ। প্রধানত সেলুলোজ, হেমিসেলুলোজ ও পেকটিন দিয়ে তৈরি। মধ্যপর্দা, প্রাথমিক প্রাচীর ও গৌণ প্রাচীর নিয়ে গঠিত। এতে প্লাজমোডেসমাটা সংযোগ নালি থাকে।',
        functionBn: 'কোষকে নির্দিষ্ট সুদৃঢ় আকৃতি দান করা, ভেতরের সজীব প্রোটোপ্লাজমকে রক্ষা করা, অসমোটিক চাপে ফেটে যাওয়া রোধ করা এবং তরল পদার্থের যাতায়াত নিয়ন্ত্রণ করা।',
        examTipsBn: 'কোষপ্রাচীরের প্রধান উপাদান সেলুলোজ (Cellulose)। ছত্রাকের কোষপ্রাচীর কাইটিন ও ব্যাকটেরিয়ার প্রাচীর পেপটিডোগ্লাইক্যান নির্মিত। প্রাণীকোষে প্রাচীর সম্পূর্ণ অনুপস্থিত।'
      },
      {
        id: 'plasma_membrane',
        labelBn: 'কোষঝিল্লি বা প্লাজমা পর্দা (Plasma Membrane)',
        labelEn: 'Plasma Membrane',
        organelleId: 'plasma_membrane',
        xPercent: 29,
        yPercent: 27,
        locationBn: 'কোষপ্রাচীরের ঠিক নিচে অবস্থিত সজীব প্রোটোপ্লাজমের বৈষম্যভেদ্য বহিরাবরণী।',
        descriptionBn: 'ফসফোলিপিড বাইলেয়ার ও প্রোটিন সমন্বিত স্থিতিস্থাপক ও সজীব দ্বি-স্তরীয় পর্দা (ফ্লুইড মোজাইক মডেল)। এতে ইনটিগ্রাল ও পেরিফেরাল প্রোটিন এবং কোলেস্টেরল থাকে।',
        functionBn: 'কোষের অভ্যন্তরীণ বিষয়বস্তু রক্ষা করা এবং ব্যাপন, অভিস্রবণ ও সক্রিয় পরিবহনের মাধ্যমে পুষ্টি ও আয়ন যাতায়াত সূক্ষ্মভাবে নিয়ন্ত্রণ করা।',
        examTipsBn: 'সিঙ্গার ও নিকলসনের ফ্লুইড মোজাইক মডেল (১৯৭২) সবচেয়ে আধুনিক ও গ্রহণযোগ্য। একে "ফসফোলিপিড সমুদ্রে ভাসমান প্রোটিন আইসবার্গ" বলা হয়।'
      },
      {
        id: 'cytoplasm',
        labelBn: 'কোষদ্রব্য বা সাইটোপ্লাজম (Cytoplasm)',
        labelEn: 'Cytoplasm / Cytosol',
        xPercent: 41,
        yPercent: 66,
        locationBn: 'প্লাজমা পর্দা দ্বারা পরিবেষ্টিত এবং নিউক্লিয়াসের বাইরে অবস্থিত অর্ধ-তরল জেলিসদৃশ অংশ।',
        descriptionBn: 'সজীব সাইটোপ্লাজমীয় মাতৃকা (সাইটোসল) যাতে সাইটোস্কেলিটন, বিভিন্ন কোষীয় অঙ্গাণু এবং বিপাকীয় পদার্থ (লবণ, গ্লুকোজ, অ্যামিনো এসিড) দ্রবীভূত থাকে।',
        functionBn: 'গ্লাইকোলাইসিসসহ যাবতীয় প্রাথমিক বিপাকীয় বিক্রিয়ার স্থান দেওয়া এবং বিভিন্ন অঙ্গাণুর অবস্থান সুসংহত রাখা।',
        examTipsBn: 'প্রোটোপ্লাজমের যে অংশটি নিউক্লিয়াসের বাইরে থাকে তাকে সাইটোপ্লাজম বলে। সাইটোপ্লাজমের চলনকে সাইক্লোসিস (Cyclosis) বলা হয়।'
      },
      {
        id: 'nucleus',
        labelBn: 'কোষকেন্দ্র বা নিউক্লিয়াস (Nucleus)',
        labelEn: 'Nucleus',
        organelleId: 'nucleus',
        xPercent: 65,
        yPercent: 38,
        locationBn: 'উদ্ভিদকোষের পরিধির কাছাকাছি সাইটোপ্লাজমে অবস্থিত সর্বাপেক্ষা ঘন, গোলাকার দ্বি-ঝিল্লিযুক্ত অংশ।',
        descriptionBn: 'কোষের কেন্দ্রিকা বা প্রাণকেন্দ্র। এতে নিউক্লিয়ার আবরণী, নিউক্লিওলাস, নিউক্লিওপ্লাজম, ক্রোমাটিন তন্তু ও নিউক্লিয়ার রন্ধ্র থাকে।',
        functionBn: 'কোষের যাবতীয় জৈবনিক ক্রিয়া নিয়ন্ত্রণ করা এবং বংশগতির বৈশিষ্ট্যের ধারক ও বাহক হিসেবে কাজ করা।',
        examTipsBn: '১৮৩১ সালে রবার্ট ব্রাউন প্রথম নিউক্লিয়াস আবিষ্কার করেন। পরিণত সিভনলে কোনো নিউক্লিয়াস থাকে না।'
      },
      {
        id: 'nuclear_envelope',
        labelBn: 'নিউক্লিয়ার আবরণ (Nuclear Envelope)',
        labelEn: 'Nuclear Envelope',
        organelleId: 'nucleus',
        xPercent: 58,
        yPercent: 34,
        locationBn: 'নিউক্লিয়াসকে ঘিরে থাকা ছিদ্রযুক্ত দ্বি-স্তরবিশিষ্ট লিপিড-প্রোটিন পর্দা।',
        descriptionBn: 'বহিঃস্থ ও অন্তঃস্থ দুটি ফসফোলিপিড পর্দা দ্বারা গঠিত আবরণী যাতে অণু চলাচলের জন্য জটিল নিউক্লিয়ার রন্ধ্র (Nuclear Pores) বিদ্যমান।',
        functionBn: 'নিউক্লিয়াসের অভ্যন্তরীণ সামগ্রীকে রক্ষা করা এবং সাইটোপ্লাজমের সাথে নিয়ন্ত্রিত পদার্থের আদান-প্রদান করা।',
        examTipsBn: 'বহিঃপর্দাটি সরাসরি অমসৃণ এন্ডোপ্লাজমিক জালিকার সাথে যুক্ত থাকে এবং এর গায়ে রাইবোজোম লেগে থাকে।'
      },
      {
        id: 'nucleolus',
        labelBn: 'নিউক্লিওলাস (Nucleolus)',
        labelEn: 'Nucleolus',
        organelleId: 'nucleus',
        xPercent: 65,
        yPercent: 41,
        locationBn: 'নিউক্লিওপ্লাজমে অবস্থিত সর্বাপেক্ষা ঘন, উজ্জ্বল, গোলাকার ও ঝিল্লিহীন বিশেষ কেন্দ্র।',
        functionBn: 'রাইবোজোমাল আরএনএ (rRNA) সংশ্লেষণ করা এবং রাইবোজোমের সাব-ইউনিটগুলো একত্রিত করা (রাইবোজোম তৈরির কারখানা)।',
        descriptionBn: 'প্রোটিন ও আরএনএ সমৃদ্ধ ঘন গোলাকার অংশ। কোষ বিভাজনের প্রোফেজে বিলুপ্ত হয় এবং টেলোফেজে পুনরায় তৈরি হয়।',
        examTipsBn: 'বিজ্ঞানী ফনটানা ১৭৮১ সালে এটি প্রথম প্রত্যক্ষ করেন এবং বোম্যান ১৮৪০ সালে নামকরণ করেন।'
      },
      {
        id: 'chromatin',
        labelBn: 'ক্রোমাটিন তন্তু (Chromatin)',
        labelEn: 'Chromatin Reticulum',
        organelleId: 'nucleus',
        xPercent: 71,
        yPercent: 36,
        locationBn: 'নিউক্লিওপ্লাজমে জালের মতো ছড়ানো সূক্ষ্ম প্যাঁচানো ডিএনএ-প্রোটিন সূত্রক।',
        descriptionBn: 'ডিঅক্সিরাইবোনিউক্লিক এসিড (DNA) এবং হিস্টোন প্রোটিনের সমন্বয়ে গঠিত বংশগতীয় জালিকা।',
        functionBn: 'বংশগতির বৈশিষ্ট্যের মৌলিক একক জিন (Gene) ধারণ করা এবং প্রোটিন তৈরির সংকেত সরবরাহ করা।',
        examTipsBn: 'কোষ বিভাজনের সময় পানি হ্রাস পেয়ে ক্রোমাটিন তন্তু খাটো ও মোটা হয়ে স্পষ্ট ক্রোমোজোমে পরিণত হয়।'
      },
      {
        id: 'vacuole',
        labelBn: 'বৃহৎ কোষগহ্বর (Central Vacuole)',
        labelEn: 'Central Vacuole',
        organelleId: 'vacuole',
        xPercent: 44,
        yPercent: 46,
        locationBn: 'উদ্ভিদকোষের কেন্দ্রে অবস্থিত বিশাল আয়তনের জলীয় প্রকোষ্ঠ।',
        descriptionBn: 'কোষরসে পূর্ণ বিরাট গহ্বর যা টনোপ্লাস্ট নামক বিশেষ বৈষম্যভেদ্য পর্দা দ্বারা আবৃত থাকে এবং কোষের সিংহভাগ স্থান দখল করে।',
        functionBn: 'কোষরস ধারণ করা, কোষের অভ্যন্তরীণ আস্রাবণিক চাপ (Osmotic Pressure) এবং কান্ডের রসস্ফীতি রক্ষা করা।',
        examTipsBn: 'কোষগহ্বরের পর্দাকে "টনোপ্লাস্ট" বলে। ভ্যাকুওলের ভেতরের তরলকে কোষরস (Cell Sap) বলা হয়।'
      },
      {
        id: 'tonoplast',
        labelBn: 'টনোপ্লাস্ট পর্দা (Tonoplast)',
        labelEn: 'Tonoplast Membrane',
        organelleId: 'vacuole',
        xPercent: 36,
        yPercent: 42,
        locationBn: 'বৃহৎ কোষগহ্বরকে সাইটোপ্লাজম থেকে পৃথককারী একক অর্ধভেদ্য ঝিল্লি।',
        descriptionBn: 'লিপিড ও প্রোটিন নির্মিত বৈষম্যভেদ্য পর্দা যাতে প্রোটন এটিপি-এজ পাম্প ও বিভিন্ন ট্রান্সপোর্টার চ্যানেল থাকে।',
        functionBn: 'কোষরসের অম্লত্ব (pH) নিয়ন্ত্রণ করা এবং বিভিন্ন আয়ন ও খনিজ লবণের উচ্চ ঘনত্ব ধরে রাখা।',
        examTipsBn: 'এসএসসি বহুনির্বাচনী প্রশ্ন: "কোষগহ্বরের আবরণীকে কী বলে?" উত্তর: টনোপ্লাস্ট।'
      },
      {
        id: 'chloroplast',
        labelBn: 'ক্লোরোপ্লাস্ট (Chloroplast)',
        labelEn: 'Chloroplast',
        organelleId: 'chloroplast',
        xPercent: 28,
        yPercent: 54,
        locationBn: 'উদ্ভিদকোষের সাইটোপ্লাজমে অবস্থিত সবুজ বর্ণের ডিম্বাকার প্লাস্টিড।',
        descriptionBn: 'সবুজ প্লাস্টিড। এর ভেতরে থাইলাকয়েডের স্তূপ (গ্রানা), স্ট্রোমা ল্যামেলি এবং বর্ণহীন ম্যাট্রিক্স (স্ট্রোমা) থাকে।',
        functionBn: 'সূর্যালোকের সাহায্যে পানি ও CO2 ব্যবহার করে শর্করা জাতীয় খাদ্য উৎপাদন করা (সালোকসংশ্লেষণ)।',
        examTipsBn: 'ক্লোরোপ্লাস্টকে উদ্ভিদের "রান্নাঘর" বা শর্করার কারখানা বলা হয়। এতে নিজস্ব বৃত্তাকার ডিএনএ ও ৭০এস রাইবোজোম থাকে।'
      },
      {
        id: 'mitochondria',
        labelBn: 'মাইটোকন্ড্রিয়া (Mitochondria)',
        labelEn: 'Mitochondria',
        organelleId: 'mitochondria',
        xPercent: 38,
        yPercent: 28,
        locationBn: 'সাইটোপ্লাজমে সর্বত্র মুক্তভাবে ভাসমান রড বা সসেজ আকৃতির দ্বি-ঝিল্লিযুক্ত অঙ্গাণু।',
        descriptionBn: 'কোষের শক্তিঘর। মসৃণ বহিঃপর্দা এবং আঙ্গুলের মতো খাঁজযুক্ত অন্তঃপর্দা (ক্রিস্টি) নিয়ে গঠিত যার মধ্যে এটিপি সিন্থেটেজ ও ম্যাট্রিক্স থাকে।',
        functionBn: 'কোষীয় শ্বসনের (ক্রেবস চক্র ও ইটিএস) মাধ্যমে খাদ্য জারিত করে উচ্চ-শক্তিসম্পন্ন এটিপি (ATP) তৈরি করা।',
        examTipsBn: 'মাইটোকন্ড্রিয়াকে কোষের "পাওয়ার হাউস" (Powerhouse) বলে। এতে নিজস্ব বৃত্তাকার ডিএনএ ও ৭০এস রাইবোজোম বিদ্যমান।'
      },
      {
        id: 'golgi',
        labelBn: 'গলজি বডি (Golgi Apparatus)',
        labelEn: 'Golgi Apparatus',
        organelleId: 'golgi',
        xPercent: 58,
        yPercent: 62,
        locationBn: 'নিউক্লিয়াসের নিকটে অবস্থিত চ্যাপ্টা থলির মতো সিস্টার্নির স্তূপ।',
        descriptionBn: 'চ্যাপ্টা থলির মতো সিস্টার্নি, ভেসিকল ও ভ্যাকুওল সমন্বয়ে গঠিত সাইটোপ্লাজমীয় অঙ্গাণু (উদ্ভিদে ডিকটিওসোম)।',
        functionBn: 'হরমোন ও এনজাইম ক্ষরণ, প্রোটিন রূপান্তর ও প্যাকেজিং এবং কোষ বিভাজনের সেল-প্লেট তৈরিতে পেকটিন সরবরাহ করা।',
        examTipsBn: 'কোষের ক্ষরণ ও উপাদান গন্তব্যে পাঠানোর ভূমিকা পালন করায় একে কোষের "ট্রাফিক পুলিশ" বলা হয়।'
      },
      {
        id: 'rough_er',
        labelBn: 'অমসৃণ এন্ডোপ্লাজমিক জালিকা (Rough ER)',
        labelEn: 'Rough Endoplasmic Reticulum',
        organelleId: 'endoplasmic_reticulum',
        xPercent: 76,
        yPercent: 46,
        locationBn: 'নিউক্লিয়ার মেমব্রেন সংলগ্ন চ্যাপ্টা সিস্টার্নি যার বহিরাবরণে অসংখ্য রাইবোজোম কণা লেগে থাকে।',
        descriptionBn: 'রাইবোজোমযুক্ত নালিকা ও সিস্টার্নির জালিকা যা নিউক্লিয়ার পর্দার সাথে অবিচ্ছিন্নভাবে সংযুক্ত।',
        functionBn: 'নিঃসরণীয় ও মেমব্রেন প্রোটিন সংশ্লেষণ, প্রোটিনের প্রাথমিক রূপান্তর এবং অভ্যন্তরীণ পরিবহন।',
        examTipsBn: 'এর গায়ে রাইবোজোম থাকে বলেই একে "অমসৃণ" (Rough) বলা হয়।'
      },
      {
        id: 'smooth_er',
        labelBn: 'মসৃণ এন্ডোপ্লাজমিক জালিকা (Smooth ER)',
        labelEn: 'Smooth Endoplasmic Reticulum',
        organelleId: 'endoplasmic_reticulum',
        xPercent: 82,
        yPercent: 55,
        locationBn: 'কোষের প্রান্তীয় সাইটোপ্লাজমে অবস্থিত রাইবোজোমবিহীন শাখান্বিত নালিকা।',
        descriptionBn: 'মসৃণ নালিকা জালিকা যার পৃষ্ঠে কোনো রাইবোজোম কণা থাকে না।',
        functionBn: 'লিপিড, ফসফোলিপিড ও উদ্ভিজ্জ তেল সংশ্লেষণ এবং সাইটোপ্লাজমীয় পদার্থের অন্তঃকোষীয় পরিবহন।',
        examTipsBn: 'মসৃণ ER কোষে ক্ষতিকর বিষাক্ত পদার্থ নিষ্ক্রিয়করণে (Detoxification) সহায়তা করে।'
      },
      {
        id: 'ribosome',
        labelBn: 'রাইবোজোম (Ribosome)',
        labelEn: 'Ribosomes',
        organelleId: 'ribosome',
        xPercent: 52,
        yPercent: 26,
        locationBn: 'সাইটোপ্লাজমে মুক্তভাবে ভাসমান অথবা অমসৃণ ER-এর গায়ে সংযুক্ত ক্ষুদ্রাতিক্ষুদ্র কণা।',
        descriptionBn: 'একক পর্দাবিহীন আরএনএ ও প্রোটিন নির্মিত অত্যন্ত ক্ষুদ্র গোলাকার জৈব কণা (প্রকৃতকোষে ৮০এস)।',
        functionBn: 'জেনেটিক সংকেত অনুযায়ী অ্যামিনো এসিড যুক্ত করে কোষের যাবতীয় প্রয়োজনীয় প্রোটিন ও এনজাইম সংশ্লেষণ করা।',
        examTipsBn: 'রাইবোজোমকে কোষের "প্রোটিন কারখানা" (Protein Factory) বলা হয়। এটি কোনো পর্দা দ্বারা বেষ্টিত থাকে না।'
      },
      {
        id: 'plasmodesmata',
        labelBn: 'প্লাজমোডেসমাটা (Plasmodesmata)',
        labelEn: 'Plasmodesmata',
        organelleId: 'cell_wall',
        xPercent: 58,
        yPercent: 78,
        locationBn: 'পাশাপাশি দুটি উদ্ভিদকোষের কোষপ্রাচীর ভেদ করে বিস্তৃত সূক্ষ্ম সাইটোপ্লাজমিক যোগাযোগ নালি।',
        descriptionBn: 'কোষপ্রাচীরের কূপ বা পিট মেমব্রেনের মধ্য দিয়ে সংলগ্ন কোষগুলোর সাইটোপ্লাজমের সংযোগকারী নল।',
        functionBn: 'পাশাপাশি কোষগুলোর মধ্যে পানি, খনিজ লবণ, হরমোন ও জৈব সংকেত সরাসরি আদান-প্রদান করা (সিমপ্লাস্ট পরিবহন)।',
        examTipsBn: 'প্লাজমোডেসমাটার কারণে সম্পূর্ণ উদ্ভিদদেহ একটি অবিচ্ছিন্ন সজীব সাইটোপ্লাজমিক একক হিসেবে কাজ করতে পারে।'
      }
    ]
  },

  // Chapter 2: Animal Cell (Complete Functional Structures)
  {
    id: 'animal_cell_diagram',
    titleBn: 'প্রাণীকোষের চিহ্নিত চিত্র ও অঙ্গাণুসমূহ (Animal Cell Anatomy)',
    titleEn: 'Animal Cell Anatomical Diagram',
    chapterNumber: 2,
    imageSrc: '/src/assets/images/animal_cell_diagram_1793279575918.jpg',
    imageAlt: 'Animal cell anatomical cross-section diagram',
    descriptionBn: 'একটি আদর্শ প্রাণীকোষের ক্রস-সেকশন ডায়াগ্রাম। প্লাজমা মেমব্রেন, সেন্ট্রোসোম, সেন্ট্রিওল, লাইসোজোম, গলজি বডি ও মাইটোকন্ড্রিয়ার অবস্থান ও কার্যপ্রণালী জানতে ক্লিক করুন।',
    hotspots: [
      {
        id: 'plasma_membrane',
        labelBn: 'প্লাজমা পর্দা (Plasma Membrane)',
        labelEn: 'Plasma Membrane',
        organelleId: 'plasma_membrane',
        xPercent: 36,
        yPercent: 16,
        locationBn: 'প্রাণীকোষের সর্ববহিঃস্থ সজীব নির্বাচনী ভেদ্য সীমানা।',
        descriptionBn: 'ফসফোলিপিড দ্বি-স্তর ও প্রোটিন নির্মিত বৈষম্যভেদ্য সজীব ঝিল্লি (ফ্লুইড মোজাইক মডেল)। এতে কোনো জড় কোষ প্রাচীর থাকে না।',
        functionBn: 'কোষের ভেতরের প্রোটোপ্লাজমকে রক্ষা করা এবং ব্যাপন ও অভিস্রবণ প্রক্রিয়ায় বস্তুর আদান-প্রদান নিয়ন্ত্রণ করা।',
        examTipsBn: 'উদ্ভিদকোষের মতো প্রাণীকোষে কোনো সেলুলোজ কোষপ্রাচীর বা প্লাস্টিড থাকে না।'
      },
      {
        id: 'cytoplasm',
        labelBn: 'সাইটোপ্লাজম (Cytoplasm)',
        labelEn: 'Cytoplasm / Cytosol',
        xPercent: 32,
        yPercent: 36,
        locationBn: 'প্লাজমা পর্দার অভ্যন্তরে নিউক্লিয়াস ব্যতীত সান্দ্র অর্ধতরল ধাত্র।',
        descriptionBn: 'সজীব সাইটোপ্লাজমীয় মাতৃকা যাতে গ্লাইকোলাইসিস সংঘটিত হয় এবং বিভিন্ন অঙ্গাণু সুবিন্যস্ত থাকে।',
        functionBn: 'কোষীয় অঙ্গাণুগুলোকে স্থান দেওয়া এবং রাসায়নিক বিক্রিয়ার মাধ্যম হিসেবে কাজ করা।',
        examTipsBn: 'প্রাণীকোষের সাইটোপ্লাজমে সঞ্চিত খাদ্য প্রধানত গ্লাইকোজেন (Glycogen) হিসেবে জমা থাকে।'
      },
      {
        id: 'animal_nucleus',
        labelBn: 'নিউক্লিয়াস (Nucleus)',
        labelEn: 'Nucleus',
        organelleId: 'nucleus',
        xPercent: 45,
        yPercent: 46,
        locationBn: 'প্রাণীকোষের প্রায় কেন্দ্রভাগে অবস্থিত সুস্পষ্ট গোলাকার দ্বি-স্তর ঝিল্লিযুক্ত অঙ্গাণু।',
        descriptionBn: 'দ্বি-স্তর নিউক্লিয়ার এনভেলপ দ্বারা আবৃত কোষকেন্দ্রিকা যাতে গাঢ় নিউক্লিওলাস এবং প্যাঁচানো ক্রোমাটিন সুতা থাকে।',
        functionBn: 'কোষের জেনেটিক তথ্য সংরক্ষণ, আরএনএ সংশ্লেষণ এবং কোষের যাবতীয় রাসায়নিক বিক্রিয়া নিয়ন্ত্রণ।',
        examTipsBn: 'প্রাণীকোষে বৃহৎ কেন্দ্রীয় ভ্যাকুওল না থাকায় নিউক্লিয়াসটি কোষের কেন্দ্রস্থলেই অবস্থান করে।'
      },
      {
        id: 'animal_nucleolus',
        labelBn: 'নিউক্লিওলাস (Nucleolus)',
        labelEn: 'Nucleolus',
        organelleId: 'nucleus',
        xPercent: 47,
        yPercent: 51,
        locationBn: 'নিউক্লিয়াসের ভেতর অবস্থিত সর্বাপেক্ষা ঘন, উজ্জ্বল গোলাকার অঞ্চল।',
        descriptionBn: 'রাইবোসোমাল আরএনএ এবং প্রোটিন সমৃদ্ধ ঝিল্লিবিহীন গোলাকার অংশ।',
        functionBn: 'রাইবোজোমাল আরএনএ (rRNA) তৈরি করা এবং রাইবোজোম সাব-ইউনিট গঠন করা।',
        examTipsBn: 'বিজ্ঞানী ফনটানা ১৭৮১ সালে এটি আবিষ্কার করেন।'
      },
      {
        id: 'animal_chromatin',
        labelBn: 'ক্রোমাটিন তন্তু (Chromatin)',
        labelEn: 'Chromatin Reticulum',
        organelleId: 'nucleus',
        xPercent: 41,
        yPercent: 43,
        locationBn: 'নিউক্লিওপ্লাজমে ভাসমান প্যাঁচানো সুতো যা ডিএনএ ও হিস্টোন প্রোটিন নিয়ে গঠিত।',
        descriptionBn: 'জীবের বংশগতির যাবতীয় জিনগত কোড বা ব্লুপ্রিন্ট ধারণকারী জালিকা।',
        functionBn: 'বংশগত তথ্য পুরুষানুক্রমে সঞ্চারিত করা এবং প্রোটিন তৈরির বার্তা পাঠানো।',
        examTipsBn: 'কোষ বিভাজনের সময় ক্রোমাটিন তন্তু পানি হারিয়ে খাটো ও স্থূল হয়ে ক্রোমোজোমে পরিণত হয়।'
      },
      {
        id: 'centrosome_centrioles',
        labelBn: 'সেন্ট্রোসোম ও সেন্ট্রিওল (Centrosome & Centrioles)',
        labelEn: 'Centrosome with Centrioles',
        xPercent: 52,
        yPercent: 74,
        locationBn: 'নিউক্লিয়াসের নিকটে অবস্থিত একজোড়া পিপে-আকৃতির মাইক্রোটিউবিউল কাঠামো।',
        descriptionBn: 'কেবলমাত্র প্রাণীকোষে উপস্থিত একজোড়া সেন্ট্রিওল যা সেন্ট্রোস্ফিয়ার দ্বারা পরিবেষ্টিত।',
        functionBn: 'কোষ বিভাজনের সময় অ্যাস্টার রে বিচ্ছুরণ এবং স্পিন্ডল যন্ত্রের দুই মেরু নির্ধারণ করে ক্রোমোজোম পৃথকীকরণ।',
        examTipsBn: 'উচ্চশ্রেণীর উদ্ভিদকোষে সেন্ট্রিওল থাকে না। এটি কেবল প্রাণীকোষ এবং কিছু নিম্নশ্রেণীর শৈবাল ও ছত্রাকে থাকে।'
      },
      {
        id: 'lysosome',
        labelBn: 'লাইসোজোম (Lysosome)',
        labelEn: 'Lysosome',
        xPercent: 72,
        yPercent: 49,
        locationBn: 'সাইটোপ্লাজমে ভাসমান একক ঝিল্লিযুক্ত ছোট ছোট গোলাকার থলি।',
        descriptionBn: 'একস্তর ঝিল্লিযুক্ত প্রায় ৫০ প্রকার হাইড্রোলাইটিক পাচক এনজাইমে পূর্ণ থলিকা।',
        functionBn: 'ফ্যাগোসাইটোসিস পদ্ধতিতে বহিরাগত জীবাণু ও ব্যাক্টেরিয়া ধ্বংস করা এবং অপ্রয়োজনীয় কোষ অঙ্গাণুর আত্মবিনাশ ঘটানো।',
        examTipsBn: 'তীব্র খাদ্য সংকটে বা অসুস্থতায় লাইসোজোম ফেটে গিয়ে নিজের কোষকেই হজম করে ফেলে, তাই একে "আত্মঘাতী থলিকা" (Suicidal Bag) বলে।'
      },
      {
        id: 'animal_mitochondria',
        labelBn: 'মাইটোকন্ড্রিয়া (Mitochondria)',
        labelEn: 'Mitochondria',
        organelleId: 'mitochondria',
        xPercent: 43,
        yPercent: 24,
        locationBn: 'সাইটোপ্লাজমে সর্বত্র মুক্তভাবে ভাসমান রড আকৃতির দ্বি-পর্দাযুক্ত অঙ্গাণু।',
        descriptionBn: 'স্ব-অনুলিপনশীল শক্তিঘর। ক্রিস্টির ভেতরের পৃষ্ঠে এটিপি সংশ্লেষণকারী এনজাইম থাকে।',
        functionBn: 'ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট সিস্টেমের মাধ্যমে জৈব খাদ্য জারিত করে উচ্চ-শক্তিসম্পন্ন এটিপি তৈরি করা।',
        examTipsBn: 'প্রাণীর পেশিকোষ ও যকৃৎ কোষে বিপুল শক্তি চাহিদার কারণে মাইটোকন্ড্রিয়ার সংখ্যা সবচেয়ে বেশি থাকে।'
      },
      {
        id: 'animal_golgi',
        labelBn: 'গলজি বস্তু (Golgi Apparatus)',
        labelEn: 'Golgi Apparatus',
        organelleId: 'golgi',
        xPercent: 65,
        yPercent: 63,
        locationBn: 'নিউক্লিয়াসের কাছে অবস্থিত চ্যাপ্টা থলে ও ভেসিকলের স্তূপ।',
        descriptionBn: 'নিউক্লিয়াসের সন্নিকটে অবস্থিত সিস্টার্নি ও ভেসিকল যা কোষের ক্ষরণ নিয়ন্ত্রণ করে।',
        functionBn: 'কোষে উৎপাদিত প্রোটিন ও এনজাইম রূপান্তর, মোড়কীকরণ (Packaging) এবং ক্ষরণ।',
        examTipsBn: 'কোষের অভ্যন্তরীণ সামগ্রী সঠিক গন্তব্যে বাছাই ও প্রেরণ করায় একে কোষের "ট্রাফিক পুলিশ" বলা হয়।'
      },
      {
        id: 'animal_rough_er',
        labelBn: 'অমসৃণ এন্ডোপ্লাজমিক জালিকা (Rough ER)',
        labelEn: 'Rough Endoplasmic Reticulum',
        organelleId: 'endoplasmic_reticulum',
        xPercent: 36,
        yPercent: 56,
        locationBn: 'নিউক্লিয়ার মেমব্রেন সংলগ্ন রাইবোজোম কণাযুক্ত নালিকা জালিকা।',
        descriptionBn: 'ঝিল্লিবদ্ধ সিস্টার্নি যার বহিরাবরণে রাইবোজোম গ্রথিত থাকে।',
        functionBn: 'প্রোটিন সংশ্লেষণ ও প্রাথমিক রূপান্তর এবং গলজি বডিতে প্রেরণ।',
        examTipsBn: 'অগ্ন্যাশয় ও পাকস্থলীর ক্ষরণকারী কোষে প্রচুর অমসৃণ ER থাকে।'
      },
      {
        id: 'animal_smooth_er',
        labelBn: 'মসৃণ এন্ডোপ্লাজমিক জালিকা (Smooth ER)',
        labelEn: 'Smooth Endoplasmic Reticulum',
        organelleId: 'endoplasmic_reticulum',
        xPercent: 28,
        yPercent: 65,
        locationBn: 'রাইবোজোমবিহীন শাখান্বিত নালিকা যা প্রান্তভাগে বিস্তৃত।',
        descriptionBn: 'মসৃণ পর্দাযুক্ত নালিকা যা লিপিড ও স্টেরয়েড সংশ্লেষণের সাথে যুক্ত।',
        functionBn: 'লিপিড ও স্টেরয়েড হরমোন (যেমন টেস্টোস্টেরন, ইস্ট্রোজেন) তৈরি এবং ক্যালসিয়াম নিয়ন্ত্রণ।',
        examTipsBn: 'পেশিকোষের মসৃণ ER-কে সারকোপ্লাজমিক রেটিকুলাম বলে।'
      },
      {
        id: 'animal_ribosomes',
        labelBn: 'রাইবোজোম (Ribosomes)',
        labelEn: 'Ribosomes',
        organelleId: 'ribosome',
        xPercent: 60,
        yPercent: 35,
        locationBn: 'সাইটোপ্লাজমে মুক্তভাবে অথবা অমসৃণ ER-এর গায়ে যুক্ত ক্ষুদ্র কণা।',
        descriptionBn: 'একক পর্দাবিহীন আরআরএনএ ও প্রোটিন নির্মিত ৮০এস কণা।',
        functionBn: 'জেনেটিক কোড অনুযায়ী অ্যামিনো এসিড থেকে পলিপেপটাইড বা প্রোটিন তৈরি করা।',
        examTipsBn: 'রাইবোজোমকে কোষের "প্রোটিন কারখানা" বলা হয়।'
      },
      {
        id: 'microfilaments',
        labelBn: 'সাইটোস্কেলিটন (Cytoskeleton / Microfilaments)',
        labelEn: 'Cytoskeleton & Microtubules',
        xPercent: 78,
        yPercent: 32,
        locationBn: 'সাইটোপ্লাজম জুড়ে বিস্তৃত অ্যাক্টিন ও টিউবুলিন প্রোটিন নির্মিত সূক্ষ্ম তন্তুজাল।',
        descriptionBn: 'মাইক্রোটিউবিউল, মাইক্রোফিলামেন্ট ও ইন্টারমিডিয়েট ফিলামেন্ট দ্বারা গঠিত কোষীয় কঙ্কাল।',
        functionBn: 'প্রাণীকোষকে যান্ত্রিক আকৃতি প্রদান করা, কোষীয় চলন ও অঙ্গাণুগুলোর অবস্থান অক্ষুণ্ণ রাখা।',
        examTipsBn: 'কোষ বিভাজনের সময় স্পিন্ডল তন্তু এই সাইটোস্কেলিটনের মাইক্রোটিউবিউল দিয়েই তৈরি হয়।'
      }
    ]
  },

  // Chapter 3: Mitosis (Preserved)
  {
    id: 'mitosis_diagram',
    titleBn: 'মাইটোসিস কোষ বিভাজনের ৫টি পর্যায় ও ক্রোমোজোম ডায়াগ্রাম',
    titleEn: 'Mitosis Five Stages & Chromosome Separation',
    chapterNumber: 3,
    imageSrc: '/src/assets/images/mitosis_stages_diagram_1793204203016.jpg',
    imageAlt: 'Mitosis cell division stages diagram showing prophase, prometaphase, metaphase, anaphase and telophase',
    descriptionBn: 'মাইটোসিস কোষ বিভাজনের ৫টি পর্যায়—প্রোফেজ, প্রো-মেটাফেজ, মেটাফেজ, অ্যানাফেজ এবং টেলোফেজ ও সাইটোকাইনেসিসের বিস্তারিত চিহ্নিত চিত্র। প্রতিটি পর্যায়ের বৈশিষ্ট্য ও ক্রোমোজোমের পরিবর্তন জানতে চিহ্নিত অংশে ক্লিক করুন।',
    hotspots: [
      {
        id: 'prophase_stage',
        labelBn: '১. প্রোফেজ পর্যায় (Prophase)',
        labelEn: 'Prophase Stage',
        xPercent: 11,
        yPercent: 48,
        descriptionBn: 'মাইটোসিসের প্রথম ও দীর্ঘস্থায়ী পর্যায়। নিউক্লিয়াস আকারে বড় হয় এবং ক্রোমোজোম থেকে জলবিয়োজন (Dehydration) শুরু হওয়ায় ক্রোমোজোমগুলো খাটো ও মোটা হতে থাকে। সেন্ট্রোমিয়ার ব্যতীত প্রতিটি ক্রোমোজোম লম্বালম্বি দুটি ক্রোমাটিডে বিভক্ত হয়।',
        functionBn: 'ক্রোমাটিন জালিকা ঘনীভূত হয়ে নির্দিষ্ট সংখ্যক দৃষ্টিগোচর ক্রোমোজোমে রূপান্তরিত হওয়া এবং কোষ বিভাজনের সূচনা।'
      },
      {
        id: 'prometaphase_stage',
        labelBn: '২. প্রো-মেটাফেজ পর্যায় (Prometaphase)',
        labelEn: 'Prometaphase Stage',
        xPercent: 31,
        yPercent: 48,
        descriptionBn: 'দুই মেরুবিশিষ্ট স্পিন্ডল যন্ত্রের (Spindle apparatus) আবির্ভাব ঘটে। স্পিন্ডল তন্তুর সাথে ক্রোমোজোমের কাইনেটোকোর সেন্ট্রোমিয়ার যুক্ত হয় (ট্রাকশন ফাইবার)। নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস সম্পূর্ণ বিলুপ্ত হতে থাকে।',
        functionBn: 'স্পিন্ডল তন্তুর সাথে ক্রোমোজোমকে সংযুক্ত করে বিষুবীয় অঞ্চলের দিকে পরিচালনা করা।'
      },
      {
        id: 'metaphase_stage',
        labelBn: '৩. মেটাফেজ পর্যায় (Metaphase)',
        labelEn: 'Metaphase Stage',
        xPercent: 51,
        yPercent: 48,
        descriptionBn: 'সকল ক্রোমোজোম স্পিন্ডল যন্ত্রের বিষুবীয় অঞ্চলে (Equator) অবস্থান নেয়; এই চলনকে মেটাকাইনেসিস বলে। এই ধাপে ক্রোমোজোমগুলো সবচেয়ে খাটো, মোটা ও স্পষ্ট দেখায়। এই ধাপের শেষভাগে সেন্ট্রোমিয়ার সম্পূর্ণ বিভক্ত হয়।',
        functionBn: 'ক্রোমোজোমের সমবণ্টন নিশ্চিত করার জন্য বিষুবীয় রেখায় সুশৃঙ্খল বিন্যাস এবং সেন্ট্রোমিয়ারের পূর্ণ বিভাজন।'
      },
      {
        id: 'anaphase_stage',
        labelBn: '৪. অ্যানাফেজ পর্যায় (Anaphase)',
        labelEn: 'Anaphase Stage',
        xPercent: 69,
        yPercent: 48,
        descriptionBn: 'প্রতিটি ক্রোমোজোমের সেন্ট্রোমিয়ার বিভক্ত হওয়ায় অপত্য ক্রোমাটিড দুটি স্বতন্ত্র অপত্য ক্রোমোজোমে পরিণত হয় এবং বিপরীত মেরুর দিকে ধাবিত হয়। সেন্ট্রোমিয়ারের অগ্রগমনের ভিত্তিতে ক্রোমোজোমগুলো V (মেটাসেন্ট্রিক), L (সাব-মেটাসেন্ট্রিক), J (অ্যাক্রোসেন্ট্রিক) ও I (টেলোসেন্ট্রিক) রূপ ধারণ করে।',
        functionBn: 'ক্রোমোজোমের সমান দুটি সেট তৈরি করে বিপরীত দুই মেরুতে পৌঁছানো (মেরুমুখী চলন)।'
      },
      {
        id: 'telophase_stage',
        labelBn: '৫. টেলোফেজ ও সাইটোকাইনেসিস (Telophase)',
        labelEn: 'Telophase Stage & Cytokinesis',
        xPercent: 89,
        yPercent: 48,
        descriptionBn: 'মেরুতে পৌঁছানো অপত্য ক্রোমোজোমসমূহে পানিযোজন (Hydration) ঘটে ফলে এরা পুনরায় সরু ও লম্বা হয়ে ক্রোমাটিন জালিকা গঠন করে। নিউক্লিয়ার পর্দা ও নিউক্লিওলাসের পুনর্আবির্ভাব ঘটে। উদ্ভিদকোষে কোষপ্লেট (Cell Plate) তৈরির মাধ্যমে দুটি অপত্য কোষের সৃষ্টি সম্পন্ন হয়।',
        functionBn: 'মাতৃকোষের সমসংখ্যক ক্রোমোজোমবিশিষ্ট দুটি পৃথক অপত্য নিউক্লিয়াস ও সজীব অপত্য কোষ গঠন করা (2n → 2n)।'
      },
      {
        id: 'centromere_chromatid',
        labelBn: 'সেন্ট্রোমিয়ার ও ক্রোমাটিড (Centromere & Chromatids)',
        labelEn: 'Centromere & Chromatids',
        xPercent: 31,
        yPercent: 75,
        descriptionBn: 'প্রতিটি ক্রোমোজোমের মাঝের অবিভাজিত অরঞ্জিত খাঁজকে সেন্ট্রোমিয়ার বলে যা দুটি অনুলিপিকৃত ক্রোমাটিডকে ধরে রাখে। এতে কাইনেটোকোর প্রোটিন থাকে যা স্পিন্ডল তন্তুর সাথে যুক্ত হয়।',
        functionBn: 'কোষ বিভাজনের সময় স্পিন্ডল যন্ত্রের সাথে ক্রোমোজোমকে আটকে রাখা এবং অ্যানাফেজে সঠিকভাবে ক্রোমাটিড পৃথকীকরণ।'
      }
    ]
  },

  // Chapter 4: Photosynthesis & ATP Cycle (New)
  {
    id: 'photosynthesis_atp_diagram',
    titleBn: 'সালোকসংশ্লেষণ ও এটিপি শক্তি মুদ্রা চক্র (Photosynthesis & ATP Cycle)',
    titleEn: 'Photosynthesis & ATP Energy Cycle in Chloroplast',
    chapterNumber: 4,
    imageSrc: '/src/assets/images/photosynthesis_atp_diagram_1793279607071.jpg',
    imageAlt: 'Photosynthesis and ATP energy cycle in chloroplast diagram',
    descriptionBn: 'ক্লোরোপ্লাস্টের আলোক নির্ভর পর্যায় (থাইলাকয়েড গ্রানাম) এবং ক্যালভিন চক্র বা অন্ধকার পর্যায় (স্ট্রোমা)-এর মাধ্যমে সৌরশক্তিকে এটিপি (ATP) ও গ্লুকোজে রূপান্তরের সামগ্রিক সচিত্র বায়োকেমিক্যাল চক্র।',
    hotspots: [
      {
        id: 'light_reaction_granum',
        labelBn: 'আলোক নির্ভর পর্যায় ও থাইলাকয়েড (Light Reaction in Thylakoid)',
        labelEn: 'Light-Dependent Reactions (Granum)',
        xPercent: 27,
        yPercent: 55,
        descriptionBn: 'ক্লোরোপ্লাস্টের থাইলাকয়েড ঝিল্লিতে ফটোসিস্টেম-১ ও ২ এবং এটিপি সিন্থেটেজ অবস্থান করে। এখানে সৌর ফোটন কণা শোষিত হয়ে পানির ফটোলাইসিস ঘটে।',
        functionBn: 'পানির জারণ ঘটিয়ে অক্সিজেন গ্যাস (O2) বায়ুমণ্ডলে মুক্ত করা এবং সৌরশক্তিকে এটিপি (ATP) ও NADPH-এ রাসায়নিক শক্তিতে রূপান্তর করা।'
      },
      {
        id: 'atp_synthase_molecule',
        labelBn: 'এটিপি সিন্থেটেজ ও শক্তি মুদ্রা (ATP Synthase & ATP)',
        labelEn: 'ATP Synthase & Biological Currency',
        xPercent: 37,
        yPercent: 41,
        descriptionBn: 'থাইলাকয়েড ঝিল্লিতে অবস্থিত এনজাইম পাম্প যা প্রোটন গ্রেডিয়েন্ট ব্যবহার করে এডিপি (ADP)-এর সাথে অজৈব ফসফেট (Pi) যুক্ত করে এটিপি (ATP) তৈরি করে।',
        functionBn: 'কোষীয় শক্তি সঞ্চয় ও ক্যালভিন চক্রে কার্বন বিজারণের জন্য প্রয়োজনীয় চালিকাশক্তি সরবরাহ করা।'
      },
      {
        id: 'calvin_cycle_stroma',
        labelBn: 'ক্যালভিন চক্র ও শর্করা সংশ্লেষণ (Calvin Cycle in Stroma)',
        labelEn: 'Calvin Cycle (Light-Independent Reactions)',
        xPercent: 74,
        yPercent: 52,
        descriptionBn: 'ক্লোরোপ্লাস্টের স্ট্রোমাতে রুবিসকো (RuBisCO) এনজাইমের সহায়তায় বায়ুমণ্ডলীয় CO2 রাইবুলোজ ১,৫ বিসফসফেটের সাথে যুক্ত হয়ে কিটো এসিড তৈরি করে যা পরবর্তীতে গ্লুকোজে রূপান্তরিত হয়।',
        functionBn: 'অজৈব কার্বন ডাই-অক্সাইডকে জৈব শর্করা গ্লুকোজে (C6H12O6) রূপান্তর করা যা সমগ্র জীবজগতের পুষ্টির ভিত্তি।'
      },
      {
        id: 'water_photolysis',
        labelBn: 'পানির ফটোলাইসিস ও অক্সিজেন মুক্তি (Photolysis of Water)',
        labelEn: 'Photolysis of Water & O2 Release',
        xPercent: 30,
        yPercent: 82,
        descriptionBn: 'সূর্যালোক ও ম্যাঙ্গানিজ এনজাইমের প্রভাবে পানি বিশ্লিষ্ট হয়ে ৪টি প্রোটন, ৪টি ইলেকট্রন ও এক অণু অক্সিজেন (O2) গ্যাস সৃষ্টি করে।',
        functionBn: 'বায়ুমণ্ডলে প্রাণধারণের জন্য অপরিহার্য অক্সিজেন গ্যাস নির্গমন এবং ইলেকট্রন ট্রান্সপোর্ট চেইনে ইলেকট্রন সরবরাহ।'
      }
    ]
  },

  // Chapter 5: Digestive System
  {
    id: 'digestive_diagram',
    titleBn: 'মানব পৌষ্টিকতন্ত্র ও পরিপাক গ্রন্থিসমূহ (Human Digestive System)',
    titleEn: 'Human Digestive System Anatomy',
    chapterNumber: 5,
    imageSrc: '/src/assets/images/human_digestive_system_1793203555510.jpg',
    imageAlt: 'Human digestive system anatomy diagram',
    descriptionBn: 'মানব পরিপাকনালি এবং সংশ্লিষ্ট প্রধান পরিপাক গ্রন্থিসমূহ (যকৃৎ, অগ্ন্যাশয়, পিত্তথলি)। খাদ্য পরিপাকের প্রতিটি অঙ্গের অবস্থান ও ভূমিকা দেখুন।',
    hotspots: [
      {
        id: 'esophagus',
        labelBn: 'অন্ননালি (Esophagus)',
        labelEn: 'Esophagus',
        xPercent: 50,
        yPercent: 24,
        descriptionBn: 'প্রায় ২৫ সেমি দীর্ঘ পেশিবহুল নালি যা গলবিল থেকে পাকস্থলী পর্যন্ত বিস্তৃত।',
        functionBn: 'পেরিস্টালসিস (ছন্দবদ্ধ সংকোচন-প্রসারণ) তরঙ্গের মাধ্যমে খাদ্যমণ্ড পাকস্থলীতে পৌঁছে দেয়।'
      },
      {
        id: 'liver',
        labelBn: 'যকৃৎ (Liver)',
        labelEn: 'Liver',
        xPercent: 43,
        yPercent: 46,
        descriptionBn: 'দেহের সর্ববৃহৎ গ্রন্থি (ওজন ১.২-১.৫ কেজি)। এটি মানবদেহের জৈব রাসায়নাগার নামে পরিচিত।',
        functionBn: 'পিত্তরস তৈরি করে যা স্নেহজাতীয় খাদ্য ইমালসিফিকেশন (সাবানকরণ) করে পরিপাকে সাহায্য করে।'
      },
      {
        id: 'stomach',
        labelBn: 'পাকস্থলী (Stomach)',
        labelEn: 'Stomach',
        xPercent: 56,
        yPercent: 48,
        descriptionBn: 'জে-আকৃতির পেশিবহুল থলি। গ্যাস্ট্রিক গ্রন্থি থেকে HCl ও পেপসিনোজেন ক্ষরণ করে।',
        functionBn: 'HCl জীবাণু মারে এবং পেপসিন আমিষকে পেপটোন ও প্রোটিওজে রূপান্তর করে অম্লীয় কাইম বানায়।'
      },
      {
        id: 'gallbladder',
        labelBn: 'পিত্তথলি (Gallbladder)',
        labelEn: 'Gallbladder',
        xPercent: 44,
        yPercent: 53,
        descriptionBn: 'যকৃতের ডান খণ্ডের নিচের পৃষ্ঠে অবস্থিত নাশপাতি আকারের থলি।',
        functionBn: 'যকৃতে উৎপন্ন ক্ষারীয় পিত্তরস জমা রাখে এবং পরিপাকের সময় ডিওডেনামে মুক্ত করে।'
      },
      {
        id: 'pancreas',
        labelBn: 'অগ্ন্যাশয় (Pancreas)',
        labelEn: 'Pancreas',
        xPercent: 52,
        yPercent: 58,
        descriptionBn: 'ডিওডেনামের ফাঁকে অবস্থিত লম্বাটে মিশ্র গ্রন্থি। বহিঃক্ষরা ও অন্তঃক্ষরা অংশ রয়েছে।',
        functionBn: 'ট্রিপসিন, লাইপেজ ও অ্যামাইলেজ এনজাইম এবং রক্তে গ্লুকোজ নিয়ন্ত্রণকারী ইনসুলিন ও গ্লুকাগন হরমোন ক্ষরণ করে।'
      },
      {
        id: 'small_intestine',
        labelBn: 'ক্ষুদ্রান্ত্র (Small Intestine)',
        labelEn: 'Small Intestine',
        xPercent: 51,
        yPercent: 72,
        descriptionBn: 'ডিওডেনাম, জেজুনাম ও ইলিয়াম সমন্বয়ে গঠিত প্রায় ৬-৭ মিটার দীর্ঘ প্যাঁচানো নালি।',
        functionBn: 'খাদ্যের চূড়ান্ত পরিপাক সম্পন্ন হয় এবং আঙ্গুলের মতো ভিলাই দিয়ে খাদ্যসার রক্তে শোষিত হয়।'
      },
      {
        id: 'large_intestine',
        labelBn: 'বৃহদান্ত্র (Large Intestine)',
        labelEn: 'Large Intestine',
        xPercent: 45,
        yPercent: 64,
        descriptionBn: 'সিকাম, কোলন ও মলাশয় সমন্বয়ে গঠিত ১.৫ মিটার দীর্ঘ নালি।',
        functionBn: 'অপাচ্য বর্জ্য থেকে পানি ও খনিজ লবণ পুনঃশোষণ করে মল গঠন ও নিষ্কাশন করে।'
      }
    ]
  },

  // Chapter 6: Human Heart
  {
    id: 'human_heart_diagram',
    titleBn: 'মানব হৃৎপিণ্ডের গঠন ও রক্ত প্রবাহ ডায়াগ্রাম (Human Heart Anatomy)',
    titleEn: 'Human Heart Internal Anatomy',
    chapterNumber: 6,
    imageSrc: '/src/assets/images/human_heart_anatomy_1793201609095.jpg',
    imageAlt: 'Human heart cross-section anatomy diagram',
    descriptionBn: 'মানব হৃৎপিণ্ডের অন্তর্গঠন, প্রকোষ্ঠসমূহ, প্রধান রক্তনালি এবং রক্তের গতিপথ প্রদর্শক চিহ্নিত ডায়াগ্রাম। যেকোনো অংশে ক্লিক করে তার কাজ জানুন।',
    hotspots: [
      {
        id: 'aorta',
        labelBn: 'মহাধমনী (Aorta Arch)',
        labelEn: 'Aorta',
        xPercent: 51,
        yPercent: 32,
        descriptionBn: 'মানবদেহের বৃহত্তম ও প্রধান ধমনী যা বাম নিলয় থেকে উৎপন্ন হয়ে আর্চ অফ অ্যাওর্টা গঠন করে।',
        functionBn: 'অক্সিজেন সমৃদ্ধ বিশুদ্ধ রক্ত সারা দেহের বিভিন্ন অঙ্গে উচ্চ চাপে সরবরাহ করা।'
      },
      {
        id: 'superior_vena_cava',
        labelBn: 'ঊর্ধ্ব মহাশিরা (Superior Vena Cava)',
        labelEn: 'Superior Vena Cava',
        xPercent: 35,
        yPercent: 35,
        descriptionBn: 'দেহের ঊর্ধ্বাংশ (মাথা, ঘাড় ও হাত) থেকে কার্বন ডাই-অক্সাইড যুক্ত রক্ত বহনকারী বৃহৎ শিরা।',
        functionBn: 'দূষিত রক্ত সরাসরি হৃৎপিণ্ডের ডান অলিন্দে পৌঁছে দেয়।'
      },
      {
        id: 'right_atrium',
        labelBn: 'ডান অলিন্দ (Right Atrium)',
        labelEn: 'Right Atrium',
        xPercent: 36,
        yPercent: 54,
        descriptionBn: 'হৃৎপিণ্ডের ডান পাশের ওপরের পাতলা প্রাচীরবিশিষ্ট প্রকোষ্ঠ।',
        functionBn: 'মহাশিরাসমূহ থেকে অক্সিজেনহীন দূষিত রক্ত গ্রহণ করে এবং ট্রাইকাস্পিড কপাটিকা দিয়ে ডান নিলয়ে পাঠায়।'
      },
      {
        id: 'right_ventricle',
        labelBn: 'ডান নিলয় (Right Ventricle)',
        labelEn: 'Right Ventricle',
        xPercent: 47,
        yPercent: 71,
        descriptionBn: 'হৃৎপিণ্ডের ডান পাশের নিচের তুলনামূলক পুরু পেশিবহুল প্রকোষ্ঠ।',
        functionBn: 'সিস্টোলের মাধ্যমে দূষিত রক্তকে ফুসফুসীয় ধমনীর ভেতর দিয়ে শোধনের জন্য ফুসফুসে পাম্প করে।'
      },
      {
        id: 'left_atrium',
        labelBn: 'বাম অলিন্দ (Left Atrium)',
        labelEn: 'Left Atrium',
        xPercent: 60,
        yPercent: 46,
        descriptionBn: 'হৃৎপিণ্ডের বাম পাশের ওপরের প্রকোষ্ঠ যা ফুসফুসীয় শিরার সাথে যুক্ত।',
        functionBn: 'ফুসফুস থেকে চারমুখী ফুসফুসীয় শিরার মাধ্যমে তাজা O2-যুক্ত রক্ত গ্রহণ করে।'
      },
      {
        id: 'left_ventricle',
        labelBn: 'বাম নিলয় (Left Ventricle)',
        labelEn: 'Left Ventricle',
        xPercent: 64,
        yPercent: 66,
        descriptionBn: 'হৃৎপিণ্ডের সবচেয়ে পুরু ও শক্তিশালী পেশিবিশিষ্ট প্রকোষ্ঠ (ডান নিলয়ের চেয়ে প্রায় ৩ গুণ পুরু)।',
        functionBn: 'শক্তিশালী সংকোচনের মাধ্যমে সমস্ত দেহে মহাধমনী দিয়ে অক্সিজেনযুক্ত রক্ত সরবরাহ করে।'
      },
      {
        id: 'pulmonary_artery',
        labelBn: 'ফুসফুসীয় ধমনী (Pulmonary Artery)',
        labelEn: 'Pulmonary Artery',
        xPercent: 52,
        yPercent: 40,
        descriptionBn: 'একমাত্র ধমনী যা ব্যতিক্রম হিসেবে কার্বন ডাই-অক্সাইড সমৃদ্ধ রক্ত বহন করে।',
        functionBn: 'ডান নিলয় থেকে রক্তকে অক্সিজেনেশনের জন্য দুই পাশের ফুসফুসে পৌঁছে দেয়।'
      }
    ]
  },

  // Chapter 7: Alveoli & Gas Exchange (New)
  {
    id: 'alveoli_gas_exchange_diagram',
    titleBn: 'অ্যালভিওলাস ও গ্যাস বিনিময় ডায়াগ্রাম (Alveoli & Gas Exchange)',
    titleEn: 'Alveoli Microscopic Anatomy & Gas Diffusion',
    chapterNumber: 7,
    imageSrc: '/src/assets/images/alveoli_gas_exchange_1793279578038.jpg',
    imageAlt: 'Human lung alveoli cluster and capillary network diagram',
    descriptionBn: 'ফুসফুসের গঠন ও কাজের একক অ্যালভিওলাই এবং ঘিরে থাকা কৈশিক জালিকায় অক্সিজেন (O2) ও কার্বন ডাই-অক্সাইড (CO2) ব্যাপন প্রক্রিয়ার চিহ্নিত রূপ।',
    hotspots: [
      {
        id: 'terminal_bronchiole',
        labelBn: 'প্রান্তীয় ব্রঙ্কিওল ও নালি (Terminal Bronchiole & Ducts)',
        labelEn: 'Terminal Bronchiole & Alveolar Ducts',
        xPercent: 25,
        yPercent: 21,
        descriptionBn: 'শ্বাসনালির ক্ষুদ্রতম বায়ুপরিবাহী শাখা যাতে তরুণাস্থি থাকে না, কেবল সিলিয়াযুক্ত এপিথেলিয়াম ও মসৃণ পেশি থাকে।',
        functionBn: 'শ্বাসবায়ুকে সরাসরি অ্যালভিওলার থলিতে নির্বিঘ্নে পৌঁছানো।'
      },
      {
        id: 'alveolus_cross_section',
        labelBn: 'অ্যালভিওলাস ও একস্তর স্কোয়ামাস প্রাচীর (Alveolus Lumen & Epithelium)',
        labelEn: 'Alveolus Cross-Section',
        xPercent: 42,
        yPercent: 56,
        descriptionBn: 'অতি পাতলা একস্তর বিশিষ্ট স্কোয়ামাস এপিথেলিয়াম দ্বারা আবৃত বায়ুথলি যা আর্দ্র এবং সারফ্যাকট্যান্ট ক্ষরণ করে পৃষ্ঠটান কম রাখে।',
        functionBn: 'ফুসফুসের বিপুল শোষণতল (প্রায় ৯০ বর্গমিটার) তৈরি করে গ্যাসের দ্রুত ব্যাপন নিশ্চিত করা।'
      },
      {
        id: 'capillary_network',
        labelBn: 'পালমোনারি কৈশিক জালিকা (Pulmonary Capillary Network)',
        labelEn: 'Pulmonary Capillaries',
        xPercent: 51,
        yPercent: 67,
        descriptionBn: 'অ্যালভিওলাসকে জালের মতো ঘিরে থাকা সূক্ষ্ম রক্তনালির জালিকা যা একস্তরী এন্ডোথেলিয়াল কোষ নির্মিত।',
        functionBn: 'রক্তকণিকাকে অ্যালভিওলাসের বায়ুর সরাসরি সান্নিধ্যে এনে গ্যাস বিনিময়ের সুযোগ করে দেওয়া।'
      },
      {
        id: 'oxygen_diffusion',
        labelBn: 'অক্সিজেন ব্যাপন ও লোহিত রক্তকণিকা (Oxygen Diffusion into RBC)',
        labelEn: 'Oxygen Diffusion into RBC',
        xPercent: 78,
        yPercent: 52,
        descriptionBn: 'উচ্চ আংশিক চাপের অ্যালভিওলার বায়ু (pO2 ~104 mmHg) থেকে অক্সিজেন ব্যাপিত হয়ে লোহিত রক্তকণিকার হিমোগ্লোবিনের সাথে অক্সিহিমোগ্লোবিন গঠন করে।',
        functionBn: 'বিশুদ্ধ অক্সিজেনকে রক্তের মাধ্যমে সমস্ত দেহকোষে পৌঁছানোর জন্য আবদ্ধ করা।'
      },
      {
        id: 'co2_diffusion',
        labelBn: 'কার্বন ডাই-অক্সাইড নির্গমন ব্যাপন (CO2 Diffusion to Alveolus)',
        labelEn: 'Carbon Dioxide Diffusion',
        xPercent: 71,
        yPercent: 66,
        descriptionBn: 'রক্তের কৈশিক জালিকা (pCO2 ~45 mmHg) থেকে বর্জ্য CO2 ব্যাপিত হয়ে অ্যালভিওলাসে ঢোকে।',
        functionBn: 'দেহকোষে বিপাকের ফলে সৃষ্ট ক্ষতিকর এসিডিক CO2 নিঃশ্বাসের মাধ্যমে বায়ুমণ্ডলে বের করে দেওয়া।'
      }
    ]
  },

  // Chapter 8: Nephron
  {
    id: 'nephron_diagram',
    titleBn: 'মানব নেফ্রনের সূক্ষ্ম গঠন ও পরিস্রাবণ (Nephron Anatomy)',
    titleEn: 'Nephron Microscopic Anatomy',
    chapterNumber: 8,
    imageSrc: '/src/assets/images/human_nephron_kidney_1793203557349.jpg',
    imageAlt: 'Nephron microscopic structure diagram',
    descriptionBn: 'বৃক্কের একক নেফ্রনের রেনাল করপাসল, রেনাল টিউবিউল ও সংগ্রাহী নালিকার সূক্ষ্ম গঠন এবং মূত্র তৈরির পরিস্রাবণ পথ।',
    hotspots: [
      {
        id: 'glomerulus',
        labelBn: 'গ্লোমেরুলাস (Glomerulus)',
        labelEn: 'Glomerulus',
        xPercent: 47,
        yPercent: 30,
        descriptionBn: 'অ্যাফারেন্ট আর্টারিওল ঢুকে প্রায় ৫০টি কৈশিক জালিকার গুচ্ছ তৈরি করে বোম্যানস ক্যাপসুলে অবস্থান করে।',
        functionBn: 'অতিসূক্ষ্ম পরিস্রাবক (Ultrafilter) হিসেবে রক্তরসকে উচ্চ চাপে ছেঁকে গ্লোমেরুলার ফিল্ট্রেট তৈরি করে।'
      },
      {
        id: 'bowmans_capsule',
        labelBn: 'বোম্যানস ক্যাপসুল (Bowman Capsule)',
        labelEn: 'Bowman Capsule',
        xPercent: 38,
        yPercent: 36,
        descriptionBn: 'গ্লোমেরুলাসকে ঘিরে রাখা কাপ-আকৃতির দ্বিস্তরবিশিষ্ট বিশেষায়িত পোডোসাইট কোষের আবরণ।',
        functionBn: 'গ্লোমেরুলাস থেকে পরিশ্রুত তরল সংগ্রহ করে রেনাল টিউবিউলে প্রেরণ করে।'
      },
      {
        id: 'pct',
        labelBn: 'প্রক্সিমাল প্যাঁচানো নালিকা (Proximal Convoluted Tubule)',
        labelEn: 'Proximal Convoluted Tubule',
        xPercent: 42,
        yPercent: 50,
        descriptionBn: 'বোম্যানস ক্যাপসুলের পরবর্তী অত্যন্ত প্যাঁচানো নালিকাংশ যার ভেতরের প্রাচীরে ব্রাশ বর্ডার থাকে।',
        functionBn: 'ফিল্ট্রেটের প্রায় ৬৫-৮০% পানি, গ্লুকোজ, অ্যামিনো এসিড এবং প্রয়োজনীয় সোডিয়াম ও ক্লোরাইড পুনঃশোষণ করে।'
      },
      {
        id: 'henle_loop',
        labelBn: 'হেনলির লুপ (Loop of Henle)',
        labelEn: 'Loop of Henle',
        xPercent: 51,
        yPercent: 78,
        descriptionBn: 'মেডুলায় প্রবেশকারী ইউ-আকৃতির সূক্ষ্ম নালিকা যার নিম্নগামী ও ঊর্ধ্বগামী দুটি বাহু থাকে।',
        functionBn: 'ইউরিন ঘন ও ঘনীভূত করা এবং দেহে পানি ও লবণের ভারসাম্য (Osmoregulation) বজায় রাখা।'
      },
      {
        id: 'dct',
        labelBn: 'ডিস্টাল প্যাঁচানো নালিকা (Distal Convoluted Tubule)',
        labelEn: 'Distal Convoluted Tubule',
        xPercent: 61,
        yPercent: 40,
        descriptionBn: 'হেনলির লুপের পরবর্তী কর্টেক্সে অবস্থিত প্রান্তীয় প্যাঁচানো অংশ।',
        functionBn: 'অ্যালডোস্টেরন ও এডিএইচ হরমোনের প্রভাবে নিয়ন্ত্রিতভাবে অবশিষ্ট পানি ও আয়নের পুনঃশোষণ সম্পন্ন করে।'
      },
      {
        id: 'collecting_duct',
        labelBn: 'সংগ্রাহী নালিকা (Collecting Duct)',
        labelEn: 'Collecting Duct',
        xPercent: 70,
        yPercent: 60,
        descriptionBn: 'একাধিক নেফ্রনের ডিস্টাল নালিকা মিলিত হয়ে যে নালি গঠন করে যা রেনাল পেলভিসে উন্মুক্ত হয়।',
        functionBn: 'চূড়ান্ত মূত্র সংগ্রহ করে ইউরেটার হয়ে মূত্রথলিতে প্রেরণের জন্য বহন করে।'
      }
    ]
  },

  // Chapter 9: Synovial Joint (Fixed!)
  {
    id: 'synovial_joint_diagram',
    titleBn: 'সাইনোভিয়াল অস্থিসন্ধির চিহ্নিত গঠন (Synovial Joint Anatomy)',
    titleEn: 'Synovial Joint & Ligaments Anatomical Diagram',
    chapterNumber: 9,
    imageSrc: '/src/assets/images/synovial_joint_diagram_1793279557393.jpg',
    imageAlt: 'Human synovial joint cross-section anatomical diagram',
    descriptionBn: 'মানবদেহের চলনক্ষম সাইনোভিয়াল অস্থিসন্ধির (যেমন হাঁটু বা কনুই) লম্বচ্ছেদ। আর্টিকুলার তরুণাস্থি, সাইনোভিয়াল গহ্বর, সাইনোভিয়াল ফ্লুইড ও লিগামেন্টের নিখুঁত রূপ।',
    hotspots: [
      {
        id: 'articular_cartilage',
        labelBn: 'আর্টিকুলার তরুণাস্থি (Articular Cartilage)',
        labelEn: 'Articular Cartilage',
        xPercent: 50,
        yPercent: 45,
        descriptionBn: 'অস্থির সংযোগস্থলের প্রান্তে অবস্থিত কাচ-স্বচ্ছ হ্যায়ালিন তরুণাস্থির মসৃণ ও স্থিতিস্থাপক স্তর।',
        functionBn: 'চলনের সময় অস্থির প্রান্তদ্বয়ের ঘর্ষণ হ্রাস করা এবং ঝাঁকুনি বা আঘাত প্রতিরোধে শক অ্যাবসর্বার হিসেবে কাজ করা।'
      },
      {
        id: 'synovial_cavity_fluid',
        labelBn: 'সাইনোভিয়াল গহ্বর ও তরল (Synovial Cavity & Fluid)',
        labelEn: 'Synovial Cavity & Fluid',
        xPercent: 35,
        yPercent: 49,
        descriptionBn: 'অস্থি দুটির মধ্যবর্তী সংকীর্ণ গহ্বর যা সাইনোভিয়াল মেমব্রেন থেকে নিঃসৃত পিচ্ছিল সাইনোভিয়াল তরল দিয়ে পূর্ণ থাকে।',
        functionBn: 'সন্ধিমুখকে সর্বদা আর্দ্র ও পিচ্ছিল রেখে অবাধ ও ব্যথাহীন চলনে সহায়তা করা এবং তরুণাস্থিকে পুষ্টি দেওয়া।'
      },
      {
        id: 'synovial_membrane',
        labelBn: 'সাইনোভিয়াল পর্দা (Synovial Membrane)',
        labelEn: 'Synovial Membrane',
        xPercent: 32,
        yPercent: 42,
        descriptionBn: 'অস্থিসন্ধি ক্যাপসুলের অভ্যন্তরীণ কোমল রক্তনালিসমৃদ্ধ যোজক কলার স্তর।',
        functionBn: 'পিচ্ছিল সাইনোভিয়াল ফ্লুইড ক্ষরণ করা এবং সন্ধি গহ্বরকে রক্ষা করা।'
      },
      {
        id: 'ligament_tissue',
        labelBn: 'লিগামেন্ট বা অস্থিবন্ধনী (Ligament)',
        labelEn: 'Ligament (Bone to Bone)',
        xPercent: 74,
        yPercent: 58,
        descriptionBn: 'শ্বেত ও পীত তন্তুময় অত্যন্ত শক্ত এবং স্থিতিস্থাপক বিশেষ যোজক কলা যা একটি অস্থিকে অপর অস্থির সাথে আটকে রাখে।',
        functionBn: 'সন্ধিকে নির্দিষ্ট সীমার মধ্যে নড়াচড়া করতে সাহায্য করা এবং স্থানচ্যুতি বা ডিসলোকেশন প্রতিরোধ করা।'
      },
      {
        id: 'spongy_bone',
        labelBn: 'স্পঞ্জি অস্থি ও পেরিওস্টিয়াম (Spongy Bone & Periosteum)',
        labelEn: 'Spongy Bone (Trabecular)',
        xPercent: 52,
        yPercent: 68,
        descriptionBn: 'অস্থির স্ফীত প্রান্তের জালকাকার ট্র্যাবেকুলাবিশিষ্ট হালকা কিন্তু অত্যন্ত মজবুত অংশ যাতে লোহিত অস্থিমজ্জা থাকে।',
        functionBn: 'ভারবহন ক্ষমতা বৃদ্ধি করা এবং রক্তকণিকা তৈরিতে সহায়তা করা।'
      }
    ]
  },

  // Chapter 10: Human Brain (New)
  {
    id: 'human_brain_diagram',
    titleBn: 'মানব মস্তিষ্কের চিহ্নিত লম্বচ্ছেদ (Human Brain Anatomy)',
    titleEn: 'Sagittal Section of the Human Brain',
    chapterNumber: 10,
    imageSrc: '/src/assets/images/human_brain_diagram_1793279593018.jpg',
    imageAlt: 'Human brain sagittal section anatomical diagram',
    descriptionBn: 'মানব কেন্দ্রীয় স্নায়ুতন্ত্রের নিয়ন্ত্রণকেন্দ্র মস্তিষ্কের লম্বচ্ছেদ—গুরুমস্তিষ্ক (সেরিব্রাম), থ্যালামাস, হাইপোথ্যালামাস, পিটুইটারি গ্রন্থি, লঘুমস্তিষ্ক (সেরিবেলাম), পনস ও মেডুলা অবলংগাটার বিশদ চিহ্নিত রূপ।',
    hotspots: [
      {
        id: 'cerebrum_cortex',
        labelBn: 'সেরিব্রাম বা গুরুমস্তিষ্ক (Cerebrum)',
        labelEn: 'Cerebrum (Cerebral Cortex)',
        xPercent: 47,
        yPercent: 32,
        descriptionBn: 'মস্তিষ্কের সর্ববৃহৎ অংশ (প্রায় ৮০%)। ডান ও বাম দুটি সেরেব্রাল হেমিস্ফিয়ারে বিভক্ত যা করপাস ক্যালোসাম দিয়ে যুক্ত। পৃষ্ঠভাগ ভাঁজযুক্ত (জাইরাস ও সালকাস)।',
        functionBn: 'চিন্তাশক্তি, বুদ্ধি, স্মৃতিশক্তি, উদ্ভাবন, বাকশক্তি এবং সকল ঐচ্ছিক পেশির সঞ্চালন ও সংবেদ নিয়ন্ত্রণ।'
      },
      {
        id: 'thalamus_hypothalamus',
        labelBn: 'থ্যালামাস ও হাইপোথ্যালামাস (Thalamus & Hypothalamus)',
        labelEn: 'Thalamus & Hypothalamus',
        xPercent: 51,
        yPercent: 49,
        descriptionBn: 'অগ্রমস্তিষ্কের ডায়েনসেফালন অংশের কেন্দ্র। থ্যালামাস রিলে স্টেশন হিসেবে কাজ করে এবং ঠিক নিচে হাইপোথ্যালামাস থাকে।',
        functionBn: 'ঘাম, তৃষ্ণা, ক্ষুধা, ক্রোধ, আবেগ, দেহের তাপমাত্রা (থার্মোস্ট্যাট) এবং স্বয়ংক্রিয় স্নায়ুতন্ত্র ও হরমোন ক্ষরণ নিয়ন্ত্রণ।'
      },
      {
        id: 'pituitary_gland',
        labelBn: 'পিটুইটারি গ্রন্থি (Pituitary Gland)',
        labelEn: 'Pituitary Master Gland',
        xPercent: 41,
        yPercent: 63,
        descriptionBn: 'ইনফান্ডিবুলাম দণ্ড দ্বারা হাইপোথ্যালামাস থেকে ঝুলন্ত মটর দানার মতো অন্তঃক্ষরা প্রভু গ্রন্থি (Master Gland)।',
        functionBn: 'বৃদ্ধি হরমোন (GH), থাইরয়েড উত্তেজক হরমোন (TSH), এসিটিএইচ ও প্রোল্যাকটিন ক্ষরণ করে সমগ্র দেহের গ্রন্থিকে পরিচালনা করা।'
      },
      {
        id: 'cerebellum_hindbrain',
        labelBn: 'সেরিবেলাম বা লঘুমস্তিষ্ক (Cerebellum)',
        labelEn: 'Cerebellum',
        xPercent: 67,
        yPercent: 64,
        descriptionBn: 'পশ্চাৎমস্তিষ্কের কুঁচকানো অংশ যাতে জীবনের বৃক্ষ (Arbor Vitae) সদৃশ সাদা ও ধূসর পদার্থের বিন্যাস থাকে।',
        functionBn: 'দেহের ভারসাম্য ও সাম্যাবস্থা (Posture & Balance) রক্ষা করা এবং সূক্ষ্ম পেশি সঞ্চালন সমন্বয় করা।'
      },
      {
        id: 'medulla_oblongata',
        labelBn: 'মেডুলা অবলংগাটা ও সুষুম্নাকাণ্ড (Medulla Oblongata)',
        labelEn: 'Medulla Oblongata & Brainstem',
        xPercent: 54,
        yPercent: 78,
        descriptionBn: 'মস্তিষ্কের সর্বনিম্ন কান্ডাকার অংশ যা পনসের নিচ থেকে শুরু হয়ে সুষুম্নাকাণ্ডের সাথে যুক্ত হয়।',
        functionBn: 'হৃৎস্পন্দন, রক্তচাপ, শ্বাসক্রিয়া, খাদ্য গলধঃকরণ, বমি ও কাশির মতো অত্যন্ত জরুরি অনৈচ্ছিক রিফ্লেক্স কেন্দ্র নিয়ন্ত্রণ।'
      }
    ]
  },

  // Chapter 11: Flower Parts
  {
    id: 'flower_diagram',
    titleBn: 'একটি আদর্শ ফুলের লম্বচ্ছেদ ও স্তবকসমূহ (Flower Anatomy)',
    titleEn: 'Parts of an Ideal Flower Diagram',
    chapterNumber: 11,
    imageSrc: '/src/assets/images/flower_structure_anatomy_1793203556666.jpg',
    imageAlt: 'Flower anatomical cross section diagram',
    descriptionBn: 'একটি আদর্শ সপুষ্পক ফুলের ৫টি স্তবক—পুষ্পাক্ষ, বৃতি, দলমণ্ডল, পুংস্তবক এবং স্ত্রীস্তবকের চিহ্নিত ডায়াগ্রাম।',
    hotspots: [
      {
        id: 'petal',
        labelBn: 'দলমণ্ডল বা পাপড়ি (Petals / Corolla)',
        labelEn: 'Petals',
        xPercent: 74,
        yPercent: 44,
        descriptionBn: 'ফুলের দ্বিতীয় স্তবক। সাধারণত উজ্জ্বল রঙিন ও সুগন্ধযুক্ত হয়।',
        functionBn: 'ফুলের ভেতরের প্রজনন অঙ্গসমূহকে রোদ-বৃষ্টি থেকে রক্ষা করা এবং পরাগায়নের জন্য কীটপতঙ্গকে আকর্ষণ করা।'
      },
      {
        id: 'sepal',
        labelBn: 'বৃতি (Sepals / Calyx)',
        labelEn: 'Sepals',
        xPercent: 67,
        yPercent: 58,
        descriptionBn: 'ফুলের সবচেয়ে বাইরের স্তবক। সাধারণত সবুজ বর্ণের ক্ষুদ্র পাতার মতো অংশ।',
        functionBn: 'কুঁড়ি অবস্থায় ফুলের অভ্যন্তরীণ স্তবকগুলোকে রোদ, বৃষ্টি ও পোকামাকড়ের আক্রমণ থেকে রক্ষা করা।'
      },
      {
        id: 'anther',
        labelBn: 'পরাগধানী (Anther)',
        labelEn: 'Anther',
        xPercent: 64,
        yPercent: 29,
        descriptionBn: 'পুংকেশরের অগ্রভাগের থলির মতো স্ফীত অংশ যাতে পরাগরেণু উৎপন্ন হয়।',
        functionBn: 'মিয়োসিস বিভাজনের মাধ্যমে হ্যাপ্লয়েড (n) পরাগরেণু ও পুংগ্যামেট উৎপাদন করা।'
      },
      {
        id: 'filament',
        labelBn: 'পুংদণ্ড (Filament)',
        labelEn: 'Filament',
        xPercent: 78,
        yPercent: 33,
        descriptionBn: 'পুংকেশরের সরু সুতার মতো দণ্ডাকার অংশ যা পরাগধানীকে ধরে রাখে।',
        functionBn: 'পরাগধানীকে উপযুক্ত উচ্চতায় তুলে ধরে যাতে বাতাসের সংস্পর্শে সহজে পরাগায়ন ঘটে।'
      },
      {
        id: 'stigma',
        labelBn: 'গর্ভমুণ্ড (Stigma)',
        labelEn: 'Stigma',
        xPercent: 49,
        yPercent: 25,
        descriptionBn: 'স্ত্রীস্তবকের শীর্ষভাগের আঠালো বা রোমশ অংশ।',
        functionBn: 'পরাগায়নের সময় পরাগরেণু গ্রহণ ও আটকে রাখা এবং পরাগনালি অঙ্কুরোদগমে সহায়তা করা।'
      },
      {
        id: 'style',
        labelBn: 'গর্ভদণ্ড (Style)',
        labelEn: 'Style',
        xPercent: 55,
        yPercent: 32,
        descriptionBn: 'গর্ভমুণ্ড ও গর্ভাশয়ের সংযোগকারী সরু নলাকার অংশ।',
        functionBn: 'অঙ্কুরিত পরাগনালিকে গর্ভাশয়ের ডিম্বকের দিকে পরিচালিত করা।'
      },
      {
        id: 'ovary',
        labelBn: 'গর্ভাশয় ও ডিম্বক (Ovary & Ovule)',
        labelEn: 'Ovary and Ovule',
        xPercent: 50,
        yPercent: 58,
        descriptionBn: 'স্ত্রীস্তবকের স্ফীত গোড়া যাতে ডিম্বক থলি থাকে।',
        functionBn: 'ডিম্বাণু সৃষ্টি করে এবং নিষেকের পর ডিম্বক বীজে এবং গর্ভাশয় ফলে রূপান্তরিত হয়।'
      },
      {
        id: 'receptacle',
        labelBn: 'পুষ্পাক্ষ (Receptacle / Thalamus)',
        labelEn: 'Receptacle',
        xPercent: 50,
        yPercent: 74,
        descriptionBn: 'পুষ্পবৃন্তের শীর্ষভাগের স্ফীত কাষ্ঠল ভিত্তি যার ওপর বাকি ৪টি স্তবক সাজানো থাকে।',
        functionBn: 'ফুলের সমস্ত স্তবককে দৃঢ়ভাবে ধারণ করা।'
      }
    ]
  },

  // Chapter 12: Chromosome & DNA Base Pairing (New)
  {
    id: 'chromosome_dna_diagram',
    titleBn: 'ক্রোমোজোম ও ডিএনএ ডাবল হেলিক্স রাসায়নিক গঠন (Chromosome & DNA Structure)',
    titleEn: 'Chromosome Coiling to DNA Double Helix & Base Pairs',
    chapterNumber: 12,
    imageSrc: '/src/assets/images/chromosome_dna_diagram_1793279606893.jpg',
    imageAlt: 'Chromosome to DNA double helix structure and base pairs diagram',
    descriptionBn: 'ক্রোমোজোম থেকে শুরু করে হিস্টোন প্রোটিন প্যাঁচানো ক্রোমাটিন তন্তু এবং ওয়াটসন-ক্রিক প্রস্তাবিত দ্বি-সূত্রক ডিএনএ-র অ্যাডেনিন-থায়ামিন ও গুয়ানিন-সাইটোসিন ক্ষারক জোড়ের সূক্ষ্ম রাসায়নিক গঠন।',
    hotspots: [
      {
        id: 'chromosome_chromatids',
        labelBn: 'ক্রোমোজোম ও ক্রোমাটিড (Chromosome & Sister Chromatids)',
        labelEn: 'Chromosome & Sister Chromatids',
        xPercent: 14,
        yPercent: 26,
        descriptionBn: 'নিউক্লিয়াসের বংশগতির প্রধান ভৌত ভিত্তি। দুটি অবিকল ভগিনী ক্রোমাটিড সেন্ট্রোমিয়ারে যুক্ত থাকে।',
        functionBn: 'কোষ বিভাজনের সময় ডিএনএ-কে সমান দুটি সেটে সুশৃঙ্খলভাবে অপত্য কোষে বণ্টন করা।'
      },
      {
        id: 'chromatin_histone',
        labelBn: 'ক্রোমাটিন তন্তু ও হিস্টোন প্রোটিন (Chromatin Fiber & Histones)',
        labelEn: 'Chromatin Nucleosomes & Histones',
        xPercent: 67,
        yPercent: 20,
        descriptionBn: 'ডিএনএ সূত্র ক্ষারীয় হিস্টোন অক্টামার প্রোটিনের চারপাশে প্রায় ১.৬৫ বার পেঁচিয়ে নিউক্লিওসোম গঠন করে।',
        functionBn: 'প্রায় ২ মিটার দীর্ঘ ডিএনএ অণুকে মাইক্রোস্কোপিক নিউক্লিয়াসের ভেতর সংকুচিত ও সুরক্ষিত রাখা।'
      },
      {
        id: 'dna_double_helix_backbone',
        labelBn: 'ডিএনএ ডাবল হেলিক্স ও সুগার-ফসফেট ব্যাকবোন (DNA Double Helix)',
        labelEn: 'DNA Double Helix Sugar-Phosphate Backbone',
        xPercent: 30,
        yPercent: 82,
        descriptionBn: 'বিপরীতমুখী সমান্তরাল (Antiparallel 5\'->3\' ও 3\'->5\') দুটি পলিনিউক্লিওটাইড শৃঙ্খল যা ডিঅক্সিরাইবোজ শর্করা ও ফসফেট দ্বারা নির্মিত।',
        functionBn: 'ডিএনএ অণুর স্থায়ী ও মজবুত বাহ্যিক কাঠামো প্রদান করা।'
      },
      {
        id: 'base_pairing_at_gc',
        labelBn: 'নাইট্রোজেন বেস পেয়ারিং A=T ও G≡C (Base Pairs Hydrogen Bonds)',
        labelEn: 'Nitrogenous Base Pairs (A=T, G≡C)',
        xPercent: 79,
        yPercent: 78,
        descriptionBn: 'অ্যাডেনিন দ্বি-হাইড্রোজেন বন্ধনী দিয়ে থায়ামিনের সাথে (A = T) এবং গুয়ানিন ত্রি-হাইড্রোজেন বন্ধনী দিয়ে সাইটোসিনের সাথে (G ≡ C) যুক্ত থাকে।',
        functionBn: 'জীবের সকল জিনগত বৈশিষ্ট্য ও প্রোটিন তৈরির কোড অক্ষুণ্ণ রেখে নির্ভুল প্রতিলিপন (Replication) নিশ্চিত করা।'
      }
    ]
  },

  // Chapter 13: Pond Ecosystem (Fixed!)
  {
    id: 'pond_ecosystem_diagram',
    titleBn: 'পুকুরের বাস্তুতন্ত্র ও খাদ্যজাল কাঠামো (Pond Ecosystem & Food Web)',
    titleEn: 'Freshwater Pond Ecosystem & Food Web Diagram',
    chapterNumber: 13,
    imageSrc: '/src/assets/images/pond_ecosystem_diagram_1793279557422.jpg',
    imageAlt: 'Freshwater pond ecosystem diagram with producers, consumers and decomposers',
    descriptionBn: 'একটি স্বয়ংসম্পূর্ণ প্রাকৃতিক পুকুরের বাস্তুতন্ত্র। সূর্যালোক, ফাইটোপ্ল্যাঙ্কটন উৎপাদক, জুপ্ল্যাঙ্কটন ও মাছ খাদক এবং তলদেশের বিয়োজকদের পুষ্টি ও শক্তিপ্রবাহের সচিত্র খাদ্যজাল।',
    hotspots: [
      {
        id: 'phytoplankton_producers',
        labelBn: 'ফাইটোপ্ল্যাঙ্কটন উৎপাদক (Phytoplankton Producers)',
        labelEn: 'Phytoplankton Producers (Algae, Diatoms)',
        xPercent: 29,
        yPercent: 44,
        descriptionBn: 'পানিতে ভাসমান আণুবীক্ষণিক সবুজ শৈবাল ও ডায়াটম। এতে ক্লোরোফিল থাকায় সূর্যালোক ব্যবহার করে সালোকসংশ্লেষণ ঘটায়।',
        functionBn: 'পুকুরের প্রাথমিক খাদ্য তৈরি করা এবং পানিতে দ্রবীভূত অক্সিজেনের প্রধান উৎস হিসেবে কাজ করা।'
      },
      {
        id: 'zooplankton_primary_consumers',
        labelBn: 'জুপ্ল্যাঙ্কটন ১ম স্তরের খাদক (Zooplankton Primary Consumers)',
        labelEn: 'Zooplankton (Daphnia, Cyclops)',
        xPercent: 48,
        yPercent: 43,
        descriptionBn: 'পানিতে মুক্তভাবে ভাসমান ক্ষুদ্রাতিক্ষুদ্র প্রাণী যেমন ডাফনিয়া, সাইক্লপস, রটিফার ইত্যাদি।',
        functionBn: 'ফাইটোপ্ল্যাঙ্কটন খেয়ে বেঁচে থাকে এবং মাছের জন্য পুষ্টিকর প্রাকৃতিক খাদ্য সরবরাহ করে শক্তি দ্বিতীয় স্তরে পৌঁছে দেয়।'
      },
      {
        id: 'small_fish_secondary',
        labelBn: 'ছোট মাছ ২য় স্তরের খাদক (Small Fish Consumers)',
        labelEn: 'Secondary Consumers (Small Fish)',
        xPercent: 66,
        yPercent: 43,
        descriptionBn: 'মলা, ঢেলা, পুঁটি, ছোট চিংড়ি ও জলজ পতঙ্গ যা জুপ্ল্যাঙ্কটন ভক্ষণ করে।',
        functionBn: 'খাদ্যশৃঙ্খলের মধ্যবর্তী স্তরে পুষ্টি সঞ্চালন করে এবং শিকারি বড় মাছের খাদ্যে পরিণত হয়।'
      },
      {
        id: 'large_predatory_fish',
        labelBn: 'শিকারি বড় মাছ সর্বোচ্চ খাদক (Large Predatory Fish)',
        labelEn: 'Tertiary/Apex Consumers (Predatory Fish)',
        xPercent: 69,
        yPercent: 63,
        descriptionBn: 'বোয়াল, শোল, চিতল বা বড় শিকারি মাছ ও বক যারা ছোট মাছ খেয়ে বেঁচে থাকে।',
        functionBn: 'বাস্তুতন্ত্রের ট্রফিক লেভেলের শীর্ষে অবস্থান করে নিম্নস্তরের খাদকদের সংখ্যা নিয়ন্ত্রণ করা।'
      },
      {
        id: 'bottom_decomposers',
        labelBn: 'তলদেশের বিয়োজক ও জৈব বর্জ্য (Decomposers & Detritus)',
        labelEn: 'Bottom Decomposers (Bacteria & Fungi)',
        xPercent: 54,
        yPercent: 84,
        descriptionBn: 'পুকুরের তলদেশের কাদায় থাকা অজস্র পচনকারী ব্যাকটেরিয়া, ছত্রাক ও কেঁচো।',
        functionBn: 'মৃত উদ্ভিদ ও প্রাণীর দেহ পচিয়ে জৈব বস্তুকে সরল অজৈব লবণে রূপান্তর করে মাটিতে ও পানিতে ফেরত দেওয়া।'
      }
    ]
  },

  // Chapter 14: Recombinant DNA Technology (New)
  {
    id: 'recombinant_dna_diagram',
    titleBn: 'রিকম্বিন্যান্ট ডিএনএ ও প্লাজমিড প্রযুক্তি (Recombinant DNA Technology)',
    titleEn: 'Recombinant DNA & Insulin Gene Cloning Flowchart',
    chapterNumber: 14,
    imageSrc: '/src/assets/images/recombinant_dna_steps_1793279622979.jpg',
    imageAlt: 'Recombinant DNA technology and gene cloning steps flowchart',
    descriptionBn: 'জেনেটিক ইঞ্জিনিয়ারিংয়ের মাধ্যমে মানব ইনসুলিন জিনকে ব্যাকটেরিয়ার প্লাজমিডে সংযুক্ত করে বাণিজ্যিক ইনসুলিন তৈরির ধারাবাহিক ৫টি বৈজ্ঞানিক ধাপের সচিত্র প্রবাহচিত্র।',
    hotspots: [
      {
        id: 'gene_isolation_human',
        labelBn: '১. কাঙ্ক্ষিত ইনসুলিন জিন পৃথকীকরণ (Gene Isolation)',
        labelEn: 'Isolation of Human Insulin Gene',
        xPercent: 18,
        yPercent: 23,
        descriptionBn: 'মানবদেহের অগ্ন্যাশয় কোষের ডিএনএ থেকে ইনসুলিন তৈরি নির্দেশকারী সুনির্দিষ্ট জিন খণ্ড চিহ্নিত করে আলাদা করা হয়।',
        functionBn: 'কাঙ্ক্ষিত প্রোটিন সংশ্লেষণের মূল জেনেটিক ব্লুপ্রিন্ট সংগ্রহ করা।'
      },
      {
        id: 'plasmid_isolation_bacteria',
        labelBn: '২. প্লাজমিড ডিএনএ ভেক্টর আহরণ (Plasmid Vector Isolation)',
        labelEn: 'Isolation of Bacterial Plasmid',
        xPercent: 78,
        yPercent: 23,
        descriptionBn: 'ই. কোলাই ব্যাকটেরিয়া থেকে মূল ক্রোমোজোমের বাইরের স্বপ্রজননশীল অতিরিক্ত বৃত্তাকার প্লাজমিড ডিএনএ নিষ্কাশন করা হয়।',
        functionBn: 'কাঙ্ক্ষিত জিন বহন করে পোষক কোষে পৌঁছে দেওয়ার নিরাপদ বাহক বা ভেক্টর হিসেবে কাজ করা।'
      },
      {
        id: 'restriction_enzyme_cutting',
        labelBn: '৩. রেস্ট্রিকশন এনজাইম আণবিক কাঁচি (Restriction Enzyme Digestion)',
        labelEn: 'Cutting with Restriction Enzymes',
        xPercent: 50,
        yPercent: 40,
        descriptionBn: 'আণবিক কাঁচি খ্যাত রেস্ট্রিকশন এনজাইম (যেমন EcoRI) দ্বারা প্লাজমিড এবং মানব ডিএনএ-র উভয় প্রান্তে নির্দিষ্ট ক্ষারক শৃঙ্খলে আঠালো প্রান্ত (Sticky Ends) কাটা হয়।',
        functionBn: 'পরস্পর সম্পূরক খাঁজ তৈরি করা যাতে নতুন জিন সহজে প্লাজমিডে প্রবেশ করানো যায়।'
      },
      {
        id: 'dna_ligase_joining',
        labelBn: '৪. ডিএনএ লাইগেজ আণবিক আঠা (DNA Ligase Joining)',
        labelEn: 'Joining with DNA Ligase',
        xPercent: 50,
        yPercent: 54,
        descriptionBn: 'আণবিক আঠা খ্যাত ডিএনএ লাইগেজ এনজাইম প্রয়োগ করে প্লাজমিডের ফাঁকা স্থানে মানব ইনসুলিন জিনকে ফসফোডায়েস্টার বন্ধনী দিয়ে জোড়া লাগিয়ে রিকম্বিন্যান্ট প্লাজমিড তৈরি করা হয়।',
        functionBn: 'নতুন সংকর বা রিকম্বিন্যান্ট ডিএনএ (rDNA) অণু সৃষ্টি করা।'
      },
      {
        id: 'bacterial_transformation_cloning',
        labelBn: '৫. ট্রান্সফরমেশন ও ইনসুলিন উৎপাদন (Transformation & Cloning)',
        labelEn: 'Transformation & Industrial Fermentation',
        xPercent: 67,
        yPercent: 82,
        descriptionBn: 'রিকম্বিন্যান্ট প্লাজমিড পোষক ব্যাকটেরিয়ায় ঢুকিয়ে বায়োরিয়েক্টরে বিপুল পরিমাণে বংশবৃদ্ধি করানো হয় এবং ব্যাকটেরিয়া থেকে মানব ইনসুলিন সংগ্রহ ও পরিশোধন করা হয়।',
        functionBn: 'ডায়াবেটিস রোগীদের জীবন রক্ষাকারী অত্যন্ত বিশুদ্ধ কৃত্রিম মানব ইনসুলিন স্বল্পমূল্যে বাণিজ্যিক উৎপাদন।'
      }
    ]
  }
];
