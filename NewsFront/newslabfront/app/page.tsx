import Image from "next/image";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <h1>Добро пожаловать!</h1>

      <p className="info">
        Для написания новости перейдите на вкладку "Новости"
      </p>

      <div
        style={{ textAlign: "center", right: 20, top: 20, marginTop: "24px" }}
      >
        <img src="tree.png" alt="Ёлка" width={400} height={600} />
      </div>

      <footer
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          textAlign: "center",
          fontSize: "14px",
          color: "gray",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px 0",
        }}
      >
        <p>Куфлик Григорий © 2024</p>
      </footer>
    </div>
  );
}
