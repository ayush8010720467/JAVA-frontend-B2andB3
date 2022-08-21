import React from 'react';
import { generateRandom } from '../utils';
class CBC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "red",
            availableColor: ['red', 'green', 'brown', 'orange', 'blue', 'black']
        }
    }
    handleClick(){
        // this.setState({ color: "green" });
        let randomIndex = generateRandom(0, this.state.availableColor.length);
        this.setState({ color: this.state.availableColor[randomIndex] });
    }
    
    render(){
        return (
          <>
            {"Hi This is the render Method of CBC"}
            <div style={{ color: this.state.color }} onClick={() => this.handleClick()}>
              {this.props.test}
            </div>
          </>
        );
    }
}
export default CBC;

// <Test x="hi"/> props= {x: "hi"}