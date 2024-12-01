// 全てこのページでレンダリングされる
// 共通のHTML文を作る

import { AnswerProvider } from "./context/AnswerContext";
import "@/styles/globals.css";
import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: "1人暮らしシュミレーション",
  description: "1人暮らしに必要な1か月の費用をシュミレーションすることができます",
  icon: '@/public/images/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>
        <AnswerProvider>{children}</AnswerProvider>
      </body>
    </html>
  );
}
