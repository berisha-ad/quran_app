const Card = ({children}) => {
    return ( 
        <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col gap-4">
            {children}
        </div>
     );
}
 
export default Card;