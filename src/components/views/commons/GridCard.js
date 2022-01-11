import { Col } from 'antd'
import React from 'react'

// image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
// movieId={movie.id}
// movieName={movie.original_title} />
function GridCard(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style={{position : 'relative'}}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{width:'100%'}} src={props.image} alt={props.movieName}></img>
                </a>
            </div>
        </Col>
    )
}

export default GridCard
