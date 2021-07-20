import React from 'react'
import moment from "moment";

const MovieCard = (props) => {
  console.log("props", props);

  const formatDate = (date) => {
    return moment(date).format('MM/DD/YYYY')
  }

  const formatProducer = (producersList) => {
    const producersArr = producersList.split(',')
    return producersArr.map((producer) => {
      return <p class="card-content-text">{producer}</p>
    })
  }

  return (
    <div className="card-body">
      <div className="card-header">
        <div>
          <h1>{props.data.title}</h1>
        </div>
        <div className="card-header-details">
          <h3>release date</h3>
          <p>{formatDate(props.data.release_date)}</p>
        </div>
        
      </div>
      <div className="card-content">
        <div className="card-director-section">
          <p><b>Director</b></p>
          <p class="card-content-text">{props.data.director}</p>
        </div>
        <div className="card-director-section">
          <p><b>Producers</b></p>
          <div>{formatProducer(props.data.producer)}</div>
        </div>

      </div>
      
    </div>
  )
}

export default MovieCard;