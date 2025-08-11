const sectionObserver = new IntersectionObserver((section, observer) => {
  section.forEach((element) => {
    //    element.target.style.transform = "scale(1)";
    if (element.isIntersecting) {
      element.target.style.transform = `scale(1)`;
      observer.unobserve(element.target);
    }
  });
}, {
    rootMargin: "50px"
});





document.querySelectorAll(".emersion").forEach(section => sectionObserver.observe(section));
