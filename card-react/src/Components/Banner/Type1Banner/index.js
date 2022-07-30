import './index.css';
function Type1Banner(props){
 return (
   <>
     {/* <span className='type1Banner'>Type 1 Banner</span> */}
     <img
       src={props.image_src}
       alt={props.image_alt}
       className="type1Banner"
     ></img>
   </>
 );
}
export default Type1Banner;