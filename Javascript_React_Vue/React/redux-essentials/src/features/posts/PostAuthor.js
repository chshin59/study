import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)    
  )

  return (
    <>
    <Link to={`/profile/${author.name}`}>
      <span>
        by {author ? author.name : 'Unknown author'}
      </span>
    </Link>
    <br />
    </>
  )
}