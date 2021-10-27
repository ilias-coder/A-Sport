import { CircularProgress, List} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchLeagues } from '../app/leaguesAPI.js';
import Item from './TeamItem';

function TeamsList()
{   
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData()
    {
        setLoading(true);
        const data = await fetchLeagues();

        //si fetchLeague terminé
        setList(data);
        setLoading(false);
    }

    useEffect(() =>
    {
        fetchData();
    }, [])


    let content;


    if(loading)
    {
        content = <CircularProgress colors="secondary" />
    }else
    {
        content = <List>
                    {
                        list.map((el) => (
                            <Item key={el.id} id={el.id} name={el.name} img={el.image_url}/>
                        ))
                    }
                </List>
    }
    return (
        <div className="Teams-list">
            {content}
        </div>
        
    );
}

export default TeamsList;