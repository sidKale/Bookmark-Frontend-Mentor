"use strict";

const featuresTab = document.querySelectorAll(".features-tab");
const featuresContainer = document.querySelector(".features-tab-container");
const featuresContent = document.querySelectorAll(".features-content");

featuresContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".features-tab");
  if (!clicked) return;

  featuresTab.forEach((t) => t.classList.remove("features-tab--active"));
  featuresContent.forEach((c) =>
    c.classList.remove("features-content--active")
  );

  clicked.classList.add("features-tab--active");

  document
    .querySelector(`.features-content-${clicked.dataset.tab}`)
    .classList.add("features-content--active");
});

document.querySelector(".email-input").addEventListener("click", function () {
  document.querySelector(".email-input").placeholder = "example@email/com";
  document.querySelector(".error-message").style.display = "block";
  document.querySelector(".error-icon").style.display = "block";
  document.querySelector(".btn-contact").style.left = "45%";
});
