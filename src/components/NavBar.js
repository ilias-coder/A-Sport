import React , { useEffect, useState }from "react";
import { Link } from "react-router-dom";
import { AppBar} from '@mui/material';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'


function Bar(props) {
  /*const handleChange = (event) => {
    props.setGameVideo(event.target.value);
  };
*/


  const dropDownValues= {
    'all' : 'All Games',
    'csgo':"CS-GO",
    "codmw":"Call Of Duty",
    "dota2":"Dota2",
    "lol" : "League Of Legends",
    "pubg" :"Pubg",
    "ow" : "Overwatch"
 
  }

  const [dropDownValue, setDropDownValue] = useState("all");

  const changeValue = (event) => {
    props.setGameVideo(event.target.parentNode.id);
    setDropDownValue(event.target.textContent)
  }


  useEffect(()=>{
    const data = localStorage.getItem("videoGame")
    if(data){
      setDropDownValue(dropDownValues[JSON.parse(data)])
    }
}, []);


  return (
    <AppBar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position="fixed">
    <Container>
    <Navbar.Brand href="/">A-sport From MAZTAOUI Ilias</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        
        
      </Nav>
      <Nav>
      <NavDropdown title={dropDownValue} id="collasible-nav-dropdown" >
          <NavDropdown.Item id="all"><div onClick={(e) => changeValue(e)}>All Games</div></NavDropdown.Item>
          <NavDropdown.Item id="csgo"><div onClick={(e) => changeValue(e)}>CS-GO</div></NavDropdown.Item>
          <NavDropdown.Item id="codmw"><div onClick={(e) => changeValue(e)}>Call Of Duty</div></NavDropdown.Item>
          <NavDropdown.Item id="dota2"><div onClick={(e) => changeValue(e)}>Dota2</div></NavDropdown.Item>
          <NavDropdown.Item id="lol"><div onClick={(e) => changeValue(e)}>League Of Legends</div></NavDropdown.Item>
          <NavDropdown.Item id="pubg"><div onClick={(e) => changeValue(e)}>Pubg</div></NavDropdown.Item>
          <NavDropdown.Item id="ow"><div onClick={(e) => changeValue(e)}>Overwatch</div></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  href="/teams">TEAMS</Nav.Link>
        <Nav.Link eventKey={2} href="/leagues">
          LEAGUES
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </AppBar>
  );
}

export default Bar;