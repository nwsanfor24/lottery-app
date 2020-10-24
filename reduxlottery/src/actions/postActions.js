import { FETCH_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    console.log("it is being called")
    fetch('https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=2020-09-18&endDate=2020-09-18')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data.draws
        })
    );
}