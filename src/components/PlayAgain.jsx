import GameState from "./GameState";

function PlayAgain({ gameState, onPlayAgain }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onPlayAgain} className="playagain-button">
      Play Again
    </button>
  );
}

export default PlayAgain;
