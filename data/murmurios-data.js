// Página principal — as fotos aparecem em ordem aleatória a cada visita.
const randomOrder = true;

const images = [
  {
    thumb: "img/2026murmurios/thumbs/thumb_01.jpg",
    full:  "img/2026murmurios/full/full_01.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_02.jpg",
    full:  "img/2026murmurios/full/full_02.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_03.jpg",
    full:  "img/2026murmurios/full/full_03.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_04.jpg",
    full:  "img/2026murmurios/full/full_04.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_05.jpg",
    full:  "img/2026murmurios/full/full_05.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_06.jpg",
    full:  "img/2026murmurios/full/full_06.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_07.jpg",
    full:  "img/2026murmurios/full/full_07.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_08.jpg",
    full:  "img/2026murmurios/full/full_08.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_09.jpg",
    full:  "img/2026murmurios/full/full_09.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_10.jpg",
    full:  "img/2026murmurios/full/full_10.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_11.jpg",
    full:  "img/2026murmurios/full/full_11.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_12.jpg",
    full:  "img/2026murmurios/full/full_12.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_13.jpg",
    full:  "img/2026murmurios/full/full_13.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_14.jpg",
    full:  "img/2026murmurios/full/full_14.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_15.jpg",
    full:  "img/2026murmurios/full/full_15.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_16.jpg",
    full:  "img/2026murmurios/full/full_16.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_17.jpg",
    full:  "img/2026murmurios/full/full_17.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_18.jpg",
    full:  "img/2026murmurios/full/full_18.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_19.jpg",
    full:  "img/2026murmurios/full/full_19.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_20.jpg",
    full:  "img/2026murmurios/full/full_20.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_21.jpg",
    full:  "img/2026murmurios/full/full_21.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_22.jpg",
    full:  "img/2026murmurios/full/full_22.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_23.jpg",
    full:  "img/2026murmurios/full/full_23.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_24.jpg",
    full:  "img/2026murmurios/full/full_24.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_25.jpg",
    full:  "img/2026murmurios/full/full_25.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_26.jpg",
    full:  "img/2026murmurios/full/full_26.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_27.jpg",
    full:  "img/2026murmurios/full/full_27.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_28.jpg",
    full:  "img/2026murmurios/full/full_28.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_29.jpg",
    full:  "img/2026murmurios/full/full_29.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_30.jpg",
    full:  "img/2026murmurios/full/full_30.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_31.jpg",
    full:  "img/2026murmurios/full/full_31.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_32.jpg",
    full:  "img/2026murmurios/full/full_32.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_33.jpg",
    full:  "img/2026murmurios/full/full_33.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_34.jpg",
    full:  "img/2026murmurios/full/full_34.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_35.jpg",
    full:  "img/2026murmurios/full/full_35.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_36.jpg",
    full:  "img/2026murmurios/full/full_36.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_37.jpg",
    full:  "img/2026murmurios/full/full_37.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_38.jpg",
    full:  "img/2026murmurios/full/full_38.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_39.jpg",
    full:  "img/2026murmurios/full/full_39.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_40.jpg",
    full:  "img/2026murmurios/full/full_40.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_41.jpg",
    full:  "img/2026murmurios/full/full_41.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_42.jpg",
    full:  "img/2026murmurios/full/full_42.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_43.jpg",
    full:  "img/2026murmurios/full/full_43.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_44.jpg",
    full:  "img/2026murmurios/full/full_44.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_45.jpg",
    full:  "img/2026murmurios/full/full_45.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_46.jpg",
    full:  "img/2026murmurios/full/full_46.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_47.jpg",
    full:  "img/2026murmurios/full/full_47.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_48.jpg",
    full:  "img/2026murmurios/full/full_48.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_49.jpg",
    full:  "img/2026murmurios/full/full_49.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_50.jpg",
    full:  "img/2026murmurios/full/full_50.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_51.jpg",
    full:  "img/2026murmurios/full/full_51.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_52.jpg",
    full:  "img/2026murmurios/full/full_52.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_53.jpg",
    full:  "img/2026murmurios/full/full_53.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_54.jpg",
    full:  "img/2026murmurios/full/full_54.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_55.jpg",
    full:  "img/2026murmurios/full/full_55.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_56.jpg",
    full:  "img/2026murmurios/full/full_56.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_57.jpg",
    full:  "img/2026murmurios/full/full_57.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_58.jpg",
    full:  "img/2026murmurios/full/full_58.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_59.jpg",
    full:  "img/2026murmurios/full/full_59.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_60.jpg",
    full:  "img/2026murmurios/full/full_60.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_61.jpg",
    full:  "img/2026murmurios/full/full_61.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_62.jpg",
    full:  "img/2026murmurios/full/full_62.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_63.jpg",
    full:  "img/2026murmurios/full/full_63.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_64.jpg",
    full:  "img/2026murmurios/full/full_64.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_65.jpg",
    full:  "img/2026murmurios/full/full_65.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_66.jpg",
    full:  "img/2026murmurios/full/full_66.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_67.jpg",
    full:  "img/2026murmurios/full/full_67.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_68.jpg",
    full:  "img/2026murmurios/full/full_68.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_69.jpg",
    full:  "img/2026murmurios/full/full_69.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_70.jpg",
    full:  "img/2026murmurios/full/full_70.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_71.jpg",
    full:  "img/2026murmurios/full/full_71.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_72.jpg",
    full:  "img/2026murmurios/full/full_72.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_73.jpg",
    full:  "img/2026murmurios/full/full_73.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_74.jpg",
    full:  "img/2026murmurios/full/full_74.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_75.jpg",
    full:  "img/2026murmurios/full/full_75.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_76.jpg",
    full:  "img/2026murmurios/full/full_76.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_77.jpg",
    full:  "img/2026murmurios/full/full_77.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_78.jpg",
    full:  "img/2026murmurios/full/full_78.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_79.jpg",
    full:  "img/2026murmurios/full/full_79.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_80.jpg",
    full:  "img/2026murmurios/full/full_80.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  

  // ... adiciona as tuas fotos de destaque aqui
  
];