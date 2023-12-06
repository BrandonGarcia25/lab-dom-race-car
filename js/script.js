window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game

  startButton.addEventListener("click", function () {
    game = new Game()
    startGame();
  });

  restartButton.addEventListener("click", function () {
    game = new Game()
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start()
    

    document.addEventListener('keydown', (e) => {
      
      if (e.key === 'ArrowLeft') {
        console.log("Left")
        if (game.player.directionX > -4) {
          game.player.directionX -= 1
        }

      }

      if (e.key === 'ArrowRight') {
        console.log("Right")
        if (game.player.directionX < 4) {
          game.player.directionX += 1
        }
      }

      if (e.key === 'ArrowDown') {
        console.log("Down")
        if (game.player.directionY < 4) {
          game.player.directionY += 1
        }
      }

      if (e.key === 'ArrowUp') {
        console.log("UP")
        if (game.player.directionY > -4) {
          game.player.directionY -= 1
        }
      }

    })    

  }
};window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  // Function that handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game

  startButton.addEventListener("click", function () {
     game = new Game()
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start()
  }
};