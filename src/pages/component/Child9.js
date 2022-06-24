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
            <div id="listeclients" className="textcv3">


              
      <span  onClick={() => this.hideComponent("shchild21")} className="textcv2">👉 1- janvier 2015  à Septembre 2016 : Préstataire de service chez le client <span className="entreprise"> Videlio Siège, Gennevilliers.</span>
     

  
      
   </span>
   
   
   
   {shchild21 && <Child21 />}  <br></br>
    

<span onClick={() => this.hideComponent("shchild22")} className="textcv2" >👉 2- Mai 2014  à janvier 2015 : Préstataire de service chez le client <span className="entreprise">BNP PARIBAS Siège, Paris.</span> 

 





</span> {shchild22 && <Child22 />}  <br></br>
      
 
      <span onClick={() => this.hideComponent("shchild23")} className="textcv2">👉 3- janvier 2015  à Septembre 2016 : Préstataire de service chez le client <span className="entreprise"> Ministère de l'économie, Bercy. </span>
     
       
      
      
       
      
      
      </span>     {shchild23 && <Child23 />} <br></br>
      
     
      </div>
  
 
 
);
}
}
  
  
export default Child9;