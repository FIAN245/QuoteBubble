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

const colors = [
    "linear-gradient(135deg, #ff7eb3, #ff758c)",
    "linear-gradient(135deg, #6a85b6, #bac8e0)",
    "linear-gradient(135deg, #42e695, #3bb2b8)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #fddb92, #d1fdff)"
];

document.body.addEventListener("click", (e) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    // Kutipan acak
    bubble.innerText = quotes[Math.floor(Math.random() * quotes.length)];

    // Posisi awal
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;

    // Warna acak
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Ukuran font acak
    bubble.style.fontSize = `${14 + Math.floor(Math.random() * 7)}px`;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
});
