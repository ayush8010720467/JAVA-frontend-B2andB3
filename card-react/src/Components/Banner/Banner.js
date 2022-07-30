import './Banner.css';
import Type1Banner from './Type1Banner';
import Type2Banner from './Type2Banner';
import food1 from '../../assets/food.png'
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
function Banner(props){
    return (
      <>
        <div className="banner">
          {props.type === 1 && (
            <Type1Banner
              image_src={
                "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/6aab8ea03309163c.jpg?q=50"
              }
              image_alt={"food"}
            />
          )}
          {props.type === 2 && (
            <Type2Banner
              images_src={[food1, food2, food3]}
              images_alt={['food1', 'food2', 'food3']}
            ></Type2Banner>
          )}
        </div>
      </>
    );
}
export default Banner;