import React from 'react'
import { images } from '../../constants'
import CommentForm from '../comments/CommentForm'

const Comments = ({comment, logginedUserId, setAffectedComment, 
    affectedComment, addComment, parentId = null, updateComment, deleteComment, replies}) => {
    const isUserLogined = Boolean(logginedUserId)
    const commentBelongsToUser = logginedUserId === comment.user._id;
    const isReplyingTo = affectedComment && affectedComment.type === "replying" && affectedComment._id === comment._id;
    const isEditing = affectedComment && affectedComment.type === "editing" && affectedComment._id === comment._id;

    const replyCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;
  return (
    <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
        <img src={images.postProfile} alt="user profile" className='w-9 h-9 object-cover rounded-full '/>
        <div className='flex-1 flex flex-col'>
         <h5 className='font-bold text-[#0D2436] text-xs lg:text-sm'>{comment.user.name}</h5>
         
         <span className='text-xs  text-[#0D2436]'>{new Date(comment.createdAt).toLocaleDateString("en-US",{
                day: "numeric",
                month:"short",
                year:"numeric",
                hour:"2-digit",
            })}
        </span>
        {!isEditing && (
            <p className='font-sans mt-[10px] text-[#5A7184]'>{comment.desc}</p>
        ) }
       
         {isEditing && (
          <CommentForm btnLable="Update" 
          formSubmitHandler={(value) => updateComment(value, comment._id)}
          formCancelHandler={() => setAffectedComment(null)} initialText = {comment.desc}
          />
         )}
         <div className='flex items-center gap-x-3 text-[#5A7184] font-sans text-sm mt-3 mb-3'>
            {isUserLogined && (
             <button className='flex items-center space-x-2' onClick={() => setAffectedComment({type:"replying", _id:comment._id})}>
            {/*import {FiMessageSquare} from "react-icons/fi" */}
           {/* <FiMessageSquare className="w-4 h-auto "/>*/}
            <span>Reply</span>
          </button>)}
         {commentBelongsToUser && (
            <>
          <button className='flex items-center space-x-2' onClick={() => setAffectedComment({type:"editing", _id:comment._id})}>
            {/*import {FiEdit2} from "react-icons/fi" */}
           {/* <FiMessageSquare className="w-4 h-auto "/>*/}
            <span>Edit</span>
          </button>  
          <button className='flex items-center space-x-2' onClick={() => deleteComment(comment._id)}>
            {/*import {FiTrash} from "react-icons/fi" */}
           {/* <FiMessageSquare className="w-4 h-auto "/>*/}
            <span>Delete</span>
          </button>  
            </>
         )}
         
         </div>
        {isReplyingTo && (
        <CommentForm btnLable="reply" 
        formSubmitHandler={(value) => addComment(value,replyCommentId,replyOnUserId)}
        formCancelHandler={() => setAffectedComment(null)}
        />)}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comments key={reply._id} addComment={addComment} 
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              comment={reply} deleteComment={deleteComment} logginedUserId={logginedUserId}
              replies={[]} updateComment={updateComment} parentId={comment._id}
              />
            ))}
          </div>
        )}
        </div>
    </div>
  )
}

export default Comments