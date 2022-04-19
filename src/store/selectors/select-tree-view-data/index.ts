import { createSelector } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';

import { TreeViewNode, UserFile } from 'types/files';

import { RootState } from 'types/store';

const selectTreeViewData = (userFiles: UserFile[]): TreeViewNode => {
  const result: TreeViewNode = { id: '', name: '' };

  for (let index = 0; index < userFiles.length; index++) {
    const userFile = userFiles[index];
    const { name, relativePath, id, extension } = userFile;
    const pathes = relativePath.split('/');
    let j = 0;
    let currentLevel: TreeViewNode | TreeViewNode[] = result;

    while (pathes[j] !== name) {
      const path = pathes[j];
      if (!Array.isArray(currentLevel)) {
        if (!currentLevel.id) {
          const children: TreeViewNode[] = [];
          Object.assign(currentLevel, {
            id: uuidV4(),
            name: path,
            children,
          })
          currentLevel = children;
          j += 1;
        } else if(currentLevel.children) {
          currentLevel = currentLevel.children;
          j += 1;
        }
      } else {
        const subfolder: TreeViewNode | undefined = currentLevel.find(folder => folder.name === path);
        if (subfolder?.children) {
          currentLevel = subfolder.children;
          j += 1;
        } else {
          currentLevel.push({ id: '', name: '' });
          currentLevel = currentLevel[currentLevel.length - 1];
        }
      }
    }
    const fileData = { id, name, extension };
    (currentLevel as TreeViewNode[]).push(fileData)
  }

  return result;
}

export default createSelector((state: RootState) => state.files.userFiles, selectTreeViewData)
