import React from "react";

import "./Filter.css";

function Filter(props) {
   const onFormSubmit = (event) => {
      props.parentCallback(event.target.value);
      event.preventDefault();
   };

   return (
      <>
         <h2>Filters</h2>
         <form onSubmit={onFormSubmit}>
            <h3 className='filter-title'>Faction</h3>
            <div className='select-faction'>
               <select name='faction' id='faction' onChange={onFormSubmit} className='select-faction'>
                  <option value='0'>Random</option>
                  <option value='1'>Horde</option>
                  <option value='2'>Alliance</option>
               </select>
            </div>
         </form>
      </>
   );
}

export default Filter;
