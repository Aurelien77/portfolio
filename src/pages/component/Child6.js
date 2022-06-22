import React, { Component } from "react";

class Child6 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild6: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild6":
        this.setState({ shchild6: !this.state.shchild6 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild6 } = this.state;
    return (
            
      <div  >
     Child 6
      

  
      {shchild6 && <Child6 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child6;
