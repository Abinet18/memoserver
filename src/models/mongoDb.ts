// import { Schema, model, connect, Mongoose } from "mongoose";

// export type Attachement = {
//   type: string;
//   url: string;
// }
// export type Activity = {
//   id: string;
//   title?: string;
//   detail?: string;
//   attachmentIds: string[]
// }
// export type Memo = {
//   _id?: string;
//   id: string;
//   userId: string;
//   memoDate: Date;
//   activities: string[]
// };

// const MemoSchema = new Schema<Memo>({
//   id: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: false,
//   },
//   detail: {
//     type: String,
//     required: true,
//   },
//   attachementIds: {
//     type: [String],
//     required: false,
//   }
// });

// const ActivitySchema = new Schema<Activity>({
//   id: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: Date,
//     required: true,
//   },
//   activites: {
//     type: [String],
//     required: true
//   },
//   userId: {
//     type: String,
//   },
// });

// export const MemoModel = model("Blog", MemoSchema);

// export const addBlog = async (d: Blog) => {
//   // const blog = new BlogModel(d);
//   const blogAdded = await BlogModel.create(d);
//   console.log("After adding blog", blogAdded);
//   return d;
// };

// export const updateBlog = async (d: Blog) => {
//   const updatedBlog = await BlogModel.updateOne({ id: d.id }, { $set: d });
//   return updatedBlog;
// };

// export const deleteBlog = async (d: Blog) => {
//   const deletedBlog = await BlogModel.deleteOne({ id: d.id });
//   return d;
// };

// export const queryBlogs = async (q: string) => {
//   const blogs = await BlogModel.find({
//     $or: [{ blogTitle: { like: q } }, { blogText: { like: q } }],
//   });
// };

// export const getBlogs = async () => {
//   const blogs = await BlogModel.find();
//   return blogs;
// };

// export const getBlog = async (blogId: string) => {
//   const blog = await BlogModel.findOne({ id: blogId });
//   return blog;
// };
