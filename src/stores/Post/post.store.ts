import { atom } from "recoil";
import { ListItemType } from "@/types/List/list.type";

export const ExistingPostDataAtom = atom<ListItemType | null>({
  key: "existingPostDataKey",
  default: null,
});

export const CountOfPostAtom = atom<number>({
  key: "countOfPostKey",
  default: 0,
});