export const INCREASE_BY_AMOUNT_KARMA = "INCREASE_BY_AMOUNT_KARMA"
export const DESCREASE_BY_AMOUNT_KARMA = "DESCREASE_BY_AMOUNT_KARMA"
export const INCREASE_KARMA = "INCREASE_KARMA"
export const DECREASE_KARMA = "DECREASE_KARMA"


export function increament(karmaPoints:any){
    return {
        type : INCREASE_KARMA,
        payload: karmaPoints
    }
}

export function decrement(karmaPoints:any){
    return {
        type : DECREASE_KARMA,
        payload: karmaPoints
    }
}

export function incrementByAmount(karmaPoints:any){
    return {
        type : INCREASE_BY_AMOUNT_KARMA,
        payload: karmaPoints
    }
}

export function decrementByAmount(karmaPoints:any){
    return {
        type : DESCREASE_BY_AMOUNT_KARMA,
        payload: karmaPoints
    }
}