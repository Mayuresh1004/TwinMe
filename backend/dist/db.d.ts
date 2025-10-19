import mongoose from "mongoose";
declare const User: mongoose.Model<{
    username: string;
    email: string;
    password: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    password: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    username: string;
    email: string;
    password: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    password: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    username: string;
    email: string;
    password: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const Tags: mongoose.Model<{
    title: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    title: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    title: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { User, Tags };
//# sourceMappingURL=db.d.ts.map