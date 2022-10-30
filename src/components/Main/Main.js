import "./Main.css";

import React, { useState, useEffect } from "react";
import db from "../../config/firebase.config";
import { collection, query, onSnapshot } from "firebase/firestore";

import Selection from "../Selection/Selection";
import Filter from "../Filter/Filter";

function Main() {
   const [races, setRaces] = useState([]);
   const [classes, setClasses] = useState([]);
   const [selection, setSelection] = useState([]);
   const [faction, setFaction] = useState(0);

   const handleCallback = (data) => {
      setFaction(Number(data));
   };

   const fetchRaces = async () => {
      const q = query(collection(db, "races"));
      onSnapshot(q, (snapshot) => {
         setRaces(snapshot.docs.map((doc) => doc.data()));
      });
   };

   const fetchClasses = async () => {
      const q = query(collection(db, "classes"));
      onSnapshot(q, (snapshot) => {
         setClasses(snapshot.docs.map((doc) => doc.data()));
      });
   };

   useEffect(() => {
      fetchRaces();
      fetchClasses();
   }, []);

   const randomizePressed = () => {
      const filteredRaces = faction !== 0 ? races.filter((r) => r.factionId === faction) : races;
      const race = filteredRaces[Math.floor(Math.random() * filteredRaces.length)];
      const classId = race.classes[Math.floor(Math.random() * race.classes.length)];
      const className = classes.filter((c) => c.classId === classId);
      const specName = className[0].specs[Math.floor(Math.random() * className[0].specs.length)];
      setSelection([race.name, specName, className[0].name]);
   };

   return (
      <div>
         <div>
            <Filter parentCallback={handleCallback} /> <br />
            <button className='btn-random' onClick={randomizePressed}>
               Randomize
            </button>
         </div>
         <Selection selection={selection} />
      </div>
   );
}

export default Main;
