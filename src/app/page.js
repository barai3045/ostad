import React from 'react';



const Page = async () => {

    return (
        <div>
           <h1>Home page</h1>
            {process.env.API_KEY}
        </div>
    );
};

export default Page;