import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
//import Search from '../../modules/products/components/Search';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand">
                    <NavLink to={'/'} exact className="text-primary">ABUY</NavLink>
                </span>
                <button
                    className="navbar-toggler"
                    onClick={props.toggleSideBar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <Menu menuClasses="navbar-nav ml-auto mt-2 mt-lg-0">
                        <MenuItem linkTo={'/profile'}>Profile</MenuItem>
                    </Menu>

                    {/* <Search searchString={searchString} /> */}
                </div>
            </div>
        </nav>
    )
};

Header.propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
};

export default Header;