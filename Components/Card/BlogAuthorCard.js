import {BsArrowRight} from 'react-icons/bs'

const BlogAuthorCard = ({name, date, title}) => {
    return (
        <div className="w-306 relative border hidden lg:block overflow-hidden p-6" style={{height: '333px', background: '#0e497b'}}>
            <p className="text-white text-lg pb-3">{name}</p>
            <p className="text-white text-xs pb-4">{date}</p>
            <p className="text-2xl text-white pt-4">{title}</p>
            <BsArrowRight
            className={'text-white absolute left-6 bottom-8 text-3xl'}
            />
        </div>
    )
}

export default BlogAuthorCard