import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='main-1'>
        <div className='main-'>
            <h2>CART LIST</h2>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            
                            <img src={cartItem.url} width={90} />
                       <span className='s'> {cartItem.name} </span>
                           <button className='b'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>                       <span> {cartItem.quantity} </span>
                            <button className='a'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span className='r'> Rs.= {cartItem.price * cartItem.quantity} </span>
                           </div>
                    )
                })
            }
<br></br><br></br>
            <c> Total = <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </c>
        </div ></div>
    )
}

export default CartList