import React from "react";
import { Circle } from "rc-progress";
const Summary = ({ fullname, email, salary, phoneNumber, counter }) => (
  <div class="sumPro">
    <Circle percent={counter} strokeWidth="3" strokeColor="#D3D3D3" />
    <div>
      <h3>summary</h3>
      <p>{fullname} </p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{salary}</p>
    </div>
  </div>
);

export default Summary;
