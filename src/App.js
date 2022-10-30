import "./App.css";

import React from "react";
import Main from "./components/Main/Main";

function App() {
   return (
      <div className='App'>
         <div>
            <h1>WoW Randomizer</h1>
            <p>Use this website to randomly select your next World of Warcraft race, class and specialization!</p>
         </div>
         <Main />
      </div>
   );
}

export default App;
