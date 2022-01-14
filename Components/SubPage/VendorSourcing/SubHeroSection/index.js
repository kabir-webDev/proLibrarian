import Link from "next/link"

const SubHeroSection = () => {
    return (
        <div className="w-ful relative ">
            <img style={{ zIndex: -1 }} src="/ourProjectBanner.webp" alt="" className="w-full h-full absolute left-0 top-0 object-cover object-center" />

            <div className="bg-gray-700 bg-opacity-80 py-16 2xl:py-24">
                <p className="md:text-3xl mx-3 md:mx-0 text-2xl 2xl:text-4xl text-center font-bold tracking-wider text-white">Dream Jobs. Top Talent. All in one place</p>
                <div style={{ backgroundColor: '#ecf6ff' }} className="2xl:w-517 w-306 md:w-406 mx-auto mt-10 rounded-lg shadow">
                    <h2 style={{ color: 'rgba(0, 0, 0, 0.87)' }} className=" text-center py-6 2xl:text-3xl text-2xl tracking-wider font-bold">Hire Talent</h2>
                    <p className="text-center">
                        <Link href="/vendor-sourcing/talent-hiring">
                            <a className="mx-auto md:text-base 2xl:text-lg transition-all duration-300 hover:shadow-lg shadow tracking-wider font-bold text-white rounded py-2 px-6" style={{ background: '#0e497b' }}>Request Staff</a>
                        </Link>
                    </p>

                    <p style={{ color: '#002b50' }} className="py-6 cursor-pointer text-center 2xl:text-base text-sm tracking-wider font-bold">
                        <span className={'hover:underline'}>
                            Learn about our talent solutions
                        </span>

                    </p>


                </div>
            </div>
        </div>
    )
}

export default SubHeroSection