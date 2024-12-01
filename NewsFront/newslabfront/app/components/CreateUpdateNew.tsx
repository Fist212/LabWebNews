import Modal from "antd/es/modal/Modal";
import { NewRequest } from "../services/news";
import { title } from "process";
import { Input } from "antd";
import { SetStateAction, useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
  mode: Mode;
  values: New;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: NewRequest) => void;
  handleUpdate: (id: string, request: NewRequest) => void;
}

export enum Mode {
  Create,
  Edit,
}

export const CreateUpdateNew = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setTitle(values.title);
    setAuthor(values.author);
    setContent(values.content);
  }, [values]);

  const handleOnOk = async () => {
    const newRequest = { title, author, content };

    mode == Mode.Create
      ? handleCreate(newRequest)
      : handleUpdate(values.id, newRequest);
  };

  return (
    <Modal
      title={
        mode === Mode.Create ? "Добавить новость" : "Редактировать новость"
      }
      open={isModalOpen}
      cancelText={"Отмена"}
      onOk={handleOnOk}
      onCancel={handleCancel}
    >
      <div className="newModal">
        <Input
          value={title}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setTitle(e.target.value)
          }
          style={{ marginBottom: "16px" }}
          placeholder="Название"
        />
        <Input
          value={author}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setAuthor(e.target.value)
          }
          style={{ marginBottom: "16px" }}
          placeholder="Автор"
        />
        <TextArea
          value={content}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setContent(e.target.value)
          }
          style={{ minHeight: "60px" }}
          placeholder="Информация"
        />
      </div>
    </Modal>
  );
};
