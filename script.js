// Kutipan bahasa Indonesia
const quotes = [
    "Teruslah belajar, jangan berhenti.",
    "Kesuksesan datang dari usaha kecil yang konsisten.",
    "Setiap hari adalah kesempatan baru.",
    "Jangan takut mencoba hal baru.",
    "Kerja keras mengalahkan bakat.",
    "Kegagalan adalah guru terbaik.",
    "Hargai proses, bukan hanya hasil.",
    "Berbuat baik tidak pernah sia-sia.",
    "Waktu adalah aset paling berharga.",
    "Bermimpi besar, mulai dari langkah kecil."
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

document.body.addEventListener("click", (e) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    // Pilih kutipan acak
    bubble.innerText = quotes[Math.floor(Math.random() * quotes.length)];

    // Posisi klik
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;

    // Warna acak
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Ukuran font acak
    bubble.style.fontSize = `${14 + Math.floor(Math.random() * 7)}px`;

    document.body.appendChild(bubble);

    // Hapus bubble setelah 5 detik
    setTimeout(() => {
        bubble.remove();
    }, 5000);
});
