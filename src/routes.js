import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index';
import AboutPage from './pages/About';
import Download from './pages/Download';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={AboutPage} />
            <Route path="/download" component={Download} />
        </BrowserRouter>
    )
}