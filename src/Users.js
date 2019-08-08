import React, {Component} from 'react'

//stateless functional component
const User=(props)=>{
    return(
        <h1>{props.name}</h1>
    )
}

class Users extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        //get data from api
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then((users)=>{
            this.setState({
                users:users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
            console.log("Failed to get data")
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Loading...</p>
                </div>
            )
        }
        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry, Failed to get users.. Try later</p>
                </div>
            )
        }
        return(
            <div>
                <h1>Users</h1>
                <div>
                {
                    this.state.users.map((user)=>{
                        return <User key={user.id} name={user.name}/>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Users;