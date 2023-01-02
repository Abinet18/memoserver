import { ExecOptionsWithStringEncoding } from "child_process";
import { createContext, useContext, useReducer } from "react";
import { ActivityType, AttachementType, MemoType } from "../types";
import { initialState, memoReducer } from "./reducer";

export const MemoContext = createContext(initialState);

export const MemoProvider = ({ children }:{children:any}) => {
    const [state, dispatch] = useReducer(memoReducer, initialState);

    const addMemo = (memo:MemoType)=> {
      dispatch({
        type:"ADD_MEMO",
        payload: memo
    });
  }

    const addActivity = (activity:ActivityType)=> {
      dispatch({
        type:"ADD_ACTIVITY",
        payload: activity
    });
  }

    const addAttachement = (attachement:AttachementType)=> {
      dispatch({
        type:"ADD_ATTACHEMENT",
        payload: attachement
    });
  }

    const removeActivity = (activity:ActivityType)=> {
      dispatch({
        type:"REMOVE_ACTIVITY",
        payload: activity
    });
    }

    const removeAttachement = (attachement:{pid:string,id:string})=> {
      dispatch({
        type:"REMOVE_ATTACHEMENT",
        payload: attachement
    });
    }

    const updateActivity= (activity:{id:string,title:string,detail:string})=> {
      dispatch({
        type:"UPDATE_ACTIVITY",
        payload: activity
    });
    }
  
   state.addMemo = addMemo;
   state.addActivity = addActivity;
   state.addAttachement = addAttachement;
   state.removeActivity = removeActivity;
   state.removeAttachement=removeAttachement;
   state.updateActivity = updateActivity;
      //@ts-ignore
    return <MemoContext.Provider value={state}>{children}</MemoContext.Provider>;
  }


  const useMemos = () => {
    const context = useContext(MemoContext)
  
    if (context === undefined) {
      throw new Error("useMemos must be used within MemosContext")
    }
  
    return context
  }
  
  export default useMemos;