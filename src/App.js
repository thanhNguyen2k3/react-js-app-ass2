// import Board from './components/TikToe/Board';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRouter } from './routes';
import Default from './components/Default';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {privateRouter.map((route, index) => {
                        const Layout = Default;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
