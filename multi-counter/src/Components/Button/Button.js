import "./Button.css";

function Button(props) {
    return (
      <>
        <button onClick={props.handleClick} className={props.stylingClass}>{props.text}</button>
      </>
    );
}
export default Button;