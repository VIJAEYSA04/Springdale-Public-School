import React from 'react';

const Maps = () => {
  return (
    <div   style={{ width: '100%', height: '450px' }}>
      <iframe className="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9605128781424!2d-122.0842496846913!3d37.42199927982192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b8af1bb3d5%3A0x64b7e3b7f68e6c9f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1628700123456!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};


export default Maps;