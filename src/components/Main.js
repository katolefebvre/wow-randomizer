import React, { useState, useEffect } from "react";
import db from "../firebase.config";
import { collection, query, onSnapshot } from "firebase/firestore";

function Main() {
   const [races, setRaces] = useState([]);
   const [classes, setClasses] = useState([]);
   const [selection, setSelection] = useState("");

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
      const race = races[Math.floor(Math.random() * races.length)];
      const classId = race.classes[Math.floor(Math.random() * race.classes.length)];
      const className = classes.filter((c) => c.classId === classId);
      const specName = className[0].specs[Math.floor(Math.random() * className[0].specs.length)];
      setSelection(race.name + " " + specName + " " + className[0].name);
   };

   return (
      <div>
         <div>
            <button onClick={randomizePressed}>Randomize</button>
         </div>
         <div>{selection}</div>
      </div>
   );
}

export default Main;
