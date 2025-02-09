const febHolidays = [
   "Dear [Her Name] 💖,",
  "Warm wishes straight from my heart ❤️.",
  "You are my shining star ✨.",
  "Every moment with you brings joy 💭.",
  "Life feels brighter with you 🌹.",
  "You hold a beautiful place in my heart 💞.",
  "You light up my world 🌞.",
  "Our bond is simply unique 🔗.",
  "Distance fades when souls are near 💓.",
  "You're my precious delight 🌷.",
  "Amazing in every little way 🌟.",
  "Grateful for every shared smile 🙏.",
  "Your spirit shines like sunrise 🌅.",
  "In quiet moments, you're my thought 🌙.",
  "Always here, always yours 🤝.",
  "No one compares to you 👑.",
  "I miss you with every beat ✨.",
  "Every memory with you feels golden 📸.",
  "This love circle is just for you 🔄.",
  "You are the music of my heart 🎶.",
  "Thankful our paths crossed 💫.",
  "Forever, you complete my soul ❤️."
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
