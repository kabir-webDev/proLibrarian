import CategoryCard from "../../../Card/CategoryCard";

const SubCategoryShowcaseSection = () => {
    return (
        <div className="py-5">
            <div className="pt-5 pb-10 px-3 md:px-10 xl:px-20 2xl:px-24">
                <hr/>
            </div>
            <p className="px-3 md:px-24 xl:px-44 2xl:px-96 text-center md:text-lg tracking-wider">
                Whether you need to find top talent, your next great job opportunity or a consulting solution for
                managing your business and resourcing challenges, we can help.
            </p>
            
            <div className="flex justify-center 2xl:gap-10 3xl:gap-8 mt-20 3xl:px-72 xl:px-20 xl:gap-20 2xl:px-40 flex-wrap lg:gap-2 md:gap-5 gap-16">

                <CategoryCard
                    img={'/v/accounting.png'}
                    title={'Finance & Accounting'}
                    des={'Accounting and accounts payable clerks, senior accountants, controllers and more'}
                />

                <CategoryCard
                    img={'/v/support.png'}
                    title={'Administrative & Customer'}
                    des={'Customer service reps, receptionists, administrative assistants, office clerks, and more'}
                />

                <CategoryCard
                    img={'/v/channel.png'}

                    title={'Marketing & Creative'}
                    des={'Desktop support and help desk analysts, applications architects, network administrators, and more'}
                />

                <CategoryCard
                    img={'/v/project-management.png'}

                    title={'Technology'}
                    des={'Graphic and web designers, marketing managers, copywriters and more'}
                />

                <CategoryCard
                    img={'/v/balance.png'}

                    title={'Legal'}
                    des={'Legal secretaries, paralegals, attorneys, file and office clerks, and more'}
                />
            </div>
            <div className="pt-10 pb-5 px-3 md:px-10 xl:px-20 2xl:px-24">
                <hr/>
            </div>
        </div>
    )
}

export default SubCategoryShowcaseSection