

const FlightScheduleCard = () => {
    return (
        <div className="schedule-card">
           <div className="schedule-card__header px-5 py-4 border-b-1">
                <div className="schedule-card__header__info flex justify-between items-center">   
                    <div className="flex items-center gap-x-2.5">
                        <div className="w-6 h-6 rounded-full flex justify-center items-center bg-secondary">
                            <span className="font-murecho font-semibold text-white text-[14px] leading-[18px] tracking-[-1%]">1</span>
                        </div>
                        <div>
                            <p className="font-murecho text-heading">DAC<span className="text-heading mx-1">→</span>JFK</p>
                            <div className="flex items-center font-murecho font-normal text-[#5A6573] text-[13px] leading-4">
                                <p>Round Trip</p><span className="w-[3px] h-[3px] rounded-full bg-[#9BA6B2] mx-[6px]"></span>
                                <p>25 Mar<span className="mx-1">-</span>4 Apr 2023</p><span className="w-[3px] h-[3px] rounded-full bg-[#9BA6B2] mx-[6px]"></span>
                                <p>1 Stop</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-[#E8F3FF] rounded-[32px]">
                        <p className="font-murecho font-[475] text-secondary text-[12px] leading-4">33h 20m</p>
                    </div>
                </div>
                <div className="schedule-card__header__time"></div>
            </div>
        </div>
    );
};

export default FlightScheduleCard;