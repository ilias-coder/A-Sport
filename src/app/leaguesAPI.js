export const fetchLeagues = async () =>
{
    const response = await fetch(
        process.env.REACT_APP_LEAGUE_API,
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
    return json;
}
