import React from "react";
import { Route, Routes } from "react-router-dom"; 
import {ROOT, DASHBOARD, OVERVIEW, PRICING} from "../helpers/Constants";
import {Homepage, Overview, Pricing} from "../pages";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path={ROOT} element={<Homepage/>}/>
            <Route exact path={DASHBOARD} element={<h1>Dashboard</h1>}/>
            <Route exact path={OVERVIEW} element={<Overview/>}/>
            <Route exact path={PRICING} element={<Pricing/>}/>
        </Routes>
    );
};

export default RouterConfig;