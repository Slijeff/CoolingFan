import { useDispatch, useSelector } from "react-redux";

export default function ButtonStop(){
    
    var dispatch = useDispatch();
    var isOn = useSelector(state => state.isOn);

    if(isOn){
        return(
            <button onClick={() => dispatch({ type:'stop'})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full outline-none focus:outline-none">OFF</button>
        );
    }
    else{
        return(
            <button onClick={() => dispatch({ type:'stop'})} className=" bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none" disabled="true">OFF</button>
        );
    }
    
}