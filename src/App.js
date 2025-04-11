import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/ArticleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/blog/:id' element={<ArticleDetailPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
