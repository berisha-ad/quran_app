const Card = ({chapter, verse, text}) => {
    return ( 
        <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl font-bold">Sure: {chapter}, Vers: {verse}</h2>
            <p>{text}</p>
        </div>
     );
}
 
export default Card;