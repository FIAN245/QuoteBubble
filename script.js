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

document.body.addEventListener("click", (e) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
});
