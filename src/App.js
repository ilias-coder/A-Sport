import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LeagueList from './components/LeagueList';
import TeamsList from './components/TeamsList';
import League from "./components/league";
import Team from "./components/Team";
import NotFoundPage from './components/NotFoundPage';
import Bar from './components/NavBar';
import { useState, useEffect} from "react";
import {Context} from "./Context.js"


function App() {

  const [gameVideo, setGameVideo] = useState("all");

  useEffect(()=>{
    const data = localStorage.getItem("videoGame")
    if(data){
      setGameVideo(JSON.parse(data))
    }
}, []);


  useEffect(()=>{
    localStorage.setItem("videoGame", JSON.stringify(gameVideo))
});


  return (
    <Context.Provider value={gameVideo}>
      <div className="App">
     
     <header className="App-header">
       <Router>
       <Bar setGameVideo={setGameVideo} />
         <Switch>
           <Route exact path="/"> 
           <Redirect to="/leagues"/>
           </Route> 
           <Route exact path="/leagues" component={LeagueList}/>
           <Route exact path="/leagues/:leagueId" component={League}/>
           <Route exact path="/teams" component={TeamsList}/>
           <Route exact path="/teams/:teamsId" component={Team}/>
           <Route component={NotFoundPage}/>
         </Switch>
       </Router>
     </header>
   </div>
    </Context.Provider>
    
  );
}

export default App;
