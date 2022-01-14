const CategoryCard = ({title, des, img}) => {
    return (
        <div className="py-4 w-315">
            <p className="text-center flex justify-center">
                <img src={img} className={'w-16'}/>
            </p>
            <h2 style={{color: '#0e497b'}} className="my-4 text-lg xl:text-2xl font-bold text-center">
                {title}
            </h2>
            <p className="text-center text-sm lg:text-base px-2 xl:px-0 pt-2 text-gray-800">
                {des}
            </p>
        </div>
    )
}

export default CategoryCard