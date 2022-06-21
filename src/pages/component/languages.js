import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
 class languages extends Component {

state = {

languages : [

{id : 1,value: "Javascript", xp:1},
{id : 2,value: "CSS", xp:2},

{id : 3,value: "Php", xp:0.2},

/* {id : 4,value: "Python", xp:0}, */
],

frameworks : [
    {id : 1,value: "React", xp:1.2},
    {id : 2,value: "Bootstrap", xp:0.4},
    
    {id : 3,value: "Sass", xp:1.2},
    
   /*  {id : 4,value: "autre", xp:0}, */




]



}



  render() {

let {languages, frameworks} = this.state;






    return (<div className="knowledges">
        <div className="knowledgesContent">
      <div className="languagesFrameworks">

        <ProgressBar languages = {languages} className="LanguageDisplay" title="Languages"/>
      
        <ProgressBar languages = {frameworks}title="Framworks & Bibliothèques" className="FrameworksDisplay" />
      
      </div></div></div>
    )
  }
}

export default languages;