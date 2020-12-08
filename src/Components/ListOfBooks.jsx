import React from 'react';
import Book from './Book.jsx';
import "../Book.scss";

class ListOfBooks extends React.Component {
  render() {
    const { books, title, booksToRead, handleBooksToRead } = this.props;
    const sortedBooks = 
      books.length > 2 ? books.sort((a, b) => (a.title < b.title) ? 1 : -1) : books;
  
    return (
      <div className="list">
        <h2>{title}</h2>
          {sortedBooks.map((book, index) => {
          // if you want to change or add some property to the object
          const bookWithId = {...book, id: index};
            return(
              <Book 
                key={index} 
                book={bookWithId} 
                index={index}
                handleBooksToRead={handleBooksToRead} 
                booksToRead={booksToRead}
              />
            )
          })}
      </div>
    )
  }
}

export default ListOfBooks;