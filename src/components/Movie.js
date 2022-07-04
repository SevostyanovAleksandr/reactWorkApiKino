const Movie = ({image, title}) => {
    return(
        <div className="movie_block">
        <img src={image} alt= {title}></img>
        <h3>{title}</h3>
        </div>
    )

}

export default Movie