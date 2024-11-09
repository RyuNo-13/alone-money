// 'use client'
import React from "react";
import { useRouter } from "next/router";

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(await params.id);
  // const { id } = await params;
  // console.log({id});

  return (
    <div>
  <div>質問: {id}</div>
  <button>次の質問へ</button>
  </div>
  );
};

export default page;
