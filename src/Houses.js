import React from "react";
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

import './App.css';

import "./styles.css"
const start = ({ setstart }) => {
  return (
    <Container className="p-3">
    <div className="container">

<div>
<div class="splash-container">
    <br/>
 

<img src="https://gamespot1.cbsistatic.com/uploads/original/1557/15576725/2944861-hogwarts.jpg" class="mx-auto d-block"/>
    <div class="splash">        
    <br/>
        <h1 class="splash-head">WHERE DO YOU BELONG POTTERHEAD?</h1>
        <p class="splash-subhead">
        <div id="banner">
    <div class="inline-block">
            <img src ="https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/700?cb=20161020182518"height="200" width="200"/>
        </div>
        <div class="inline-block">
            <img
             src ="https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/700?cb=20190222162949"height="200" width="200"/>
        </div>

        <div class="inline-block">
            <img src ="https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/700?cb=20161020182557"height="200" width="200"/>
        </div>

        <div class="inline-block">
            <img src ="https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/scale-to-width-down/700?cb=20161020182442"height="200" width="200"/>
        </div>
    </div>

        </p>
        <p>      <Link to="/Game">Game</Link>
        </p>
 

    </div>

</div>
</div>
</div>

</Container>
  );
};

export default start;