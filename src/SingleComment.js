import { useDispatch } from "react-redux";
import { commentDelete } from './redux/commentsSlice';

function SingleComment(props) {
    const { id, text } = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log("ID in card >>>", id);
        dispatch(commentDelete(id));
    }

    return <div className="comment-card" id={id}>
                <div>{text}</div>
                <button onClick={handleDelete} className="close-btn">&#x2716;</button>
           </div>;
}

export default SingleComment;