import React, { Component } from "react";
import Child21 from "./Child21";
import Child22 from "./Child22";
import Child23 from "./Child23";
class Child9 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild21: false,
        shchild22: false,
        shchild23: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild21":
        this.setState({ shchild21: !this.state.shchild21 });
        break;

        case "shchild22":
            this.setState({ shchild22: !this.state.shchild22 });
            break;


            case "shchild23":
                this.setState({ shchild23: !this.state.shchild23 });
                break;
     
      default: return;
    }
  }
  render() {
    const {  shchild21,shchild22,shchild23 } = this.state;
    return (
            <div id="listeclients2">
      <span  onClick={() => this.hideComponent("shchild21")} className="textcv2">
      janvier 2015  à Septembre 2016 :  Videlio Siège, Gennevilliers.
      child 9

  
      
   </span>{shchild21 && <Child21 />}  <br></br>
    

<span onClick={() => this.hideComponent("shchild22")} className="textcv2" >Préstataire de service chez le client BNP PARIBAS Siège, Paris. 
Child 10
 





</span> {shchild22 && <Child22 />}  <br></br>
      
 
      <span onClick={() => this.hideComponent("shchild23")} className="textcv2"> Préstataire de service chez le client Ministère de l'économie, Bercy. 
      Child 11
       
      
      
       
      
      
      </span>     {shchild23 && <Child23 />} <br></br>
      
     
      </div>
  
 
 
);
}
}
  
  
export default Child9;