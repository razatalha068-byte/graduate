
const poster = document.getElementById("poster");
const sparkleBox = document.getElementById("sparkles");
const celebrate = document.getElementById("celebrate");
const message = document.getElementById("message");

/* Create magical sparkles */

for (let i = 0; i < 55; i++) {

    const star = document.createElement("span");

    star.className = "sparkle";
    star.textContent = "✦";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize =
        (Math.random() * 15 + 7) + "px";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    sparkleBox.appendChild(star);
}

/* 3D mouse movement */

poster.addEventListener("mousemove", function(event) {

    const rect = poster.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 100;
    const rotateX = (centerY - y) / 100;

    poster.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;

});

poster.addEventListener("mouseleave", function() {

    poster.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";

});

/* Celebration button */

celebrate.addEventListener("click", function() {

    const emojis = [
        "🎉", "🎓", "✨", "💖",
        "🎊", "🌸", "🦋", "🌹"
    ];

    for (let i = 0; i < 160; i++) {

        const item = document.createElement("div");

        item.className = "confetti";

        item.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.left = Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 25 + 12) + "px";

        item.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(item);

        setTimeout(() => item.remove(), 5500);
    }

    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 4000);

});
