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

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getSInglePostData = async (id: number): Promise<Post | null> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const customWait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
