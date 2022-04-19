import { v4 as uuidV4 } from 'uuid';

import { UserFile } from 'types/files';

export function readFile(file: Partial<File> & Blob & { webkitRelativePath?: string }): Promise<UserFile> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const { name = '', webkitRelativePath } = file;
      const id = uuidV4();
      const code = typeof reader.result === 'string' ? reader.result : '';
      const splittedName = name.split('.');
      const extension = splittedName.length > 1 ? splittedName[splittedName.length - 1] : '';
      const userFile: UserFile = {
        id,
        name,
        relativePath: webkitRelativePath || '',
        code,
        extension
      }
      resolve(userFile);
    };
    reader.onerror = reject;
  });
}
