"use client";

import { getSInglePostData } from "@/services/getPostData";
import React, { useEffect, useState } from "react";

// export async function generateStaticParams() {
//   const getData: any = await getAllPostsData();
//   console.log("Posts Data", getData);

//   return getData.map((i: any) => ({
//     slug: i.id.toString(),
//   }));
// }

export default function Page({ params }: { params: any }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState();

  console.log(params.slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singlePost: any = await getSInglePostData(params.slug);
        console.log("Single Post: ", singlePost);
        setPostData(singlePost);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading Posts...</div>
      ) : (
        <div className="flex gap-8 flex-col">
          <div className="flex justify-between">
            <span>
              <strong>Id:</strong> {postData?.id}
            </span>
            <span>
              <strong>User Id:</strong> {postData?.userId}
            </span>
          </div>
          <div className="">
            <h2>
              <strong>Title:</strong> {postData?.title}
            </h2>
            <p className="mt-4">{postData?.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
