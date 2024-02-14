import React from 'react';


const Layout = ({children}) => {
    return (
        <div>
        <p>This is Product Layout</p>
            {children}
        </div>
    );
};

export default Layout;