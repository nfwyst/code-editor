import { removeActiveFile, setEditorActiveFile } from 'store/slices/files';
import { AppDispatch, RootState } from 'types/store';

export const closeFile = (fileToCloseId: string) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { files: { activeFilesIds, editorActiveFileId } } = getState();
    const activeFilesLength = activeFilesIds.length;

    if (activeFilesLength === 1) {
      dispatch(setEditorActiveFile(null));
    } else if(activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
      const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);
      dispatch(setEditorActiveFile(newActiveFileId));
    }

    dispatch(removeActiveFile(fileToCloseId));
  }
}

function getNewActiveFileId(activeFilesIds: string[], activeFilesLength: number, fileToCloseId: string) {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileToCloseId);
  const newActiveFileIdIndex = fileToBeRemovedIndex === activeFilesLength - 1 ? fileToBeRemovedIndex - 1 : fileToBeRemovedIndex + 1;
  const newActiveFileId = activeFilesIds[newActiveFileIdIndex];
  return newActiveFileId;
}
