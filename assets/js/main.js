function locoScroll() {
  if (window.innerWidth > 1000) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      lerp: 0.05,
      multiplier: 0.5,
    });
  } else {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      lerp: 1,
      multiplier: 1,
    });
  }
}

window.addEventListener("load", locoScroll);
window.addEventListener("scroll", locoScroll);
window.addEventListener("resize", locoScroll);

const paragraphs = document.querySelectorAll(".paragraph");

paragraphs.forEach((paragraph) => {
  let paraInnerTxt = "";
  let pSpan = paragraph.textContent.trim().split("");
  for (i = 0; i < pSpan.length; i++) {
    if (pSpan[i] === " ") {
      paraInnerTxt += `<span class="inline-block w-2">${pSpan[i]}</span>`;
    } else {
      paraInnerTxt += `<span class="paraspan inline-block translate-y-[200%]">${pSpan[i]}</span>`;
    }
  }
  paragraph.innerHTML = paraInnerTxt;
});

function paraInView() {
  paragraphs.forEach((para) => {
    const rect = para.getBoundingClientRect();
    const paraSpans = para.querySelectorAll(".paraspan");
    paraSpans.forEach((paraSpan, id) => {
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        paraSpan.style.transition = "0.7s";
        setTimeout(() => {
          paraSpan.classList.remove("translate-y-[200%]");
        }, id * 20);
      } else {
        paraSpan.style.transition = "0s";
        setTimeout(() => {
          paraSpan.classList.add("translate-y-[200%]");
        }, id * 20);
      }
    });
  });
}

window.addEventListener("scroll", paraInView);
window.addEventListener("load", paraInView);

paragraphs.forEach((para) => {
  para.addEventListener("mouseover", () => {
    const paraSpans = para.querySelectorAll(".paraspan");
    paraSpans.forEach((paraSpan, id) => {
      paraSpan.style.transition = "0.7s";
      setTimeout(() => {
        paraSpan.classList.add("-scale-x-100");
      }, id * 30);
    });
  });

  para.addEventListener("mouseleave", () => {
    const paraSpans = para.querySelectorAll(".paraspan");
    paraSpans.forEach((paraSpan, id) => {
      paraSpan.style.transition = "0.7s";
      setTimeout(() => {
        paraSpan.classList.remove("-scale-x-100");
      }, id * 30);
    });
  });
});

const xval = document.getElementById("xval");
const yval = document.getElementById("yval");

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  xval.innerHTML = `x - ${x}`;
  yval.innerHTML = `y - ${y}`;
});

const cursor = document.getElementById("cursor");

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  cursor.style.display = "block";
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

window.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
  console.log("mouse out");
});

const loaderBoxs = document.querySelectorAll(".loaderBox");

loaderBoxs.forEach((loaderBox, index) => {
  setTimeout(() => {
    loaderBox.classList.remove("h-screen");
    loaderBox.classList.add("h-0");
  }, index * 160);
});
