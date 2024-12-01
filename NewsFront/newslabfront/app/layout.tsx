import { Layout, Menu } from "antd";
import "./globals.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  { key: "home", label: <Link href={"/"}>Главная</Link> },
  { key: "news", label: <Link href={"/news"}>Новости</Link> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="logo.png"
                alt="Логотип"
                style={{ height: "64px", marginRight: "20px" }}
              />
              <h2 style={{ color: "white", marginRight: "10px" }}>
                КапибараNews
              </h2>
              <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                style={{ flex: 1, minWidth: 0 }}
              />
            </div>
          </Header>
          <Content style={{ padding: "0 48px" }}>{children}</Content>
        </Layout>
      </body>
    </html>
  );
}
