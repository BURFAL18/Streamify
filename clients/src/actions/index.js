import {SIGN_IN,SIGN_OUT} from './types';

export const signIn = (UID) =>{
    return {
        type: SIGN_IN,
        payload: UID
    };
};

export const signOut =()=>{
    return{
        type:SIGN_OUT
        
    };
};