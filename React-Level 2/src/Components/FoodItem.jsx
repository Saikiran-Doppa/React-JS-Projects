import Item from "./Item";

const FoodItem = ({ foodItems }) => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          item={item}
          handleBuyButton={() => console.log(`${item} being bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
