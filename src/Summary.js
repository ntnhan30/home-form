import React from "react";
import { Line, Circle } from "rc-progress";
const Summary = ({ fullname, email, salary, phoneNumber, counter }) => (
  <div>
    <h1>
      <Circle percent={counter} strokeWidth="3" strokeColor="#D3D3D3" />
      {counter}
      {fullname}
      {phoneNumber}
      {salary}
      {email}
    </h1>
    <h1>summary</h1>
  </div>
);

export default Summary;
