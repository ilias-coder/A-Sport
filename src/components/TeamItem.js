import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';

function Item(props)
{
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={props.img}/>
            </ListItemAvatar>
            <ListItemText>
                {props.name}
            </ListItemText>
        </ListItem>
    );
}

export default Item;