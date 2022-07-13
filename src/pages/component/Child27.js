import React, { Component } from "react";
import Child30 from "./Child30";
import Child31 from "./Child31";


class Child27 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild30: false,
        shchild31: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild30":
        this.setState({ shchild30: !this.state.shchild30 });
        break;

        case "shchild31":
          this.setState({ shchild31: !this.state.shchild31 });
          break;
     
      default: return;
    }
  }
  render() {
    const {  shchild30,shchild31 } = this.state;
    return (
            <span className="tableau">
      <span onClick={() => this.hideComponent("shchild30")} className="formation" >
      --Tssi : Technicien supérieur de support informatique--
     <br></br>

  
      
 
    
   </span>{shchild30 && <Child30 />}
      
    {/*   <span onClick={() => this.hideComponent("shchild31")} className="formation">
        <br></br>
     --Autres-- child 31
      

  
     
  
    
   </span> {shchild31 && <Child31 />} */}
      
   </span>
     
    
  
 
 
);
}
}
  
  
export default Child27;