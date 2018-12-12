var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




var n = 7;//take grid column value as you want
var j = 1;
let GridAria = document.getElementById("calenderGrid");
function takeInput(c) {
    let date = document.getElementById(c);
    modal.style.display = "block";
    document.getElementById('ok').onclick = () => {
        let input = document.getElementById("inputBox").value;
        date.innerText += `
                   ${input}`;
        modal.style.display = "none";
    }
}
for (var rows = 1; rows < 6; rows++) {

    var row = document.createElement("div");
    row.className = "headRow";
    row.id = `r${rows}`;
    for (k = 0; k < 7; k++) {
        if (j == 31) {
            break;
        }
        var cell = document.createElement("div");
        cell.innerText = j;
        let idv = `c${j++}`
        cell.id = idv;
        cell.onclick = () => { takeInput(idv); };
        row.appendChild(cell);
    }
    GridAria.appendChild(row);
}

