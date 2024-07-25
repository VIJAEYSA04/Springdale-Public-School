import React from "react";
function Heading(props)
{
    return (
        <div className="headingdiv">
            <h1 className="heading">{props.value}</h1>
        </div>
    );
}
export default Heading;