import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const VCCCard = ({ title, des }) => {
    return (
        <div className="bg-white w-full shadow-vss transform hover:scale-102 transition-all duration-300 rounded-lg 2xl:py-16 py-5 md:py-10 px-5">
            <Link href="/vendor-sourcing/talent-hiring">
                <a className="flex justify-between items-center">
                    <h2 style={{ color: '#0e497b' }} className=" cursor-pointer tracking-wider md:text-lg  2xl:text-2xl font-bold">{title}</h2>
                    <span className={'font-bold cursor-pointer'}>
                        <BsArrowRight fill={'#0e497b'} fontWeight={800} size={28} />
                    </span>
                </a>
            </Link>

            <p className="mt-3 2xl:text-lg tracking-wider pr-5 md:pr-16 pb-2 md:pb-5" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                {des}
            </p>
        </div>
    )
}

export default VCCCard