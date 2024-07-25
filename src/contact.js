import React from "react";

function Contact(props)
{return (
    <div className="contact" >
        <h5>{props.address}</h5>
        <h5>{props.phonenumber}</h5>
        <h5>{props.email}</h5>
    </div>
);}
export default Contact;