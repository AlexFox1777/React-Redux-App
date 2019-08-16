export const FETCH_ANIME_DATA = 'FETCH_ANIME_DATA';

export const getData = () =>{

    return dispatch =>{
       fetch(`https://kitsu.io/api/edge/anime/2`)
           .then(response => response.json())
           .then(data => {
               console.log("data -", data.data.attributes);
               dispatch({type: FETCH_ANIME_DATA, payload: data.data.attributes })
           })
           .catch(error => console.log(error))
    }
};