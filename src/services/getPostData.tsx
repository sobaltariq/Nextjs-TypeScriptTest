import { resolve } from "path";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getAllPostsData = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    await customWait(1000);

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getSinglePostData = async (id: number): Promise<Post | null> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    await customWait(500);
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const customWait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
