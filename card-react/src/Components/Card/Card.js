// import food from "../../assets/food.png";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="restaurant_card">
        <div className="restaurant_image">
          <img src={props.src} alt="restaurant_image" width={"250px"} />
        </div>
        <div className="restaurant_desc">
          <h3 className="restaurant_name">{props.title}</h3>
          <p className="restaurant_subHeading">{props.desc}</p>
        </div>
        {/* <div className="restaurant_more_details"></div> */}
      </div>
    </>
  );
}
export default Card;
