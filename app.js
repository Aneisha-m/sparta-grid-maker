document.addEventListener("DOMContentLoaded", function() {

  // Get Element by ID
  const board = document.getElementById("board");
  var row;

  // create grid Function
  function makeGrid(x) {
    for (let rows = 0; rows < x; rows++) {
      row = document.createElement("div");
      row.setAttribute("class", "row");
      board.appendChild(row);
      for (let columns = 0; columns < x; columns++) {
        const column = document.createElement("div");
        column.setAttribute("class", "col");
        row.appendChild(column);

        //Random Color on mouseover event
        column.addEventListener("mouseover", function(e) {
        console.log(e.target);
        event.target.style.backgroundColor = randomColor();
        });
      }
    } // close of col loop
  }

  //random color function
  function randomColor() {
    return `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  }

  makeGrid(5); //input preferred gird size
  
}); //END DOMCONTENTLOADED
