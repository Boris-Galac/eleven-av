// PROMO VIDEO PLAYER

const promoVideo = document.querySelector(".promo-video");
promoVideo.controls = false;
const promoVideoPlayBtn = document.querySelector(".play-promo-video-btn");

promoVideoPlayBtn.addEventListener("click", (e) => {
  promoVideo.getAttribute("data-play");
  if (promoVideo.getAttribute("data-play") === "false") {
    promoVideo.setAttribute("data-play", "true");
    promoVideoPlayBtn.setAttribute("data-play-btn", "false");
    promoVideo.play();
  }
});
promoVideo.addEventListener("click", (e) => {
  if (promoVideo.getAttribute("data-play") === "true") {
    promoVideo.pause();
    promoVideo.setAttribute("data-play", "false");
    promoVideoPlayBtn.setAttribute("data-play-btn", "true");
  }
});

promoVideo.addEventListener("ended", (e) => {
  promoVideo.setAttribute("data-play", "false");
  promoVideoPlayBtn.setAttribute("data-play-btn", "true");
});

/// APPEAR LOGO ON SCROLL & PAGE INDICATOR

window.addEventListener("scroll", (e) => {
  const headerLogo = document.querySelector(".header__logo");
  const backToTop = document.querySelector(".scroll-to-top-btn");
  if (window.scrollY >= 250) {
    headerLogo.setAttribute("data-visible", "true");
    backToTop.setAttribute("data-visible", "true");
  } else {
    headerLogo.setAttribute("data-visible", "false");
    backToTop.setAttribute("data-visible", "false");
  }
  // page indicator
  let winScroll = window.scrollY;
  let height = document.body.scrollHeight - innerHeight;

  let scrolled = Math.ceil((winScroll / height) * 100);
  document.querySelector(".page-indicator").style = `
  height: 2px;
  width: ${scrolled}%;
  background-color: rgb(93 93 255);
  box-shadow: 0 0 8px 2px rgb(22 62 255);
  `;

  // scroll to top
  backToTop.addEventListener("click", (e) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
