import { useState,useEffect,useReducer } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'
import logger from 'use-reducer-logger'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import Message from '../components/Message';
import Loading from '../components/Loading';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const[products,setProduct] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      const result =await axios.get('/api/products')
      // setProduct(result.data)
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

    }
    fetchData()
  },[]);
  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
              <Loading/>
          ) : error ? (
                <Message variant="danger">{error}</Message>
          ) : (
          <Row>
          {products.map((product) => (
            <Col  lg={3} md={4} sm={6} className="mb-3">
                  <Product product={product}></Product>

          </Col>
          ))}
          </Row>
        )}
      </div>
    </div>
  ) 
}
export default HomeScreen;