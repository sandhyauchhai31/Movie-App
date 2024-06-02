import './Card.css';
function Card() {
  return (
    <>
      <div className="movie">
        <img src="images/red_notice.jpeg" className="poster" />
        <div className="movie-details">
          <div className="box">
            <p className="title">Red Notice</p>
            <p className="rating">Rating: 9.7</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card