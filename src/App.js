/* import "./App.css"; */

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./css/style.css";  
import Priv from "./pages/Priv";
import CreatePost from "./pages/CreatePost";

import Post from "./pages/Post";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Delete from "./pages/Delete";
import Accueil from "./pages/Accueil";

import CV from "./pages/CV";
import Competences from "./pages/Competences";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./pages/Contact";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
  /*   email: "", */
    id: 0,
    photo_profil: "",
    prof: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("https://portfolioau777.herokuapp.com/auth/auth", {
        //backend : auth(app)/auth(route)
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });



        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            photo_profil: response.data.photo_profil,
        
            prof: response.data.prof,
            status: true,
          });
        }
      });
  }, [] );

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ /* email: "", */ username: "", prof: "", id: 0, status: false });
  };

  return (
    <div className="ajust">
      <AuthContext.Provider value={{authState, setAuthState }}>
        <Router>
          
        
              {/*     <h1>
                <Link to={`/profile/${authState.id}`}>
                  {authState.username}
                </Link>
              </h1> */}
           
             
            
            
            {/*         <div className="principal">

            {(authState.username === username || authState.admin === true) && (
          <>
            <button
              onClick={() => {
                history.push("#");
              }}
            >
              {" "}
              Changer mon mots de passe
            </button>

          </>
        )}
      </div> */}
         
              <div className="barredenavigation">  
              
              
              <div className="apparitionbarrecontexte">
<ul>  <li id="button" className="bouton">{authState.status && (
                <button onClick={logout}>⚪ Déconnexion</button>
              )}</li>








<li id="username" className="username"> 
                
                
                {authState.prof && (
                  <Link to={`/profile/${authState.id}`}>
                    {authState.username}
                  </Link>
                )}
                
                
                </li>























            
           
          
          <li id="postpublic" className="public">   {authState.prof && (
                  <Link to="/createpost"> 🎵Créer un Post Public</Link>
                )}
           </li>
              </ul>  
        {/*     <div className="deco">
              {authState.status && (
                <button onClick={logout}>⚪Déconnexion</button>
              )}
            </div>  
             */}
            </div>


            {console.log("console log de authState")}
{console.log(authState)}
{console.log("console log de authState.status")}
{console.log(authState.status)}


            {!authState.status && (
              <>
                {" "}
              
             <ul>

            {/*  <li><Link to="/registration">💎 S'enregistrer</Link></li> */}  
                 
               
                
                 

                 <li><Link to="/profile/1">📖 Portfolio</Link></li>  
                 <li><Link to="/cv">C⛳V.</Link></li> 
                  
                  <li><Link to="/competences">✨ Compétences</Link></li>  
                  <li><Link to="/contact">📇 Contact</Link></li>  
                  <li> <Link to="/login"> 🏛Espace Admin</Link></li>
                  </ul> 
              </>  
            )} 
             
        </div> 
          <Switch>
           
            <Route path="/priv" exact component={Priv} />
          


{/* Vers la page d'un post ---------------------------------------------------------------------------------------------------------individuel section Public*/}


            <Route path="/post/:id" exact component={Post} /> {/*   Page du post individuelle public  */}
            <Route path="/cv" exact component={CV} />
            <Route path="/competences" exact component={Competences} />
            <Route path="/contact" exact component={Contact} />
           

            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/createpost" exact component={CreatePost} />

{/* Vers la page d'un poste individuel section Personelle */}

        

      
            <Route path="/changepassword" exact component={ChangePassword} />
           
{/* Login et enregisrement utilisateur  */}
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
 
            <Route path="/Accueil" exact component={Accueil} />
          
            <Route path="/" exact component={Accueil} />


         
            <Route path="/delete" exact component={Delete} />
           
         
       

            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>  
      </div>
     );
}  

export default App;
