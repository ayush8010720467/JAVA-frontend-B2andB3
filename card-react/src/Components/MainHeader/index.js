import './index.css';
import logo from '../../logo.svg'
function MainHeader(props){
    return (
      <>
        <div className="main_header">
          <img src={logo} height="49" width="34" alt='logo'></img>
        </div>
      </>
    );
}
export default MainHeader;