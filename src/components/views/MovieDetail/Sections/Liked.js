import React, { useEffect, useState } from 'react'
import { Icon, Button } from 'antd';
import Axios from 'axios';

function Liked(props) {

    const [LikeNumber, setLikeNumber] = useState(0)
    const [DislikeNumber, setDislikeNumber] = useState(0)
    const [IsLiked, setIsLiked] = useState(false)
    const [IsDisliked, setIsDisliked] = useState(false)
    const [LikeId, setLikeId] = useState(undefined)


    const userFrom = props.userFrom;
    const movieId = props.movieId;

    const variables = {
        userFrom,
        movieId,
    }

    const changeLike = ()=>{

        if(IsLiked){ //  Like 가 true 였을 때 
            Axios.post('/api/like/updateLike', {
                userFrom: variables.userFrom,
                movieId: variables.movieId,
                like : false,
                dislike : false,
                _id: LikeId,
            })
                .then(response => {
                    if (response.data.success) {
                        init();
                        if (response.data._id)
                            setLikeId(response.data._id)
                    } else {
                        alert('Like 리스트에서 지우는 걸 실패했습니다.')
                    }
                })
        }else{
            Axios.post('/api/like/updateLike', {
                userFrom: variables.userFrom,
                movieId: variables.movieId,
                like: true,
                dislike: false,
                _id: LikeId,
            })
                .then(response => {
                    if (response.data.success) {
                        init();
                        if (response.data._id)
                            setLikeId(response.data._id)
                    } else {
                        alert('Like 리스트에서 지우는 걸 실패했습니다.')
                    }
                })
        }
    }


    const changeDislike = () => {

        if (IsDisliked) { //  DisLike 가 true 였을 때 
            Axios.post('/api/like/updateLike', {
                userFrom: variables.userFrom,
                movieId: variables.movieId,
                like: false,
                dislike: false,
                _id: LikeId,
            })
                .then(response => {
                    if (response.data.success) {
                        init();
                        if (response.data._id)
                            setLikeId(response.data._id)
                    } else {
                        alert('Like 리스트에서 지우는 걸 실패했습니다.')
                    }
                })
        } else {
            Axios.post('/api/like/updateLike', {
                userFrom: variables.userFrom,
                movieId: variables.movieId,
                like: false,
                dislike: true,
                _id: LikeId,
            })
                .then(response => {
                    if (response.data.success) {
                        init();
                        if (response.data._id)
                            setLikeId(response.data._id)
                    } else {
                        alert('Like 리스트에서 지우는 걸 실패했습니다.')
                    }
                })
        }
    }


    const init= ()=>{
        Axios.post('/api/like/likedNumber', variables)
            .then(response => {
                if (response.data.success) {
                    console.log("likedNumber", response)
                    setLikeNumber(response.data.likeNumber)
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })

        Axios.post('/api/like/disLikedNumber', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response)
                    setDislikeNumber(response.data.disLikeNumber)
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })

        Axios.post('/api/like/likeInfo', variables)
            .then(response => {
                if (response.data.success) {
                    console.log("/api/like/likeInfo ", response.data)
                    if (response.data.result) {
                        setIsLiked(response.data.result.like)
                        setIsDisliked(response.data.result.dislike)
                        setLikeId(response.data.result._id);
                    }
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })
    }

    useEffect(() => {
        init();
    }, [])



    return (
        <div>
            <Button
                onClick={changeLike}
            >
                Like {IsLiked? <span>a</span> :<span> b</span>}

                {IsLiked ?
                    <Icon type="like" style={{ marginLeft: '3px', marginRight: '3px', color: '#111' }} theme="filled" /> :
                    <Icon type="like" style={{ marginLeft: '3px', marginRight: '3px', color: 'rgba(0,0,0,.25)' }} />
                }


                {LikeNumber}
            </Button>
            <span style={{ marginLeft: '1rem' }} />

            <Button
                onClick={changeDislike}
            >
                Dislike
                {IsDisliked ?
                    <Icon type="dislike" style={{ marginLeft: '3px', marginRight: '3px', color: '#111' }} theme="filled"/>:
                    <Icon type="dislike" style={{ marginLeft: '3px', marginRight: '3px', color: 'rgba(0,0,0,.25)' }} />
                }
                

                {DislikeNumber}
            </Button>
        </div>
    )
}

export default Liked