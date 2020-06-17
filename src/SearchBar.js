import React, { PureComponent } from 'react'

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }



    render() {
        return (
            <form action="">
                <input type='text' placeholder="Search..."></input>
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchBar