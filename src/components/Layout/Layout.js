import React, {Component} from 'react';

import hoc from '../../hoc/hoc';
import classes from './Layout.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer : true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }

    render(){
        return(
            <hoc>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </hoc>
        )
    }
}

export default Layout;