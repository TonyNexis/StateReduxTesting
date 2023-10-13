import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentDelete } from './redux/commentsSlice';

function SingleComment(props) {
    const { id, text } = props;
    const dispatch = useDispatch();

    const [regBtn, setRegBtn] = useState('✎');

    const [toggleBtn, setToggleBtn] = useState(true);

    const switchBtn = () => {
        if (toggleBtn) {
            setToggleBtn(false);
            setRegBtn('✔');
        } else {
            setToggleBtn(true);
            setRegBtn('✎');
        }
    }


    const handleDelete = () => {
        console.log("ID in card >>>", id);
        dispatch(commentDelete(id));
    }

    return <div className="comment-card" id={id}>
                <div>{text}</div>
                <button onClick={switchBtn} className="reg-btn">{regBtn}</button>
                {/* <button onClick={handleDelete} className="reg-btn">✎</button> */}
                <button onClick={handleDelete} className="close-btn">&#x2716;</button>
           </div>;
}

export default SingleComment;