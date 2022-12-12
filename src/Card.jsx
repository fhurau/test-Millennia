import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { API } from '../src/config/api';
import { useQuery } from 'react-query';
import {useNavigate} from 'react-router-dom'

function Cards() {
  
  const navigate = useNavigate()
  
  let { data: products } = useQuery("producrttCache", async () => {
    const response = await API.get("/products");
    return response.data
  });
  return (
    <div className='cards'>
      {products?.products.map((item=>(
        <Card style={{ width: '18rem' }} className="cardss" onClick={()=> navigate("/detail/"+item.id)}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:"200px", width:"auto", objectFit:"contain"}} />
        <Card.Body>
          <Card.Title className='my-3'>{item.title}</Card.Title>
          <Card.Text className='m-1' style={{height:"100px"}}>
            {item.description}
          </Card.Text>
        </Card.Body>
      </Card>
      )))}
      </div>
  );
}

export default Cards;