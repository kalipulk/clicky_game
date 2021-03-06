import React from 'react';
import "./style.css";

function Card (props) {
    var style = {
        img:{
            width: "175px",
            height: "175px",
            margin: "5px",
            padding: "5px",
        }
    }
    return (
        <div className="imgContainer">
            <div className="innerImage">
                <img style ={style.img} src={props.src} onClick = {() => {props.click(props.id)}}></img>
            </div>
        </div>
    )
}

export default Card;
