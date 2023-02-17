import React from "react";
import { userContext } from "../App";

function CoponentB() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <div>{user}</div>;
        }}
      </userContext.Consumer>
    </div>
  );
}

export default CoponentB;
