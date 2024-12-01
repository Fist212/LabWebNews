import Card from "antd/es/card/Card";
import { CardTitle } from "./Card";
import Button from "antd/es/button";

interface Props {
  news: New[];
  handleDelete: (id: string) => void;
  handleOpen: (news: New) => void;
}

export const News = ({ news, handleDelete, handleOpen }: Props) => {
  return (
    <div className="cards">
      {news.map((news: New) => (
        <Card
          key={news.id}
          title={<CardTitle title={news.title} author={news.author} />}
          bordered={false}
        >
          <p>{news.content}</p>
          <div className="cardButtons">
            <Button onClick={() => handleOpen(news)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(news.id)}
              danger
              style={{ flex: 1 }}
            >
              Удалить
            </Button>
          </div>
        </Card>
      ))}

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
};
