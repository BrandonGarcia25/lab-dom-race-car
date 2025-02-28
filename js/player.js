class Player {

    constructor(gameScreen, left, top, width, height, element) {
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = `${element}`
        this.element.style.position = 'absolute'
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        this.gameScreen.appendChild(this.element)
    }
    move() {
        this.left += this.directionX
        this.top += this.directionY

        
        // Ensures the player's car stays within the boundaries of the game screen by checking and adjusting the left and top properties.

        this.updatePosition()
        

    }

    updatePosition() {

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`

    }

    didCollide(obstacle) {

        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true
        } else {
            return false
        }

    }
}



