
import React, { Component } from "react";
  
class Child2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return <div>This is how GFG child component 
                number 2 looks like.</div>;
  }
}
  
export default Child2;