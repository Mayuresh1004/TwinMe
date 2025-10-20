import express from 'express';
import { Content, Link, User } from './db.js';
import {z} from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userMiddleware } from './middleware.js';
import { random } from './utils.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
const userSchema = z.object({
  username: z.string().min(3).max(10, { message: "Username must be between 3 and 10 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6).max(20).refine(
  val =>
    /[A-Z]/.test(val) &&         // at least one uppercase
    /[a-z]/.test(val) &&         // at least one lowercase
    /[0-9]/.test(val) &&         // at least one number
    /[^A-Za-z0-9]/.test(val),    // at least one special character
  {
    error: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  }
)
});

app.use(express.json());


app.post('/api/v1/signup', async (req, res) => {
    const parseResult = userSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(411).json({ errors: parseResult.error?.issues });
    }
    const { username, email,  password } = parseResult.data;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const UserExists = await User.findOne({username})
        if (UserExists) {
            return  res.status(403).json({ error: "Username already exists" });
        }
    
        await User.create({ username, email, password: hashedPassword });
        return res.status(200).json({ message: "User created successfully" });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
    
});

app.post('/api/v1/signin', async (req, res) => {

    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(403).json({ error: "Wrong username or password" });
        }  
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ error: "Wrong username or password" });
        }

        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET as string, );
        return res.status(200).json({ token });


    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

const contentSchema = z.object({
  link: z.string().url({ message: "Invalid URL" }),
  type: z.enum(['twitter', 'youtube']),
  title: z.string().min(1, { message: "Title cannot be empty" }),
  tags: z.array(z.string()),
});

app.post('/api/v1/content',userMiddleware, async (req, res) => {

    const parseResult = contentSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(411).json({ errors: parseResult.error?.issues });
    }
    const { link, type, title, tags } = parseResult.data;
    try {
        
            await Content.create({
                link,
                type,
                title,
                // @ts-ignore
                userId: req.userId,
                tags: tags
            })
            return res.status(200).json({ message: "Content added successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }

});


app.get('/api/v1/content',userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await Content.find({userId: userId}).populate("userId", "username");
    return res.status(200).json({content})

});


app.delete('/api/v1/content',userMiddleware, async (req, res) => {

    const { contentId } = req.body;

    await Content.deleteMany({ _id: contentId, 
        // @ts-ignore
        userId: req.userId})

    return res.status(200).json({ message: "Content deleted successfully" });
});

const linkSchema = z.object({
    share: z.boolean(),
});

app.post('/api/v1/brain/share',userMiddleware, async (req, res) => {

    const parseResult = linkSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(411).json({ errors: parseResult.error?.issues });
    }

    const { share } = parseResult.data;
    // @ts-ignore
    const userId = req.userId;
    const hash = random(10);
    try {
        if (share) {
            const existingLink = await Link.findOne({userId})
            if (existingLink) {
                return res.status(200).json({ message: `link: http://localhost:3000/api/v1/brain/${existingLink.hash}` });
            }
            await Link.create({
                hash: hash,
                userId: userId,
        })}
        else{
            await Link.deleteMany({ userId })
            return res.status(200).json({ message: "Link Removed" });
        }
        return res.status(200).json({ message: ` http://localhost:3000/api/v1/brain/${hash}` });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }

});


app.get('/api/v1/brain/:shareLink', async (req, res) => {
   
    const hash = req.params.shareLink;

    try {
        const link = await Link.findOne({hash:hash})
    
        if (!link) {
            return res.status(411).json({message:"Incorrect Inputs"})
        }
    
        const content = await Content.find({
            // @ts-ignore
            userId: link.userId
        })
    
        const user = await User.findOne({
            // @ts-ignore
            _id: link.userId
        })
    
        return res.status(200).json({ username: user?.username, content,})
    
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
        
    }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
