import { useEffect,useState } from "react"
import axios from "axios"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import * as React from 'react';
import MovieCard from "./MovieCard";

import "../App.css"

const apiURL = 'https://www.omdbapi.com/?apikey=fc7e5c26'

const HomePage=()=>{
    const [totalmovies , settotalmovies] = useState([])
    const [dId ,setdId] = useState(0)
    const [initialLoading , setinitialLoading] = useState(true)

    const gettotalmoviesAPI = async(searchword)=>{
        try{
        const result = await axios.get(`${apiURL}&s=${searchword}`)
        settotalmovies(result.data.Search);
        setinitialLoading(false);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
    gettotalmoviesAPI('Fast and Furious')
    
   },[]);

    const handleChange = (searchval) => {
        if(searchval != '')
            gettotalmoviesAPI(searchval);
        else    
            gettotalmoviesAPI('Fast and Furious')
   }

   const debounceSearch = (event)=>{
        if(dId)
            clearTimeout(dId);
        
        const timerId = setTimeout(()=>{
            handleChange(event.target.value)
        },1000);
    
        setdId(timerId)
   }

      return(
        <>
           
            <TextField
            name="search"
            input="text"
            color="primary" focused
            placeholder="search for movie"
            sx={{width:"100vmin", padding:2 , marginTop:2}}
            onChange={(event)=>debounceSearch(event)}
            InputProps={{style:{color:'white' }}}
            />
            <Button className="s-btn">Search</Button>
            <br/>
           
            {totalmovies.length>0 ? (
                <>
                <MovieCard totalmovies={totalmovies}/>
                </>
            ):(
                <>
                {initialLoading ? (
                    <>
                    <div>Loading...</div>
                    </>
                ):(
                <div>NOT FOUND</div>)}
                </>
            )}
        </>
    )
}
export default HomePage
