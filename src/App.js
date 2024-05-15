import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import data from "./data"

export default function App() {

    const experiences = data.map((item) => {
        return (
            <MainContent 
                key = {item.id}
                item = {item}
            />
        )
    })
    
    return(
        <div>
            <Navbar />
            <section className="main-experiences">
                {experiences}
            </section>
            
        </div>
    )
}