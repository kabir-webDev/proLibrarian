const InputBox = ({label, name,type, placeholder, onChange, error, value}) => {
    return (
        <div className="w-full my-6">
            <p className="md:text-lg xl:text-xl pb-1" style={{color: '#0e497b'}}>{label}</p>
            <input name={name} type={type || 'text'} className={`w-full block border focus:outline-none py-2 px-3 text-gray-600 md:text-lg xl:text-xl ${error ? 'border-red-500' : ''}`} value={value} placeholder={placeholder} onChange={onChange}/>
            {
                error ? ( <p className="text-sm text-red-500 pl-1 pt-1">{error}</p> ) :''
            }

        </div>
    )
}

export default InputBox