"use client"
import useSWR from "swr";
import {Fetcher} from "@/swr/Fetcher";


//catching & revalidating
//const res1 = await fetch("https://dummyjson.com/products", {catch:"force-cache"})
//const res2 = await fetch("https://dummyjson.com/products", {catch:"no-store"})
//const res3 = await fetch("https://dummyjson.com/products", {catch:{revalidate:3600}})

//revalidate is working fine in vercel echosystem but may not be work in other echo system

const WishList = () => {
    const { data, error, isLoading } = useSWR("https://dummyjson.com/products", Fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {JSON.stringify(data)}!</div>

};

export default WishList;