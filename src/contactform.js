import React from "react";
import Subheading from "./Subheading";
const displaymessage =()=>
{ alert("Message Submitted");
  }
function Contactform()
{
    return (
        <div className="contactform">
          <Subheading value="For Queries"/>
            <form onSubmit={displaymessage}>
        <label>Enter your name:
          <input type="text" />
        </label>
        <label>Enter your email:
          <input type="email" />
        </label>
        <label>Enter your message:
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
        </div>
        
    );
}
export default Contactform;