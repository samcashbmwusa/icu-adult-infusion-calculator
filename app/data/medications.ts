export const medications = [
  {
    slug: "noradrenaline",
    name: "نورأدرينالين",
    info: "جرعة عادية / مضاعفة",
    diluent: "نورمال سالين أو D5W",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "3 مغ + 47 مل نورمال سالين أو D5W",
    doubleDose: "6 مغ + 44 مل نورمال سالين أو D5W",
    finalVolume: "50 مل",
  },

  {
    slug: "adrenaline",
    name: "أدرينالين",
    info: "3 مغ + 47 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "3 مغ + 47 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "dopamine",
    name: "دوبامين",
    info: "جرعة عادية / مضاعفة",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "200 مغ + 45 مل نورمال سالين",
    doubleDose: "400 مغ + 40 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "dobutamine",
    name: "دوبيوتامين",
    info: "250 مغ + 45 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "250 مغ + 45 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "aggrastat",
    name: "أغراستات",
    info: "25 مل + 100 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة.",
    singleDose: "25 مل + 100 مل نورمال سالين",
    finalVolume: "125 مل",
    requiresWeightCalculator: true,
  },

  {
    slug: "amiodarone",
    name: "أميودارون",
    info: "300 مغ + 150 مل D5W",
    diluent: "D5W",
    status: "ready",
    warning: "يعطى حسب بروتوكول التسريب.",
    singleDose: "300 مغ + 150 مل D5W",
    finalVolume: "150 مل",
    notes: [
      "أول 6 ساعات: 30 مل/ساعة",
      "آخر 18 ساعة: 15 مل/ساعة",
    ],
  },

  {
    slug: "insulin",
    name: "إنسولين",
    info: "50 وحدة + 50 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "يعطى حسب أوامر الطبيب وبروتوكول القسم.",
    singleDose: "50 وحدة + 50 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "heparin",
    name: "هيبارين",
    info: "50 وحدة + 50 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "يعطى حسب أوامر الطبيب وبروتوكول القسم.",
    singleDose: "50 وحدة + 50 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "nitroglycerin",
    name: "نيتروغليسيرين",
    info: "20 مل من الأمبولة + 30 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "20 مل من الأمبولة + 30 مل نورمال سالين",
    finalVolume: "50 مل",
  },

  {
    slug: "magnesium-sulfate",
    name: "مغنيسيوم سلفات",
    info: "1 غرام + 100 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "لا يعطى Push IV مباشرة. يعطى بواسطة مضخة تسريب فقط.",
    singleDose: "1 غرام + 100 مل نورمال سالين",
    finalVolume: "100 مل",
  },

  {
    slug: "potassium-chloride",
    name: "بوتاسيوم كلورايد",
    info: "10 mEq + 100 مل نورمال سالين",
    diluent: "نورمال سالين",
    status: "ready",
    warning: "دواء عالي الخطورة. لا يعطى Push IV مباشرة.",
    singleDose: "10 mEq + 100 مل نورمال سالين",
    finalVolume: "100 مل",
  },

  {
    slug: "furosemide",
    name: "فوروسيميد",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "labetalol",
    name: "لابيتالول",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "precedex",
    name: "بريسيدكس",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "midazolam",
    name: "ميدازولام",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "propofol",
    name: "بروبوفول",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "fentanyl",
    name: "فينتانيل",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },

  {
    slug: "morphine",
    name: "مورفين",
    info: "سيتم إضافة التحضير لاحقاً",
    diluent: "سيتم التحديث لاحقاً",
    status: "pending",
    warning: "سيتم إضافة التحذيرات لاحقاً.",
  },
];