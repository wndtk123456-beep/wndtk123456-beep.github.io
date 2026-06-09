const revealNodes = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealNodes.forEach((node) => observer.observe(node));

const sectionSelect = document.querySelector("#sectionSelect");

if (sectionSelect) {
  sectionSelect.addEventListener("change", function () {
    const targetId = this.value;

    if (!targetId) return;

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      this.value = "";
    }
  });
}
