import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './components/Post';
import Home from './components/Home';
import Newpost from './components/Newpost';
import PostDetail from './components/PostDetails';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
     <Router>
         <Routes>
         <Route path="nav" element={<Navbar />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/new-post" element={<Newpost/>} />
          <Route path="/postdetails/:id" element={<PostDetail/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
     
    </Router>
    </div>
  );
}

export default App;
