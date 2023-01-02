import sqlite3 from 'sqlite3';
import { Activity, Attachement, Memo } from "../types/schemaTypes";
import { Sequelize, Op, Model, DataTypes } from "sequelize";

// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: '../db/db.sqlite'
});

const AttachementModel = sequelize.define('Attachement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // pid: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true
    // },
    type: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const ActivityModel = sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
    },
    detail: {
        type: DataTypes.STRING,
    },
    attachmentIds: {
        type: DataTypes.STRING,
    },
});

const MemoModel = sequelize.define('Memo', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.STRING,
    },
    memoDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    activityIds: {
        type: DataTypes.STRING,
    },
    published: {
        type: DataTypes.BOOLEAN,
    }
});

export const syncDb = async () => {
    await AttachementModel.sync();
    await ActivityModel.sync();
    await MemoModel.sync();
}

// let db = new sqlite3.Database('../db/memodb.db', (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     createTables();
//     console.log('Connected to the memo database.');
// });

// function createTables() {
//     db.run(`CREATE TABLE if not exists memos(id INTEGER PRIMARY KEY AUTOINCREMENT ,userId TEXT,momoDate TEXT,activityIds TEXT,published INTEGER )`);
//     db.run(`CREATE TABLE if not exists activities(id INTEGER PRIMARY KEY AUTOINCREMENT ,pid INTEGER,title TEXT,detail TEXT,attachementIds TEXT )`);
//     db.run(`CREATE TABLE if not exists attachements(id INTEGER PRIMARY KEY AUTOINCREMENT ,type TEXT, url TEXT )`);
// }

export const addAttachement = async (attachement: Attachement, pid: string) => {
    const attachementAdded = await AttachementModel.create({ ...attachement, pid });
    await addAttachementToActivity(attachementAdded.get().id, pid);
    return attachementAdded.get();
};
export const addAttachementToActivity = async (atid: string, pid: string) => {
    const activity: Activity | null = await getActivity(pid);
    if (activity) {
        let attachementIds = (activity.attachmentIds ?? '').split(',');
        if (attachementIds.includes(atid)) {
            return;
        }
        else {
            attachementIds.push(atid);
            activity.attachmentIds = attachementIds.join(',');
            updateActivity(activity);
        }
    }
};
export const addActivity = async (activity: Activity, pid: string) => {
    const activityAdded = await ActivityModel.create({ ...activity, pid });
    await addActivityToMemo(activityAdded.get().id, pid);
    return activityAdded.get();
};

export const addMemo = async (memo: Memo) => {
    const memoAdded = await MemoModel.create(memo);
    return memoAdded.get();
};

export const addActivityToMemo = async (acid: string, pid: string) => {
    const memo: Memo | null = await getMemo(pid);
    if (memo) {
        let activityIds = (memo.activityIds ?? '').split(',');
        if (activityIds.includes(acid)) {
            return;
        }
        else {
            activityIds.push(acid);
            memo.activityIds = activityIds.join(',');
            updateMemo(memo);
        }
    }

};

export const getMemo = async (id: string): Promise<Memo | null> => {
    const memo = await MemoModel.findByPk(id);
    return memo?.get();
};
export const getActivity = async (id: string): Promise<Activity | null> => {
    const activity: Activity = (await ActivityModel.findByPk(id))?.get();
    return activity;
};

export const getAttachement = async (id: string): Promise<Attachement | null> => {
    const attachement: Attachement = (await AttachementModel.findByPk(id))?.get();
    return attachement
};

export const getAllMemos = async (): Promise<(Memo | null)[]> => {
    let memos = await MemoModel.findAll();
    return memos.map(m => m.get());
};

export const updateMemo = async (memo: Memo): Promise<(Memo | null)[]> => {
    let memoUpdated = (await MemoModel.upsert(memo))?.[0].get();
    return memoUpdated;
};

export const updateActivity = async (activity: Activity): Promise<(Activity | null)[]> => {
    let activityUpdated = (await ActivityModel.upsert(activity))?.[0].get();
    return activityUpdated;
};

export const removeActivity = async (acid: string, pid: string) => {
    const count = await ActivityModel.destroy({ where: { id: acid } });
    let memo = await getMemo(pid);
    let activityIds = memo?.activityIds.split(',');
    if (memo && activityIds) {
        let index = activityIds?.indexOf(acid);
        if (index) {
            activityIds.splice(index, 1);
            await updateMemo({ ...memo, activityIds: activityIds.join(',') });
        }
    }
    return count;
}

export const removeAttachement = async (atid: string, pid: string) => {
    const count = await AttachementModel.destroy({ where: { id: atid } });
    let activity = await getActivity(pid);
    if (activity) {
        let attachementIds = activity.attachmentIds.split(',');
        let index = attachementIds.indexOf(atid);
        if (index) {
            attachementIds.splice(index, 1);
            await updateActivity({ ...activity, attachmentIds: attachementIds.join(',') });
        }
    }
    return count;
}




