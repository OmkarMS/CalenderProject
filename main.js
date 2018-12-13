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
let year = document.getElementById("year");
var d = new Date();
var n = d.getFullYear();
console.log("dddd"+d+"eeee"+n);
year.value=n;
 generateGrid();



function takeInput(c) {
    let date = document.getElementById(c);
    modal.style.display = "block";
    document.getElementById('ok').onclick = () => {
        let input = document.getElementById("inputBox").value;
        date.innerText += `
                   ${input}`;
        modal.style.display = "none";
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/event_data', true);
        xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.onreadystatechange = function () { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // console.log("got outputtt");
            }
        }
        let dateNo = c.toString().substring(1, c.length);
        // console.log(dateNo);
        const data = { "dayOfMon": dateNo, "textualStuff": input };
        xhr.send(JSON.stringify(data));

    }
}


function generateGrid() {
    let month = document.getElementById("monthList");
    var n = 7;//take grid column value as you want
    var j = 1;
    let noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let x = noOfDays[month.value - 1];
    if (year % 400 == 0 && month.value == 2) {
        x = 29;
    }
    let GridAria = document.getElementById("calenderGrid");
    GridAria.innerHTML = "";
    for (var rows = 1; rows < 6; rows++) {

        var row = document.createElement("div");
        row.className = "headRow";
        row.id = `r${rows}`;
        for (k = 0; k < 7; k++) {
            if (j == x + 1) {
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
}

function getEvents() {
    let request = new XMLHttpRequest();
    request.open('GET', '/loadEvents');
    request.responseType = 'text';
    request.onload = () => {
        let op = request.response;
        console.log("ddddddddddddddddddddddddd" + op);
    };
    request.send();
}

getEvents();