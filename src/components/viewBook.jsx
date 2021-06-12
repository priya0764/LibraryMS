import React, { Component } from "react";
import BookService from "../services/bookService";
import LogoutNavbar from "./logoutNavbar";
class ViewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      title: this.props.match.params.title,
      book: {},
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
      <div>
        {this.state.books.map((book) => (
          <section className="content">
            <div className="box box-mytheme">
              <div className="box-body">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src={`./images/${book.imageName}`}
                      class="img-thumbnail"
                      alt="..."
                    />
                  </div>
                  <div className="col-sm-6" style={{ textAlign: "left" }}>
                    <div className="profile_view_item">
                      <p>
                        <b>Title</b>: {book.title}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Book Category</b>: {book.subject}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Author</b>: {book.author}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Quantity</b>: {book.quantity}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Price</b>: {book.bookCost}
                      </p>
                    </div>
                    <div className="profile_view_item">
                      <p>
                        <b>Code No</b>: {book.isbnCode}
                      </p>
                    </div>

                    <div className="profile_view_item">
                      <p>
                        <b>Published Year</b>: {book.publishedYear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        {/* <LogoutNavbar />
        <div className="row pt-5 ml-5">
          <div className="col-3">
            <img width="200" src={`/images/${this.state.book.imageName}`} alt="title" />
          </div>
          <div className="col-9">
            <div className="card-body" style={{textAlign:"left"}}>
              <p className="card-title" style={{fontFamily:"cursive", fontSize:25}}>{title}</p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>  */}
      </div>
    );
  }
}

export default ViewBook;
