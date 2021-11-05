import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect, useState }from 'react';
import { useParams } from "react-router-dom";


function League()
{
    const [league, setLeague] = useState({ series: [] });

  let { leagueId } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_LEAGUE_API + "/" + leagueId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((response) => setLeague(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <center>
      <div className="card my-4" style={{ width: "32rem" }}>
        <img src={league.image_url} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{league.name}</h5>
          {league.videogame ? (
            <p className="card-text">{league.videogame.name}</p>
          ) : null}
        </div>
      </div>
      <div style={{ width: "35rem" }}>
        <ul className="list-group list-group-flush">
          {league.series.map((serie, index) => (
            <li className="list-group-item my-2 shadow" key={index}>
              <h6 className="mx-5">{serie.full_name}</h6>
              <h6>
                From: {serie.begin_at} - To: {serie.end_at}
              </h6>
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
}

export default League;