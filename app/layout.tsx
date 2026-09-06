import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '我的工作台 · 个人作品集',
  description: '一点经历，一些作品，和持续生长的想法。欢迎来到我的洞洞板工作台。',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
