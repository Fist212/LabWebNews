import { headers } from "next/headers";

export interface NewRequest {
    title: string;
    author: string;
    content: string;
}

export const getAllNews = async () => {
    const response = await fetch("https://localhost:7057/News");

    return response.json();
};

export const createNew = async (newRequest: NewRequest) => {
    await fetch("https://localhost:7057/News", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newRequest),
    });
};

export const updateNew = async (id: string, newRequest: NewRequest) => {
    await fetch(`https://localhost:7057/News/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newRequest),
    });
};

export const deleteNew = async (id: string) => {
    await fetch(`https://localhost:7057/News/${id}`, {
        method: "DELETE",
    });
};