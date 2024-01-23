import React, { useState } from "react";
import { useContext } from "react";



const MoviedataContext = React.createContext();

export function useData() {
  return useContext(MoviedataContext);
}

export default function MovieContext({ children }) {

    const [data, setdata] = useState();
    const [summary,setsum]=useState();
    const [selectedmoviename,setmovie]=useState('')
    const [selectedmovielang,setlang]=useState('')
    const [url,seturl]=useState('')

        async function getdata(){
            const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
              const res = await response.json();
      await setdata(res);



        }



        function filteredmovie(metadata){ 
    
          const fil=data.filter((repo) => {
          // Customize the condition based on your metadata requirements
          return repo.show.name && repo.show.name.includes(metadata);



        });


        setdata(fil);
      }

  return (
    <MoviedataContext.Provider
      value={{
       getdata,data,setdata,filteredmovie,summary,setsum,setmovie,setlang,seturl,selectedmoviename,setmovie,selectedmovielang,url
      }}
    >
      {children}
    </MoviedataContext.Provider>
  );
}
