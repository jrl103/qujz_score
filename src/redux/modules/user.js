// user 이름을 넣자!
// 이름을 바꿔주자!

const SET_NAME = "use/SET_NAME"

export const setName = (name) => {
    return {type:SET_NAME, name};
}

const initialState = {
    user_name: "",
}

export default function reducer(state = initialState, action={}){
    switch(action.type){
        case "user/SET_NAME":
            return state
    }

    default:
        return state;
}