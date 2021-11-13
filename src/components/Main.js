import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index";
import Show from "../pages/Show";


const Main = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/bookmark/:id" element={<Show/>}/>
      </Routes>
    </main>
  )
}

export default Main;