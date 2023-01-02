import Express from "express";
import BodyParser from "body-parser";
import memoRoutes from "./routes/memo";
import cors from "cors";

import express from "express";
import { AttachementType } from "./ui-react/src/types";
import { addAttachement } from "./models/sqliteDb";

const app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());




app.use("/memos", memoRoutes);
app.use(express.static('public'));
// app.post('/addAttachement', upload.single('file'), async function (req, res) {
//     await addAttachement({
//         type:'image',
//         url:`http://localhost:5001/${req.file?.originalname}`
//     }
    
//   });

export default app;
