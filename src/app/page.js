import React from 'react';
import ProductList from "@/component/ProductList";
import Demo from "@/component/Demo";

async function getData(){
    const res = await fetch ("https://dummyjson.com/products")
    const data = await res.json()
    return data
}

const Page = async () => {
    let data = await getData()
    return (
        <div>
            <Demo data={data} />
        </div>
    );
};

export default Page;