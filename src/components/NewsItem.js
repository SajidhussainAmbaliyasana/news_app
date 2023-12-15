import React from 'react'
import './style.css'

function NewsItem(props) {
  return (
    <div className='news-card'>
      <div className="news-image">
        <img src={props.imageUrl} alt="Imagen Not found" />
      </div>
      <div className="card-title">
        <p>{props.title}</p>
        <p>Source:- {props.source}</p>
      </div>
      <a href={props.url} target='_blank' rel='noreferrer'><button className='card-button'>Read More</button></a>
    </div>
  )
}

export default NewsItem
