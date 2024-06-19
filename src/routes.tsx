import Header from 'components/Header';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Search from 'pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/search/:cep' element={ <Search /> } />
                    <Route path='*' element={ <NotFound /> } />
                </Routes>
            </Router>
        </main>
    );
}