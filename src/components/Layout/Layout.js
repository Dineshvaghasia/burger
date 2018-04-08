import React from 'react';

import hoc from '../../hoc/hoc'
import classes from './Layout.css'

const layout = (props) => (
    <hoc>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </hoc>
);

export default layout;