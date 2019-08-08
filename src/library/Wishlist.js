import React, {Component} from 'react'

class Wishlist extends Component{
    constructor(props){
        super(props);
        this.state={
            books:props.books
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            books:newProps.books
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Wishlist</h1>
                <p>Total wishlist:{this.state.books.length}</p>
            </React.Fragment>
        )
    }
}

export default Wishlist;