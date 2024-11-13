// import React from 'react'
// import Login from '../../components/login'

// const page = () => {
//   return (
//     <div>
//         <Login/>
//     </div>
//   )
// }

// export default page
// app/login/page.tsx
"use client";

import { auth, provider } from "@/lib/firebase"
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const loginWithGoogle = () => {
    signInWithRedirect(auth, provider).catch((error) => {
      console.error("Googleログインエラー:", error);
      alert("ログインに失敗しました。もう一度お試しください。");
    });
  };

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          setIsAuth(true);
          // 認証成功後に遷移させたいページにリダイレクト
          router.push("/"); // 例: ダッシュボードページ
        }
      } catch (error) {
        console.error("リダイレクト後のエラー:", error);
      }
    };

    handleRedirect();
  }, [auth, router]);

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
}