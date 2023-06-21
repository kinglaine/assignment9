import React from "react";

const Home = ({balance}) => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Home Page</h1>
      <h4>Balance: ${balance}</h4>
    </div>
  )
};

export default Home;