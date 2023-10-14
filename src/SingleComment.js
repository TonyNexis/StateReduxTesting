import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentDelete, commentEdit } from './redux/commentsSlice';

function SingleComment(props) {
    const { id, text } = props;
    const dispatch = useDispatch();

    const [regBtn, setRegBtn] = useState('✎');
    const [toggleBtn, setToggleBtn] = useState(true);
    const [editedText, setEditedText] = useState(text);

    const switchBtn = () => {
        if (toggleBtn) {
            setToggleBtn(false);
            setRegBtn('✔');
        } else {
            setToggleBtn(true);
            setRegBtn('✎');
            dispatch(commentEdit({ id, text: editedText }));
        }
    }

    useEffect(() => {
        setEditedText(text);
    }, [text]);

    const handleTextChange = (event) => {
        if (event.target.value.length <= 35) {
            setEditedText(event.target.value);
        }
    }

    const handleDelete = () => {
        console.log("ID in card >>>", id);
        dispatch(commentDelete(id));
    }

    return <div className="comment-card" id={id}>
           {!toggleBtn ? (
                <textarea
                    value={editedText}
                    onChange={handleTextChange}
                    className="edit-textarea"
                />
            ) : (
                <div>{editedText}</div>
            )}
                <button onClick={switchBtn} className="reg-btn">{regBtn}</button>
                <button onClick={handleDelete} className="close-btn">&#x2716;</button>
           </div>;
}

export default SingleComment;