import "./AboutUs.css";
import { useSearchParams } from 'react-router-dom';
function AboutUs(props){
    let [searchParams, setSearchParams] = useSearchParams();

    return (
      <>
        <h1>About Us</h1>
        <p onClick={()=>{setSearchParams('lName',"Katiyar");}}>
          lorem fkfassjfdlkasdjflkajsdkfj asskdfjalksjfdklas fasdkjflkas. Thanks
          for connecting {searchParams.get('userName')}
        </p>
      </>
    );
}
export default AboutUs;