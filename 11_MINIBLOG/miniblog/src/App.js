import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hooks/useAuthentication';
import CreatePost from './pages/CreatePost/CreatePost';
import { Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;
   
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    });
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
    <AuthProvider  value={{user}}>
    <BrowserRouter>
     <Navbar/>
     <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/login" />}/> 
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />          
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login" />} />
      </Routes>
     </div>
     <Footer />
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
