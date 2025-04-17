import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick }) {
  return (
    <div className="board">
      <Tile
        value={tiles[0]}
        onClick={() => onTileClick(0)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[1]}
        onClick={() => onTileClick(1)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[2]}
        onClick={() => onTileClick(2)}
        className="bottom-border"
      />
      <Tile
        value={tiles[3]}
        onClick={() => onTileClick(3)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[4]}
        onClick={() => onTileClick(4)}
        className="right-border bottom-border"
      />
      <Tile
        value={tiles[5]}
        onClick={() => onTileClick(5)}
        className="bottom-border"
      />
      <Tile
        value={tiles[6]}
        onClick={() => onTileClick(6)}
        className="right-border"
      />
      <Tile
        value={tiles[7]}
        onClick={() => onTileClick(7)}
        className="right-border"
      />
      <Tile value={tiles[8]} onClick={() => onTileClick(8)} />
      <Strike />
    </div>
  );
}

export default Board;
