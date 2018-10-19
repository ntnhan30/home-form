import React from "react";
import { Circle } from "rc-progress";
const Summary = ({ fullname, email, salary, phoneNumber, counter }) => (
  <div class="sumPro">
    <div className="circle">
      <Circle percent={counter} strokeWidth="3" strokeColor="#13547a " />
    </div>
    <div class="sumText">
      <h3>Summary</h3>
      <p>{fullname} </p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{salary}</p>
    </div>
  </div>
);

export default Summary;
