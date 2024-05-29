// "use client";

import { getAllPostsData } from "@/services/getPostData";

export default async function Page() {
  const getData: any = await getAllPostsData();

  return (
    <div className="w-2/5	">
      <h2>Left</h2>
      {getData.map((data: any, i: number) => {
        return <p key={i}>{data.title}</p>;
      })}
    </div>
  );
}
