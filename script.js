// 🔀 Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
      [array[j], array[i]];
  }

  return array;
}

const gallery = document.getElementById("gallery");

// Se o data file definir `randomOrder = true`, baralha. Caso contrário, mantém a ordem.
const shuffledImages =
  (typeof randomOrder !== "undefined" && randomOrder)
    ? shuffle([...images])
    : [...images];


// ── Galeria ─────────────────────────────────────────────
shuffledImages.forEach((item, index) => {

  const div = document.createElement("div");

  div.classList.add("item");

  div.dataset.category =
    item.thumb.split('/')[1];

  const img = document.createElement("img");

  img.src = item.thumb;
  img.loading = "lazy";
  img.alt = item.title;

  img.addEventListener("click", () =>
    openViewer(index)
  );

  const overlay =
    document.createElement("div");

  overlay.classList.add("overlay");

  overlay.textContent = item.title;

  div.appendChild(img);
  div.appendChild(overlay);

  gallery.appendChild(div);

});


// ── Viewer ──────────────────────────────────────────────
const viewer =
  document.getElementById("viewer");

const track =
  document.getElementById("viewerTrack");

const prevImg =
  document.getElementById("prevImg");

const currentImg =
  document.getElementById("currentImg");

const nextImg =
  document.getElementById("nextImg");

const viewerTitle =
  document.getElementById("viewerTitle");

const viewerCounter =
  document.getElementById("viewerCounter");

let currentIndex = 0;

let isAnimating = false;


// ── Atualiza imagens do carousel ───────────────────────
function updateViewer() {

  const prevIndex =
    (currentIndex - 1 + shuffledImages.length) %
    shuffledImages.length;

  const nextIndex =
    (currentIndex + 1) %
    shuffledImages.length;

  prevImg.src =
    shuffledImages[prevIndex].full;

  currentImg.src =
    shuffledImages[currentIndex].full;

  nextImg.src =
    shuffledImages[nextIndex].full;

  viewerTitle.textContent =
    shuffledImages[currentIndex].title;

  updateCounter();
}


// ── Abrir viewer ───────────────────────────────────────
function openViewer(index) {

  currentIndex = index;

  updateViewer();

  track.style.transition = "none";

  track.style.transform =
    "translateX(-33.3333%)";

  viewer.classList.add("active");

  viewer.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}


// ── Fechar viewer ──────────────────────────────────────
function closeViewer() {

  viewer.classList.remove("active");

  viewer.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

  setTimeout(() => {

    prevImg.src = "";
    currentImg.src = "";
    nextImg.src = "";

  }, 300);
}


// ── Navegação ──────────────────────────────────────────
function navigate(dir) {

  if (isAnimating) return;

  isAnimating = true;

  track.style.transition =
    "transform 0.28s ease";

  // Próxima
  if (dir > 0) {

    track.style.transform =
      "translateX(-66.6666%)";

    setTimeout(() => {

      currentIndex =
        (currentIndex + 1) %
        shuffledImages.length;

      updateViewer();

      track.style.transition =
        "none";

      track.style.transform =
        "translateX(-33.3333%)";

      isAnimating = false;

    }, 280);

  }

  // Anterior
  else {

    track.style.transform =
      "translateX(0%)";

    setTimeout(() => {

      currentIndex =
        (currentIndex - 1 + shuffledImages.length) %
        shuffledImages.length;

      updateViewer();

      track.style.transition =
        "none";

      track.style.transform =
        "translateX(-33.3333%)";

      isAnimating = false;

    }, 280);

  }
}


// ── Contador ───────────────────────────────────────────
function updateCounter() {

  viewerCounter.textContent =
    `${currentIndex + 1} / ${shuffledImages.length}`;

}


// ── Botões ─────────────────────────────────────────────
document
  .getElementById("viewerClose")
  .addEventListener(
    "click",
    closeViewer
  );

document
  .getElementById("viewerPrev")
  .addEventListener(
    "click",
    () => navigate(-1)
  );

document
  .getElementById("viewerNext")
  .addEventListener(
    "click",
    () => navigate(1)
  );


// ── Fechar ao clicar no fundo ──────────────────────────
viewer.addEventListener("click", (e) => {

  if (
    e.target === viewer ||
    e.target ===
      document.getElementById("viewerInner")
  ) {

    closeViewer();

  }

});


// ── Teclado ────────────────────────────────────────────
document.addEventListener("keydown", (e) => {

  if (
    !viewer.classList.contains("active")
  ) return;

  if (e.key === "Escape") {
    closeViewer();
  }

  if (e.key === "ArrowRight") {
    navigate(1);
  }

  if (e.key === "ArrowLeft") {
    navigate(-1);
  }

});


// ── Swipe real mobile ──────────────────────────────────
let startX = 0;

let currentTranslate = 0;

let isDragging = false;


viewer.addEventListener("touchstart", (e) => {

  if (isAnimating) return;

  startX =
    e.touches[0].clientX;

  isDragging = true;

  track.style.transition =
    "none";

}, { passive: true });


viewer.addEventListener("touchmove", (e) => {

  if (!isDragging) return;

  const dx =
    e.touches[0].clientX - startX;

  currentTranslate = dx;

  track.style.transform =
    `translateX(calc(-33.3333% + ${dx}px))`;

}, { passive: true });


viewer.addEventListener("touchend", () => {

  if (!isDragging) return;

  isDragging = false;

  const threshold = 80;

  track.style.transition =
    "transform 0.28s ease";


  // Próxima
  if (currentTranslate < -threshold) {

    track.style.transform =
      "translateX(-66.6666%)";

    setTimeout(() => {

      currentIndex =
        (currentIndex + 1) %
        shuffledImages.length;

      updateViewer();

      track.style.transition =
        "none";

      track.style.transform =
        "translateX(-33.3333%)";

    }, 280);

  }

  // Anterior
  else if (currentTranslate > threshold) {

    track.style.transform =
      "translateX(0%)";

    setTimeout(() => {

      currentIndex =
        (currentIndex - 1 + shuffledImages.length) %
        shuffledImages.length;

      updateViewer();

      track.style.transition =
        "none";

      track.style.transform =
        "translateX(-33.3333%)";

    }, 280);

  }

  // Volta ao centro
  else {

    track.style.transform =
      "translateX(-33.3333%)";

  }

  currentTranslate = 0;

}, { passive: true });