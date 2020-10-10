import React from "react";
import { BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import "./styles.css"
const start = ({ setstart }) => {
  return (
    <div className="container">

<div>
<div class="splash-container">
    <br/>
 

<img src="https://media1.popsugar-assets.com/files/thumbor/i_63sdSzIjcyrswIU-_04G18Kek/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/04/09/983/n/1922507/1236825406688cb4_jules-marvin-eguilos-YrcfSDVli3Y-unsplash/i/Harry-Potter-Hogwarts-Zoom-Background.jpg" class="mx-auto d-block"/>
    <div class="splash">        
    <br/>
        <h1 class="splash-head"><b>The Boy Who Lived</b></h1>
        <p class="splash-subhead">
           <b>Heeeey POTTERHEADS!</b> 
        </p>
        <p class="splash-subhead">
            <b>Try to guess the charecter! </b><br/>
        <Link to="/Houses">Start</Link>
        </p>
 

    </div>

</div>
</div>
</div>


  );
};

export default start;