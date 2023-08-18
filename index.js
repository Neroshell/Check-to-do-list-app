var button = document.querySelector(".bot")
var inputBox = document.querySelector(".input-box")
var listContainer = document.querySelector(".task-list");


button.addEventListener("click", addTask);


function addTask(event) {
    // Change button background color before showing alert
    
    this.style.backgroundColor = "#97FEED";
    
    setTimeout(function(){
        button.style.backgroundColor = "#35A29F";
    },1000);

    if (inputBox.value === "") {
        alert("Please insert a task");
    } else {
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let close = document.createElement("SPAN");
        close.innerHTML = "\u00d7";
        list.appendChild(close);
    }

    inputBox.value = "";

    saveData();
}


listContainer.addEventListener("click", play);

function play(event) {

        if (event.target.tagName === "LI"){

            event.target.classList.toggle("checked");
        }else if (event.target.tagName === "SPAN"){
            event.target.parentElement.remove();
            
        }
       saveData();       
}

function saveData(){

    localStorage.setItem("list", listContainer.innerHTML);
}

function displayData(){

   listContainer.innerHTML = localStorage.getItem("list");
}

displayData();

document.addEventListener('DOMContentLoaded', function() {
    let bar = document.querySelector("#bar");
    bar.addEventListener("click", openNav);

    function openNav() {
    
        document.getElementById("mySidenav").style.width = "100%";
    }

    let close = document.getElementById("closeNav");
    close.addEventListener("click", closeNav);

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
});