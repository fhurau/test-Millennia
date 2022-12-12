import Card from 'react-bootstrap/Card';
import { useCart } from "react-use-cart";

function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    return (
        <div className='cart'>
            {items.map((item) => (
                <Card style={{ width: '30rem', height: "10rem" }} className="my-5">
                    <div className='d-flex'>
                        <div className='m-4'>
                            <Card.Img variant="top" src={item.thumbnail} style={{ height: "100px", width: "auto", objectFit: "contain" }} />
                        </div>
                        <div className='mx-4'>
                            <Card.Body>
                                <div className='d-flex'>
                                <Card.Title className='mx-3'>{item.title}</Card.Title>
                                <button onClick={() => removeItem(item.id)} className="buttoncartdel bg-dark ms-3">&times;</button>
                                </div>
                                <Card.Text>
                                    $ {item.price}
                                </Card.Text>
                                <div className='d-flex'>
                                <li key={item.id}>
                                    
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        className='mx-1 buttoncart bg-dark'
                                    >
                                        +
                                    </button>
                                    {item.quantity}
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        className='mx-1 buttoncart bg-dark'
                                    >
                                        -
                                    </button>
                                </li>
                                <Card.Text className='mx-1'>
                                $ {item.quantity * item.price}
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            ))}
            <div className='tombolcart'>
            <h1>TOTAL: $ {cartTotal}</h1>
            <div className='d-flex justify-content-end'>
            <button onClick={() => emptyCart()} className="buttondetail bg-dark">BELI</button>
            </div>
            </div>
            
        </div>

    );
}

export default Cart;