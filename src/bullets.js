import React from "react";
function Bullet(props)
{
    return (
<div className="bullet">
<ul >
  <li className="list">{props.value}</li>
</ul>
</div>

   
    );
}
export default Bullet;