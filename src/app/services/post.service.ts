import { Post } from "../models/post.interface";

export async function getPost(): Promise<Post[]> {
    return await (await fetch('../../assets/data.json')).json();
};
