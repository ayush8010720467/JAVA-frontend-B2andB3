import './index.css';
function Type2Banner(props){
    return (
      <>
        <div className="type2Banner">{props.images_src.map((elem, index) => {
            return (
              <img
                src={elem}
                alt={props.images_alt[index]}
                className="type2Banner_card"
              ></img>
            );
        })}</div>
      </>
    );
}
export default Type2Banner;