import { makeLocalRequest } from "./requests";

export const handleFormSubmit = async (event: any, path: string) => {
  event.preventDefault();
  if (event.target) {
    const formData = new FormData(event.target);
    const data: any = {};
    formData.forEach((value, key) => (data[key] = value));
    const body = JSON.stringify(data);
    makeLocalRequest(path, "POST", body);
  }
};
