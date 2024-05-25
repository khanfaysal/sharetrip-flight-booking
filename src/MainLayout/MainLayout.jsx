
import FlighBokkingBredcrumb from '../components/FlighBokkingBredcrumb';
import Sidebar from '../components/Sidebar';
import MyBooking from '../pages/MyBooking';

const MainLayout = () => {
    return (
        <div className="flex gap-6 bg-[#EBF0F5]">
            <Sidebar />
            <main className="w-10/12">
               <div>
                    <FlighBokkingBredcrumb />
                    <MyBooking />
               </div>
            </main>
        </div>
    );
};

export default MainLayout;