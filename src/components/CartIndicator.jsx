import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const CartIndicator = ({ cartLength }) => {
  const navigate = useNavigate()
  // useNavigate is the v6 replacement of history
  // it returns a function that you can assign to a variable (in our case, 'navigate')

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
