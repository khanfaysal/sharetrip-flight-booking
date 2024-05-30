import Airplane from "../assets/airplane.png";
import AlertIcon from "../assets/alertIcon.png";
import AmirateIcon from "../assets/amirate.png";
import DepartureLocationIcon from "../assets/departure.png";
import DestinationLocationIcon from "../assets/destination.png";
const FlightScheduleCard = () => {
  return (
    <div className="schedule-card">
      <div className="schedule-card__header px-5 py-4">
        <div className="schedule-card__header__info flex justify-between items-center">
          <div className="flex items-center gap-x-2.5">
            <div className="w-6 h-6 rounded-full flex justify-center items-center bg-secondary">
              <span className="font-murecho font-semibold text-white text-[14px] leading-[18px] tracking-[-1%]">
                1
              </span>
            </div>
            <div>
              <p className="font-murecho text-heading mb-1">
                DAC<span className="text-heading mx-1">→</span>JFK
              </p>
              <div className="flex items-center font-murecho font-normal text-[#5A6573] text-[13px] leading-4">
                <p>Round Trip</p>
                <span className="w-[3px] h-[3px] rounded-full bg-[#9BA6B2] mx-[6px]"></span>
                <p>
                  25 Mar<span className="mx-1">-</span>4 Apr 2023
                </p>
                <span className="w-[3px] h-[3px] rounded-full bg-[#9BA6B2] mx-[6px]"></span>
                <p>1 Stop</p>
              </div>
            </div>
          </div>
          <div className="px-2 py-1 bg-[#E8F3FF] rounded-[32px]">
            <p className="font-murecho font-[475] text-secondary text-[12px] leading-4">
              33h 20m
            </p>
          </div>
        </div>
        <div className="schedule-card__header__time"></div>
      </div>
      <div className="w-full h-[1px] bg-[#EBF0F5]"></div>
      <div className="p-4">
        <div className="departure">
          <div className="departure__header box-content h-12 flex items-center">
            <div className="w-full flex gap-3 items-center">
              <img
                className=""
                src={DepartureLocationIcon}
                alt="departure location icon"
              />
              <div className="flex justify-between w-full bg-[#F5F7FA] rounded-md px-4 pt-2.5 pb-3 my-1">
                <p className="font-murecho font-[475] text-[#1A2B3D] text-[13px] leading-[18px]">
                  Departure from Dhaka
                </p>
                <p className="font-murecho font-normal text-[#5A6573] text-[13px] leading-[18px]">
                  <span className="font-[475]">Terminal 1:&nbsp;</span>Hazrat
                  Shahjalal International Airport
                </p>
              </div>
            </div>
          </div>
          <div className="departure__schedule-time box-content h-[46px] mt-3 flex items-center">
            <div className="w-full flex gap-3 items-center">
              <img className="" src={AmirateIcon} alt="amirate icon" />
              <div className="flex w-full">
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    DAC - DXB
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    12hr 20min
                  </p>
                </div>
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    07:30 PM
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    28 Mar, Friday
                  </p>
                </div>
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    08:50 AM
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    29 Mar, Saturday
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="departure__schedule-info box-content h-[140px] flex flex-col items-center">
            <div className="w-full flex gap-3 items-center">
              <div className="flex flex-col items-center h-[140px]">
                <span className="w-0.5 bg-gray-300 flex-grow"></span>
                <img className="" src={Airplane} alt="airplane" />
                <span className="w-0.5 bg-gray-300 flex-grow"></span>
              </div>
              <div className="w-full">
                <div className="flex pb-4">
                  <div className="w-4/12">
                    <p className="font-murecho font-[475] text-[#3E4957] text-[14px] leading-[18px] pb-[6px]">
                      Turkish Airlines
                    </p>
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px]">
                      Flight no : TUR467
                    </p>
                  </div>
                  <div className="w-4/12">
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px] pb-[6px]">
                      Airbus Industrie 737-800-738
                    </p>
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px]">
                      Class : <span className="font-[475]">ECONOMY-Y (O)</span>
                    </p>
                  </div>
                </div>
                <div className="border border-[#FFE1C2] bg-[#FFEEDB] rounded-md flex items-center gap-x-2 px-3 py-2">
                  <img className="" src={AlertIcon} alt="alert icon" />
                  <p className="font-murecho font-normal text-[#3E4957] text-[12px] leading-4">
                    Technical stoppage at Malpensa International Airport
                    (Milano). Before booking this flight please check your visa
                    requirements as per your nationality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layover">
          <div className="layover__header box-content h-12 flex items-center">
            <div className="w-full flex gap-3 items-center">
              <img
                className=""
                src={DepartureLocationIcon}
                alt="departure location icon"
              />
              <div className="flex justify-between w-full bg-[#E8F3FF] rounded-md px-4 pt-2.5 pb-3 my-1">
                <p className="font-murecho font-[475] text-[#1A2B3D] text-[13px] leading-[18px]">
                  Layover at Dubai: 12 hr 20 min
                </p>
                <p className="font-murecho font-normal text-[#5A6573] text-[13px] leading-[18px]">
                  Dubai International Airport
                </p>
              </div>
            </div>
          </div>
          <div className="layover__schedule-time box-content h-[46px] mt-3 flex items-center">
            <div className="w-full flex gap-3 items-center">
              <img className="" src={AmirateIcon} alt="amirate icon" />
              <div className="flex w-full">
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    DAC - DXB
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    12hr 20min
                  </p>
                </div>
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    07:30 PM
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    28 Mar, Friday
                  </p>
                </div>
                <div className="w-4/12">
                  <p className="font-murecho text-heading text-[16px] text-[#1A2B3D]">
                    08:50 AM
                  </p>
                  <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-5">
                    29 Mar, Saturday
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="layover__schedule-info box-content h-[72px] flex flex-col items-center">
            <div className="w-full flex gap-3 items-center">
              <div className="flex flex-col items-center h-[72px]">
                <span className="w-0.5 bg-gray-300 flex-grow"></span>
                <img className="" src={Airplane} alt="airplane" />
                <span className="w-0.5 bg-gray-300 flex-grow"></span>
              </div>
              <div className="w-full">
                <div className="flex">
                  <div className="w-4/12">
                    <p className="font-murecho font-[475] text-[#3E4957] text-[14px] leading-[18px] pb-[6px]">
                      Turkish Airlines
                    </p>
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px]">
                      Flight no : TUR467
                    </p>
                  </div>
                  <div className="w-4/12">
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px] pb-[6px]">
                      Airbus Industrie 737-800-738
                    </p>
                    <p className="font-murecho font-normal text-[#5A6573] text-[14px] leading-[18px]">
                      Class : <span className="font-[475]">ECONOMY-Y (O)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="departure__header box-content h-12 flex items-center">
            <div className="w-full flex gap-3 items-center">
              <img
                className=""
                src={DestinationLocationIcon}
                alt="destination location icon"
              />
              <div className="flex justify-between w-full bg-[#F5F7FA] rounded-md px-4 pt-2.5 pb-3 my-1">
                <p className="font-murecho font-[475] text-[#1A2B3D] text-[13px] leading-[18px]">
                  Destination at New York
                </p>
                <p className="font-murecho font-normal text-[#5A6573] text-[13px] leading-[18px]">
                  <span className="font-[475]">Terminal 4:&nbsp;</span>John F Kennedy International Airport
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FlightScheduleCard;
