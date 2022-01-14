import VCCCard from "../../../Card/VCCCard";

const SubTheChoiceSection = () => {
    return (
        <div className={'py-16 lg:py-20'}>
            <h2 className="2xl:text-3xl text-2xl tracking-wider font-bold px-3 text-center py-6" style={{color: '#0e497b'}}>The choice is yours, we've got you covered</h2>

            <div className="flex justify-center flex-wrap gap-6 mt-12">
                <div className="2xl:w-620 2xl:h-519  w-306 xs:w-340 md:h-405  md:w-481 overflow-hidden">
                    <img src="/NoPath@2x.webp" alt="" className="w-full h-full rounded object-cover object-center"/>
                </div>
                <div className="2xl:w-620 2xl:h-519 mt-8 lg:mt-0 md:h-405 w-306 xs:w-340 md:w-481 flex-col gap-6 flex">
                    <VCCCard
                        title={'Hire Remote Talent ASAP'}
                        des={'Millions of remote candidates. Secure virtual workspaces. Let us contact you'}
                    />
                    <VCCCard
                        title={'Try the best way to hire online'}
                        des={'Post a job for free. See a shortlist of talent. Only pay when you hire.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default SubTheChoiceSection