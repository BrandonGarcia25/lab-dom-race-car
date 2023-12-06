class Game {

    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.scoreElement = document.getElementById("score")
        this.livesElement = document.getElementById("lives")
        this.player = new Player(this.gameScreen, 212, 450, 75, 150, 'images/car.png')
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.frames = 0
        this.timeLeft = 30
        this.stats = document.getElementById('stats-container')
        this.clockContainer = document.getElementById('clock-container')
        this.clock = document.getElementById('clock')
        this.endMessage = document.getElementById('end-message')
    }

    start() {

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.gameEndScreen.style.display = 'none'
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'inherit'
        this.stats.style.display = 'block'
        this.clockContainer.style.display = 'flex'
        this.gameLoop()

    }

    gameLoop() {

        if (this.gameIsOver) {
            return
        }

        this.update()
        this.frames++

        if (this.frames % 120 === 0) {

            this.obstacles.push(new Obstacle(this.gameScreen))

        }

        if (this.frames % 60 === 0) {
            this.timeLeft--
            this.clock.innerHTML = this.timeLeft
        }

        if (this.timeLeft <= 0) {
            this.gameIsOver = true
            this.gameOver()
        }

        window.requestAnimationFrame(() => this.gameLoop())

    }

    update() {

        this.player.move()

        this.obstacles.forEach((obstacle, i, arr) => {
            obstacle.move()
            if (obstacle.top > 640) {
                arr.splice(i, 1)
                obstacle.element.remove()
                this.score++

            }
            if (this.player.didCollide(obstacle)) {
                this.lives--

                arr.splice(i, 1)
                obstacle.element.remove()
                if (this.lives <= 0) {
                    this.gameIsOver = true
                    this.gameOver()
                }
            }
        })

        this.scoreElement.innerHTML = this.score
        this.livesElement.innerHTML = this.lives

    }

    returnLivesMessage() {
        if (this.lives > 1) {
            return `${this.lives} lives remaining`
        } else {
            return `${this.lives} life remaining`
        }
    }

    gameOver() {
        console.log("Game over")
        this.player.element.remove()
        this.obstacles.forEach((obstacle) => {
            obstacle.element.remove()
        })
        this.gameScreen.style.height = `${0}px`
        this.gameScreen.style.width = `${0}px`
        this.gameScreen.style.display = 'none'
        this.stats.style.display = 'none'
        this.clockContainer.style.display = 'none'
        this.gameEndScreen.style.display = 'inherit'
        if (this.timeLeft <= 0) {
            this.endMessage.innerText = `You won! You finished with a score of ${this.score} and ${this.returnLivesMessage()}!`
        } else {
            this.endMessage.innerText = `You lost!  You ran out of lives and finished with a score of ${this.score}.`
        }
    }

}class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player(
        this.gameScreen,
        200,
        500,
        100,
        150,
        "./images/car.png"
      );
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
    }
  
    start() {
      // Set the height and width of the game screen
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen
      this.startScreen.style.display = "none";
      // Show the game screen
      this.gameScreen.style.display = "block";
  
      //
      this.gameLoop();
    }
  
    gameLoop() {
      console.log("in the game loop");
  
      if (this.gameIsOver) {
        return;
      }
  
      this.update();
  
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      this.player.move();
  
      // Check for collision and if an obstacle is still on the screen
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Reduce player's lives by 1
          this.lives--;
          // Update the counter variable to account for the removed obstacle
          i--;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.score++;
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }
  
      // If the lives are 0, end the game
      if (this.lives === 0) {
        this.endGame();
      }
  
      // Create a new obstacle based on a random probability
      // when there is no other obstacles on the screen
      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }
  
    // Create a new method responsible for ending the game
    endGame() {
      this.player.element.remove();
      this.obstacles.forEach(function (obstacle) {
        obstacle.element.remove();
      });
  
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = "none";
      // Show end game screen
      this.gameEndScreen.style.display = "block";
    }
  }class Game {
    // code to be added
    constructor (){
        this.startScreen =  document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.player = null
        this.height = 600
        this.width = 500
        this.obstacles  = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
    }
    this.player = new Player(this.gameScreen, 212, 450, 75, 150, 'images/car.png')
    start () {
        this.gameScreen.style.height. = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = `none`
        this.gameScreen.style.display = `inherit`
        this.gameLoop()

    }
    gameLoop () {

            if (this.gameIsover) {
            return
        }

        this.update ()

        window.requestAnimationFrame(() => this.gameLoop())
    }
    update() {


    }
}


