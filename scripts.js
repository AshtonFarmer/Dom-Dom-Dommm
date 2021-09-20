//Adds the DomDocument to the html
document.addEventListener('DOMContentLoaded', () => {

    // Makes button on screen to say Add Square
    const addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Add Square";
    document.body.appendChild(addSquareButton);
    const squareContainer = document.createElement("div")
    squareContainer.className = "sq-container"
    document.body.appendChild(squareContainer)


    let numOfSquares = 0;

    //creates a div everytime button is clicked and adds number to each div of square++
    addSquareButton.addEventListener("click", function () {
        const newDiv = document.createElement("div");
        const numSpan = document.createElement("span")
        newDiv.className = "squarestyle";
        numOfSquares++
        newDiv.id = numOfSquares;
        numSpan.textContent = numOfSquares;
        numSpan.style.color= 'white';
        newDiv.appendChild(numSpan);
       squareContainer.appendChild(newDiv);
        numSpan.style.visibility = 'hidden'

        // Mouseover puts number on square
        newDiv.addEventListener("mouseover", function () {
            numSpan.style.visibility = 'visible'
        })

        newDiv.addEventListener("mouseout", function () {
            numSpan.style.visibility = 'hidden'
        })

        newDiv.addEventListener("click", function () {
            newDiv.style.background = getRandomColor();
        })

        newDiv.addEventListener("dblclick", function () {
            if (newDiv.id % 2 == 0) {
                if (newDiv.nextSibling) {
                    newDiv.nextSibling.remove()
                } else {
                    alert("No Square!")
                }
            } else if (newDiv.id % 1 == 0) {
                if (newDiv.previousSibling) {
                    newDiv.previousSibling.remove()
                } else {
                    alert("No Square!")
                }

            }

        });

        // color randomizer function
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

    })
})
