document.addEventListener("DOMContentLoaded", () => {
  const pieces = document.querySelectorAll(".table-class img");
  const squares = document.querySelectorAll(".table-class");

  pieces.forEach(piece => {
    piece.draggable = true;

    piece.addEventListener("dragstart", e => {
      e.dataTransfer.setData("pieceSrc", e.target.src);
      e.dataTransfer.setData("fromIndex", e.target.parentElement.dataset.index);
      setTimeout(() => {
        e.target.style.visibility = "hidden"; // hide while dragging
      }, 0);
    });

    piece.addEventListener("dragend", e => {
      e.target.style.visibility = "visible"; // restore
    });
  });

  squares.forEach((square, index) => {
    square.dataset.index = index; // give each square an id

    square.addEventListener("dragover", e => {
      e.preventDefault(); // allow dropping
    });

    square.addEventListener("drop", e => {
      e.preventDefault();

      const pieceSrc = e.dataTransfer.getData("pieceSrc");
      const fromIndex = e.dataTransfer.getData("fromIndex");

      // get actual target square (in case dropped on <img>)
      const dropSquare = e.target.classList.contains("table-class")
        ? e.target
        : e.target.closest(".table-class");

      if (!dropSquare) return;

      // clear old piece from origin
      const origin = document.querySelector(`[data-index="${fromIndex}"]`);
      if (origin) origin.innerHTML = "";

      // place piece in new square
      dropSquare.innerHTML = `<img src="${pieceSrc}" draggable="true">`;

      // reattach drag listeners to the new piece
      const newPiece = dropSquare.querySelector("img");
      if (newPiece) {
        newPiece.addEventListener("dragstart", ev => {
          ev.dataTransfer.setData("pieceSrc", ev.target.src);
          ev.dataTransfer.setData("fromIndex", ev.target.parentElement.dataset.index);
          setTimeout(() => {
            ev.target.style.visibility = "hidden";
          }, 0);
        });
        newPiece.addEventListener("dragend", ev => {
          ev.target.style.visibility = "visible";
        });
      }
    });
  });
});
