import { Popover } from 'antd'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMAGE_BASE_URL } from '../../Config'
import './favorite.css'


function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    const removeFavorite = (movieId,userFrom) => {

        Axios.post('/api/favorite/removeFromFavorite', { movieId: movieId, userFrom: userFrom })
            .then(response => {
                if (response.data.success) {
                    setFavorites(Favorites.filter(f => f.movieId !== movieId))
                } else {
                    alert('Favorite 리스트에서 지우는 걸 실패했습니다.')
                }
            })
    }

    useEffect(() => {
        Axios.post('/api/favorite/getFavoritedMovie', { userFrom: localStorage.getItem('userId') })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setFavorites(response.data.rows)
                } else {
                    alert('영화 정보를 가져오는데 실패했습니다.')
                }
            })

    }, [])


    const renderCard = Favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no Image"}
            </div>
        )


        return <tr key={index}>

            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movieTitle}</td>
            </Popover>


            <td>{favorite.movieRunTime}</td>
            <td><button onClick={() => removeFavorite(favorite.movieId, favorite.userFrom)}>Remove</button></td>
        </tr>
    });


    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>Favorite Movies</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <td>Movie Title</td>
                        <td>Movie RunTime</td>
                        <td>Remove from favorites</td>
                    </tr>
                </thead>
                <tbody>
                    {renderCard}
                </tbody>

            </table>
        </div>
    )
}

export default FavoritePage
