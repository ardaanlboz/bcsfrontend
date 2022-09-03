export const INCREASE_BY_AMOUNT_TUTOR_POINTS = "INCREASE_BY_AMOUNT_TUTOR_POINTS";
export const DESCREASE_BY_AMOUNT_TUTOR_POINTS = "DESCREASE_BY_AMOUNT_TUTOR_POINTS"
export const INCREASE_TUTOR_POINTS = "INCREASE_TUTOR_POINTS"
export const DECREASE_TUTOR_POINTS = "DECREASE_TUTOR_POINTS"


export function increament(tutorPoints:any){
    return {
        type : INCREASE_TUTOR_POINTS,
        payload: tutorPoints
    }
}

export function decrement(tutorPoints:any){
    return {
        type : DECREASE_TUTOR_POINTS,
        payload: tutorPoints
    }
}

export function incrementByAmount(tutorPoints:any){
    return {
        type : INCREASE_BY_AMOUNT_TUTOR_POINTS,
        payload: tutorPoints
    }
}

export function decrementByAmount(tutorPoints:any){
    return {
        type : DESCREASE_BY_AMOUNT_TUTOR_POINTS,
        payload: tutorPoints
    }
}