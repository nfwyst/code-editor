import { TreeViewNode } from "types/files";
import { AppDispatch, RootState } from "types/store";

import { openFile } from "./index";

describe('open file thunk', () => {
  let dispatch: AppDispatch & jest.Mock;
  let getState: jest.Mock<RootState>;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  it('should not open a node if it has chilren', () => {
    const node: TreeViewNode = {
      id: '1',
      name: 'node1',
      children: [{
        id: '2',
        name: 'node2',
      }]
    }
    openFile(node)(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
    expect(getState).not.toHaveBeenCalled();
  })

  it('should open the node if it is not already opened', () => {
    getState.mockReturnValue({
      darkMode: false,
      files: { userFiles: [], activeFilesIds: [], editorActiveFileId: null },
      _persist: {
        rehydrated: true,
        version: 1
      }
    });
    const node: TreeViewNode = { id: '1', name: 'node1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: 'files/addActiveFile', payload: '1'
    }])
  })

  it('should open the node if it is already opened', () => {
    getState.mockReturnValue({
      darkMode: false,
      files: { userFiles: [], activeFilesIds: ['1'], editorActiveFileId: null },
      _persist: {
        rehydrated: true,
        version: 1
      }
    });
    const node: TreeViewNode = { id: '1', name: 'node1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: 'files/setEditorActiveFile', payload: '1'
    }])
  })
})
