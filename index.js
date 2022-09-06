var j = 1;
function add() {
    var head1 = String (prompt("Please Enter the tile of the list: "));
    var item1 = Number(prompt("Enter Number of Tasks to be added (Enter Only Number)"));
    var arr =  new Array();
    for (var i = 0; i < item1; i++) {
        arr[i] = prompt("ENTER " + (i+1) + " ELEMENT");
    }
    var boxd = document.getElementById("box-div");
    var box1 = document.createElement("div");
    box1.className = "box";
    box1.innerHTML += `<h3>${head1}</h3>`;
    for (var i = 0; i < item1; i++) {
        if(arr[i]!=""){
            box1.innerHTML += `<h4>
                                <input type="checkbox" id="id${j}" onclick="checkl()">
                                <label for="id${j}" id="label${j}">${arr[i]}</label>
                        </h4>`;
            j++;
        }
    }
    if((head1!=="" && item1!=null))
            boxd.appendChild(box1);
    }
function checkl() {
    for (var i = 1; i <= j; i++) {
        var checkb = document.getElementById("id" + i);
        if (checkb.checked == true) {
            document.getElementById("label" + i).style.textDecorationLine = "line-through";
            document.getElementById("label" + i).style.color = "#533483";
        } else {
            document.getElementById("label" + i).style.textDecorationLine = "none";
            document.getElementById("label" + i).style.color = "#E94560";
        }
    };
}