import React, {Component} from 'react'

import BookList from './BookList'
import Wishlist from './Wishlist'

class Library extends Component{
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals"
            },
            {
                id:2,
                title:"React Beginner"
            },
            {
                id:3,
                title:"HTML pro"
            },
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <div>
                <h1>Library</h1>
                <Wishlist books={this.state.wishlist}/>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </div>
        )
    }
}

export default Library;