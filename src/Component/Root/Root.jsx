import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <main className='min-h-[100vh]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;