import "./Addons.css";
import ItemCard from "./Card";

// Import images for each addon
import Projectors from "../assets/projectors.png"; // insert the image's path here
import Speaker from "../assets/speaker.png"; // insert the image's path here
import Microphones from "../assets/microphones.png"; // insert the image's path here
import Whiteboard from "../assets/whiteboard.png"; // insert the image's path here
import Signage from "../assets/signage.png"; // insert the image's path here

function AddonsComp() {
  return (
    <div className="content-container">
      <h1 className="title" id="h1_addons">
        Add-ons <br /> Selection
      </h1>

      <div className="item-container">
        <ItemCard
          image={Projectors}
          title="Projectors"
          price={200}
          withCapacity={false}
        />
        <ItemCard
          image={Speaker}
          title="Speakers"
          price={35}
          withCapacity={false}
        />
        <ItemCard
          image={Microphones}
          title="Microphones"
          price={45}
          withCapacity={false}
        />
        <ItemCard
          image={Whiteboard}
          title="Whiteboards"
          price={80}
          withCapacity={false}
        />
        <ItemCard
          image={Signage}
          title="Signages"
          price={80}
          withCapacity={false}
        />
      </div>
    </div>
  );
}

export default AddonsComp;
