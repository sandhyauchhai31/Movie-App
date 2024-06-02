import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h3>MovieDb</h3>
        <ul>
          <li><Link className='text-link' to = "/popular">Popular</Link></li>
          <li><Link className='text-link' to = "/top-rated">Top Rated</Link></li>
          <li><Link className='text-link' to = "/upcoming">Upcoming</Link></li>
        </ul> 
                   
        <div className="search-box">
          <input  type="text" placeholder='Movie Name' />       
        </div>
        <button className='search-btn' type = "submit" >Search</button>  
       
    </div>
  )
}

export default Navbar