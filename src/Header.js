export const Header = ({ score, bestscore }) => {
  return (
    <div className="header">
      <div className="title">
        ONE PIECE MEMORY GAME
        <div className="warning">
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </div>
      <div className="score">
        <div>Score: {score}</div>
        <div>Best score: {bestscore}</div>
      </div>
    </div>
  );
};
