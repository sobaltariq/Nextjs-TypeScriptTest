import { getSinglePostData } from "@/services/getPostData";
import React from "react";

export default async function Page() {
  const getPostData: any = await getSinglePostData(1);

  return (
    <div className="w-2/5	">
      <h2>Right</h2>
      <p>{getPostData.title}</p>
    </div>
  );
}
