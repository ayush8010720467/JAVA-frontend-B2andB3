import React from 'react'
class TestUnmount extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        console.log("TestUnmount componentWillUnmount");
    }
    render(){
        return <h1>This is the test Unmount component</h1>
    }
}
export default TestUnmount;