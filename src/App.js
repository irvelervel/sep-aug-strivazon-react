import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

// App needs to store the cart array
// rules of hooks:
// 1) use them just in functional components
// 2) use them always at the top level of your component

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (book) => setCart([...cart, book])

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className='text-center background-div'>
            <Link to='/'>
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Routes>
          <Route path='/' element={<BookStore addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
