
const items = document.querySelectorAll(".portfolio-item");
const IMG_PATH = "/img/ Kitchen/";

const folders = {
  kitchen: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg" ],
  bathroom: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg"],
  living: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"],
  porch: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg"],
  vanity: ["1.jpg","2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"],
  wall: ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"],
};

const indexes = {};
const timers = {};

items.forEach(item => {
  const folder = item.dataset.folder;
  const speed = Number(item.dataset.speed) || 3000;

  indexes[folder] = 0;
  item.classList.add("fade-in");
  item.style.backgroundImage = `url(./img/${folder}/1.jpg)`;

  function startSlider() {
    timers[folder] = setInterval(() => {
      item.classList.remove("fade-in");
      item.classList.add("fade-out");

      setTimeout(() => {
        indexes[folder] =
          (indexes[folder] + 1) % folders[folder].length;

        item.style.backgroundImage =
          `url(./img/${folder}/${folders[folder][indexes[folder]]})`;

        item.classList.remove("fade-out");
        item.classList.add("fade-in");
      }, 700);
    }, speed);
  }

  function stopSlider() {
    clearInterval(timers[folder]);
  }

  item.addEventListener("mouseenter", stopSlider);
  item.addEventListener("mouseleave", startSlider);

  startSlider();
});
