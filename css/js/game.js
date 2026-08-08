const modal = document.getElementById("modal");
const content = document.getElementById("modalContent");
const close = document.getElementById("close");

function sound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.value = 520;
    gain.gain.value = 0.06;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
}

function show(title, text) {
    sound();

    content.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
    `;

    modal.classList.remove("hidden");
}

document.querySelectorAll(".buttons button").forEach(button => {

    button.addEventListener("click", () => {

        const action = button.dataset.action;

        if (action === "new") {

            show(
                "🏝️ Добро пожаловать!",
                "Ты потерпел кораблекрушение и оказался на загадочном острове. Но это только начало приключения! 😈"
            );

        }

        if (action === "continue") {

            show(
                "💾 Сохранение",
                "Сохранений пока нет. Начни новую игру — скоро здесь появится настоящий прогресс."
            );

        }

        if (action === "settings") {

            show(
                "⚙️ Настройки",
                "🔊 Звук: ВКЛ<br>🎵 Музыка: ВКЛ<br><br>Полные настройки добавим в следующей версии."
            );

        }

    });

});

close.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.add("hidden");
    }

});
