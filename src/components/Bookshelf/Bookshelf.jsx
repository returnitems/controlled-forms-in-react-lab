import { useState } from "react";



const Bookshelf = () => {
  
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState(
    {
      title: '',
      author: '',
    },
  );


    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([ ...books, newBook]);
        setNewBook({
            title: "",
            author: "",
        });
    };


  return (
    <>
      <div className="bookshelfDiv">
        <form onSubmit={handleSubmit} className="formDiv">
        <h3>Add a Book</h3>
            <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
            <div key={index} className="bookCard">
                <p>{book.title}</p>
                <p>by {book.author}</p>
            </div>
        ))}
      </div>
    </>
  );
};


export default Bookshelf;
