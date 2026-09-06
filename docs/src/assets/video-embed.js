// Click-to-play facade for embedded YouTube Shorts on Home. Each button shows
// a static thumbnail until clicked, so no YouTube script or cookie loads
// until the visitor opts in.
document.addEventListener("click", (event) => {
  const button = event.target.closest(".video-embed");
  if (!button) return;

  const videoId = button.dataset.videoId;
  const title = button.getAttribute("aria-label") || "YouTube video";

  const player = document.createElement("div");
  player.className = "video-embed video-embed--playing";
  player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  button.replaceWith(player);
});
