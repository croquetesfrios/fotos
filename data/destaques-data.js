// Página principal — as fotos aparecem em ordem aleatória a cada visita.
const randomOrder = true;

const images = [
  {
    thumb: "img/2026cabaret/thumbs/thumb_01.jpg",
    full:  "img/2026cabaret/full/full_01.jpg",
    title: "Cabaret, Chapitô — 2026"
  },
  {
    thumb: "img/2026cabaret/thumbs/thumb_05.jpg",
    full:  "img/2026cabaret/full/full_05.jpg",
    title: "Cabaret, Chapitô — 2026"
  },
  {
    thumb: "img/2026cabaret/thumbs/thumb_13.jpg",
    full:  "img/2026cabaret/full/full_13.jpg",
    title: "Cabaret, Chapitô — 2026"
  },
  {
    thumb: "img/2026cabaret/thumbs/thumb_16.jpg",
    full:  "img/2026cabaret/full/full_16.jpg",
    title: "Cabaret, Chapitô — 2026"
  },
  {
    thumb: "img/2026dmt/thumbs/thumb_01.jpg",
    full:  "img/2026dmt/full/full_01.jpg",
    title: "Dia Mundial do Teatro, Chapitô — 2026"
  },
  {
    thumb: "img/2026dmt/thumbs/thumb_03.jpg",
    full:  "img/2026dmt/full/full_03.jpg",
    title: "Dia Mundial do Teatro, Chapitô — 2026"
  },
  {
    thumb: "img/2026dmt/thumbs/thumb_06.jpg",
    full:  "img/2026dmt/full/full_06.jpg",
    title: "Dia Mundial do Teatro, Chapitô — 2026"
  },
  {
    thumb: "img/2026dmt/thumbs/thumb_19.jpg",
    full:  "img/2026dmt/full/full_19.jpg",
    title: "Dia Mundial do Teatro, Chapitô — 2026"
  },
  {
    thumb: "img/2026mostra/thumbs/thumb_01.jpg",
    full:  "img/2026mostra/full/full_01.jpg",
    title: "Mostra Técnica, Chapitô — 2026"
  },
  {
    thumb: "img/2026mostra/thumbs/thumb_04.jpg",
    full:  "img/2026mostra/full/full_04.jpg",
    title: "Mostra Técnica, Chapitô — 2026"
  },
  {
    thumb: "img/2026mostra/thumbs/thumb_05.jpg",
    full:  "img/2026mostra/full/full_05.jpg",
    title: "Mostra Técnica, Chapitô — 2026"
  },
  {
    thumb: "img/2026mostra/thumbs/thumb_15.jpg",
    full:  "img/2026mostra/full/full_15.jpg",
    title: "Mostra Técnica, Chapitô — 2026"
  },
  {
    thumb: "img/202625abril/thumbs/thumb_02.jpg",
    full:  "img/202625abril/full/full_02.jpg",
    title: "25 de Abril, Chapitô — 2026"
  },
  {
    thumb: "img/202625abril/thumbs/thumb_03.jpg",
    full:  "img/202625abril/full/full_03.jpg",
    title: "25 de Abril, Chapitô — 2026"
  },
  {
    thumb: "img/202625abril/thumbs/thumb_07.jpg",
    full:  "img/202625abril/full/full_07.jpg",
    title: "25 de Abril, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_03.jpg",
    full:  "img/2026murmurios/full/full_03.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_08.jpg",
    full:  "img/2026murmurios/full/full_08.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_10.jpg",
    full:  "img/2026murmurios/full/full_10.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },{
    thumb: "img/2026murmurios/thumbs/thumb_12.jpg",
    full:  "img/2026murmurios/full/full_12.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_26.jpg",
    full:  "img/2026murmurios/full/full_26.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_37.jpg",
    full:  "img/2026murmurios/full/full_37.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_41.jpg",
    full:  "img/2026murmurios/full/full_41.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_54.jpg",
    full:  "img/2026murmurios/full/full_54.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_01.jpg",
    full:  "img/2024frio/full/full_01.jpg",
    title: "Frio, Norte Europa — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_05.jpg",
    full:  "img/2024frio/full/full_05.jpg",
    title: "Frio, Norte Europa — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_09.jpg",
    full:  "img/2024frio/full/full_09.jpg",
    title: "Frio, Norte Europa — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_10.jpg",
    full:  "img/2024frio/full/full_10.jpg",
    title: "Frio, Norte Europa — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_18.jpg",
    full:  "img/2024frio/full/full_18.jpg",
    title: "Frio, Norte Europa — 2024"
  },

  // ... adiciona as tuas fotos de destaque aqui
  
];