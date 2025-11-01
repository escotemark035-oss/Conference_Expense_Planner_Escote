import "./meals.css";
import ItemCard from "./Card";

import Breakfast from "../src/assets/images/Breakfast.jpg";
import Lunch from "../src/assets/images/Lunch.jpg";
import HighTea from "../src/assets/images/HighTea.jpg";  // if it exists
import Dinner from "../src/assets/images/Dinner.jpg";    // if it exists


function MealsComp() {
  return (
    <div className="content-container">
      <h1 className="title" id="h1_meals">
        Meal <br /> Selection
      </h1>

      <div className="item-container">
        <ItemCard
          image={Breakfast}
          title="Breakfast"
          price={50}
          withCapacity={false}
        />
        <ItemCard
          image={Lunch}
          title="Lunch"
          price={65}
          withCapacity={false}
        />
        <ItemCard
          image={HighTea}
          title="High Tea"
          price={25}
          withCapacity={false}
        />
        <ItemCard
          image={Dinner}
          title="Dinner"
          price={70}
          withCapacity={false}
        />
      </div>
    </div>
  );
}

export default MealsComp;
