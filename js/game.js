// ========================================
// 🏝️ CHAOS ISLAND
// GAME.JS — НОВАЯ ВЕРСИЯ
// ЧАСТЬ 1: ОСНОВА И НАЧАЛО ИГРЫ
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🏝️ Chaos Island загружен!");

    // ----------------------------------------
    // 🔊 Звук кнопки
    // ----------------------------------------

    function playSound() {
        try {
            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) return;

            const audio = new AudioContext();

            const oscillator = audio.createOscillator();
            const gain = audio.createGain();

            oscillator.frequency.value = 500;
            gain.gain.value = 0.04;

            oscillator.connect(gain);
            gain.connect(audio.destination);

            oscillator.start();

            oscillator.stop(audio.currentTime + 0.08);

        } catch (error) {
            console.log("Звук недоступен");
        }
    }


    // ----------------------------------------
    // 🚢 НАЧАЛО ПРИКЛЮЧЕНИЯ
    // ----------------------------------------

    function startGame() {

        playSound();

        // Удаляем старую сцену, если она существует
        const oldScene =
            document.getElementById("gameScene");

        if (oldScene) {
            oldScene.remove();
        }


        const scene =
            document.createElement("div");

        scene.id = "gameScene";


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
                    Ночь.
                    Сильный шторм бушует вокруг корабля...
                </p>

                <button id="continueStory">
                    ▶️ Продолжить
                </button>

            </div>

        `;


        document.body.appendChild(scene);


        const text =
            document.getElementById("storyText");

        const button =
            document.getElementById("continueStory");


        let step = 0;


        // ----------------------------------------
        // 📖 ПРОДОЛЖЕНИЕ ИСТОРИИ
        // ----------------------------------------

        button.addEventListener("click", () => {

            playSound();

            step++;


            if (step === 1) {

                text.innerHTML =
                    "🌊 Огромная волна ударяет по кораблю!<br><br>" +
                    "💥 БУУУМ!";

            }


            else if (step === 2) {

                text.innerHTML =
                    "🚢 Корабль сильно накренился...<br><br>" +
                    "Ты пытаешься удержаться!";

            }


            else if (step === 3) {

                text.innerHTML =
                    "💥 Ещё один удар!<br><br>" +
                    "Ты падаешь с палубы в холодную воду...";

            }


            else if (step === 4) {

                text.innerHTML =
                    "🌊 Ты теряешь сознание...<br><br>" +
                    "Всё вокруг становится тёмным.";

            }


            else if (step === 5) {

                text.innerHTML =
                    "☀️ Ты открываешь глаза.<br><br>" +
                    "Под тобой тёплый песок.";

            }


            else if (step === 6) {

                text.innerHTML =
                    "🏝️ Перед тобой неизвестный остров.<br><br>" +
                    "Ты каким-то чудом выжил!";

            }


            else if (step === 7) {

                text.innerHTML =
                    "👀 Но вдруг из кустов раздаётся:<br><br>" +
                    "«ХРУСТЬ... ХРУСТЬ...»";

            }


            else {

                scene.remove();

                showQuiz();

            }

        });

    }


    // ----------------------------------------
    // 🧠 ПЕРВАЯ ВИКТОРИНА
    // ----------------------------------------

    function showQuiz() {

        const quiz =
            document.createElement("div");

        quiz.id = "quizScene";


        quiz.innerHTML = `

            <div class="quiz-box">

                <div class="quiz-icon">
                    🗿
                </div>

                <h1>
                    ЗАГАДКА ОСТРОВА
                </h1>

                <p>
                    Перед тобой древний камень.
                </p>

                <p>
                    На нём появляется вопрос:
                </p>

                <h2>
                    Что важнее всего для выживания?
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


        const answers =
            quiz.querySelectorAll(
                ".quiz-answers button"
            );

        const result =
            quiz.querySelector("#quizResult");


        answers.forEach(button => {

            button.addEventListener("click", () => {

                playSound();


                if (
                    button.dataset.answer === "correct"
                ) {

                    result.innerHTML =
                        "✅ Правильно!<br><br>" +
                        "💧 Вода — главное для выживания!";

                    setTimeout(() => {

                        quiz.remove();

                        showIsland();

                    }, 1200);

                }

                else {

                    result.innerHTML =
                        "❌ Неправильно!<br><br>" +
                        "Попробуй ещё раз.";

                }

            });

        });

    }


    // ----------------------------------------
    // 🏝️ ПЕРВЫЙ ИГРОВОЙ ЭКРАН
    // ----------------------------------------

    function showIsland() {

        const island =
            document.createElement("div");

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

                    <div class="sun">
                        ☀️
                    </div>

                    <div class="cloud cloud-one">
                        ☁️
                    </div>

                    <div class="cloud cloud-two">
                        ☁️
                    </div>

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

                        🏝️ Ты выжил после
                        кораблекрушения!

                        <br><br>

                        Исследуй остров.

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


        setupIsland(island);

    }


    // ----------------------------------------
    // 🎮 НАСТРОЙКА ОСТРОВА
    // ----------------------------------------

    function setupIsland(island) {

        const message =
            island.querySelector(".message");


        // 🔍 Исследовать

        island
            .querySelector("#exploreButton")
            .addEventListener("click", () => {

                playSound();

                message.innerHTML =
                    "🔍 Ты осматриваешь остров...<br><br>" +
                    "👀 Кажется, возле пальмы что-то лежит.";

            });


        // 🎒 Рюкзак

        island
            .querySelector("#inventoryButton")
            .addEventListener("click", () => {

                playSound();

                message.innerHTML =
                    "🎒 Рюкзак пока пуст.<br><br>" +
                    "Найди полезные предметы на острове.";

            });


        // 🌴 Пальма

        island
            .querySelector(".palm-tree")
            .addEventListener("click", () => {

                playSound();

                message.innerHTML =
                    "🌴 Ты нашёл пальму!<br><br>" +
                    "🥥 Кажется, на ней есть кокосы.";

            });


        // 🚤 Лодка

        island
            .querySelector(".boat")
            .addEventListener("click", () => {

                playSound();

                message.innerHTML =
                    "🚤 Лодка сильно повреждена.<br><br>" +
                    "🔧 Её нужно будет отремонтировать.";

            });


        // 📦 Сундук

        island
            .querySelector(".chest")
            .addEventListener("click", () => {

                playSound();

                message.innerHTML =
                    "🔐 На сундуке установлен " +
                    "странный кодовый замок.";

            });

    }


    // ----------------------------------------
    // 🎮 КНОПКА «НОВАЯ ИГРА»
    // ----------------------------------------

    const newGameButton =
        document.querySelector(
            '[data-action="new"]'
        );


    if (newGameButton) {

        newGameButton.addEventListener(
            "click",
            startGame
        );

    }

});
// ========================================
// 🏝️ CHAOS ISLAND
// ЧАСТЬ 2 — ИНВЕНТАРЬ И ПРЕДМЕТЫ
// ========================================

const game = {

    inventory: [],

    addItem(name, icon) {

        // Не добавляем один и тот же предмет дважды
        if (this.inventory.some(item => item.name === name)) {
            return;
        }

        this.inventory.push({
            name: name,
            icon: icon
        });

        this.updateInventory();

    },


    hasItem(name) {

        return this.inventory.some(
            item => item.name === name
        );

    },


    updateInventory() {

        const island =
            document.getElementById("islandScene");

        if (!island) return;

        const message =
            island.querySelector(".message");

        const button =
            island.querySelector("#inventoryButton");

        if (!button) return;

        button.textContent =
            `🎒 Рюкзак (${this.inventory.length})`;

    },


    showInventory() {

        const island =
            document.getElementById("islandScene");

        if (!island) return;

        const old =
            island.querySelector(".inventory-window");

        if (old) {
            old.remove();
        }


        const window =
            document.createElement("div");

        window.className =
            "inventory-window";


        let itemsHTML = "";


        if (this.inventory.length === 0) {

            itemsHTML =
                `<p>🎒 Рюкзак пуст.</p>`;

        } else {

            itemsHTML =
                this.inventory.map(item => `

                    <div class="inventory-item">

                        <span class="item-icon">
                            ${item.icon}
                        </span>

                        <span>
                            ${item.name}
                        </span>

                    </div>

                `).join("");

        }


        window.innerHTML = `

            <div class="inventory-box">

                <button class="inventory-close">
                    ❌
                </button>

                <h2>
                    🎒 РЮКЗАК
                </h2>

                <div class="inventory-items">

                    ${itemsHTML}

                </div>

            </div>

        `;


        island.appendChild(window);


        window
            .querySelector(".inventory-close")
            .addEventListener("click", () => {

                window.remove();

            });

    }

};


// ========================================
// 🎒 КНОПКА РЮКЗАКА
// ========================================

document.addEventListener("click", event => {

    const button =
        event.target.closest("#inventoryButton");

    if (!button) return;

    game.showInventory();

});


// ========================================
// 🥥 ПАЛЬМА — ПОЛУЧИТЬ КОКОС
// ========================================

document.addEventListener("click", event => {

    const palm =
        event.target.closest(".palm-tree");

    if (!palm) return;


    const island =
        document.getElementById("islandScene");

    if (!island) return;


    const message =
        island.querySelector(".message");


    if (game.hasItem("Кокос")) {

        message.innerHTML =
            "🌴 Ты уже взял кокос.<br><br>" +
            "🥥 Больше здесь ничего нет.";

        return;

    }


    game.addItem(
        "Кокос",
        "🥥"
    );


    message.innerHTML =
        "🥥 Ты нашёл кокос!<br><br>" +
        "🎒 Кокос добавлен в рюкзак.";

});


// ========================================
// 🧭 ЛОДКА — НАЙТИ КОМПАС
// ========================================

document.addEventListener("dblclick", event => {

    const boat =
        event.target.closest(".boat");

    if (!boat) return;


    const island =
        document.getElementById("islandScene");

    if (!island) return;


    const message =
        island.querySelector(".message");


    if (game.hasItem("Старый компас")) {

        message.innerHTML =
            "🧭 Ты уже нашёл компас.";

        return;

    }


    game.addItem(
        "Старый компас",
        "🧭"
    );


    message.innerHTML =
        "🧭 Под лодкой лежал старый компас!<br><br>" +
        "🎒 Компас добавлен в рюкзак.";

});
// ========================================
// 🏝️ CHAOS ISLAND
// ЧАСТЬ 3 — СУНДУК И ГОЛОВОЛОМКА
// ========================================

document.addEventListener("click", event => {

    const chest = event.target.closest(".chest");

    if (!chest) return;

    const island =
        document.getElementById("islandScene");

    if (!island) return;

    const message =
        island.querySelector(".message");

    // Если головоломка уже открыта — ничего не создаём
    if (island.querySelector(".puzzle-window")) {
        return;
    }

    // Если сундук уже открыт
    if (game.hasItem("Старая карта")) {

        message.innerHTML =
            "📦 Сундук уже открыт!<br><br>" +
            "🗺️ Старая карта находится в рюкзаке.";

        return;
    }


    // ========================================
    // 🔐 СОЗДАЁМ ОКНО ГОЛОВОЛОМКИ
    // ========================================

    const puzzle =
        document.createElement("div");

    puzzle.className =
        "puzzle-window";


    puzzle.innerHTML = `

        <div class="puzzle-box">

            <button class="puzzle-close">
                ❌
            </button>

            <div class="puzzle-icon">
                🔐
            </div>

            <h2>
                СЕКРЕТНЫЙ СУНДУК
            </h2>

            <p>
                На замке написано:
            </p>

            <h3>
                🌴 + 🌴 + 🦀 = ?
            </h3>

            <p>
                Какой код откроет сундук?
            </p>

            <div class="puzzle-buttons">

                <button data-code="5">
                    🔢 5
                </button>

                <button data-code="7">
                    🔢 7
                </button>

                <button data-code="9">
                    🔢 9
                </button>

                <button data-code="12">
                    🔢 12
                </button>

            </div>

            <div class="puzzle-result"></div>

        </div>

    `;


    island.appendChild(puzzle);


    // ========================================
    // ❌ ЗАКРЫТЬ
    // ========================================

    puzzle
        .querySelector(".puzzle-close")
        .addEventListener("click", () => {

            puzzle.remove();

        });


    // ========================================
    // 🔢 ПРОВЕРКА ОТВЕТА
    // ========================================

    puzzle
        .querySelectorAll("[data-code]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const result =
                    puzzle.querySelector(
                        ".puzzle-result"
                    );


                if (
                    button.dataset.code === "7"
                ) {

                    result.innerHTML =
                        "🎉 ПРАВИЛЬНО!<br><br>" +
                        "🔓 СУНДУК ОТКРЫВАЕТСЯ...";


                    setTimeout(() => {

                        // Добавляем карту
                        game.addItem(
                            "Старая карта",
                            "🗺️"
                        );


                        // Закрываем окно
                        puzzle.remove();


                        // Меняем внешний вид сундука
                        chest.textContent =
                            "📖";


                        // Сообщение игроку
                        message.innerHTML =
                            "🎉 Ты открыл сундук!<br><br>" +
                            "🗺️ Внутри была старая карта острова!";

                    }, 1000);


                } else {

                    result.innerHTML =
                        "😂 Неправильно!<br><br>" +
                        "Попробуй ещё раз.";

                }

            });

        });

});
