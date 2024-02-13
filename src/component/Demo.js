"use client"

const Demo = (props) => {
    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    );
};

export default Demo;