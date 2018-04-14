import React from 'react';

import hoc from '../../hoc/hoc';
import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <hoc>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </hoc>
);

export default layout;