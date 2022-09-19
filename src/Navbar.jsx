import react from 'react'

function Navbar() {
    return(
        <div className='Navbar'>
            <div className='Navbar-heading'>
                <img src="./src/assets/mars.png" />
                <h1>Bridger Brown</h1>
            </div>
            
            <ul>
                <li>Home</li>
                <li>Work</li>
                <li>Bio</li>
            </ul>
        </div>
    )
}  

export default Navbar