



import React from 'react'

 const Lettre = () => {


  var texte=' texte defilant texte defilant texte defilant texte defilant texte defilant texte defilant texte defilant texte defilant'
  var reel=''
  function win(){
  
  reel=reel.slice(1,reel.length)+reel.slice(0,1)
  document.getElementById('cloc').firstChild.nodeValue=reel
  
  if (reel===""){
  reel=texte
  }
  setTimeout("win()",100)
  } 














  return (
    <div>{win}</div>
  )
}
export default Lettre;
