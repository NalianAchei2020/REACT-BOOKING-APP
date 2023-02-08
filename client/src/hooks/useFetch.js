import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url)=>{
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true)
        try{
            const res  = axios.get(url);
            setData(res.data)
        }
        catch(err){
            setError(err)
        }
        setLoading(false)
    }
    fetchData();
}, [url]);

useEffect(()=>{
    const reFetch=()=>{
        setLoading(true)
        try{
            const res  = axios.get(url);
            setData(res.data)
        }
        catch(err){
            setError(err)
        }
        setLoading(false)
    }
    return {data, loading, error, reFetch}
}, [url])


}

export default useFetch