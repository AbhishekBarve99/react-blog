import React from 'react';
import { Header, Button, Box, Menu } from 'grommet';
import './style.css';

const Header2 = () => {
    return (
    <div className="main-header">
        <Box background="brand" align="end" as="header" flex={false} gap="medium" direction="row" justify="end" pad="medium">
            <Button className="nav-menu-item"> HOME </Button>
            <Button className="nav-menu-item"> ABOUT </Button>
            <Button className="nav-menu-item"> CALL </Button>
            <Menu label="REACt" items={[ { 'label': 'Text' }, { 'label': 'Call' } ]} dropBackground="brand" style={{
                border: "0px"
            }} />
        </Box>
    </div>
    );
};

export default Header2;