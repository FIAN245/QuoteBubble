// Array kutipan bahasa Indonesia
const quotes = [
    "Jangan menyerah, awal yang sulit akan membawamu ke akhir yang indah.",
    "Waktu terbaik untuk menanam pohon adalah 20 tahun lalu, waktu terbaik kedua adalah sekarang.",
    "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    "Hidup itu seperti bersepeda, untuk menjaga keseimbangan kamu harus terus bergerak.",
    "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
    "Berhenti membandingkan dirimu dengan orang lain, fokuslah pada perjalananmu.",
    "Kebahagiaan datang ketika kamu bersyukur atas apa yang kamu miliki."
];

// Warna bubble gradasi acak
const colors = [
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #fccb90, #d57eeb)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
    "linear-gradient(135deg, #ff8177, #ff867a)",
    "linear-gradient(135deg, #6a11cb, #2575fc)"
];

let ignoreClick = false; // flag mencegah double bubble di mobile

function createBubble(text, x, y) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerText = text;

    const bubbleWidth = 200;
    const bubbleHeight = 50;
    const posX = Math.min(x, window.innerWidth - bubbleWidth);
    const posY = Math.min(y, window.innerHeight - bubbleHeight);

    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

// Event touch untuk mobile
document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        createBubble(randomQuote, touch.clientX, touch.clientY);
        ignoreClick = true;       // cegah double bubble
        e.preventDefault();       // hentikan click default setelah touch
    }
}, {passive: false});

// Event click untuk desktop
document.addEventListener("click", (e) => {
    if (ignoreClick) {
        ignoreClick = false; // reset flag tanpa memunculkan bubble
        return;
    }
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    createBubble(randomQuote, e.clientX, e.clientY);
});
