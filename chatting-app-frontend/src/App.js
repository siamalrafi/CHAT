import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <div>
         <Routes>
            <Route path="/">
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
