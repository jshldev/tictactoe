import { useEffect, useState } from "react";
import Board from "./Board";
import Tile from "./Tile";
import GameOver from "./GameOver";
import GameState from "./GameState";
import PlayAgain from "./PlayAgain";

const player_x = "X";
const player_o = "O";
const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const wc of winningCombinations) {
    const { combo, strikeClass } = wc;
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === player_x) {
        setGameState(GameState.player_x_win);
      } else {
        setGameState(GameState.player_o_win);
      }
      return;
    }
  }
  const areAllTilesClicked = tiles.every((tile) => tile !== null);
  if (areAllTilesClicked === true) {
    setGameState(GameState.draw);
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_x);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }
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

  const handlePlayAgain = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(player_x);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        tiles={tiles}
        playerTurn={playerTurn}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      <PlayAgain gameState={gameState} onPlayAgain={handlePlayAgain} />
    </div>
  );
}

export default TicTacToe;
