import React, { Component } from "react";   //JEK INFORMATIQUE ET SERVICES
import Child24 from "./Child24";
import Child25 from "./Child25";
class Child7 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild24: false,
        shchild25: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild24":
        this.setState({ shchild24: !this.state.shchild24 });
        break;


        case "shchild25":
            this.setState({ shchild25: !this.state.shchild25 });
            break;
     
      default: return;
    }
  }
  render() {
    const {  shchild24, shchild25, } = this.state;
    return (<div id="listeclients" className="textcv3">
      <span onClick={() => this.hideComponent("shchild24")} className="textcv2" >
    
      
     Septembre 2007 à Févier 2012 :  Prestataire de service pour le client SOCIETE GENERALE siège, La défense. 
  
     
  
    
   </span> {shchild24 && <Child24 />}
      <br></br>
 
      <span onClick={() => this.hideComponent("shchild25")} className="textcv2">
    Autres
       
 
   
     
   
     
    </span>  {shchild25 && <Child25 />}
      
    </div>
    
  
 
 
);
}
}
  
  
export default Child7;