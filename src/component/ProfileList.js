"use client"
import {useEffect, useState} from "react";

const ProfileList = () => {
    let [data, setData] = useState(null)

    useEffect(()=>{
        (async ()=>{
            const res = await fetch("https://dummyjson.com/products")
            const JSONdata = await res.json()
            setData(JSONdata)
        })()
    }, [])

    if (data === null){
        return (
            <div>
               <h1>Loading ... </h1>
            </div>
        );
    } else {
        return (
            <div>
                {JSON.stringify(data)}
            </div>
        );
    }

};

export default ProfileList;