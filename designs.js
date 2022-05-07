// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// sizePicker fires this on submit
function sizer(event) {
    event.preventDefault();
    // console.log("EVENT: ", event)

    // Retrieve values of inputHeight & inputWidth
    height = document.getElementById("inputHeight").value;
    width = document.getElementById("inputWidth").value;

    clearGrid(); // Clear the grid before making the new one
    makeGrid(height, width);
}

// Add event listener to sizePicker
let sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", sizer);


function makeGrid(height, width) {
    // Your code goes here!
    let canvas = document.getElementById("pixelCanvas");

    // console.log('height: ', height, 'width: ', width);

    /*
        <table>
            <tr>
                <td col1
                <td col2
                <td col3 ... 
            </tr>
        </table>
    */
    
    // For-loop for Rows & Columns - (M x N grid)
    
    // Create the table row
    for (let i = 0; i < height; i++) {
        let tr = document.createElement("tr"); // <tr>
        canvas.append(tr);

        // Create the table columns
        for (let j = 0; j < width; j++) {
            let td = document.createElement("td");  // <td>
            td.addEventListener("click", function () {
                let colorPicker = document.getElementById("colorPicker").value;
                this.style.backgroundColor = colorPicker
            });
            tr.append(td);
        }
    }

}

// Clears grid
function clearGrid() {
    let canvas = document.getElementById("pixelCanvas").innerHTML = "";
}

