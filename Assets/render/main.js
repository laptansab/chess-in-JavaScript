import {
  blackBishop,
  blackKing,
  blackKnight,
  blackQueen,
  blackPawn,
  blackRook,
  whitePawn,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whiteQueen,
  whiteRook,
} from "../data/pieces.js";

import { ROOT_DIV } from "../helper/constant.js";

// use when pieces needed to be render in board
function piecesRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      // if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);
        //create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        squareEl.appendChild(piece);
      }
    });
  });
}
// use when you want to render board for first time when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");

      // render blackPawn
      if (square.id[1] == 7) {
        square.piece = blackPawn(square.id);
      }

      // render blackRook
      if (square.id == "a8" || square.id == "h8") {
        square.piece = blackRook(square.id);
      }

      // render blackBishop
      if (square.id == "c8" || square.id == "f8") {
        square.piece = blackBishop(square.id);
      }

      // render blackKnight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = blackKnight(square.id);
      }

      // render blackKing
      if (square.id == "e8") {
        square.piece = blackKing(square.id);
      }

      // render blackQueen
      if (square.id == "d8") {
        square.piece = blackQueen(square.id);
      }

      // render whitePawn
      if (square.id[1] == 2) {
        square.piece = whitePawn(square.id);
      }

      // render whiteRook
      if (square.id == "a1" || square.id == "h1") {
        square.piece = whiteRook(square.id);
      }

      // render whiteKnight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = whiteKnight(square.id);
      }
      // render whiteBishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = whiteBishop(square.id);
      }

      // render whiteKing
      if (square.id == "d1") {
        square.piece = whiteKing(square.id);
      }

      // render whiteQueen
      if (square.id == "e1") {
        square.piece = whiteQueen(square.id);
      }

      rowEl.appendChild(squareDiv);
    });
    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });

  piecesRender(data);
}

export { initGameRender };
