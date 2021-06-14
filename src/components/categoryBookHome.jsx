import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginNavbar from "./loginNavbar";
import CategoryListHome from "./categoryListHome";

class CategoryBookHome extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginNavbar />
        <div
          className="container-fluid ml-5"
          style={{ fontSize: 20 }}
        >
          <div className="row mt-5">
            <CategoryListHome />
            <div className="col-sm-6" style={{marginLeft:50}}>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/a0edf8c957663856f113d66d60b0a0d75a68744a7ff21322287e2cfc6cd389b67bfd5d1c341bbfbe1194101b3e678a9cba6ba40d7f02c0d3b322eba622d41193.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        A Tale of Two Cities{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/b428067ca29e5aac19f07d870529819cc47125107156165173d191ccaafae3d0f21deef1075f77442cbc4afeb88718be133a6e3181d0a39d5a27b9ab99719af8.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        The Lion, the Witch and the Wardrobe{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/storebook/34275d765928f3b2f1132ba10c302fa65a3614b7419e03ca6ed52f380c84173e39be2d94b5628c4a5f86f136fb9e7a32a20b18bf01cc0fa644b7e57e9de6f3b8.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        The Little Prince{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/7d502eba8482297a11b1f503173e646b020ce7f1578b89d33e349442e06afb2fe83a5dbfa05a624171b051da0bdf2abbd13a1d21e5fbb9dad991bfe51de31c51.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        The Book Theif{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/90ef81e1fb25e849d404bae17fb1569c33842fe7a20e3653b2c1e25f9612ce0284513c7036bc40f4660eb770013d274e847d9b754744c8b04bdbb53b2edcd613.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        Twilight{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-book">
                    <div className="book-image">
                      <img
                        className="book-thumbail-image"
                        src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/book/a0574bae8b055a9a70dd4160ec2828093c9aaa617004405ccf501a63c37899661bda0b55e9ef10d3a2bbb8eac9b2793d7df046f00e5c9d5fe26f85de0d6c384a.jpg"
                        alt="single-book"
                      />
                    </div>
                    <div className="book-content">
                        Pride and Prejudice{" "}
                      <div className="book-actions">
                        <Link className="btn btn-outline-success btn-sm" to="#">
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <div classNameName="">
      //   {this.state.books.map((book) => (
      //   <div className="col-lg-12 ml-5">
      //     <div className="row">
      //       <div className="col-sm-4">
      //         <div className="single-book">
      //           <div className="book-image ">
      //             <Link to="">
      //               <img
      //                 className="book-thumbail-image h-100"
      //                 src={`./image/${book.imageName}`}
      //                 alt="single-book"
      //                 style={{width:650}}
      //               />
      //             </Link>
      //           </div>
      //           <div className="book-content" style={{alignContent:"center"}}>
      //             <Link
      //               to=""
      //               className="book-title" style={{textAlign:"center"}}
      //             >
      //               {book.title}{" "}
      //             </Link>
      //             <div className="book-actions">
      //               <Link
      //                 className="btn btn-outline-success btn-sm"
      //                 to=""
      //               >
      //                 <i className="fa fa-eye"></i>
      //               </Link>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   ))}
      // </div>
    );
  }
}

export default CategoryBookHome;
