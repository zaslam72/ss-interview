// This should be set in environment variables
const BASE_URL = "http://localhost:8000/api/";

export const get = async (path: string) => {
  return await (await fetch(`${BASE_URL}${path}`)).json();
};

export const post = async (path: string, body: Record<string, any>) => {
  return await (
    await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  ).json();
};

export const put = async (path: string, body: Record<string, any>) => {
  return await (
    await fetch(`${BASE_URL}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
  ).json();
};

export const destroy = async (path: string) => {
  return await (
    await fetch(`${BASE_URL}${path}`, {
      method: "DELETE",
    })
  ).json();
};
