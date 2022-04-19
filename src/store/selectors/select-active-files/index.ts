import { createSelector } from 'reselect';

import { FilesState } from 'store/slices/files';
import { UserFile } from 'types/files';
import { RootState } from 'types/store';

type UserFileMap = Record<string, UserFile>;

function selectActiveFiles(files: FilesState) {
  const { userFiles, activeFilesIds } = files;
  const userFileMap = userFiles.reduce((acc: UserFileMap, file: UserFile) => {
    acc[file.id] = file;
    return acc;
  }, {})
  return activeFilesIds.map((id: string) => userFileMap[id]);
}

export default createSelector((state: RootState) => state.files, selectActiveFiles);
