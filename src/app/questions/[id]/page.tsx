import React from 'react'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function Page ({ params }: PageProps)  {
    const { id } = await params;  // `await`で非同期の解決
    console.log({id});
    return (
        <div>質問: {id}</div>
    );
}
