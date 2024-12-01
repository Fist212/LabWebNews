"use client";

import Button from "antd/es/button";
import { useEffect, useState } from "react";
import {
  createNew,
  deleteNew,
  getAllNews,
  NewRequest,
  updateNew,
} from "../services/news";
import { News } from "../components/News";
import Title from "antd/es/skeleton/Title";
import { CreateUpdateNew, Mode } from "../components/CreateUpdateNew";
import { create } from "domain";

export default function NewsPage() {
  const defaultValues = {
    title: "",
    author: "",
    content: "",
  } as New;
  const [values, setValues] = useState<New>(defaultValues);

  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  const handleCreateNew = async (request: NewRequest) => {
    await createNew(request);

    const news = await getAllNews();
    setNews(news);
  };

  useEffect(() => {
    const getNews = async () => {
      const news = await getAllNews();
      setLoading(false);
      setNews(news);
    };

    getNews();
  }, []);

  const handleUpdateNew = async (id: string, request: NewRequest) => {
    await updateNew(id, request);
    closeModal();

    const news = await getAllNews();
    setNews(news);
  };

  const handleDeleteNew = async (id: string) => {
    await deleteNew(id);
    closeModal();

    const news = await getAllNews();
    setNews(news);
  };

  const openModal = () => {
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);
  };

  const openEditModal = (news: New) => {
    setMode(Mode.Edit);
    setValues(news);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginTop: "30px" }}
        size="large"
        onClick={openModal}
      >
        Создать новость
      </Button>

      <CreateUpdateNew
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateNew}
        handleUpdate={handleUpdateNew}
        handleCancel={closeModal}
      />
      {loading ? (
        <Title>Loading</Title>
      ) : (
        <News
          news={news}
          handleOpen={openEditModal}
          handleDelete={handleDeleteNew}
        />
      )}
    </div>
  );
}
