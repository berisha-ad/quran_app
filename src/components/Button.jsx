const Button = ({children, type, disabled, onClick}) => {
    return ( 
        <button onClick={onClick} className="bg-blue-500 text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 focus:outline-none cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed" disabled={disabled} type={type}>{children}</button>
     );
}
 
export default Button;