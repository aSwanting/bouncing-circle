// Global Variables
const appMain = document.getElementById("app-main")
const circleSlider = document.getElementById("circle-slider")
const circleSliderLabel = document.getElementById("circle-number")
const circleButton = document.getElementById("circle-generate")
const circleColorPicker = document.getElementById("circle-color")
let circleNum = circleSlider.value
let circleColor = circleColorPicker.value

// Update circle range slider
circleSlider.addEventListener("input", function () {

    document.getElementById("circle-number").innerHTML = circleSlider.value
    circleNum = circleSlider.value

})

// On generate and animate circles
circleButton.addEventListener("click", function () {

    appMain.innerHTML = ""

    for (i = 0; i < circleNum; i++) {

        // Create and append Circle element    
        const glassCircle = document.createElement("div")
        appMain.append(glassCircle)
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

        // Circle color based on color picker
        circleColor = circleColorPicker.value
        glassCircle.style.backgroundColor = circleColor + "50"

    }

    // Generate array containing all circle elements
    const circles = document.querySelectorAll(".glass-circle")
    circles.forEach((circle, index) => {

        // Get Circle coordinates
        let circlePosX = circle.offsetLeft
        let circlePosY = circle.offsetTop

        // Give each circle a random direction and speed
        let circleDirectionX = randNum(0, 1)
        let circleDirectionY = randNum(0, 1)
        let circleSpeedX = randNum(1, 10)
        let circleSpeedY = randNum(1, 10)

        // Log circle info
        console.log("circle = " + index)
        console.log("   position = " + circlePosX, circlePosY)
        console.log("   direction = " + circleDirectionX, circleDirectionY)
        console.log("   speed = " + circleSpeedX, circleSpeedY)
        console.log("")

        // Animate circles
        setInterval(() => {

            // Continuously update viewport bounds
            const rightBoundFluid = appMain.offsetWidth - circle.offsetWidth
            const bottomBoundFluid = appMain.offsetHeight - circle.offsetHeight

            // Check circle position, if bondary reached reverse direction
            circleDirectionX === 1 && circlePosX < rightBoundFluid ? circlePosX += circleSpeedX : circleDirectionX = 0
            circleDirectionX === 0 && circlePosX > 0 ? circlePosX -= circleSpeedX : circleDirectionX = 1

            circleDirectionY === 0 && circlePosY < bottomBoundFluid ? circlePosY += circleSpeedY : circleDirectionY = 1
            circleDirectionY === 1 && circlePosY > 0 ? circlePosY -= circleSpeedY : circleDirectionY = 0

            // Update circle position
            circle.style.left = circlePosX + "px"
            circle.style.top = circlePosY + "px"

        }, 10);

    });

})


function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}










