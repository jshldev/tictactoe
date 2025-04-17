import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, playerTurn, onTileClick, strikeClass }) {
  return (
    <div className="board">
      <Tile
        value={tiles[0]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[1]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[2]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        className="bottom-border"
      />
      <Tile
        value={tiles[3]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[4]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[5]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        className="bottom-border"
      />
      <Tile
        value={tiles[6]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        className="right-border"
      />
      <Tile
        value={tiles[7]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        className="right-border"
      />
      <Tile
        value={tiles[8]}
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
