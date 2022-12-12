import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'


function Register() {
  const navigate = useNavigate()

  return (
    <div>
        <div className='containerr'>
        <Form className='form my-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='float'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='float'>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='float'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='float'>Re-type Password</Form.Label>
                <Form.Control type="password" placeholder="Re-type Password" />
            </Form.Group>
            <Button variant="dark"  className='buttondetail floats' type="submit">
                Submit
            </Button>
        </Form>
        </div>
        <h5 onClick={()=> navigate("/login")} className="mt-3 cursor">Login</h5>
    </div>
  );
}

export default Register;