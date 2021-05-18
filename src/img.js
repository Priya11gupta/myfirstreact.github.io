import React from 'react';
import reactDom from 'react-dom';
const fname="priya"
const img1="https://picsum.photos/200/300";
reactDom.render(
    <>
    <h1 contentEditable="true"> my name is {fname}</h1>
    <img scr={img1} />
    </>

    ,document.getElementById("root")

);