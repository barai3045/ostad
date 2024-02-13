"use client"
import useSWR from "swr";
import {Fetcher} from "@/swr/Fetcher";


const WishList = () => {
    const { data, error, isLoading } = useSWR("api/user", Fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {JSON.stringify(data)}!</div>

};

export default WishList;