import { useState } from "react";
import { CardList } from "./CardList";
import { Header } from "./Header";
import luffyImage from "./pics/Luffy.jpg";
import namiImage from "./pics/Nami.jpg";
import zoroImage from "./pics/Zoro.jpg";
import frankyImage from "./pics/Franky.jpg";
import sanjiImage from "./pics/Sanji.jpg";
import robinImage from "./pics/Robin.jpg";
import aceImage from "./pics/Ace.jpg";
import lawImage from "./pics/Law.jpg";
import chopperImage from "./pics/Chopper.jpg";
import usoppImage from "./pics/Usopp.jpg";
import buggyImage from "./pics/Buggy.jpg";
import shanksImage from "./pics/Shanks.jpg";

const defaultCard = [
  { id: "1", name: "Luffy", flip: false, url: luffyImage },
  { id: "2", name: "Nami", flip: false, url: namiImage },
  { id: "3", name: "Zoro", flip: false, url: zoroImage },
  { id: "4", name: "Franky", flip: false, url: frankyImage },
  { id: "5", name: "Sanji", flip: false, url: sanjiImage },
  { id: "6", name: "Robin", flip: false, url: robinImage },
  { id: "7", name: "Ace", flip: false, url: aceImage },
  { id: "8", name: "Law", flip: false, url: lawImage },
  { id: "9", name: "Chopper", flip: false, url: chopperImage },
  { id: "10", name: "Usopp", flip: false, url: usoppImage },
  { id: "11", name: "Buggy", flip: false, url: buggyImage },
  { id: "12", name: "Shanks", flip: false, url: shanksImage },
];
function App() {
  const [cards, setCards] = useState(defaultCard);
  const [score, setScore] = useState(0);
  const [bestscore, setBestscore] = useState(0);

  function increment() {
    setScore((prev) => prev + 1);
  }
  const bestScoreSetter = () => {
    if (score >= bestscore) {
      setBestscore(bestscore + 1);
    }
  };
  function onFlip(id) {
    const selectedCard = cards.filter((card) => card.id === id)[0];
    if (selectedCard.flip === false) {
      console.log(selectedCard);
      flipCard(selectedCard);
      console.log(cards);
      increment();
      bestScoreSetter();
    } else {
      flipAll();
      setScore(0);
      console.log(cards);
    }
  }
  const flipCard = (object) => {
    setCards(
      cards.map((card) =>
        card.id === object.id
          ? {
              ...card,
              flip: true,
            }
          : { ...card }
      )
    );
  };
  const flipAll = () => {
    setCards(
      cards.map((card) => {
        return { ...card, flip: false };
      })
    );
  };

  return (
    <div className="container">
      <Header score={score} bestscore={bestscore} />
      <CardList cards={cards} onFlip={onFlip} />
    </div>
  );
}

export default App;
