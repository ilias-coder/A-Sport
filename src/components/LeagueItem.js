import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

function Item(props)
{
    return (
        
        <ListItem>
            <ListItemAvatar>
                <Avatar src={props.img}/>
            </ListItemAvatar>
            <ListItemText>
                {props.name}&nbsp;&nbsp;&nbsp;&nbsp;
            </ListItemText>
            <Link key={props.id} to={'/leagues/'+props.id}>
            <ListItemText>
                Détails
            </ListItemText>
            </Link>
        </ListItem>
    );
}

export default Item;