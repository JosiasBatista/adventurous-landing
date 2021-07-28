import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './pages/Index/Index';
import AboutPage from './pages/About';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={AboutPage} />
        </BrowserRouter>
    )
}