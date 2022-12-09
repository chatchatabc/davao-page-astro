import type { ObjectInterface } from "./commonInterfaces";
import data_files from "../../data/files.json";
import data_links from "../../data/links.json";

export const getItemsByParent = (
  parent: string,
  items: ObjectInterface[]
): ObjectInterface[] => {
  const newList = [...items];
  return newList.filter((item: ObjectInterface) => {
    if (item.parent === parent) {
      item.files = [...data_files.data]
        .filter((file: ObjectInterface) => {
          if (file.parent === item.slug) {
            return file;
          }
        })
        .sort((a, b) => a.order - b.order);
      item.links = [...data_links.data].filter(
        (link: ObjectInterface) => link.parent === item.slug
      );
      return item;
    }
  });
};

export const getItemsBySubCatalog = (
  sub_catalog: string,
  items: ObjectInterface[]
): ObjectInterface[] => {
  const newList = [...items];
  return newList.filter((item: ObjectInterface) => {
    if (item.sub_catalog === sub_catalog) {
      item.files = [...data_files.data]
        .filter((file: ObjectInterface) => {
          if (file.parent === item.slug) {
            return file;
          }
        })
        .sort((a, b) => a.order - b.order);
      item.links = [...data_links.data].filter(
        (link: ObjectInterface) => link.parent === item.slug
      );
      return item;
    }
  });
};

export const getItemsByCatalog = (
  catalog: string,
  items: ObjectInterface[]
): ObjectInterface[] => {
  const newList = [...items];
  return newList.filter((item: ObjectInterface) => {
    if (item.catalog === catalog) {
      item.files = [...data_files.data]
        .filter((file: ObjectInterface) => {
          if (file.parent === item.slug) {
            return file;
          }
        })
        .sort((a, b) => a.order - b.order);
      item.links = [...data_links.data].filter(
        (link: ObjectInterface) => link.parent === item.slug
      );
      return item;
    }
  });
};

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
