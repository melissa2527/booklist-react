import React from 'react';
import ListOfBooks from './Components/ListOfBooks';
import books from './Constants/books.json';
import SimpleList from './Components/SimpleList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksToRead: []
    }
  }

  handleBooksToRead = (b) => {
    this.setState({booksToRead: b});
  }

  render(){
 
    return (
        <div className="wrapper">
          <h1 className="title">Book List</h1>
          <ListOfBooks 
            books={books} 
            booksToRead={this.state.booksToRead} 
            handleBooksToRead={this.handleBooksToRead}
          />
          <SimpleList booksToRead={this.state.booksToRead}/>
        </div>
    );
  }
}

export default App;