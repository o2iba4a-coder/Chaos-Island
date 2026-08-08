// ========================================
// 🏝️ CHAOS ISLAND — GAME.JS
// ЧАСТЬ 1: ОСНОВА И НАЧАЛО ПРИКЛЮЧЕНИЯ
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Получаем элементы из index.html
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");
    const close = document.getElementById("close");

    // ----------------------------------------
    // 🔊 ЗВУК КНОПОК
    // ----------------------------------------

    function sound() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;

            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.frequency.value = 520;
            gain.gain.value = 0.05;

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch (error) {
            console.log("Звук недоступен");
        }
    }

    // ----------------------------------------
    // 🏝️ НАЧАЛО ПРИКЛЮЧЕНИЯ
    // ----------------------------------------

    function startAdventure() {

        sound();

        const scene = document.createElement("div");
        scene.id = "adventureScene";

        scene.innerHTML = `
            <div class="adventure-content">

                <div class="storm">🌊</div>

                <div class="story-icon">🚢</div>

                <h1>КОРАБЛЕКРУШЕНИЕ</h1>

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
                    "🌊 Огромная волна ударяет по кораблю!<br><br>💥 БУУУМ!";

            } else if (step === 2) {
                text.innerHTML =
                    "Ты падаешь на палубу...<br><br>" +
                    "Всё вокруг становится тёмным...";

            } else if (step === 3) {
                text.innerHTML =
                    "Ты открываешь глаза...<br><br>" +
                    "Перед тобой неизвестный остров.";

            } else if (step === 4) {
                text.innerHTML =
                    "На берегу лежит твой рюкзак.<br><br>" +
                    "Но рядом слышится странный звук...";

            } else if (step === 5) {
                text.innerHTML =
                    "Ты медленно поворачиваешься...<br><br>" +
                    "👀 Кто-то наблюдает за тобой.";

            } else {
                scene.remove();
                showQuiz();
            }

        });
    }

    // ----------------------------------------
    // 🎮 КНОПКИ ГЛАВНОГО МЕНЮ
    // ----------------------------------------

    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", () => {

            const action = button.dataset.action;

            if (action === "new") {
                startAdventure();
            }

            if (action === "continue") {
                show(
                    "💾 Сохранение",
                    "Сохранений пока нет.<br><br>Начни новую игру!"
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

    // ----------------------------------------
    // 🪟 ОКНО
    // ----------------------------------------

    function show(title, text) {

        if (!modal || !content) return;

        content.innerHTML = `
            <h2>${title}</h2>
            <p>${text}</p>
        `;

        modal.classList.remove("hidden");
    }

    if (close && modal) {

        close.addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                modal.classList.add("hidden");
            }

        });

    }

});
// ========================================
// 🏝️ ЧАСТЬ 2 — ПЕРВАЯ ЗАГАДКА И ОСТРОВ
// ========================================

function showQuiz() {

    const quiz = document.createElement("div");

    quiz.id = "quizScene";

    quiz.innerHTML = `
        <div class="quiz-box">

            <div class="quiz-icon">🗿</div>

            <h1>ЗАГАДКА ОСТРОВА</h1>

            <p>
                Ты находишь старый камень с надписью.
                На нём появляется вопрос...
            </p>

            <h2>
                Какой предмет важнее всего для выживания?
            </h2>

            <div class="quiz-answers">

                <button data-answer="wrong">
                    🪙 Золото
                </button>

                <button data-answer="wrong">
                    💎 Алмаз
                </button>

                <button data-answer="correct">
                    💧 Вода
                </button>

                <button data-answer="wrong">
                    📱 Телефон
                </button>

            </div>

            <p id="quizResult"></p>

        </div>
    `;

    document.body.appendChild(quiz);

    const buttons = quiz.querySelectorAll(".quiz-answers button");
    const result = quiz.querySelector("#quizResult");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const answer = button.dataset.answer;

            if (answer === "correct") {

                result.innerHTML =
                    "✅ Правильно! Вода — самое важное для выживания.";

                button.disabled = true;

                setTimeout(() => {
                    quiz.remove();
                    showIsland();
                }, 1500);

            } else {

                result.innerHTML =
                    "❌ Неправильно... Попробуй ещё раз.";

            }

        });

    });
}


// ========================================
// 🌴 НАСТОЯЩИЙ ЭКРАН ОСТРОВА
// ========================================

function showIsland() {

    const island = document.createElement("div");

    island.id = "islandScene";

    island.innerHTML = `

        <div class="island-game">

            <div class="island-top">

                <div class="location">
                    📍 Неизвестный остров
                </div>

                <div class="day">
                    ☀️ День 1
                </div>

            </div>


            <div class="island-world">

                <div class="sun">☀️</div>

                <div class="cloud cloud-one">☁️</div>
                <div class="cloud cloud-two">☁️</div>

                <div class="island-mountain">
                    ⛰️
                </div>

                <div class="palm-tree">
                    🌴
                </div>

                <div class="player">
                    🧍
                </div>

                <div class="boat">
                    🚤
                </div>

                <div class="chest">
                    📦
                </div>

            </div>


            <div class="island-bottom">

                <div class="stats">

                    <div>
                        ❤️
                        <span>100</span>
                    </div>

                    <div>
                        💧
                        <span>100</span>
                    </div>

                    <div>
                        🍖
                        <span>100</span>
                    </div>

                    <div>
                        ⚡
                        <span>100</span>
                    </div>

                </div>


                <div class="message">
                    🏝️ Ты выжил после кораблекрушения.
                    Найди способ покинуть остров.
                </div>


                <div class="island-buttons">

                    <button id="exploreButton">
                        🔍 Исследовать
                    </button>

                    <button id="inventoryButton">
                        🎒 Рюкзак
                    </button>

                </div>

            </div>

        </div>
    `;

    document.body.appendChild(island);


    // ========================================
    // 🔍 ИССЛЕДОВАТЬ
    // ========================================

    const exploreButton =
        island.querySelector("#exploreButton");

    exploreButton.addEventListener("click", () => {

        exploreButton.innerHTML = "🔎 Ищем...";

        setTimeout(() => {

            exploreButton.innerHTML =
                "🌴 Найден кокос!";

            const message =
                island.querySelector(".message");

            message.innerHTML =
                "🥥 Ты нашёл кокос возле пальмы. " +
                "Это может пригодиться.";

        }, 1000);

    });


    // ========================================
    // 🎒 РЮКЗАК
    // ========================================

    const inventoryButton =
        island.querySelector("#inventoryButton");

    inventoryButton.addEventListener("click", () => {

        alert(
            "🎒 РЮКЗАК\n\n" +
            "Пока пусто.\n\n" +
            "Исследуй остров, чтобы найти предметы."
        );

    });

    }
// ========================================
// 🎮 ЧАСТЬ 4 — УПРАВЛЕНИЕ И ИНТЕРАКТИВНОСТЬ
// ========================================

function activateIslandControls(island) {

    const player = island.querySelector(".player");
    const message = island.querySelector(".message");

    let playerX = 48;

    // ----------------------------------------
    // 🚶 ДВИЖЕНИЕ ГЕРОЯ
    // ----------------------------------------

    function movePlayer(direction) {

        if (direction === "left") {
            playerX -= 5;
        }

        if (direction === "right") {
            playerX += 5;
        }

        // Не даём герою уйти за экран
        playerX = Math.max(5, Math.min(90, playerX));

        player.style.left = playerX + "%";

        player.style.transform =
            direction === "left"
                ? "scaleX(-1)"
                : "scaleX(1)";
    }


    // ----------------------------------------
    // ⌨️ КЛАВИАТУРА
    // ----------------------------------------

    document.addEventListener("keydown", event => {

        if (!document.body.contains(island)) return;

        if (event.key === "ArrowLeft" || event.key === "a") {
            movePlayer("left");
        }

        if (event.key === "ArrowRight" || event.key === "d") {
            movePlayer("right");
        }

    });


    // ----------------------------------------
    // 📱 КНОПКИ ДЛЯ ТЕЛЕФОНА
    // ----------------------------------------

    const controls = document.createElement("div");

    controls.className = "mobile-controls";

    controls.innerHTML = `
        <button id="leftControl">⬅️</button>
        <button id="actionControl">👋</button>
        <button id="rightControl">➡️</button>
    `;

    island.appendChild(controls);


    island.querySelector("#leftControl")
        .addEventListener("click", () => {

            movePlayer("left");

        });


    island.querySelector("#rightControl")
        .addEventListener("click", () => {

            movePlayer("right");

        });


    // ----------------------------------------
    // 👋 КНОПКА ДЕЙСТВИЯ
    // ----------------------------------------

    island.querySelector("#actionControl")
        .addEventListener("click", () => {

            message.innerHTML =
                "👋 Ты осматриваешься вокруг... " +
                "Кажется, здесь что-то есть.";

        });


    // ----------------------------------------
    // 📦 СУНДУК
    // ----------------------------------------

    const chest = island.querySelector(".chest");

    chest.addEventListener("click", () => {

        message.innerHTML =
            "📦 Ты нашёл старый сундук! " +
            "Но он заперт... 🔒";

    });


    // ----------------------------------------
    // 🚤 ЛОДКА
    // ----------------------------------------

    const boat = island.querySelector(".boat");

    boat.addEventListener("click", () => {

        message.innerHTML =
            "🚤 Лодка повреждена. " +
            "Нужно найти материалы для ремонта.";

    });


    // ----------------------------------------
    // 🌴 ПАЛЬМА
    // ----------------------------------------

    const palm = island.querySelector(".palm-tree");

    palm.addEventListener("click", () => {

        message.innerHTML =
            "🌴 Ты осматриваешь пальму... " +
            "🥥 Один кокос почти падает тебе на голову! 😂";

    });

}


// ========================================
// 🔗 ЗАПУСК УПРАВЛЕНИЯ
// ========================================

const originalShowIsland = showIsland;

showIsland = function() {

    originalShowIsland();

    const island =
        document.getElementById("islandScene");

    if (island) {
        activateIslandControls(island);
    }

};
