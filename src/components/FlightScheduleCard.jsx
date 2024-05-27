

const FlightScheduleCard = () => {
    return (
        <div className="schedule-card">
           <div className="schedule-card__header px-5 py-4">
                <div className="schedule-card__header__info">
                    <div className="w-6 h-6 rounded-full flex justify-center items-center bg-secondary">
                        <span className="font-murecho font-semibold text-white text-[14px] leading-[18px] tracking-[-1%]">1</span>
                    </div>
                    <div className="flex">
                        <p className="font-murecho text-heading">DAC<span className="text-heading mx-1">→</span>JFK</p>
                        <div className="flex">
                            <p>Round Trip</p><span className="w-[3px] h-[3px] text-[#9BA6B2];"></span>
                            <p>25 Mar<span>-</span>4 Apr 2023</p>
                            <p>1 Stop</p>
                        </div>
                        <div className="px-2 py-1 bg-[#E8F3FF] rounded-[32px]">
                            <p>33h 20m</p>
                        </div>
                    </div>
                </div>
                <div className="schedule-card__header__time"></div>
            </div>
        </div>
    );
};

export default FlightScheduleCard;