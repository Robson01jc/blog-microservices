import React from 'react'

const CommentList = ({ comments }) => {
  const renderedContent = (comment) => {
    switch (comment.status) {
      case 'pending':
        return 'This comment is awaiting moderation'
      case 'rejected':
        return 'This comment has been rejected'
      default:
        return comment.content
    }
  }

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{renderedContent(comment)}</li>
  })

  return (
    <div>
      {comments.length > 0 && <span>{comments.length} comments</span>}
      <ul>{renderedComments}</ul>
    </div>
  )
}

export default CommentList