import React, {Component} from 'react'

class Like extends Component{
    constructor(){
        super();
        this.state={
            status:"Like",
            likes:0
        }
    }

    onButtonClick=()=>{
        if(this.state.status=="Like"){
            this.setState({
                status:"Unlike",
                likes:this.state.likes+1
            })
        }
        else
        {
            this.setState({
                status:"Like"
            })
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.onButtonClick}>{this.state.status}</button>
                <p>Likes:{this.state.likes}</p>
            </div>
        )
    }
}

export default Like;