import React from "react";
import { Route, Routes } from "react-router-dom"; 
import {ROOT, DASHBOARD, OVERVIEW, PRICING,ABOUT, CONTACT, LOGIN} from "../helpers/Constants";
import {Homepage, Overview, Pricing, About, Contact, Login} from "../pages";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={ROOT} element={<Homepage/>}/>
            <Route exact path={DASHBOARD} element={<h1>Dashboard</h1>}/>
            <Route exact path={OVERVIEW} element={<Overview/>}/>
            <Route exact path={PRICING} element={<Pricing/>}/>
            <Route exact path={ABOUT} element={<About/>}/>
            <Route exact path={CONTACT} element={<Contact/>}/>
            <Route exact path={LOGIN} element={<Login/>}/>
        </Routes>
    );
};

export default RouterConfig;