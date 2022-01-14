import {BsCheck2} from 'react-icons/bs';

const HiringTalentCard = ({ item, setSelected, selected }) => {
    const handleClick = (value) => {
        setSelected({value: value});
    }

    return (
        <div className={`rounded-lg my-22 mx-4 xs:mx-0 xs:w-330 3xl:w-459 cursor-pointer ${selected?.value === item?.value ? "border-2 border-primary shadow-xl shadow-skyLight bg-sky" : "border-2"}`} onClick={() => handleClick(item?.value)}>
            <div className="flex flex-col justify-center items-center">
                <div className={`rounded-full font-bold border border-primary grid place-items-center h-6 w-6  ${selected?.value === item?.value ? " bg-primary" : "bg-white "}`}
                    style={{
                        marginTop: "25px",
                        marginLeft: "276px"
                    }}>
                    <BsCheck2 className={` ${selected?.value === item?.value ? "text-white":"text-primary "}`}/>
                </div>
                <img src={item?.icon} alt="contact icon" className=""
                    style={{
                        width: "72px",
                        height: "72px",
                        marginTop: "-12px"
                    }} />
                <div className="text-center text-2xl font-medium text-primary pt-2.5">{item?.title}</div>
                <div className="text-center text-sm font-medium px-14 py-2" style={{ color: "rgba(0, 0, 0, 0.87)" }}>{item?.description}</div>
            </div>
        </div>

    );
};

export default HiringTalentCard;