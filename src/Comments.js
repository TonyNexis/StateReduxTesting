import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from './redux/commentsSlice'

import SingleComment from './SingleComment';

function Comments() {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit >>>', textComment);
        dispatch(commentCreate(textComment));
        setTextComment('');
    }

    const comments = useSelector(state => state.comments)
    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} action="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {comments.map((comment) => (
                <SingleComment key={comment.id} id={comment.id} text={comment.text} />
             ))}
        </div>
    )
}

export default Comments;