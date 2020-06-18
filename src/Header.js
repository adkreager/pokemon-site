import React from 'react'
import SearchBar from './SearchBar'

const Header = (props) => {
    return (
        <nav>
            <ul>
                <div id="left-header">
                    <SearchBar />
                    <li><button>View All</button></li>
                </div>
                <div id="right-header">
                    <li><button>Collection</button></li>
                    <li><button>Grocery</button></li>
                    <li><button>Battle</button></li>
                    <img src="http://www.pngmart.com/files/2/Pokeball-PNG-Photos.png" alt="pokeball" id="pokeball" />
                </div>
            </ul>
        </nav>
    )
}

export default Header