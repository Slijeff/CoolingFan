var fanState = {
    "isOn" : false,
    "speed": ""
}

export default function rootReducer(state = fanState, action){
    switch (action.type){
        case 'stop':
            return {
                "isOn": false,
                "speed": ""
            }
        case 'slow':
            return {
                "isOn": true,
                "speed":"animate-spin-slow"
            }
        case 'medium':
            return {
                "isOn":true,
                "speed":"animate-spin-medium"
            }
        case 'fast':
            return {
                "isOn":true,
                "speed":"animate-spin-fast"
            }
        default:
            return state
    }
};