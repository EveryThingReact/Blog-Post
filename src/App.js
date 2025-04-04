import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/ArticleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/blog/:id' element={<ArticleDetailPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>


      </Routes>
    </div>
  );
}

export default App;
