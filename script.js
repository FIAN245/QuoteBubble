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

// Fungsi buat bubble
function createBubble(text) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerText = text;

    // Posisi acak
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 50);
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    document.body.appendChild(bubble);

    // Hapus setelah animasi
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

// Event klik
document.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    createBubble(randomQuote);
});
