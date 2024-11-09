import React from 'react'

export default async function Page ({ params }: { params: { id: string } })  {
    const { id } = await params;  // `await`で非同期の解決
    console.log(id);
    return (
        <div>質問: {id}</div>
    );
}
