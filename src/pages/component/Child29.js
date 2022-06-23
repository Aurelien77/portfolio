import React, { Component } from "react";

class Child29 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild29: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild29":
        this.setState({ shchild29: !this.state.shchild29 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild29 } = this.state;
    return (
            
      <span className="tableau"><br></br><br></br>
    Déscriptif de la formation  : Child 29 <br></br><br></br>
    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      

  
      {shchild29 && <Child29 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child29;