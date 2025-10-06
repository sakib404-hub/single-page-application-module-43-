import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)

    return (
        <div>
            <Header></Header>
            <main className='min-h-[100vh]'>
                {isNavigating && <span>Loading.......</span>}
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;