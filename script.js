const container = document.getElementById("container");
const span = document.querySelector("span");
const translate = document.querySelector("#translate");
const notConverted = document.querySelector("#not-converted");
const converted = document.querySelector("#converted");
const foreground = document.querySelector("#foreground");
const copyButton = document.querySelector(".copyButton");
const threshold = document.querySelector("#threshold");
const xmark = document.querySelector("#xmark");
const h3notConverted = document.querySelector("#h3-unconverted");
const h3converted = document.querySelector("#h3-converted");

let spanOffsetTop = span.offsetTop;
let convertedBottom = 0;
function convert() {
    const startStr = notConverted.textContent;
    // console.log(startStr[1]);
    let endStr = "";
    for (let i = 0; i < startStr.length; i++) {
        if (startStr[i] === "q" || startStr[i] === "Q") {
            endStr += "ქ";
        } else if (startStr[i] === "w") {
            endStr += "წ";
        } else if (startStr[i] === "W") {
            endStr += "ჭ";
        } else if (startStr[i] === "e" || startStr[i] === "E") {
            endStr += "ე";
        } else if (startStr[i] === "r") {
            endStr += "რ";
        } else if (startStr[i] === "R") {
            endStr += "ღ";
        } else if (startStr[i] === "t") {
            endStr += "ტ";
        } else if (startStr[i] === "T") {
            endStr += "თ";
        } else if (startStr[i] === "y" || startStr[i] === "Y") {
            endStr += "ყ";
        } else if (startStr[i] === "u" || startStr[i] === "U") {
            endStr += "უ";
        } else if (startStr[i] === "i" || startStr[i] === "I") {
            endStr += "ი";
        } else if (startStr[i] === "o" || startStr[i] === "O") {
            endStr += "ო";
        } else if (startStr[i] === "p" || startStr[i] === "P") {
            endStr += "პ";
        } else if (startStr[i] === "a" || startStr[i] === "A") {
            endStr += "ა";
        } else if (startStr[i] === "s") {
            endStr += "ს";
        } else if (startStr[i] === "S") {
            endStr += "შ";
        } else if (startStr[i] === "d" || startStr[i] === "D") {
            endStr += "დ";
        } else if (startStr[i] === "f" || startStr[i] === "F") {
            endStr += "ფ";
        } else if (startStr[i] === "g" || startStr[i] === "G") {
            endStr += "გ";
        } else if (startStr[i] === "h" || startStr[i] === "H") {
            endStr += "ჰ";
        } else if (startStr[i] === "j") {
            endStr += "ჯ";
        } else if (startStr[i] === "J") {
            endStr += "ჟ";
        } else if (startStr[i] === "k" || startStr[i] === "K") {
            endStr += "კ";
        } else if (startStr[i] === "l" || startStr[i] === "L") {
            endStr += "ლ";
        } else if (startStr[i] === "z") {
            endStr += "ზ";
        } else if (startStr[i] === "Z") {
            endStr += "ძ";
        } else if (startStr[i] === "x" || startStr[i] === "X") {
            endStr += "ხ";
        } else if (startStr[i] === "c") {
            endStr += "ც";
        } else if (startStr[i] === "C") {
            endStr += "ჩ";
        } else if (startStr[i] === "v" || startStr[i] === "V") {
            endStr += "ვ";
        } else if (startStr[i] === "b" || startStr[i] === "B") {
            endStr += "ბ";
        } else if (startStr[i] === "n" || startStr[i] === "N") {
            endStr += "ნ";
        } else if (startStr[i] === "m" || startStr[i] === "M") {
            endStr += "მ";
        } else if (startStr[i] === "`") {
            endStr += "„";
        } else if (startStr[i] === "~") {
            endStr += "“";
        } else if (startStr[i] === "_") {
            endStr += "–";
        } else if (startStr[i] === "-" && startStr[i + 1] === " ") {
        } else if (startStr[i - 1] === "-" && startStr[i] === " ") {
            //
        } else {
            endStr += startStr[i];
        }
    }
    // converted.style.width = endStr.length;
    converted.textContent = endStr;
    // console.log(converted.scrollHeight);

    // copyButton.display = "inline";
    copyButton.addEventListener("click", () => {
        const copyText = converted.textContent;
        navigator.clipboard.writeText(copyText);
    });
    // console.log(copyButton.offsetTop);

    if (converted.textContent === "") {
        converted.style.paddingBottom = "0px";
        copyButton.style.display = "none";
        // console.log("skdvblfwacndkfneac");
    } else {
        converted.style.paddingBottom = "40px";
        copyButton.style.display = "unset";
        copyButton.style.top =
            converted.offsetTop + converted.scrollHeight - 35 + "px";

        // console.log(copyButton.style.top);
    }

    console.log(converted.offsetTop, converted.clientHeight);

    threshold.style.top =
        Math.max(
            notConverted.offsetTop + notConverted.scrollHeight,
            converted.offsetTop + converted.scrollHeight
        ) + "px";

    copyButton.style.left =
        converted.offsetLeft + converted.clientWidth - 35 + "px";
}

copyButton.style.display = "none";

// copyButton.innerText = "Copy";
// copyButton.classList.add("copyButton");
// converted.insertAdjacentElement("afterend", copyButton);

translate.addEventListener("click", () => {
    convert();
});

notConverted.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
        e.preventDefault();
        convert();

        spacing();
    }
});

span.addEventListener("paste", function (e) {
    e.preventDefault(); // Prevent default paste action

    const text = e.clipboardData.getData("text/plain"); // Get plain text from clipboard

    // Set the plain text as the content of the span element
    span.textContent += text;
});

// notConverted.style.paddingTop = "40px";

translate.style.top = notConverted.offsetTop + 20 + "px";

// let smallFont = false;
threshold.style.top =
    Math.max(
        notConverted.offsetTop + notConverted.scrollHeight,
        converted.offsetTop + converted.scrollHeight
    ) + "px";

xmark.style.top = spanOffsetTop + 10 + "px";
xmark.style.left =
    notConverted.offsetLeft + notConverted.clientWidth - 40 + "px";
xmark.style.display = "none";

let txtScale = 1;
span.addEventListener("input", () => {
    span.style.height = "auto";

    if (notConverted.textContent !== "") {
        // notConverted.style.paddingTop = "40px";
        xmark.style.display = "unset";
        xmark.style.top = spanOffsetTop - 35 + "px";
        xmark.style.left =
            notConverted.offsetLeft + notConverted.clientWidth - 30 + "px";

        xmark.style.cursor = "pointer";

        xmark.classList.remove("hidden");

        copyButton.style.top =
            converted.offsetTop + converted.scrollHeight - 35 + "px";

        copyButton.style.left =
            converted.offsetLeft + converted.clientWidth - 35 + "px";

        // notConverted.style.paddingRight = "40px";

        spacing();

        // xmark.classList.add("visible");
    } else {
        // notConverted.style.paddingTop = "7px";
        // xmark.style.display = "none";
        xmark.style.cursor = "text";

        // xmark.classList.remove("visible");
        xmark.classList.add("hidden");

        spacing();
    }

    if (span.clientHeight * txtScale < foreground.clientHeight * 0.6) {
        txtScale = 1;
        span.style.height = span.textContent.scrollHeight + "px";
        notConverted.style.fontSize = "larger";
        converted.style.fontSize = "larger";

        copyButton.style.top =
            converted.offsetTop + converted.scrollHeight - 35 + "px";
        // smallFont = false;
    } else {
        txtScale = 2;
        span.style.height = span.textContent.scrollHeight + "px";
        notConverted.style.fontSize = "medium";
        converted.style.fontSize = "medium";

        copyButton.style.top =
            converted.offsetTop + converted.scrollHeight - 35 + "px";
        // smallFont = true;
    }

    converted.style.fontSize = span.style.fontSize;

    threshold.style.top =
        Math.max(
            notConverted.offsetTop + notConverted.scrollHeight,
            converted.offsetTop + converted.scrollHeight
        ) + "px";
});

xmark.addEventListener("click", () => {
    notConverted.textContent = "";
    xmark.style.display = "none";
    notConverted.style.paddingTop = "7px";

    spacing();
});

translate.addEventListener("click", function () {
    this.classList.add("clicked");
});

translate.addEventListener("transitionend", function () {
    this.classList.remove("clicked");
});

container.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    // console.log(window.scrollY);
});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
function magnet() {
    const dotSize = 2; //WARNING: This variable isn't connected to css element of dot. Also it's width (diameter).
    const circleSize = 140;

    let bodyHeight = document.body.clientHeight;
    let bodyWidth = document.body.clientWidth;

    const container = document.querySelector("#container");
    let circleCountX = Math.floor(bodyWidth / 25); // 25 is just the size that one dot will occupy (including left whitespace and dot size)

    let circleCountY = Math.floor(bodyHeight / 25);

    const distanceX = (bodyWidth - dotSize * circleCountX) / (circleCountX + 1);

    const distanceY =
        (bodyHeight - dotSize * circleCountY) / (circleCountY + 1);

    const numCircles = circleCountX * circleCountY;

    // create dots
    const dots = document.createElement("div");
    dots.classList.add("dots");
    container.appendChild(dots);
    for (let i = 1; i <= numCircles; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.classList.add(i);
        dots.appendChild(dot);
    }

    let row = 0;
    let column = 0;

    for (let i = 0; i < dots.children.length; i++) {
        const dot = dots.children[i];
        if (i % circleCountX === 0 && i !== 0) {
            row++;
            column = 0;
        }

        const yPos = row * (distanceY + dotSize) + distanceY;
        const xPos = column * (distanceX + dotSize) + distanceX;

        dot.style.left = `${xPos}px`;
        dot.style.top = `${yPos}px`;

        column++;
    }

    ///////////////////////////////////////////
    // create the circle that follows the mouse
    const circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);

    //////////////////// ON PC
    // Update the position of the circle on mousemove
    container.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // check for collision with each dot
        for (let i = 0; i < dots.childElementCount; i++) {
            const dx = x - (dots.children[i].offsetLeft + dotSize / 2);
            const dy = y - (dots.children[i].offsetTop + dotSize / 2);
            // console.log(dx, dy);

            const distance = Math.round(Math.sqrt(dx * dx + dy * dy));

            // calculate the movement distance based on the distance between the dot and the circle
            // if (distance < (circleSize * 3) / 5) {
            if (distance < (circleSize * 3) / 5) {
                const moveDistance = Math.min(25 / distance, 1) * 15;

                // move the dot away from the circle based on the movement distance
                dots.children[i].style.transform = `translate(${
                    (-moveDistance * dx) / distance
                }px, ${(-moveDistance * dy) / distance}px)`;
            } else {
                // Reset the position of the dot to its original position
                dots.children[i].style.transform = "";
            }
        }
    });

    //////////// ON SMATRPHONE
    // update the position of the circle on touchmove
    container.addEventListener("touchmove", (event) => {
        const x = event.touches[0].clientX;
        const y = event.touches[0].clientY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // check for collision with each dot
        for (let i = 0; i < dots.childElementCount; i++) {
            const dx = x - (dots.children[i].offsetLeft + dotSize / 2);
            const dy = y - (dots.children[i].offsetTop + dotSize / 2);
            // console.log(dx, dy);

            const distance = Math.round(Math.sqrt(dx * dx + dy * dy));

            // calculate the movement distance based on the distance between the dot and the circle
            // if (distance < (circleSize * 3) / 5) {
            if (distance < (circleSize * 3) / 5) {
                const moveDistance = Math.min(25 / distance, 1) * 15;

                // move the dot away from the circle based on the movement distance
                dots.children[i].style.transform = `translate(${
                    (-moveDistance * dx) / distance
                }px, ${(-moveDistance * dy) / distance}px)`;
            } else {
                // Reset the position of the dot to its original position
                dots.children[i].style.transform = "";
            }
        }
    });
}
magnet();

function spacing() {
    offset1 = notConverted.offsetTop + notConverted.scrollHeight + 40;
    // translate.offsetTop = parseInt(translate.style.top);
    translate.style.top = offset1 + "px";

    offset2 = offset1 + 40;
    h3converted.style.top = offset2 + "px";

    offset3 = offset2 + 60;
    converted.style.top = offset3 + "px";

    if (window.innerWidth > 768) {
        converted.style.top = notConverted.offsetTop + "px";
        translate.style.top = notConverted.offsetTop + 20 + "px";
        h3converted.style.top = h3notConverted.style.top;
    }
}

// // Attach an event listener to the window resize event
notConverted.addEventListener("input", () => {
    spacing();
});

// Keep translate button between notConverted and converted when width is smaller than 768px
function responsive() {
    if (window.innerWidth <= 768) {
        spacing();
    }
}
responsive();

window.addEventListener("resize", function () {
    container.removeChild(container.querySelector(".dots")); // remove existing dots
    magnet();

    translate.style.top = notConverted.offsetTop + 20 + "px";

    xmark.style.top = notConverted.offsetTop + 10 + "px";
    xmark.style.left =
        notConverted.offsetLeft + notConverted.clientWidth - 40 + "px";

    copyButton.style.top = spanOffsetTop + converted.scrollHeight - 35 + "px";
    copyButton.style.left =
        converted.offsetLeft + converted.clientWidth - 40 + "px";

    responsive();
});