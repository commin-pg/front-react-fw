import { Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import GridCard from '../commons/GridCard';
import MainImage from '../LandingPage/Sections/MainImage';
import Favorite from './Sections/Favorite';
import Liked from './Sections/Liked';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {
    let movieId = props.match.params.movieId;

    const [Movie, setMovie] = useState([])
    const [Crews, setCrews] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {
        var endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        var endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })


        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCrews(response.cast)
            })
    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)
    }

    return (
        <div>
            {/* Header */}
            {Movie &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.title}
                    text={Movie.overview}
                />}

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} />
                </div>

                {/* Movie Info */}
                <MovieInfo
                    movie={Movie}
                />
                <br />
                {/* Actor Info */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}>Toogle Actor View</button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]}>
                        {Crews && Crews.map((crew, index) => (
                            <React.Fragment key={index}>
                                <GridCard
                                    image={crew.profile_path ? `${IMAGE_BASE_URL}w500${crew.profile_path}` : null}
                                    name={crew.name}
                                    landing={false}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }

                {/* Like and UnLike */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Liked movieId={movieId} userFrom={localStorage.getItem('userId')} />
                </div>

                {/* Apply */}

            </div>
        </div>
    )
}

export default MovieDetail
