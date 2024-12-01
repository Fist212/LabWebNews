interface Props {
  title: string;
  author: string;
}

export const CardTitle = ({ title, author }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </div>
  );
};
