
import FlighBokkingBredcrumb from '../components/FlighBokkingBredcrumb';
import Sidebar from '../components/Sidebar';
import MyBooking from '../pages/MyBooking';

const MainLayout = () => {
    return (
        <section className="flex gap-6">
            <Sidebar />
            <main className="w-10/12">
               <section>
                    <FlighBokkingBredcrumb />
                    <MyBooking />
               </section>
            </main>
        </section>
    );
};

export default MainLayout;