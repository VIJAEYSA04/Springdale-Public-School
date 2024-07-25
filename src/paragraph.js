import React from "react";
function Paragraph(props)
{
    return (
        <div >
            <p className="para">
                {props.value}
            </p>
        </div>
    );
}
export default Paragraph;