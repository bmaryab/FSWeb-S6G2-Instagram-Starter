import React, { useState } from "react";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import sahteVeri from "./sahte-veri";
import "./App.css";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  
  const [searchText, setSearchText] = useState("");

  const gonderiyiBegen = (gonderiID) => {
        const newGonderiler = gonderiler.map((gonderi)=>{
          if (gonderi.id === gonderiID) {
            gonderi.likes++;
          }
          return gonderi;
        })
        setGonderiler(newGonderiler);
  };

  return (
    <div className="App">
      <AramaCubugu searchText={searchText} setSearchText={setSearchText}/>
      <Gonderiler gonderiler={gonderiler.filter(gonderi => gonderi.username.includes(searchText))} gonderiyiBegen={gonderiyiBegen} />  
    </div>
  );
};

export default App;