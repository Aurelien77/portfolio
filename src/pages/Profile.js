import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

/* import LocalCafeIcon from "@material-ui/icons//LocalCafe"; */

function Profile() {

 




  let { id } = useParams();
  let history = useHistory();

  const [username, setUsername] = useState("");     
  const [photo_profil, setphoto_profil] = useState("");  
  const [listOfPosts, setListOfPosts] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {





    axios
      .get(`https://portfolioau777.herokuapp.com/auth/basicinfo/${id}`)
      .then((response) => {
        setUsername(response.data.username);
        setphoto_profil(response.data.photo_profil);
      
      });

    axios
      .get(`https://portfolioau777.herokuapp.com/posts/byuserId/${id}`)   
      .then((response) => {
        setListOfPosts(response.data);

     
       
      

      });




   
  }, []);

 

  return ( 
  
  
 
  
  <div className="containerpost">
    <div className="flexportfolio">

   
     

   

    
    



        {listOfPosts.map((value, key) => {


  const date = new Date(value.createdAt);
      
   



          return (
          
          
          <div className="flex">
    
       
            <div  key={key}  className="post">


           
            <div className="title"   onClick={() => {
                history.push(`/post/${value.id}`);
              }}> {value.title} </div>
            <div
              className="body"
              onClick={() => {
                history.push(`/post/${value.id}`);
              }}
            >
              {value.postText}
            

            <div className="iframdiv">
            <iframe  className="lien"
             loading="lazy"
               scrolling="yes"
               frameBorder="10"
               overflow="hidden"
               height="50%"
               width="50%" 
                  src={value.lien}
                  allowfullscreen ="true"
                 
                ></iframe>
              
           
              
              </div>
              </div>
              <div className="footer">
                <div className="textfooter">
                
{new Intl.DateTimeFormat('local').format(date)}
           

       
              
                </div>

 
              </div>
            </div>  </div>
          );
        })}
      </div></div>
    
  );
}

export default Profile;
