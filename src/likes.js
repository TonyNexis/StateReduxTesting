import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectLikes } from './redux/likesSlice'

function Likes () {
    const likes = useSelector(selectLikes)
    console.log(likes)
    const dispatch = useDispatch()
    return (
        <div className="button-controls">
            <button onClick={() => dispatch(increment())}>❤ {likes}</button>
            <button onClick={() => dispatch(decrement())}>Dislike</button>
        </div>
    )
}

export default Likes;

