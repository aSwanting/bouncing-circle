




// Create and append Circle element
const appMain = document.getElementById("app-main")
const glassCircle = document.createElement("div")
document.querySelector(".app-main").append(glassCircle)
glassCircle.className = "glass-circle"

// Give circle random size
const circleSize = randNum(100, 300)
glassCircle.style.width = circleSize + "px"

// Get Right and Bottom viewport boundary
const rightBound = appMain.offsetWidth - glassCircle.offsetWidth
const bottomBound = appMain.offsetHeight - glassCircle.offsetHeight

// Generate random starting position within boundary
const circleStartPosX = randNum(0, rightBound)
const circleStartPosY = randNum(0, bottomBound)
glassCircle.style.left = circleStartPosX + "px"
glassCircle.style.top = circleStartPosY + "px"

// Initialise Circle coordinates and movement direction variables
let circlePosX = glassCircle.offsetLeft
let circlePosY = glassCircle.offsetTop

let circleDirectionX = randNum(0, 1)
let circleDirectionY = randNum(0, 1)
let circleSpeedX = randNum(3, 16)
let circleSpeedY = randNum(3, 16)

setInterval(() => {

    moveCircle()

}, 10);

// Move Circle, bouncing between viewport boundaries
function moveCircle() {

    const rightBoundFluid = appMain.offsetWidth - glassCircle.offsetWidth
    const bottomBoundFluid = appMain.offsetHeight - glassCircle.offsetHeight

    circleDirectionX === 1 && circlePosX < rightBoundFluid ? circlePosX += circleSpeedX : circleDirectionX = 0
    circleDirectionX === 0 && circlePosX > 0 ? circlePosX -= circleSpeedX : circleDirectionX = 1

    circleDirectionY === 0 && circlePosY < bottomBoundFluid ? circlePosY += circleSpeedY : circleDirectionY = 1
    circleDirectionY === 1 && circlePosY > 0 ? circlePosY -= circleSpeedY : circleDirectionY = 0

    glassCircle.style.left = circlePosX + "px"
    glassCircle.style.top = circlePosY + "px"

    console.log(circleDirectionX, circleDirectionY, circleSpeedX, circleSpeedY)

}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}










