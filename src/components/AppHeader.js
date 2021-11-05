import React, { createContext } from 'react';
import { AppBar,Toolbar,Typography,List,ListItem, InputLabel, MenuItem, Select, FormControl} from '@mui/material';
import { Link,Route } from 'react-router-dom';
import '../App.css';



function AppHeader(props)
{
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
    return( 
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    E-Sport Leagues
                </Typography>

               
                <List style={flexContainer} component="nav">
                    <ListItem>
                        <Link className="menu-link" to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menu-link" to="/leagues">Leagues</Link>
                    </ListItem>
                    <ListItem>
                        <Link className="menu-link" to="/teams">Teams</Link>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
  );
}

export default AppHeader;