window.addEventListener("DOMContentLoaded", (event) => {
    const hoverClasses = ["bg-white", "scale-[2.5]"];
    const circle = document.getElementById("circle");
  
    document.addEventListener("mousemove", (event) => {
      const { offsetHeight, offsetWidth } = circle;
  
      event.target.tagName === "A"
        ? circle.classList.add(...hoverClasses)
        : circle.classList.remove(...hoverClasses);
  
      setTimeout(() => {
        circle.style.left = `${event.pageX - offsetWidth / 2}px`;
        circle.style.top = `${event.pageY - offsetHeight / 2}px`;
      }, 20);
    });
  });