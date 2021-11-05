export const fetchLeagues = async (page = 1, per_page = 5, game = "all") => {

    if (game == 'all') {
        const response = await fetch(
            process.env.REACT_APP_LEAGUE_API + '?page=' + page + '&per_page=' + per_page,
            {

                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
            }
        )

        const json = await response.json();
        return { json: json, headers: response.headers };
    }

    else {
        const response = await fetch(
            process.env.REACT_APP_API + game + "/leagues" + '?page=' + page + '&per_page=' + per_page,
            {

                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN
                }
            }
        )

        //console.log("hna")
        const json = await response.json();
        return { json: json, headers: response.headers };
    }



}
