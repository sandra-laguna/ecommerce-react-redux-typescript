const addItem: any = [];

const addItems = (state = addItem, action: any) => {
    switch (action.type) {
        case "ADDITEM" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELITEM" :
            return state = state.filter((x: any)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addItems;