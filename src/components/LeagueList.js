import { CircularProgress, List, Pagination} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { fetchLeagues } from '../app/leaguesAPI.js';
import Item from './LeagueItem';
import {Context} from "../Context.js"

function LeagueList()
{   

    let videoGame = useContext(Context);

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    async function fetchData(page = 1, perpage = 5, game = "all")
    {
        setLoading(true);
        console.log(game)
        const data = await fetchLeagues(page, perpage, game);

        console.log(data.json)
        console.log(data.headers.get('x-total'))
        

        //console.log(data.headers)
        setNumber(data.headers.get('x-total'))


        //si fetchLeague terminé
        setList(data.json);
        setLoading(false);
    }

    useEffect(() =>
    {
        console.log(videoGame)
        fetchData(pageNumber,5,videoGame);
    }, [pageNumber])

    useEffect(() =>
    {
        console.log(videoGame)
        fetchData(pageNumber,5,videoGame);
    }, [videoGame])




    const handlePage = (event, value) => {
        //setLoading(true);
        //setPageNumber(parseInt(event.target.innerText));
        setPageNumber(value);
        //const data = await fetchLeagues(value,5);
        /*//setList(data.json);
        //setLoading(false);
        */
    }


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = 
                <div>
                <h2> Leagues </h2>
                <List>
                    {
                        list.map((el) => (
                            <Item key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
                <Pagination page={pageNumber} count={Math.ceil(number/5)} color="primary" onChange={handlePage} />
                </div>

               
       
    }
    return (
        <div className="League-list">
            {content}
        </div>
        
    );
}

export default LeagueList;