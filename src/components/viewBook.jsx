import React, { Component } from "react";
import BookService from "../services/bookService";
import LogoutNavbar from "./logoutNavbar";

class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: this.props.match.params.title,
    };
  }

  componentDidMount() {
    BookService.getBookByTitle(this.state.title).then((res) => {
      this.setState({ books: res.data });
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <React.Fragment>
        <LogoutNavbar/>
        {this.state.books.map((book) => (
          <section className="content">
            <div className="box box-mytheme">
              <div className="box-body">
                <div className="row" style={{marginLeft:200}}>
                  <div className="col-sm-3">
                    <img
                      src={`/images/${book.imageName}`}
                      width="250"
                      height="250"
                      class="img-thumbnail"
                      alt={book.title}
                    />
                  </div>
                  <div className="col-sm-8" style={{ textAlign: "left" }}>
                    <div className="profile_view_item">
                      <p>
                        <b>Title</b> : {book.title}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Book Category</b> : {book.subject}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Author</b> : {book.author}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Quantity</b> : {book.quantity}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Price</b> : {book.bookCost}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Code No</b> : {book.isbnCode}
                      </p>
                    </div>

                    <div className="profile_view_item">
                      <p>
                        <b>Published Year</b> : {book.publishedYear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </React.Fragment>
    );
  }
}

export default ViewBook;
