import React from "react";
function Content(props)
{
    return (
        <div className="content">
           <h4>{props.title}</h4>
           <p>{props.para}</p>
        </div>
    );
}
export default Content;