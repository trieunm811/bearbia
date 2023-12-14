import React from 'react'
import { Link } from 'react-router-dom'

function ContentItem(props) {
  return (
    <div className="content-listItem">
        <div className="content-item">
            <Link to={"/"+ props.type}><img src={props.img} alt="item-1" /></Link>
        </div>
            <p>{props.name}</p>
    </div>
  )
}

export default ContentItem