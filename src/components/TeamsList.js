import { CircularProgress, List, Pagination} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { fetchTeams } from '../app/TeamsAPI.js';
import Item from './TeamsItem';
import {Context} from "../Context.js"

function TeamsList()
{   
    let videoGame = useContext(Context);

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    async function fetchData(page = 1, perpage = 5, game = "all")
    {
        setLoading(true);
        const data = await fetchTeams(page, perpage, game);

        console.log(data.headers.get('x-total'))
        console.log(data.json)

        setNumber(data.headers.get('x-total'))


        //si fetchTeams terminé
        setList(data.json);
        setLoading(false);
    }

    useEffect(() =>
    {
        fetchData(pageNumber);
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
        //const data = await fetchTeams(value,5);
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
                <h2> Teams </h2>
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
        <div className="Team-list">
            {content}
        </div>
        
    );
}

export default TeamsList;