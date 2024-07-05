const hmaMenu = document.getElementById("ham-menu");
const navMobile = document.getElementById("nav-mobile");
const closeNav = document.getElementById("close-btn");

hmaMenu.addEventListener("click", () => {
  navMobile.classList.add("active");
});

closeNav.addEventListener("click", () => {
  navMobile.classList.remove("active");
});

// faw

function toggleFaq(faqNumber) {
  for (let i = 1; i <= 3; i++) {
    const faqAnswer = document.getElementById("faqs" + i);
    if (i === faqNumber) {
      // Toggle the selected FAQ
      faqAnswer.classList.toggle("show-answer");
      document
        .querySelector(".faq-item:nth-child(" + i + ") .faq-questions")
        .classList.toggle("expanded");
    } else {
      // Close other FAQs
      document.getElementById("faqs" + i).classList.remove("show-answer");
      document
        .querySelector(".faq-item:nth-child(" + i + ") .faq-questions")
        .classList.remove("expanded");
    }
  }
}
