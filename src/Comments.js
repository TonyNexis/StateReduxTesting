import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, fetchComments, sendCommentToServer } from './redux/commentsSlice';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { spinnerDisplay } from "./redux/spinnerSlice";

import Spinner from "./spinner";
import SingleComment from './SingleComment';

function Comments() {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    let display = useSelector(spinnerDisplay)


    useEffect (() => {
      dispatch(fetchComments());
    }, [])

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit >>>', textComment);
        // dispatch(commentCreate(textComment));
        dispatch(sendCommentToServer(textComment))
        setTextComment('');
    }

    const comments = useSelector(state => state.comments)
    return (
        <div className="card-comments">
            {display ? <Spinner/> : null}
            <form className="comment-card" onSubmit={handleSubmit} action="comments-item-create">
                <input className="input-card" type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            <TransitionGroup className="todo-list">
                {comments.map((comment) => (
                    <CSSTransition
                    key={comment.id}
                    timeout={500}
                    classNames="my-node">
                        <SingleComment key={comment.id} id={comment.id} text={comment.text} />
                    </CSSTransition>
                ))}
             </TransitionGroup>
        </div>
    )
}

export default Comments;