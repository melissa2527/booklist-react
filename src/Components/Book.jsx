import React from 'react';
import Checkbox from './Checkbox';
// import "../Book.scss";
// class Component
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxChecked: false
    }
  }

  onChange = () => {
    // setting the state of checkbox to the oposite of what it was before
    // On checkbox changed to checked I am adding a book to an array of books to read
    const addedBooks = 
      [...this.props.booksToRead, this.props.book];
    // On checkbox changed to unchecked I am removing a book from an array of books to read
    const removedBooks = 
      this.props.booksToRead.filter(b => b.title !== this.props.book.title);

    //   this would be another way to write the ternary operator
    // let newArray;
    // if (this.state.checkBoxChecked) {
    //     newArray = addedBooks;
    // } else {
    //     newArray = removedBooks
    // }

    this.setState({checkBoxChecked: !this.state.checkBoxChecked},
        () => this.props.handleBooksToRead(this.state.checkBoxChecked ? addedBooks : removedBooks)
        );
  }

  render() {
    const { book, booksToRead, handleBooksToRead } = this.props;
    console.log(booksToRead);
    // for just using the properties of an object 
    const { imageLink, title, author, year, link } = book;

    const { checkBoxChecked } = this.state;

    // return can only return one parent element all the other code needs to be inside this parent element
    return(
      <div className="book-card" style={{ background: checkBoxChecked ? 'lightblue' : 'transparent' }}>
        <a href={link} target="_blank">
          <img src={imageLink} alt="" width="200"/>
        </a>
        <div>
        {title} - {author} <strong>year: {year}</strong>
        <Checkbox 
          checked={checkBoxChecked} 
          onChange={this.onChange} 
        />
        </div>
      </div>
    )
  }
}

// always export default component from file
export default Book;