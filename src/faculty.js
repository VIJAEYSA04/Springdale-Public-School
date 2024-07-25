import React from "react";
function Faculty(props)
{
    return (
   <div className="facultydiv">
              <img src={props.url} className="facultyimage" />
        <h4 className="facultyname">{props.name}</h4>
        <h5>{props.designation}</h5>
     </div>
      
    );
}
export default Faculty;