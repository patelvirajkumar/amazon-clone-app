import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({getTotalPrice, getCount}) {





    return (
        <Container>
           <SubTotal> Subtotal({getCount()} items) : 
           <NumberFormat value={getTotalPrice()} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />
           </SubTotal>
            <CheckOutButton>
                Proceed to Checkout
            </CheckOutButton>
         </Container>
    )
}

export default CartTotal


const Container = styled.div`
background-color:white;
height: 200px;
padding: 20px;
flex:0.3;
`

const CheckOutButton = styled.button`
background-color: #f0c14b;
width: 100%;
padding: 4px 8px;
border: 2px solid #a88734;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

:hover{
    background-color: #ddb347;
}
`

const SubTotal = styled.h2`
margin-bottom: 16px;

`