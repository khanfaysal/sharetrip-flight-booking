
import AngelIcon from '../assets/angel.png';

const FlighBokkingBredcrumb = () => {
    return (
        <div className="my-5">
            <nav>
                <ol className="flex">
                    <li className="breadcrumb-item flex items-center">
                        <a href="#" className="breadcrumb">Home</a>
                        <img className="px-[11.78px]" src={AngelIcon} alt="angel icon" />
                    </li>
                    <li className="breadcrumb-item flex items-center">
                        <a href="#" className="breadcrumb">Booking History</a>
                        <img className="px-[11.78px]" src={AngelIcon} alt="angel icon" />
                    </li>
                    <li className="breadcrumb-item flex items-center">
                        <a href="#" className="breadcrumb">Flight</a>
                        <img className="px-[11.78px]" src={AngelIcon} alt="angel icon" />
                    </li>
                    <li className="font-murecho font-[475] text-secondary text-[13px] leading-[18px]">
                        STFL17121182045413
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default FlighBokkingBredcrumb;
