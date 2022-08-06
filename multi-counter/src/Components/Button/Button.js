import "./Button.css";

function Button(props) {
    return (
      <>
        <button onClick={props.handleClick} className={props.stylingClass}>{props.text? props.text: props.children}</button>
      </>
    );
}
export default Button;