import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";

const MenuComponent = (props) => {
    return (
        <React.Fragment>
            <MenuItem linkTo={'/profile'}>Profile</MenuItem>
        </React.Fragment>
    )
};

export default MenuComponent;
