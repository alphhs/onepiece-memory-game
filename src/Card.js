export const Card = ({ card, onFlip }) => {
  return (
    <div className="card" onClick={() => onFlip(card.id)}>
      <div className="card-image">
        <img
          src={card.url}
          alt={card.name}
          style={{ width: "13rem", height: "auto", borderRadius: "1rem" }}
        />
      </div>
      <div className="card-title">{card.name}</div>
    </div>
  );
};
