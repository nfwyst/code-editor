import { createAsyncThunk } from "@reduxjs/toolkit";

import { setFiles } from "store/slices/files";
import { UserFile } from "types/files";
import { readFile } from "utils/read-file";

export const readFiles = createAsyncThunk('files/readFiles', async (files: FileList, { dispatch }) => {
  const promises = Array.from(files).map<Promise<UserFile>>(file => readFile(file))
  const userFiles: UserFile[] = await Promise.all(promises);
  dispatch(setFiles(userFiles));
})
