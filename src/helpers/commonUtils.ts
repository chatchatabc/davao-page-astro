import type { ObjectInterface } from "./commonInterfaces";
import data_files from "../../data/files.json";

export const getItemFiles = (items: ObjectInterface[]) => {
  return items.map((item: ObjectInterface) => {
    item.files = [...data_files.data].filter(
      (file: ObjectInterface) => file.parent === item.slug
    );
    return item;
  });
};

export const fixUrl = (badUrl: string) => {
  return badUrl.replace(/([^:]\/)\/+/g, "$1");
};
