const Button = ({children, type, disabled}) => {
    return ( 
        <button className="py-2 px-4 bg-emerald-500 rounded-full ml-4 cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed" disabled={disabled} type={type}>{children}</button>
     );
}
 
export default Button;