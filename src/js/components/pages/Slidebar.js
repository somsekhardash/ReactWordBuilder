import React from "react";
import {NavLink} from "react-router-dom";

export default class Slidebar extends React.Component{
    render(){
        return (
            <div class="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <NavLink to="/" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Start Bootstrap
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shortcuts" 
                        exact 
                        className="button"  
                        activeClassName="success" >
                        Shortcuts
                        </NavLink>
                    </li>
                </ul>
        </div>  
        );
    }
}

