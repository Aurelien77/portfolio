
import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
  
class TextCV extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      shchild1: false,
      shchild2: false,
      shchild3: false,
      shchild4: true,
    };
    this.hideComponent = this.hideComponent.bind(this);
    
  }
  
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild1":
        this.setState({ shchild1: !this.state.shchild1 });
        break;
      case "shchild2":
        this.setState({ shchild2: !this.state.shchild2 });
        break;
      case "shchild3":
        this.setState({ shchild3: !this.state.shchild3 });
        break;
        case "shchild4":
        this.setState({ shchild4: !this.state.shchild4 });
        break;
      default: return;
    }
  }
  
  render() {
    const { shchild1, shchild2, shchild3, shchild4 } = this.state;
    return (
            <div className="cv">
<div className="flexcv">
 <div onClick={() => this.hideComponent("shchild4")}  >
  
  {shchild4 && <Child4 />} 
  
  </div>
  <div onClick={() => this.hideComponent("shchild4")} className="boutonlettre">
           ...
           </div>
  
  </div>  
<div className="ex">
            <div  onClick={() => this.hideComponent("shchild1")}>
            MES EXPERIENCES 1 
            </div><div>
        {shchild1 && <Child1 />}
        </div>
          <div onClick={() => this.hideComponent("shchild2")}>
          MES EXPERIENCES 2
          </div><div>
        {shchild2 && <Child2 />}
        </div>
          <div onClick={() => this.hideComponent("shchild3")}>
          MES EXPERIENCES 3
            </div><div>
        {shchild3 && <Child3 />}
        </div>
         
        </div>
           
           
           
           
           <div>
         
        <div></div>
        </div>
      </div>
    );
  }
}
  
export default TextCV;
