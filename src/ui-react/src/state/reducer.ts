import { ActivityType, AttachementType, MemoType } from "../types";

type State = {
    memoIds:string[];
    memos:{[key:string]:MemoType},
    activities:{[key:string]:ActivityType},
    attachements:{[key:string]:AttachementType},
    addMemo?:(memo:MemoType)=>void,
    addActivity?:(activity:ActivityType)=>void,
    addAttachement?:(attachement:AttachementType)=>void,
    removeActivity?:(activity:ActivityType)=>void
    removeAttachement?:(attachement:any)=>void
    updateActivity?:(activity:any)=>void
}
export const initialState:State = {
    memoIds:[],
    memos:{},
    activities:{},
    attachements:{},
  };

export function memoReducer(state:any, action:any) {
    const { type, payload } = action;
    console.log(state);
  
    switch (type) {
      case "ADD_MEMO":
        console.log("ADD_MEMO", payload);
        if(state.memoIds.includes(payload.id)) {
            return state;
        }
        return {
          ...state,
          memoIds: [...state.memoIds,payload.id],
          memos:{...state.memos,[payload.id]:payload}
        };
      case "ADD_ACTIVITY":
        
        if(state.activities[payload.id]) {
            return state;
        }
        console.log("ADD_ACTIVITY", payload);
        let memoUpdated=state.memos[payload.pid];
        if(!((memoUpdated.activityIds??'').split(',').includes(`${payload.id}`))) {
            memoUpdated.activityIds=`${memoUpdated.activityIds??""},${payload.id}`;
        }
       
        return {
          ...state,
          memos: {...state.memos,[payload.pid]:memoUpdated},
          activities:{...state.activities,[payload.id]:payload}
        };
      case "ADD_ATTACHEMENT":
        console.log("ADD Attachement", payload);
        if(state.attachements[payload.id]) {
            return state;
        }
        let activityUpdated=state.activities[payload.pid];
        if(!((activityUpdated.attachmentIds??'').split(',').includes(`${payload.id}`))) {
            activityUpdated.attachmentIds=`${activityUpdated.attachmentIds??""},${payload.id}`;
        }

        return {
          ...state,
          activities:{...state.activities,[payload.pid]:activityUpdated},
          attachements:{...state.attachements,[payload.id]:payload}
        };

        case "REMOVE_ACTIVITY":
        
            if(!state.activities[payload.id]) {
                return state;
            }
            console.log("REMOVE_ACTIVITY", payload);
            let memoToupdate=state.memos[payload.pid];
            let activityIds=(memoToupdate.activityIds??'').split(',');
            if(activityIds.includes(`${payload.id}`)) {
                memoToupdate.activityIds=`${activityIds.filter((id:string)=>id!==`${payload.id}`).join(',')}`;
            }
           let newActivities = {...state.activities};
           delete newActivities[payload.id];
            return {
              ...state,
              memos: {...state.memos,[payload.pid]:memoToupdate},
              activities:newActivities
            };

            case "UPDATE_ACTIVITY":
        
            if(!state.activities[payload.id]) {
                return state;
            }
            console.log("UPDATE_ACTIVITY", payload);
            let activityToUpdate = {...state.activities[payload.id]};
            activityToUpdate.title = payload.title || activityToUpdate.title;
            activityToUpdate.detail = payload.detail || activityToUpdate.detail;
            return {
              ...state,
              activities:{...state.activities,[payload.id]:activityToUpdate}
            };

            case "REMOVE_ATTACHEMENT":
        
                if(!state.attachements[payload.id]) {
                    return state;
                }
                console.log("REMOVE_ATTACHEMENT", payload);
                let activityToupdate=state.activities[payload.pid];
                let attachmentIds=(activityToupdate.attachmentIds??'').split(',');
                if(attachmentIds.includes(`${payload.id}`)) {
                    activityToupdate.attachmentIds=`${attachmentIds.filter((id:string)=>id!==`${payload.id}`).join(',')}`;
                }
               let newAttachements = {...state.attachements};
               delete newAttachements[payload.id];
                return {
                  ...state,
                  activities: {...state.activities,[payload.pid]:activityToupdate},
                  attachements:newAttachements
                };

        default:
            throw new Error(`No case for type ${type} found in memoReducer.`);
        }
    }
  
