
import React, { Component } from "react";       //EXPERIENCE PROFESSIONELLES
import Child5 from "./Child5";

import Child7 from "./Child7";

import Child9 from "./Child9";

class Child1 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild5: false,
        shchild6: false,
        shchild5: false,
        shchild7: false,
        shchild8: false,
        shchild9: false,
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild5":
        this.setState({ shchild5: !this.state.shchild5 });
        break;
      
          case "shchild7":
            this.setState({ shchild7: !this.state.shchild7 });
            break;

          

              case "shchild9":
                this.setState({ shchild9: !this.state.shchild9 });
                break;
      default: return;
    }
  }
  render() {
    const {  shchild5 , shchild7, shchild9 } = this.state;
    return (
            
<div className="cvarriere">

            <div  onClick={() => this.hideComponent("shchild5")}  id="topteam">
        <span className="texttitrecv"> <span id="spantopteam">TOPTEAM</span> filiale du groupe<span id="spantopteam"> DEVOTEAM </span>
        <br></br> <span className="datecv"> ➡️ Septembre 2016 à janvier 2011</span> 
        
        
        </span>
           
     
       
         
       
         
        </div>
           
        {shchild5 && <Child5/>}
           
           <div  onClick={() => this.hideComponent("shchild9")}id="videlio">
            <span className="texttitrecv">  <span id="spantopteam"> VIDELIO </span> ancienement  <span id="spantopteam"> IEC </span><br></br>
            
            <span className="datecv"> ➡️ Février 2013 à Septembre 2016</span>
            </span>
           
     
       
        
       
         
        </div> {shchild9 && <Child9 />}

        <div  onClick={() => this.hideComponent("shchild7")} id="jek">
         <span className="texttitrecv">  <span id="spantopteam">JEK INFORMATIQUE ET SERVICES </span><br></br><span className="datecv"> ➡️ Septembre 2007 à Aout 2008</span></span>
           
     
       
        
       
         
        </div>
        {shchild7 && <Child7 />}
         
        </div>
      
      
    );
  }
}
  
  
export default Child1;
