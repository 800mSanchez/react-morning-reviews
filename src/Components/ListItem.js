import React from "react"

const ListItem = ({movie}) => {
    return <div className="List-Item">
                  <img alt={movie.title} className="movie-poster" src={movie.posterImg} />
                  <div>
                      <p>{movie.title}</p>
                      <p>{movie.year}</p>
                  </div>
                    
    </div>
}

export default ListItem