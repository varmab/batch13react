import React, {Component} from 'react';

class Library extends Component{
    constructor(){
        super();

        this.state={
            books:[],
            title:''
        }
    }

    onTitleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }

    onAuthorChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            author:e.target.value
        })
    }

    addBook=()=>{
        this.setState({
            books:[
                ...this.state.books,
                {
                    id:this.state.books.length+1,
                    title:this.state.title,
                    author:this.state.author
                }
            ],
            title:'',
            author:''
        })
    }

    deleteBook=(id)=>{
        this.setState({
            books:this.state.books.filter((book)=>{
                return book.id != id;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Library</h1>
                {/* <input type="text" value={this.state.title} placeholder="Enter title" name="title" onChange={this.onTitleChange}/>
                <input type="text" value={this.state.author} placeholder="Enter author" name="author" onChange={this.onAuthorChange}/>
                <button onClick={this.addBook}>Add</button> */}
                <table>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td><input type="text" value={this.state.title} placeholder="Enter title" name="title" onChange={this.onTitleChange}/></td>
                        <td><input type="text" value={this.state.author} placeholder="Enter author" name="author" onChange={this.onAuthorChange}/></td>
                        <td><button onClick={this.addBook}>Add</button></td>
                    </tr>
                    {
                        this.state.books.map((book)=>{
                            return <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td><button onClick={()=>{
                                    this.deleteBook(book.id)
                                }}>Delete</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Library;