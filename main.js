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

// SPLASH SCREEN AND AUTO SCROLL

window.addEventListener("load", (e) => {
  // Simulate loading time with setTimeout
  setTimeout(() => {
    // Hide the splash screen after all content loads
    document
      .querySelector(".splash-screen")
      .setAttribute("data-active", "false");

    // Scroll down after 1s
    setTimeout(() => {
      window.scrollTo(0, window.innerHeight); // Scroll down by 100vh
    }, 800);
  }, 1000); // Adjust the timeout based on your loading time
});

// ANIMATIONS

const observerElements = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right-left");
    }
    // else {
    //   entry.target.classList.remove("show-right-left");
    // }
  });
});

const hiddenRight = document.querySelectorAll(".right");
hiddenRight.forEach((el) => observerElements.observe(el));
const hiddenLeft = document.querySelectorAll(".left");
hiddenLeft.forEach((el) => observerElements.observe(el));
const oapcity = document.querySelectorAll(".opacity");
oapcity.forEach((el) => observerElements.observe(el));
