export type AttachementType = {
    id: string;
    pid:string;
    type: string;
    url: string;
};
export type ActivityType = {
    id: string;
    pid: string;
    title?: string;
    detail?: string;
    attachmentIds: string;
};
export type MemoType = {
    id: string;
    userId: string;
    memoDate: Date;
    activityIds: string;
    published: boolean;
};