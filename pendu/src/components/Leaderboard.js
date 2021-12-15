import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {map} from 'lodash'
import './Leaderboard.css'

function Leaderboard() {

    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios ('https://animalfinderapi.herokuapp.com/score',
            );
            setData(res.data);
            console.log(res.data);
        }
        fetchData();
    }, [])

    return (
        <div className="leaderboard">
            <h2>CLASSEMENT :</h2>
            <React.Fragment>
                {map(datas, (data) =>
                    map(data, (score) =>
                    <p>{score.username} : {score.score}</p>)
                )}
            </React.Fragment>
        </div>
    )
}

export default Leaderboard
