
const appMain = document.getElementById("app-main")
const ballNumber = parseInt(prompt("How many balls do you want?"))

for (i = 0; i < ballNumber; i++) {

    // Create and append Circle element    
    const glassCircle = document.createElement("div")
    document.querySelector(".app-main").append(glassCircle)
    glassCircle.className = "glass-circle"

    // Give circle random size
    const circleSize = randNum(100, 200)
    glassCircle.style.width = circleSize + "px"

    // Get Right and Bottom viewport boundary
    const rightBound = appMain.offsetWidth - glassCircle.offsetWidth
    const bottomBound = appMain.offsetHeight - glassCircle.offsetHeight

    // Generate random starting position within boundary
    const circleStartPosX = randNum(0, rightBound)
    const circleStartPosY = randNum(0, bottomBound)
    glassCircle.style.left = circleStartPosX + "px"
    glassCircle.style.top = circleStartPosY + "px"

}

const circles = document.querySelectorAll(".glass-circle")

circles.forEach((circle, index) => {

    // Initialise Circle coordinates and movement direction variables
    let circlePosX = circle.offsetLeft
    let circlePosY = circle.offsetTop
    let circleDirectionX = randNum(0, 1)
    let circleDirectionY = randNum(0, 1)
    let circleSpeedX = randNum(1, 10)
    let circleSpeedY = randNum(1, 10)

    console.log("circle = " + index)
    console.log("   position = " + circlePosX, circlePosY)
    console.log("   direction = " + circleDirectionX, circleDirectionY)
    console.log("   speed = " + circleSpeedX, circleSpeedY)
    console.log("")

    // Move Circle, bouncing between viewport boundaries
    function moveCircle() {

        const rightBoundFluid = appMain.offsetWidth - circle.offsetWidth
        const bottomBoundFluid = appMain.offsetHeight - circle.offsetHeight

        circleDirectionX === 1 && circlePosX < rightBoundFluid ? circlePosX += circleSpeedX : circleDirectionX = 0
        circleDirectionX === 0 && circlePosX > 0 ? circlePosX -= circleSpeedX : circleDirectionX = 1

        circleDirectionY === 0 && circlePosY < bottomBoundFluid ? circlePosY += circleSpeedY : circleDirectionY = 1
        circleDirectionY === 1 && circlePosY > 0 ? circlePosY -= circleSpeedY : circleDirectionY = 0

        circle.style.left = circlePosX + "px"
        circle.style.top = circlePosY + "px"

    }

    setInterval(() => {

        moveCircle()

    }, 10);

});


function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}










