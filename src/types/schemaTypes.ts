export type Attachement = {
    id?: string;
    type: string;
    url: string;
};
export type Activity = {
    id: string;
    pid: string;
    title?: string;
    detail?: string;
    attachmentIds: string;
};
export type Memo = {
    id: string;
    userId: string;
    memoDate: Date;
    activityIds: string;
    published: boolean;
};
