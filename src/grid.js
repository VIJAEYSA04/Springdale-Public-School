import React from "react";
function  Grid(props)
{
return (
    <div className="grid"><h2 className="headingforgrid">{props.heading}</h2>
<p className="paraforgrid">{props.para}</p></div>

);
}
export default Grid;