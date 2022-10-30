import "./Selection.css";

import React from "react";

function Selection({ selection }) {
   const result = selection[0] !== undefined ? selection[0] + " " + selection[1] + " " + selection[2] : "";
   return (
      <div className='container'>
         <div className='text-result'>{result}</div>
         <div>
            {selection[0] !== undefined ? (
               <img src={require("../../images/" + selection[2] + ".png")} alt='Class Crest' />
            ) : (
               ""
            )}
         </div>
      </div>
   );
}

export default Selection;
