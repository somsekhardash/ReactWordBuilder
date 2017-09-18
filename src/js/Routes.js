import React from "react";
import {BrowserRouter, Route ,Switch} from 'react-router-dom';

import Layout from "./components/pages/Layout";
import Dashboard from "./components/pages/Dashboard";
import Shortcuts from "./components/pages/Shortcuts";
import Body from "./components/pages/Body";


export default class Routes extends React.Component {
    render() {
      return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path='/' exact component={Body}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/shortcuts' component={Shortcuts}/>
                </Switch>    
            </Layout>
        </BrowserRouter>
      );
    }
  }
  