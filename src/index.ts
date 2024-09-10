import {Life} from './type.ts'

export const getGOLBoard = (boardPositions: Life[]) => {
    
    const result = {};
     for (const item of boardPositions){
        if(result[item.x]){
            result[item.x] = item.y
        }
     }
    return result;
}


