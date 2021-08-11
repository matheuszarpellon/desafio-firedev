import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from '../pages/Home'

export const OtherRoutes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    )
}