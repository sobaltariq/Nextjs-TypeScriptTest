"use client";

import { getAllPostsData } from "@/services/getPostData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getAllPostsData();
        setPosts(getData);
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
      <div className="py-2 px-4">
        <div className="mb-4">
          <h2>Titles</h2>
        </div>
        {isLoading ? (
          <div>Loading Posts...</div>
        ) : (
          <div>
            {posts.length > 0 ? (
              posts.map((data: any) => (
                <div key={data.id}>
                  <Link href={`blogs/${data.id}`}>{data.title}</Link>
                </div>
              ))
            ) : (
              <div>
                <p>No posts found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
