import { Activity, Attachement, Memo } from "../types/schemaTypes";

const attachements: { [key: string]: Attachement } = {};
const activites: { [key: string]: Activity } = {};
const memos: { [key: string]: Memo } = {};
let attachementId = 1,
    activityId = 1,
    memoId = 1;

export const addAttachement = (attachement: Attachement, pid: string) => {
    attachement.id = `${attachementId++}`;
    attachements[attachement.id] = attachement;
    addAttachementToActivity(attachement.id, pid);
    return attachement;
};
export const addAttachementToActivity = (atid: string, pid: string) => {
    activites[pid].attachmentIds.push(atid);
};
export const addActivity = (activity: Activity, pid: string) => {
    activity.id = `${activityId++}`;
    activites[activity.id] = activity;
    activity.attachmentIds = [];
    addActivityToMemo(activity.id, pid);
    return activity;
};

export const addMemo = (memo: Memo) => {
    memo.id = `${memoId++}`;
    memo.published = false;
    memo.memoDate = new Date();
    memo.activityIds = [];
    memos[memo.id] = memo;
    return memo;
};

export const addActivityToMemo = (acid: string, pid: string) => {
    memos[pid].activityIds.push(acid);
};

export const getMemo = (id: string): Memo | null => {
    return memos[id];
};
export const getActivity = (id: string): Activity | null => {
    return activites[id];
};
export const getAttachement = (id: string): Attachement | null => {
    return attachements[id];
};

export const getAllMemos = () => {
    return memos;
};

export const updateActivity = (activity: Activity) => {
    activites[activity.id] = { ...activites[activity.id], ...activity };
    return activites[activity.id];
}

export const removeActivity = (acid: string, pid: string) => {
    delete activites[acid];
    let activityIds = memos[pid].activityIds.filter(id => id !== acid);
    memos[pid].activityIds = activityIds;
    return acid;
}

export const removeAttachement = (atid: string, pid: string) => {
    delete attachements[atid];
    let attachementIds = activites[pid].attachmentIds.filter(id => id !== atid);
    activites[pid].attachmentIds = attachementIds;
    return atid;
}