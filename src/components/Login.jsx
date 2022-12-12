import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from 'react-query';
import { API } from '../config/api';
import {useNavigate} from 'react-router-dom'


function Login() {
  const navigate = useNavigate()

    const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
          const data = {
            username: 'kminchelle',
            password: '0lelplR',     
        }
          const dataa = await API.post("/auth/login",data);
          console.log(dataa);
          navigate("/");
        } catch (err) {
          console.log(err);    
        }
      });

    

return (
    <div>
        <div className='containerr'>
        <Form className='form my-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='float'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='float'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark"  className='buttondetail floats' type="submit" onClick={(e)=>handleSubmit.mutate(e)}>
                Submit
            </Button>
        </Form>
        </div>
        <h5 onClick={()=> navigate("/register")} className="mt-3 cursor">Register</h5>
    </div>
);
}

export default Login;