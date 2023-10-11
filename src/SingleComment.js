// import { useSelector } from "react-redux/es/hooks/useSelector";

function SingleComment(props) {
    const { id, text } = props;
    // const comments = useSelector(state => state.comments)
    // console.log(comments)
    return <div id={id}>{text}</div>;
}

export default SingleComment;