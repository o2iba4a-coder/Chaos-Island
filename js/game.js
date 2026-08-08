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


// ================================
// НАЧАЛО ПРИКЛЮЧЕНИЯ
// ================================

function startAdventure() {

    sound();

    const scene = document.createElement("div");

    scene.id = "adventureScene";

    scene.innerHTML = `
        <div class="adventure-content">

            <div class="storm">
                🌊
            </div>

            <div class="story-icon">
                🚢
            </div>

            <h1>
                КОРАБЛЕКРУШЕНИЕ
            </h1>

            <p id="storyText">
                Ночь. Сильный шторм бушует вокруг корабля...
            </p>

            <button id="storyButton">
                ▶️ Продолжить
            </button>

        </div>
    `;

    document.body.appendChild(scene);

    const text = document.getElementById("storyText");
    const button = document.getElementById("storyButton");

    let step = 0;

    button.addEventListener("click", () => {

        sound();

        step++;

        if (step === 1) {

            text.innerHTML =
                "🌊 Огромная волна ударяет по кораблю!<br><br>" +
                "💥 БУУУМ!";

            document.querySelector(".story-icon").innerHTML = "💥";

        }

        else if (step === 2) {

            text.innerHTML =
                "Ты падаешь в воду...<br><br>" +
                "Всё вокруг становится тёмным... 🌊";

            document.querySelector(".story-icon").innerHTML = "🌊";

        }

        else if (step === 3) {

            text.innerHTML =
                "Ты открываешь глаза...<br><br>" +
                "Перед тобой неизвестный остров. 🏝️";

            document.querySelector(".story-icon").innerHTML = "🏝️";

        }

        else if (step === 4) {

            text.innerHTML =
                "На берегу лежит твой рюкзак. 🎒<br><br>" +
                "Но рядом слышится странный звук...";

            document.querySelector(".story-icon").innerHTML = "🎒";

            button.innerHTML = "👀 Осмотреться";

        }

        else if (step === 5) {

            text.innerHTML =
                "Ты медленно поворачиваешь голову...<br><br>" +
                "И видишь огромного краба. 🦀";

            document.querySelector(".story-icon").innerHTML = "🦀";

            button.innerHTML = "🦀 Подойти к крабу";

        }

        else if (step === 6) {

            text.innerHTML =
                "Краб смотрит на тебя и говорит:<br><br>" +
                "<b>«ЭЙ! Ты чего сюда припёрся?!» 😂</b>";

            document.querySelector(".story-icon").innerHTML = "🦀";

            button.innerHTML = "😂 Что ответить?";

        }

        else if (step === 7) {

            text.innerHTML =
                "Ты понимаешь одну вещь:<br><br>" +
                "<b>Этот остров явно НЕ необитаемый...</b> 😈";

            document.querySelector(".story-icon").innerHTML = "😈";

            button.innerHTML = "🏝️ Начать приключение";

        }

        else {

            scene.remove();

            showQuiz();

        }

    });

}


// ================================
// ПЕРВАЯ ВИКТОРИНА
// ================================

function showQuiz() {

    const quiz = document.createElement("div");

    quiz.id = "quizScene";

    quiz.innerHTML = `
        <div class="quiz-box">

            <div class="quiz-icon">
                🦀
            </div>

            <h1>
                Краб Боря
            </h1>

            <p>
                «Если хочешь пройти дальше,
                ответь на мой вопрос!» 😈
            </p>

            <h2>
                🌍 Какая планета ближе всего к Солнцу?
            </h2>

            <div class="answers">

                <button data-answer="wrong">
                    🌎 Земля
                </button>

                <button data-answer="wrong">
                    🔴 Марс
                </button>

                <button data-answer="correct">
                    ☀️ Меркурий
                </button>

                <button data-answer="wrong">
                    🪐 Юпитер
                </button>

            </div>

            <div id="quizResult"></div>

        </div>
    `;

    document.body.appendChild(quiz);

    document.querySelectorAll(".answers button").forEach(button => {

        button.addEventListener("click", () => {

            sound();

            const result =
                document.getElementById("quizResult");

            if (button.dataset.answer === "correct") {

                result.innerHTML =
                    "🎉 ПРАВИЛЬНО!<br><br>" +
                    "🦀 Боря: «Ладно, проходи!»";

            } else {

                result.innerHTML =
                    "😂 НЕПРАВИЛЬНО!<br><br>" +
                    "🦀 Боря: «Ха-ха! Попробуй ещё раз!»";

            }

        });

    });

}


// ================================
// СТАРОЕ МЕНЮ
// ================================

function show(title, text) {

    sound();

    content.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
    `;

    modal.classList.remove("hidden");
}


// ================================
// КНОПКИ МЕНЮ
// ================================

document.querySelectorAll(".buttons button").forEach(button => {

    button.addEventListener("click", () => {

        const action = button.dataset.action;

        if (action === "new") {

            modal.classList.add("hidden");

            startAdventure();

        }

        if (action === "continue") {

            show(
                "💾 Сохранение",
                "Сохранений пока нет. Начни новую игру!"
            );

        }

        if (action === "settings") {

            show(
                "⚙️ Настройки",
                "🔊 Звук: ВКЛ<br>" +
                "🎵 Музыка: ВКЛ"
            );

        }

    });

});


// ================================
// ЗАКРЫТИЕ ОКНА
// ================================

close.addEventListener("click", () => {

    modal.classList.add("hidden");

});

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.add("hidden");

    }

});
