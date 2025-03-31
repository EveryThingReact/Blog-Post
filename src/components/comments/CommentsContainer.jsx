import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/Comments'
import Comments from './Comments';

const CommentsContainer = ({className, logginedUserId}) => {
const [comments, setcomments] = useState([]);
  
 const mainComments =comments.filter((comment) => comment.parent === null);
 const [affectedComment, setAffectedComment] = useState(null);
 
 console.log(comments);
useEffect(()=>{
    
    (async() => {
        const commentData = await getCommentsData();
        setcomments(commentData);
    })()
},[])

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
  const newComment = {
    
        _id:Math.random().toString(),
        user:{
            _id:"a",
            name:"Jone Doe",
        },
        desc:value,
        post:"1",
        parent:parent,
        replyOnUser: replyOnUser,
        createdAt:new Date().toISOString(),
    
  };
   setcomments((curState) => {
    return [newComment, ...curState]
   })
   setAffectedComment(null);
  }
  
  const updateCommentHandler = (value, commentId) => {
   const updatedComments = comments.map((comment) => {
    if(comment._id === commentId){
      return {...comment, desc: value}
    }
    return comment;
   })
   setcomments(updatedComments);
   setAffectedComment(null);
  }

  const deleteCommentHandler = (commentId) => {
    const updatedComment = comments.filter((comment) => {
      return comment._id !== commentId
    })
    setcomments(updatedComment)
  }

  const getRepliesHandler = (commentId) => {
    return comments.filter((comment) => comment.parent === commentId).sort((a,b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
  }
  return (
    <div className={`${className}`} >
     <CommentForm btnLable="Send" formSubmitHandler={(value) => addCommentHandler(value)}/>
     <div className='space-y-4 mt-8 '>
      {mainComments.map((comment) => (
        <Comments key={comment._id} comment={comment} logginedUserId={logginedUserId}
         affectedComment={affectedComment}
         setAffectedComment = {setAffectedComment} 
         addComment={addCommentHandler} 
         updateComment={updateCommentHandler} deleteComment={deleteCommentHandler} 
         replies = {getRepliesHandler(comment._id)}
         />
      ))}
     </div>
    </div>
  )
}

export default CommentsContainer