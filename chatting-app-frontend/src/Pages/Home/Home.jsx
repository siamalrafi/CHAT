import React, { useEffect, useState } from "react";

const Home = () => {
   const [data, setData] = useState();

   useEffect(() => {
      fetch("http://localhost:5000/api/chat")
         .then((response) => response.json())
         .then((json) => console.log(json));
   }, []);
   return (
      <div>
         <h1>Home</h1>
      </div>
   );
};

export default Home;
