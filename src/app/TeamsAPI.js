export const fetchTeams = async (page = 1, per_page = 5, game = "all") =>
{

    if(game=='all')
    {const response = await fetch(
        process.env.REACT_APP_TEAMS_API + '?page='+page+'&per_page='+per_page,
        {
            mode : 'cors',
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    const json = await response.json();
    return {json: json, headers: response.headers};}

    else {
        const response = await fetch(
            "https://api.pandascore.co/"  + game + "/teams"  + '?page='+page+'&per_page='+per_page,
            {
                mode : 'cors',
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
                }
            }
        )
    
        const json = await response.json();
        return {json: json, headers: response.headers};
    }
}
