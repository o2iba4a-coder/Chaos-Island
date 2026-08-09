// ========================================
// 🏝️ CHAOS ISLAND — НОВАЯ ВЕРСИЯ
// ЧАСТЬ 1 — ОСНОВА ИГРЫ
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🏝️ Chaos Island: JS работает!");

    // Ищем кнопку Новой игры несколькими способами
    const newGameButton =
        document.querySelector(".new-game") ||
        document.querySelector("#newGame") ||
        document.querySelector('[data-action="new"]') ||
        document.querySelector('button');

    if (!newGameButton) {

        console.error(
            "❌ Кнопка Новой игры не найдена!"
        );

        return;
    }


    newGameButton.addEventListener("click", () => {

        console.log("🎮 Новая игра запущена!");

        startGame();

    });

});


// ========================================
// 🎮 ЗАПУСК ИГРЫ
// ========================================

function startGame() {

    // Удаляем старый игровой экран
    const oldGame = document.getElementById("chaosGame");

    if (oldGame) {
        oldGame.remove();
    }

    // Создаём новый экран
    const game = document.createElement("div");

    game.id = "chaosGame";

    game.innerHTML = `

        <div class="game-header">

            <div>
                📍 Неизвестный остров
            </div>

            <div class="day">
                ☀️ День 1
            </div>

        </div>


        <div class="island-world">

            <div class="sky">
                ☀️
            </div>


            <div class="island">

                <div class="mountain">
                    🏔️
                </div>


                <div class="player">
                    🧍
                </div>


                <div class="chest" id="islandChest">
                    📦
                </div>


                <div class="palm">
                    🌴
                </div>


                <div class="boat">
                    🛶
                </div>

            </div>

        </div>


        <div class="status">

            <div>
                ❤️
                <span>100</span>
            </div>

            <div>
                💧
                <span>100</span>
            </div>

            <div>
                🍗
                <span>100</span>
            </div>

            <div>
                ⚡
                <span>100</span>
            </div>

        </div>


        <div class="message">
            🏝️ Ты оказался на неизвестном острове...
        </div>


        <div class="game-buttons">

            <button id="chestButton">
                📦 Осмотреть сундук
            </button>

            <button id="backpackButton">
                🎒 Рюкзак
            </button>

        </div>

    `;


    document.body.appendChild(game);


    // ========================================
    // 🎨 СТИЛИ ИГРЫ
    // ========================================

    const style = document.createElement("style");

    style.id = "chaosGameStyle";

    style.textContent = `

        #chaosGame {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: #087f9b;
            color: white;
            font-family: Arial, sans-serif;
            overflow: hidden;
        }


        .game-header {
            height: 70px;
            background: #123f4b;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 18px;
            font-size: 20px;
            font-weight: bold;
            box-sizing: border-box;
        }


        .day {
            background: #355b64;
            padding: 12px 18px;
            border-radius: 15px;
            font-weight: normal;
        }


        .island-world {
            height: calc(100vh - 250px);
            min-height: 400px;
            position: relative;
            overflow: hidden;
        }


        .sky {
            height: 45%;
            background: linear-gradient(
                #55bdd9,
                #a4e0ed
            );
            font-size: 65px;
            text-align: right;
            padding: 25px;
            box-sizing: border-box;
        }


        .island {
            position: absolute;
            left: 0;
            right: 0;
            top: 42%;
            bottom: 0;
            background: #087f9b;
        }


        .mountain {
            position: absolute;
            left: 12%;
            top: 10%;
            font-size: 95px;
        }


        .player {
            position: absolute;
            left: 52%;
            top: 30%;
            font-size: 45px;
        }


        .chest {
            position: absolute;
            right: 25%;
            top: 32%;
            font-size: 55px;
            cursor: pointer;
            user-select: none;
        }


        .palm {
            position: absolute;
            right: 8%;
            top: 25%;
            font-size: 80px;
        }


        .boat {
            position: absolute;
            left: 12%;
            bottom: 10%;
            font-size: 55px;
        }


        .status {
            height: 75px;
            background: #173941;
            display: flex;
            gap: 10px;
            padding: 10px 15px;
            box-sizing: border-box;
        }


        .status div {
            flex: 1;
            background: #274b53;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 18px;
        }


        .message {
            margin: 10px 15px;
            padding: 15px;
            background: #21454d;
            border-radius: 15px;
            text-align: center;
            font-size: 16px;
        }


        .game-buttons {
            display: flex;
            gap: 10px;
            padding: 0 15px 15px;
        }


        .game-buttons button {
            flex: 1;
            border: none;
            border-radius: 15px;
            padding: 16px 8px;
            font-size: 17px;
            font-weight: bold;
            color: white;
            background: #159447;
        }


        #backpackButton {
            background: #49627f;
        }

    `;


    document.head.appendChild(style);


    // ========================================
    // 📦 СУНДУК — ПОКА ТОЛЬКО КНОПКА
    // ========================================

    const chestButton =
        document.getElementById("chestButton");

    chestButton.addEventListener("click", () => {

        const message =
            document.querySelector(".message");

        message.textContent =
            "📦 Ты подошёл к старому сундуку...";

    });


    // Можно нажать прямо на сундук
    const chest =
        document.getElementById("islandChest");

    chest.addEventListener("click", () => {

        const message =
            document.querySelector(".message");

        message.textContent =
            "📦 Ты осматриваешь старый сундук...";

    });


    // ========================================
    // 🎒 РЮКЗАК
    // ========================================

    document
        .getElementById("backpackButton")
        .addEventListener("click", () => {

            const message =
                document.querySelector(".message");

            message.textContent =
                "🎒 Рюкзак пока пуст.";

        });

}
// ========================================
// 🏝️ CHAOS ISLAND
// ЧАСТЬ 2 — АТМОСФЕРА ОСТРОВА
// ========================================

const islandStyle = document.createElement("style");

islandStyle.textContent = `

    /* 🌊 ДВИЖЕНИЕ ВОДЫ */

    .island {
        background:
            radial-gradient(
                ellipse at 50% 20%,
                rgba(255,255,255,0.12),
                transparent 45%
            ),
            linear-gradient(
                to bottom,
                #1594ad,
                #05647d
            );
    }


    .island::before {
        content: "";
        position: absolute;
        left: -20%;
        right: -20%;
        top: 8%;
        height: 3px;

        background: rgba(255,255,255,0.18);

        box-shadow:
            0 35px rgba(255,255,255,0.12),
            0 70px rgba(255,255,255,0.10),
            0 105px rgba(255,255,255,0.08);

        animation: waves 5s linear infinite;
    }


    @keyframes waves {

        0% {
            transform: translateX(-30px);
        }

        50% {
            transform: translateX(30px);
        }

        100% {
            transform: translateX(-30px);
        }

    }


    /* ☀️ СОЛНЦЕ */

    .sky {
        position: relative;
        background:
            linear-gradient(
                to bottom,
                #45b9d8,
                #a9e3ee
            );
    }


    .sky::after {
        content: "☀️";

        position: absolute;

        right: 10%;
        top: 20px;

        font-size: 70px;

        filter:
            drop-shadow(
                0 5px 12px
                rgba(255,180,0,0.35)
            );

        animation: sunFloat 4s ease-in-out infinite;
    }


    @keyframes sunFloat {

        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(8px);
        }

    }


    /* 🏔️ ГОРЫ */

    .mountain {
        filter:
            drop-shadow(
                0 12px 10px
                rgba(0,0,0,0.25)
            );

        animation: mountainFloat 5s ease-in-out infinite;
    }


    @keyframes mountainFloat {

        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-3px);
        }

    }


    /* 🧍 ПЕРСОНАЖ */

    .player {
        filter:
            drop-shadow(
                0 8px 5px
                rgba(0,0,0,0.45)
            );

        animation: playerIdle 2s ease-in-out infinite;

        cursor: pointer;
    }


    @keyframes playerIdle {

        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-5px);
        }

    }


    /* 📦 СУНДУК */

    .chest {
        filter:
            drop-shadow(
                0 10px 6px
                rgba(0,0,0,0.45)
            );

        transition:
            transform 0.2s,
            filter 0.2s;

        animation: chestIdle 2.5s ease-in-out infinite;
    }


    .chest:hover {
        transform: scale(1.12);

        filter:
            drop-shadow(
                0 0 14px
                rgba(255,210,70,0.8)
            );
    }


    @keyframes chestIdle {

        0%,100% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-4px);
        }

    }


    /* 🌴 ПАЛЬМА */

    .palm {
        filter:
            drop-shadow(
                0 10px 7px
                rgba(0,0,0,0.3)
            );

        transform-origin: bottom center;

        animation: palmMove 4s ease-in-out infinite;
    }


    @keyframes palmMove {

        0%,100% {
            transform: rotate(-1deg);
        }

        50% {
            transform: rotate(2deg);
        }

    }


    /* 🛶 ЛОДКА */

    .boat {
        filter:
            drop-shadow(
                0 8px 5px
                rgba(0,0,0,0.35)
            );

        animation: boatMove 3s ease-in-out infinite;
    }


    @keyframes boatMove {

        0%,100% {
            transform:
                translateY(0)
                rotate(-2deg);
        }

        50% {
            transform:
                translateY(-6px)
                rotate(2deg);
        }

    }


    /* 💬 СООБЩЕНИЕ */

    .message {
        box-shadow:
            0 5px 15px
            rgba(0,0,0,0.25);

        transition:
            transform 0.2s,
            background 0.2s;
    }


    /* 🎮 КНОПКИ */

    .game-buttons button {
        box-shadow:
            0 5px 0
            rgba(0,0,0,0.18);

        transition:
            transform 0.15s,
            box-shadow 0.15s;
    }


    .game-buttons button:active {
        transform: translateY(4px);

        box-shadow:
            0 1px 0
            rgba(0,0,0,0.18);
    }


    /* 📱 МОБИЛЬНЫЙ ЭКРАН */

    @media (max-width: 600px) {

        .game-header {
            font-size: 17px;
        }

        .day {
            padding: 9px 12px;
        }

        .mountain {
            font-size: 80px;
        }

        .palm {
            font-size: 65px;
        }

        .chest {
            font-size: 48px;
        }

        .player {
            font-size: 40px;
        }

    }

`;

document.head.appendChild(islandStyle);


// ========================================
// ✨ ЭФФЕКТ ПРИ ЗАПУСКЕ
// ========================================

const gameScreen = document.getElementById("chaosGame");

if (gameScreen) {

    gameScreen.style.opacity = "0";

    gameScreen.style.transition =
        "opacity 0.8s ease";

    requestAnimationFrame(() => {

        gameScreen.style.opacity = "1";

    });

}
// ========================================
// 🔐 CHAOS ISLAND
// ЧАСТЬ 3 — НАСТОЯЩИЙ СУНДУК
// ========================================

const chestStyle = document.createElement("style");

chestStyle.textContent = `

    .chest-window {

        position: fixed;
        inset: 0;

        z-index: 100000;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.72);

        backdrop-filter: blur(6px);

        animation: chestFade 0.3s ease;
    }


    @keyframes chestFade {

        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }

    }


    .chest-box {

        width: min(420px, 88vw);

        padding: 28px;

        border-radius: 24px;

        text-align: center;

        background:
            linear-gradient(
                145deg,
                #3a2115,
                #704125
            );

        border:
            2px solid #c78a45;

        box-shadow:
            0 20px 60px
            rgba(0,0,0,0.65);

        animation: chestBox 0.35s ease;
    }


    @keyframes chestBox {

        from {
            transform: scale(0.8)
                       translateY(30px);
        }

        to {
            transform: scale(1)
                       translateY(0);
        }

    }


    .chest-big {

        font-size: 90px;

        margin-bottom: 10px;

        filter:
            drop-shadow(
                0 10px 8px
                rgba(0,0,0,0.45)
            );
    }


    .chest-box h2 {

        margin: 5px 0 12px;

        font-size: 25px;
    }


    .chest-box p {

        line-height: 1.5;

        color: #f4dfc2;
    }


    .chest-close {

        width: 100%;

        margin-top: 18px;

        padding: 14px;

        border: none;

        border-radius: 14px;

        background: #8c5430;

        color: white;

        font-size: 16px;

        font-weight: bold;

        cursor: pointer;
    }


    .chest-close:hover {

        background: #a8673b;

    }

`;

document.head.appendChild(chestStyle);


// ========================================
// 📦 ОТКРЫВАЕМ ОКНО СУНДУКА
// ========================================

document.addEventListener("click", event => {

    const chest =
        event.target.closest("#islandChest");

    if (!chest) return;


    const gameScreen =
        document.getElementById("chaosGame");

    if (!gameScreen) return;


    // Не создаём два окна одновременно
    if (
        gameScreen.querySelector(
            ".chest-window"
        )
    ) {
        return;
    }


    const window =
        document.createElement("div");

    window.className =
        "chest-window";


    window.innerHTML = `

        <div class="chest-box">

            <div class="chest-big">
                📦
            </div>

            <h2>
                СТАРЫЙ СУНДУК
            </h2>

            <p>
                Ты нашёл старый деревянный
                сундук на берегу.
            </p>

            <p>
                🔒 На нём установлен
                странный кодовый замок.
            </p>

            <button class="chest-close">
                🔍 Осмотреть замок
            </button>

        </div>

    `;


    gameScreen.appendChild(window);


    // ========================================
    // 🔍 ПЕРЕХОД К ЗАМКУ
    // ========================================

    window
        .querySelector(".chest-close")
        .addEventListener("click", () => {

            window.remove();

            openChestLock();

        });

});


// ========================================
// 🔐 ОКНО КОДОВОГО ЗАМКА
// ========================================

function openChestLock() {

    const gameScreen =
        document.getElementById("chaosGame");

    if (!gameScreen) return;


    const lock =
        document.createElement("div");

    lock.className =
        "chest-window";


    lock.innerHTML = `

        <div class="chest-box">

            <div class="chest-big">
                🔐
            </div>

            <h2>
                КОДОВЫЙ ЗАМОК
            </h2>

            <p>
                На замке написано:
            </p>

            <h3>
                🌴 + 🌴 + 🦀 = ?
            </h3>

            <p>
                Выбери правильный код:
            </p>


            <div class="lock-buttons">

                <button data-code="5">
                    5
                </button>

                <button data-code="7">
                    7
                </button>

                <button data-code="9">
                    9
                </button>

                <button data-code="12">
                    12
                </button>

            </div>


            <div class="lock-result"></div>


            <button class="chest-close">
                ❌ Закрыть
            </button>

        </div>

    `;


    gameScreen.appendChild(lock);


    // ========================================
    // 🔢 ВЫБОР КОДА
    // ========================================

    lock
        .querySelectorAll("[data-code]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const result =
                        lock.querySelector(
                            ".lock-result"
                        );


                    if (
                        button.dataset.code === "7"
                    ) {

                        result.innerHTML =
                            "🎉 ПРАВИЛЬНО!<br><br>" +
                            "🔓 Замок открыт!";

                        setTimeout(() => {

                            lock.remove();

                            const message =
                                gameScreen.querySelector(
                                    ".message"
                                );

                            if (message) {

                                message.innerHTML =
                                    "🎉 Ты открыл сундук! " +
                                    "Внутри лежит " +
                                    "🗺️ старая карта острова!";

                            }

                        }, 1000);


                    } else {

                        result.innerHTML =
                            "❌ Неверный код.<br>" +
                            "Попробуй ещё раз.";

                    }

                }
            );

        });


    // ========================================
    // ❌ ЗАКРЫТЬ
    // ========================================

    lock
        .querySelector(".chest-close")
        .addEventListener("click", () => {

            lock.remove();

        });

                        }
