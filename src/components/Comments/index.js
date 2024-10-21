import {useState} from 'react'
import CommentItem from '../CommentItem'
import {v4 as uuidv4}  from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)
  const onChangeComment = event => setCommentText(event.target.value)

   const onAddComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment]);
    setName("");
    setCommentText("");
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachComment =>(
          <CommentItem key={eachComment.id} commentDetails={eachComment}/>
        ))}
      </CommentsList>
      
    </CommentsContainer>
  )
}

export default Comments
