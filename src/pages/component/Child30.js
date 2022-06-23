import React, { Component } from "react";

class Child30 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild30: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild30":
        this.setState({ shchild30: !this.state.shchild30 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild30 } = this.state;
    return (
            
      <span  ><br></br> 
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
      

    <br></br> 
      {shchild30&& <Child30 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child30;