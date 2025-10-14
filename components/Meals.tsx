import "./meals.css";
import ItemCard from "./Card";

// Import images for each meal
import Breakfast from "../assets/breakfast.png"; // insert the image's path here
import Lunch from "../assets/lunch.png"; // insert the image's path here
import HighTea from "../assets/hightea.png"; // insert the image's path here
import Dinner from "../assets/dinner.png"; // insert the image's path here

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
