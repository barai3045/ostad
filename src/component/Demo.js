import React from 'react';

const Demo = (props) => {
    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    );
};

export default Demo;