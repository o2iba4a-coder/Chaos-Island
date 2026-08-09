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
        "🔐 На сундуке кодовый замок!";

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
// ========================================
// 🎒 ЧАСТЬ 5 — ИНВЕНТАРЬ И ПРЕДМЕТЫ
// ========================================

function createInventory(island) {

    let inventory = [];

    const message = island.querySelector(".message");

    const inventoryWindow = document.createElement("div");

    inventoryWindow.className = "inventory-window";

    inventoryWindow.innerHTML = `
        <div class="inventory-box">

            <button class="inventory-close">
                ❌
            </button>

            <h2>🎒 РЮКЗАК</h2>

            <p class="inventory-empty">
                Рюкзак пока пуст.
            </p>

            <div class="inventory-items"></div>

        </div>
    `;

    island.appendChild(inventoryWindow);

    inventoryWindow.style.display = "none";


    // ========================================
    // 🎒 КНОПКА РЮКЗАКА
    // ========================================

    const inventoryButton =
        island.querySelector("#inventoryButton");

    inventoryButton.addEventListener("click", () => {

        inventoryWindow.style.display = "flex";

        updateInventory();

    });


    // ========================================
    // ❌ ЗАКРЫТЬ РЮКЗАК
    // ========================================

    inventoryWindow
        .querySelector(".inventory-close")
        .addEventListener("click", () => {

            inventoryWindow.style.display = "none";

        });


    // ========================================
    // 📦 ДОБАВИТЬ ПРЕДМЕТ
    // ========================================

    function addItem(name, icon) {

        if (inventory.some(item => item.name === name)) {
            return;
        }

        inventory.push({
            name: name,
            icon: icon
        });

        updateInventory();

    }


    // ========================================
    // 🎒 ОБНОВИТЬ ИНВЕНТАРЬ
    // ========================================

    function updateInventory() {

        const items =
            inventoryWindow.querySelector(".inventory-items");

        const empty =
            inventoryWindow.querySelector(".inventory-empty");


        if (inventory.length === 0) {

            empty.style.display = "block";

            items.innerHTML = "";

            return;

        }


        empty.style.display = "none";

        items.innerHTML = "";


        inventory.forEach(item => {

            const element =
                document.createElement("div");

            element.className =
                "inventory-item";

            element.innerHTML = `
                <span class="item-icon">
                    ${item.icon}
                </span>

                <span>
                    ${item.name}
                </span>
            `;

            items.appendChild(element);

        });

    }


    // ========================================
    // 🥥 КОКОС
    // ========================================

    const palm =
        island.querySelector(".palm-tree");

    palm.addEventListener("dblclick", () => {

        addItem("Кокос", "🥥");

        message.innerHTML =
            "🥥 Ты сорвал кокос и положил его в рюкзак!";

    });


    // ========================================
    // 🧭 КОМПАС
    // ========================================

    const boat =
        island.querySelector(".boat");

    boat.addEventListener("dblclick", () => {

        addItem("Старый компас", "🧭");

        message.innerHTML =
            "🧭 Ты нашёл старый компас возле лодки!";

    });


    // ========================================
    // 📜 СЕКРЕТНАЯ КАРТА
    // ========================================
const chest =
    island.querySelector(".chest");

chest.addEventListener("dblclick", () => {

    addItem("Старая карта", "🗺️");

    message.innerHTML =
        "🗺️ В сундуке оказалась старая карта острова!";

});

}


// ========================================
// 🔗 ПОДКЛЮЧАЕМ ИНВЕНТАРЬ
// ========================================

const oldActivateIslandControls =
    activateIslandControls;

activateIslandControls = function(island) {

    oldActivateIslandControls(island);

    createInventory(island);

};
// ========================================
// 👹 ЧАСТЬ 6 — ПЕРВЫЙ ВРАГ
// ========================================

function createFunnyEnemy(island) {

    const message = island.querySelector(".message");

    const enemy = document.createElement("div");

    enemy.className = "funny-enemy";

    enemy.innerHTML = `
        <div class="enemy-face">
            👹
        </div>

        <div class="enemy-name">
            КОКОСИК
        </div>
    `;

    island.querySelector(".island-world").appendChild(enemy);


    // ========================================
    // 👹 ВРАГ ПОДХОДИТ К ГЕРОЮ
    // ========================================

    let enemyX = 78;

    let direction = -1;

    const moveEnemy = setInterval(() => {

        if (!document.body.contains(island)) {

            clearInterval(moveEnemy);

            return;
        }


        enemyX += direction * 0.4;


        if (enemyX < 60) {
            direction = 1;
        }

        if (enemyX > 82) {
            direction = -1;
        }


        enemy.style.left = enemyX + "%";

    }, 100);


    // ========================================
    // 😂 КЛИК ПО ВРАГУ
    // ========================================

    enemy.addEventListener("click", () => {

        message.innerHTML =
            "👹 Кокосик: «Эй! Это мой остров!»<br><br>" +
            "😂 Ты: «А кто тебя назначил главным?»";


        enemy.querySelector(".enemy-face")
            .textContent = "😳";


        setTimeout(() => {

            enemy.querySelector(".enemy-face")
                .textContent = "👹";

        }, 1200);

    });


    // ========================================
    // 💥 ВРАГ ПОЛУЧИЛ УДАР
    // ========================================

    enemy.addEventListener("dblclick", () => {

        message.innerHTML =
            "💥 БУМ!<br><br>" +
            "Кокосик упал на землю! 😂";

        enemy.querySelector(".enemy-face")
            .textContent = "😵";


        setTimeout(() => {

            enemy.querySelector(".enemy-face")
                .textContent = "👹";

        }, 2000);

    });

}


// ========================================
// 🔗 ПОДКЛЮЧАЕМ ВРАГА К ОСТРОВУ
// ========================================

const previousCreateInventory =
    createInventory;

createInventory = function(island) {

    previousCreateInventory(island);

    createFunnyEnemy(island);

};
// ========================================
// 🧩 ЧАСТЬ 7 — ПЕРВАЯ ГОЛОВОЛОМКА
// ========================================

function createPuzzle(island) {

    const message = island.querySelector(".message");
    const chest = island.querySelector(".chest");

    let solved = false;

    chest.addEventListener("click", () => {

        if (solved) {

            message.innerHTML =
                "📦 Сундук уже открыт! " +
                "Ты нашёл карту острова 🗺️";

            return;
        }

        const puzzle = document.createElement("div");

        puzzle.className = "puzzle-window";

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
                    Выбери правильный код:
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
            .querySelectorAll(".puzzle-buttons button")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const code =
                        button.dataset.code;

                    const result =
                        puzzle.querySelector(
                            ".puzzle-result"
                        );


                    if (code === "7") {

                        solved = true;

                        result.innerHTML =
                            "🎉 ПРАВИЛЬНО!<br><br>" +
                            "🔓 СУНДУК ОТКРЫТ!";

                        setTimeout(() => {

                            puzzle.remove();

                            chest.innerHTML = "📖";

                            message.innerHTML =
                                "🎉 Ты открыл сундук!<br><br>" +
                                "🗺️ Внутри лежит старая карта острова!";

                        }, 1200);

                    } else {

                        result.innerHTML =
                            "😂 Неправильно!<br>" +
                            "Попробуй ещё раз.";

                    }

                });

            });

    });

}


// ========================================
// 🔗 ПОДКЛЮЧАЕМ ГОЛОВОЛОМКУ
// ========================================

const oldCreateFunnyEnemy =
    createFunnyEnemy;

createFunnyEnemy = function(island) {

    oldCreateFunnyEnemy(island);

    createPuzzle(island);

};
// ========================================
// 🔐 ИСПРАВЛЕНИЕ СУНДУКА
// ========================================

document.addEventListener("click", function(event) {

    const chest = event.target.closest(".chest");

    if (!chest) return;

    const island = document.getElementById("islandScene");

    if (!island) return;

    // Если окно головоломки уже открыто — ничего не делаем
    if (island.querySelector(".puzzle-window")) return;

    const puzzle = document.createElement("div");

    puzzle.className = "puzzle-window";

    puzzle.innerHTML = `
        <div class="puzzle-box">

            <button class="puzzle-close">❌</button>

            <div class="puzzle-icon">🔐</div>

            <h2>СЕКРЕТНЫЙ СУНДУК</h2>

            <p>На замке написано:</p>

            <h3>🌴 + 🌴 + 🦀 = ?</h3>

            <p>Выбери правильный код:</p>

            <div class="puzzle-buttons">

                <button data-code="5">🔢 5</button>
                <button data-code="7">🔢 7</button>
                <button data-code="9">🔢 9</button>
                <button data-code="12">🔢 12</button>

            </div>

            <div class="puzzle-result"></div>

        </div>
    `;

    island.appendChild(puzzle);

    puzzle.querySelector(".puzzle-close").onclick = () => {
        puzzle.remove();
    };

    puzzle.querySelectorAll("[data-code]").forEach(button => {

        button.onclick = () => {

            const result =
                puzzle.querySelector(".puzzle-result");

            if (button.dataset.code === "7") {

                result.innerHTML =
                    "🎉 ПРАВИЛЬНО!<br><br>" +
                    "🔓 СУНДУК ОТКРЫТ!";

                setTimeout(() => {

                    puzzle.remove();

                    chest.textContent = "📖";

                    island.querySelector(".message").innerHTML =
                        "🗺️ Ты нашёл старую карту острова!";

                }, 1000);

            } else {

                result.innerHTML =
                    "😂 Неправильно! Попробуй ещё раз.";

            }

        };

    });

});
