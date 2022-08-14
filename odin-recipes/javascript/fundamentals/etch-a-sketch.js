const container = document.getElementById("container");

function createGrid(columns, rows){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns);

    for(i=0; i< (rows*columns);i++){
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        container.appendChild(cell).className = "grid-item";
    }

}


createGrid(16,16);