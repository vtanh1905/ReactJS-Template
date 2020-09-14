
import React from 'react';

import Home from '../../pages/Home'
import Metric from '../../pages/Metric'

export default [
    {
        path: '/',
        exact: true,
        component: () => <Home />,
    },
    {
        path: '/metric',
        exact: true,
        component: () => <Metric />,
    }
]