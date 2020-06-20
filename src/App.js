import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import DashBoard from './screens/DashBoard'
import FindExperts from './screens/FindExperts'
import Discussion from './screens/Discussion'
import './App.css';
import Data from './Data';

function App() {

  const list =()=>{

  const header = document.getElementById("list-mains");
  const list = header.getElementsByClassName("list-item-element ");
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }

  }

  return (

      <BrowserRouter>
 
    <header className="header-main">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        <div className="logo-card">
            <i className="fa fa-circle"></i>
            <div className="logo-text">
                Logo
            </div>     
        </div>
        <div className="dropdown-list">
            <ul className="list-items" onClick={list} id="list-mains">
                <Link to="/"className="list-item-element active ">
                    Dashboard
                </Link>
               
                <Link to="/experts" className="list-item-element"> Find Experts</Link>
                
                
                <Link to="/Discussion" className="list-item-element ">
                    Discussion
                </Link>
            </ul>
            
        </div>
        <div className="notification-area">
            <div className="noti-area onearea">
                <span class="material-icons belll">notifications_none</span>
            </div>
            <div className="msg-area onearea">
                <i className="material-icons msg">chat_bubble_outline</i>
            </div>
            <div className="prof-area onearea">
                <img src="/images/mentorr.jpg" className="img-profile" ></img>
            </div>

            <ul>
                <li className="dropdown">
        <i className="material-icons key">keyboard_arrow_down</i>
        <a href="javascript:void(0)" className="dropbtn"></a>
                  <div className="dropdown-content">
                    <Link to="#">Profile</Link>
                    <Link to="#">Activites</Link>
                    <Link to="#">QnA</Link>
                    <Link to="#">Subjects </Link>
                    <Link to="#">Sessions</Link>
                    <Link to="#">LogOut</Link>
                </div>
            </li>
              </ul>

            
        </div>
        

    </header>
    <main>
        
        <Route path="/" exact="true" component={DashBoard} />
        <Route path="/Discussion" component={Discussion} />
        <Route path="/experts" component={FindExperts} />
    
    </main>

    </BrowserRouter>
   
  );
}

export default App;
