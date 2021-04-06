
import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Cart from'./components/Cart/Cart'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import {auth, db} from './firebase'
import Login from './components/Login/Login'


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems]= useState([]);

  const getCartItems = () =>{
    db.collection('cartitems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=> ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems)

    })

  }

  const signOut=()=>{
    auth.signOut()
    .then(()=>{
      localStorage.removeItem('user')
      setUser(null);
    })
  }

  useEffect(()=>{
    getCartItems()
  }, [])

 
 
  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser}/>
        ):(
    
    <Container>
      <Header 
      user={user} 
      cartItems={cartItems}
      signOut={signOut}/>
      <Switch>
       
        <Route path="/cart">
          <Cart cartItems={cartItems}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
   
    </Container>
        )
}
    </Router>
  );
}

export default App;

const Container = styled.div`
background-color: #eaeded;
`