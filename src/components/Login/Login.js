
import React from 'react'
import styled from 'styled-components'
import {auth, providor} from '../../firebase'
function Login({setUser}) {

    const signIn =()=>{
            auth.signInWithPopup(providor)
            .then((result)=>{
                let user= result.user;
                let newUser={
                    name: user.displayName,
                    emmail: user.email,
                    photo: user.photoURL
                }
                localStorage.setItem('user', JSON.stringify(newUser))
          setUser(newUser);
            })
            .catch((error)=>{
                alert(error.message);
            })
    }


    return (
        <Container>
            <Content>
                <AmazonLogo src='https://i.imgur.com/7I9Was5.png'/>
                    <h1>Sign into Amazon</h1>
             
                <LoginButton onClick={signIn}>
                    Sign in with Google
                </LoginButton>
                <h4>Made By Viraj Patel</h4>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;

h1{
    color:white;
    
}
h4{
    color:white;
    margin-top:50px;
}
`


const Content = styled.div`
padding: 100px;
background-color: #0f1111;
border-radius: 5px;
box-shadow: 0 1px 3px gray;
text-align: center;
`

const AmazonLogo = styled.img`
height: 60px;
marign-bottom: 40px;
`

const LoginButton = styled.button`
margin-top:50px;
background-color: #f0c14b;
height: 40px;
border: 2px solid #a88734;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;
`