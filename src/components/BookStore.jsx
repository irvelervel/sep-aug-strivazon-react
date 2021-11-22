import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Button, Col, Row } from "react-bootstrap";
import withRouter from "../lib/withRouter";

// let's say I want to use navigate (history) to travel to another page
// but we're in a class component, so we cannot use hooks :(
// what can I do? 2 solutions:
// 1) converting the class component to a functional component
// 2) withRouter has been ditched. BUT you can write your own!

class BookStore extends Component {
  state = {
    books: [],
    bookSelected: null,
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/food-books"
      );
      if (resp.ok) {
        let books = await resp.json();
        this.setState({ books });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    console.log(this.props)
    return (
      <>
        <Row>
          <Col md={4}>
            <BookList
              bookSelected={this.state.bookSelected}
              changeBook={this.changeBook}
              books={this.state.books}
            />
          </Col>
          <Col md={8}>
            <BookDetail
              bookSelected={this.state.bookSelected}
              addToCart={this.props.addToCart}
            // this is called PROP DRILLING
            />
          </Col>
        </Row>
        <Button onClick={() => this.props.navigate('/strive')}>CLICK ME FOR /strive</Button>
      </>
    );
  }
}

export default withRouter(BookStore);
