import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UploadPage from './pages/UploadPage';
import DashboardPage from './pages/DashboardPage';
import DetailPage from './pages/DetailPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<UploadPage />} />
                    <Route path="/upload" element={<UploadPage />} />   {/* FIX ADDED */}
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/log/:id" element={<DetailPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
