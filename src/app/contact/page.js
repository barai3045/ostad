import React from 'react';
async function getData(){
    let res = await fetch("https://dummyjson.com/products" , {cache:'no-cache'})
    return await res.json()
}


const Page = async () => {

    let data = await  getData()
    return (
        <div>
        <p>{JSON.stringify(data)} </p>
           
        </div>
    );
};

export default Page;