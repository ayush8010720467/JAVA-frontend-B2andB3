import React from "react";
import { generateRandomColorCode } from "../utils";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("button constructor");
  }
  changeBackground() {
    this.setState({ count: this.state.count+1 });
    this.props.setBgColor(generateRandomColorCode());
  }
  shouldComponentUpdate(){
    return false;
  }
  componentDidUpdate(){
    console.log("button componentDidUpdate");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("button getDerivedStateFromProps");
    return { ...state, ...props };
  }
  componentDidMount(){
    console.log("button componentDidMount");
  }
  render() {
    console.log("button render");
    return (
      <>
        <button onClick={() => this.changeBackground()}>
          {this.props.text ? this.props.text : "change Background"}
        </button>
      </>
    );
  }
}
export default Button;