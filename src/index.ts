import {Life} from './type.ts'

export const getGOLBoard = (boardPositions: Life[]) => {
    
    const result = {};
     for (const item of boardPositions){
        if(!result[item.x]){
            const set_ = new Set()
            set_.add(item.y)
            result[item.x] = set_;
        }
        else {
            result[item.x].add(item.y)
        }
     }
    return result;
}


export const getNeighbors = (mapOfLife) => {

    let newState = {}
    for(const item of mapOfLife){

        newState[item.x] = item[item.x].lenght;
    }
    return mapOfLife;
}

