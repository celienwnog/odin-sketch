let grid= document.querySelector("div#grid");

function changeColor(e){
    e.target.classList.add("colored");
}

make(16);

function make(n){
    for(let i= 0; i<n; i++){
        let row= document.createElement("div");
        row.setAttribute("id", "row");
        let size= 960/n;
        for(let j=0; j<n; j++){
            let box= document.createElement("div");
            box.setAttribute("id", "box");
            box.style.cssText= `height: ${size}px; width: ${size}px`;
            row.appendChild(box);
    
            box.addEventListener("mouseenter", changeColor);
        }
        grid.appendChild(row);
    }
}

function restart(){
    grid.textContent= "";
}

let btn= document.getElementById("btn");
btn.addEventListener("click", ()=> {
    let size= prompt("Enter grid size: ");
    restart();
    make(size);
})



