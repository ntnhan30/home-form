import React from "react";
import { Circle } from "rc-progress";
const Summary = ({ fullname, email, salary, phoneNumber, counter }) => (
  <div>
    <h1>
      <Circle percent={counter} strokeWidth="3" strokeColor="#D3D3D3" />
      {/* {counter} */}
    </h1>
    <h1>summary</h1>
    <p>{fullname} </p>
    <p>{phoneNumber}</p>
    <p>{salary}</p>
    <p>{email}</p>
  </div>
);

export default Summary;
