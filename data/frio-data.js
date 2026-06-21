// DMT, Chapitô — 2026
// Cabaret, Chapitô — 2026
// Página principal — as fotos aparecem em ordem aleatória a cada visita.
const randomOrder = true;

const images = [
  {
    thumb: "img/2024frio/thumbs/thumb_01.jpg",
    full:  "img/2024frio/full/full_01.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_02.jpg",
    full:  "img/2024frio/full/full_02.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_03.jpg",
    full:  "img/2024frio/full/full_03.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_04.jpg",
    full:  "img/2024frio/full/full_04.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_05.jpg",
    full:  "img/2024frio/full/full_05.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_06.jpg",
    full:  "img/2024frio/full/full_06.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_07.jpg",
    full:  "img/2024frio/full/full_07.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_08.jpg",
    full:  "img/2024frio/full/full_08.jpg",
    title: "Copenhaga, Dinamarca — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_09.jpg",
    full:  "img/2024frio/full/full_09.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_10.jpg",
    full:  "img/2024frio/full/full_10.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_11.jpg",
    full:  "img/2024frio/full/full_11.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_12.jpg",
    full:  "img/2024frio/full/full_12.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_13.jpg",
    full:  "img/2024frio/full/full_13.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_14.jpg",
    full:  "img/2024frio/full/full_14.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_15.jpg",
    full:  "img/2024frio/full/full_15.jpg",
    title: "Stavanger, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_16.jpg",
    full:  "img/2024frio/full/full_16.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_17.jpg",
    full:  "img/2024frio/full/full_17.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_18.jpg",
    full:  "img/2024frio/full/full_18.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_19.jpg",
    full:  "img/2024frio/full/full_19.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_20.jpg",
    full:  "img/2024frio/full/full_20.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_21.jpg",
    full:  "img/2024frio/full/full_21.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_22.jpg",
    full:  "img/2024frio/full/full_22.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  {
    thumb: "img/2024frio/thumbs/thumb_23.jpg",
    full:  "img/2024frio/full/full_23.jpg",
    title: "Eidfjord, Noruega — 2024"
  },
  
  // ... adiciona as tuas fotos de destaque aqui
];