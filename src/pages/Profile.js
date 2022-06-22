import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
/* import LocalCafeIcon from "@material-ui/icons//LocalCafe"; */

function Profile() {
  let { id } = useParams();
  let history = useHistory();

  const [username, setUsername] = useState("");      //Set authState avec la réponse de basicinfo + Username
  const [photo_profil, setphoto_profil] = useState("");  //Set authState avec la réponse de basicinfo + Photo
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
      .get(`https://portfolioau777.herokuapp.com/posts/byuserId/${id}`)   //Retourne la liste des post par UserID + Set la clée  ListOfPost avec la liste des posts 
      .then((response) => {
        setListOfPosts(response.data);
     

      });




   
  }, []);




  return ( <div className="containerpost">
    <div >

   
     
{/*       <div className="profil">
      <img
          src={"https://portfolioau777.herokuapp.com/images/" + photo_profil}
          alt="profil"
        />
      </div> */}


{/*       <div className="boutonpriv">
        <button
          onClick={() => {
            history.push("/postpriv/" + id);
          }}
        >
        
          Voir la fiche de présentation
        </button>
      </div> */}
   

    
    

{/* Map de la liste enegistrée dan l'autState avec la clée listOfPosts */}

        {listOfPosts.map((value, key) => {
          return (
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
             {/*       {value.createdAt.replace('T', ' à ').slice(0, 18)} */}

             Le {new Intl.DateTimeFormat('local').format(value.createAt)}
              
                </div>

     {/*            <div className="buttons">
                  <div className="cofee ">
                    {" "}
                    <ThumbUpAltIcon />
                    <label className="labelcof"> {value.Likes.length}</label>
                  </div>
                </div> */}
              </div>
            </div>  
          );
        })}
      </div></div>
    
  );
}

export default Profile;
