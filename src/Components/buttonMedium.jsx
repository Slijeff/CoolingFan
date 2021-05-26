import { useDispatch } from "react-redux";

export default function ButtonMedium(){
    
    var dispatch = useDispatch();
    return(
        <button onClick={() => dispatch({ type:'medium'})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none">MID</button>
    );
    
    
}