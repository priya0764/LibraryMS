import React, { Component } from "react";
import { Link } from "react-router-dom";

class StoreBooksCategory extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="main-book-category-list mr-5">
          <div className="container ml-5 mr-5">
            <div className="row">
              <div className="col-sm-12">
                <h2
                  className="theme_heading_green mb-0"
                  style={{ textAlign: "left" }}
                >
                  Store Books Category
                </h2>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="/category/books">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/515b5514238ee91873f5a417b2b23327fa31f24f90174c9c98fe4461dcc575e3f864d0e1b50653d31207719e58703b019f318373b1adf49733d56e48adbb4e11.png"
                        alt="Mystery"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="/category/books" className="book-category-title">
                      Mystery
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/f38adda26186e80fd51c02f869b9b2340ba4f9f0347465565df9b776ac54bccb6f10c8bc70aefbeef7f45f4aa89b2b217f33b3713daaa81b63359bcd1608bd13.jpg"
                        alt="Thriller"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="" className="book-category-title">
                      Thriller
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/3256acbb9a99be3b53b694c8d7d9523d06a01e7a57695434a88cc555644c7abab1ef4fd0758194f64aa333e742fa2376b5ff012c25390d0a10d353c89cc2fb98.jpg"
                        alt="Horror"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="" className="book-category-title">
                      Horror
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/f127fb20634bb3b316a39d74c79b19ad8bd7cb6701ff85fbca8913575e4b921e929ec41514436eac093436ad0f78ab4210e69c2674023a9a36f6b205e5155837.jpg"
                        alt="Science Fiction"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="" className="book-category-title">
                      Science Fiction
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/f6bcd0ceb63b4ef330a6e024311550894da515fca06cda215d6325565b9347cc7794635805be357db6049de1a75d71a9789814fe9d1359f2e3adc6800841e5c1.jpg"
                        alt="Adventure"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="" className="book-category-title">
                      Adventure
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-book-category">
                  <div className="book-category-image">
                    <Link to="">
                      <img
                        className="book-category-thumbnail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebookcategory/f13120fb401249d4b01635adbd574aaaab380e19abb2c097804441f62fc12b875bf6039f1acbc3f77f9c0442ba208ccb131f31d9cffdef860af89625471a0050.jpg"
                        alt="Fantasy"
                      />
                    </Link>
                  </div>
                  <div className="book-category-content">
                    <Link to="" className="book-category-title mr-5">
                      Fantasy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-border" />
      </div>
    );
  }
}

export default StoreBooksCategory;
