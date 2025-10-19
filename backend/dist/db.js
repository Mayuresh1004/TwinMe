import mongoose from "mongoose";
import { hash } from "zod";
mongoose.connect('mongodb+srv://Joyboy:Joyboy@cluster0.jsccgwm.mongodb.net/twinme');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);
const tagsSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
});
const Tags = mongoose.model('Tags', tagsSchema);
const contentTypes = ['image', 'video', 'article', 'audio'];
const contentSchema = new mongoose.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
const Content = mongoose.model('Content', contentSchema);
const linkSchema = new mongoose.Schema({
    hash: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
const Link = mongoose.model('Link', linkSchema);
export { User, Tags, Content, Link };
//# sourceMappingURL=db.js.map