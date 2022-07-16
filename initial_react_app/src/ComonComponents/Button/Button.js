function Button(props) {
  return <button onClick={props.clickHandler}>{props.text}</button>;
}
export default Button;
