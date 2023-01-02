import e, { Router } from "express";
import multer from 'multer';
import {
  addMemo,
  addAttachement,
  addActivity,
  getMemo,
  getActivity,
  getAttachement,
  getAllMemos,
  updateActivity,
  removeActivity,
  removeAttachement,
} from "../models/sqliteDb";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

export const upload = multer({ storage: storage })

const routes = Router();

routes.get("/", async (req: any, res: { json: (arg0: any) => void }) => {
  const memos = await getAllMemos();
  res.json(memos);
});

routes.get("/:id", async (req, res) => {
  const memo = await getMemo(req.params.id);
  res.json(memo);
});

routes.get("/activity/:id", async (req, res) => {
  const activity = await getActivity(req.params.id);
  res.json(activity);
});

routes.get("/attachement/:id", async (req, res) => {
  const attachement = await getAttachement(req.params.id);
  res.json(attachement);
});

routes.post("/addMemo", async (req, res) => {
  const memo = req.body;
  if (!memo.memoDate) {
    memo.memoDate = new Date();
  }
  const memoAdded = await addMemo(memo);
  res.json(memoAdded);
});

routes.post("/addActivity", async (req, res) => {
  const activityAdded = await addActivity(req.body, req.body.pid);
  res.json(activityAdded);
});

routes.post("/addAttachement", upload.single('file'),async (req, res) => {
    const attachementAdded =  await addAttachement({
        type:'image',
        url:`http://localhost:5001/${req.file?.originalname}`
    },req.body.pid);
  res.json(attachementAdded);
});

routes.post("/updateActivity", async (req, res) => {
  const activityUpdated = await updateActivity(req.body);
  res.json(activityUpdated);
});

routes.post("/removeActivity", async (req, res) => {
  const acid = await removeActivity(req.body.id, req.body.pid);
  res.json(acid);
});

routes.post("/removeAttachement", async (req, res) => {
  const atid = await removeAttachement(req.body.id, req.body.pid);
  res.json(atid);
});

export default routes;
