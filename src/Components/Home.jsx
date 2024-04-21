import React from "react";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { WorkOppoJapan } from "./WorkOppoJapan";

export const Home=()=>{
    return(
        <div >
            
            <Header/>
            <WorkOppoJapan/>
            <SearchBar/>
        </div>
    )
}