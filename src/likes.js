import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/likesSlice'

function Likes () {
    const likes = useSelector(state => state.likes.value)
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

