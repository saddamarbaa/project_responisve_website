const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  // console.log("test");
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  // console.log(expanded);
  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);
