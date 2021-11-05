export const fetchLeagues = async (page = 1, per_page = 5, game = "all") =>
{

    console.log("hna")
    if(game=='all')
    {
        const response = await fetch(
            process.env.REACT_APP_LEAGUE_API + '?page='+page+'&per_page='+per_page,
        {
            
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
            }
        }
    )

    console.log("hna")
    console.log(response)
    const json = await response.json();
    return {json: json, headers: response.headers};}

    else 
    {
        const response = await fetch(
            "https://api.pandascore.co/" + game + "/leagues" +'?page='+page+'&per_page='+per_page,
            {
                
                method : 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ' + process.env.REACT_APP_TOKEN
                }
            }
        )
    
        //console.log("hna")
        const json = await response.json();
        console.log(response)
        console.log(response.headers.get("x-total")   )
        return {json: json, headers: response.headers};
    }

    

}
