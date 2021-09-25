import React from "react";
import { Box } from 'grommet';

const MainContainer = () => {
    return (
        <div className="main-container">
            <Box
                direction="row"
                border={{ color: 'brand', size: 'medium' }}
                pad="medium"
                height={{ min: '80vh', max: '100vh' }}
                >
                <Box pad="small" background="dark-3" />
                <Box pad="medium" background="light-3" />
            </Box>
        </div>
    );
};

export default MainContainer;