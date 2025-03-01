const Container = ({children}) => {
    return ( 
        <div className="lg:max-w-6xl max-w-screen w-full mx-auto px-8">
            {children}
        </div>
     );
}
 
export default Container;