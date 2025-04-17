import { useState } from "react";
import Board from "./Board";
import Tile from "./Tile";

const player_x = "X";
const player_o = "O";

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_x);

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === player_x) {
      setPlayerTurn(player_o);
    } else {
      setPlayerTurn(player_x);
    }
  };
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        playerTurn={playerTurn}
        onTileClick={handleTileClick}
      />
    </div>
  );
}

export default TicTacToe;
