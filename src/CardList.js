import { Card } from "./Card";

export const CardList = ({ cards, randomize, onFlip }) => {
  return (
    <div className="card-grid">
      {cards
        .sort(() => Math.random() - 0.5)
        .map((card, index) => (
          <Card key={index} card={card} randomize={randomize} onFlip={onFlip} />
        ))}
    </div>
  );
};
