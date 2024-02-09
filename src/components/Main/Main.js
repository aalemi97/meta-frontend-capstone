import HighlightedItem from "../HighlightedItems/HighlightedItem";
import "./index.css";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";
function Main() {
  return (
    <main className="container">
      <div className="title">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <HighlightedItem
            title={item.title}
            imageSource={item.image}
            description={item.description}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;

const items = [
  {
    title: "Greek salad",
    image: greekSalad,
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    title: "Bruchetta",
    image: bruchetta,
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    image: lemonDessert,
    price: "$5.00",
    description:
      "The comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];
