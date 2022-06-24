import React, { Component } from "react";


class Child31 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild31: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild31":
        this.setState({ shchild31: !this.state.shchild31 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild31 } = this.state;
    return (
            
      <span className="formation" ><br></br>Déscriptif des autres formations
      

  
      {shchild31 && <Child31 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child31;