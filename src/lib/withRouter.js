import { useNavigate, useParams, useLocation } from 'react-router'

// higher order component -> HOC
const withRouter = (ReactComponent) => {
  const RoutedComponent = (props) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()

    return <ReactComponent {...props} location={location} navigate={navigate} params={params} />
  }
  return RoutedComponent
}

export default withRouter
