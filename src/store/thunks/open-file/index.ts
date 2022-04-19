import { addActiveFile, setEditorActiveFile } from "store/slices/files";
import { TreeViewNode } from "types/files";
import { AppDispatch, RootState } from "types/store";

export const openFile = (node: TreeViewNode) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const { id, children } = node;
    if (children) {
      return;
    }
    const { files: { activeFilesIds } } = getState();
    if (!activeFilesIds.includes(id)) {
      dispatch(addActiveFile(id))
    }
    dispatch(setEditorActiveFile(id))
  }
}
