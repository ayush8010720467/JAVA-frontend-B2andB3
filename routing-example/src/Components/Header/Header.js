import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <ul style={{ listStyle: "none" }}>
        <li className="nav">
          <Link to="/">Home</Link>
          {/* <a href='/'> Home</a>*/}
        </li>
        <li className="nav">
          <Link to="/aboutus">About us</Link>
        </li>
        <li className="nav">
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
