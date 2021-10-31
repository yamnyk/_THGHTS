import Board from "./Board.js";
import {directions} from "./utils.js";

const b = new Board(10);

b.print()
b.move(directions.RIGHT)
b.print()
