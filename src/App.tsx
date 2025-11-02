import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar.tsx';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import './App.css';
import {Footer} from "./components/Footer/Footer.tsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;