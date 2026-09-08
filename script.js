(() => {
  const layer = document.getElementById("rika-layer");
  const source = document.getElementById("nipaa-source");

  document.addEventListener("click", (e) => {
    const rika = document.createElement("img");
    rika.className = "rika";
    rika.src = "rika.png";
    rika.alt = "";

    const size = 120 + Math.random() * 180;
    rika.style.width = size + "px";
    rika.style.left = (e.clientX - size/2 + (Math.random()-0.5)*120) + "px";
    rika.style.top = (e.clientY - size/2 + (Math.random()-0.5)*120) + "px";
    rika.style.transform = "rotate(" + ((Math.random()-0.5)*20) + "deg)";
    layer.appendChild(rika);

    const sound = source.cloneNode(true);
    sound.currentTime = 0;
    sound.play().catch(() => {});
    sound.addEventListener("ended", () => sound.remove());
    sound.addEventListener("error", () => sound.remove());
    document.body.appendChild(sound);

    setTimeout(() => rika.remove(), 1000);
  });
})();
