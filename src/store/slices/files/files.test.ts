import { UserFile } from 'types/files';

import { initialState, setFiles, addActiveFile, removeActiveFile, setEditorActiveFile, updateFileCode, FilesState, filesReducer } from './index';

describe('files slice', () => {
  it('should set user files when action is setFiles', () => {
    const userFiles: UserFile[] = [{
      id: '1',
      name: 'index.js',
      relativePath: 'src/index.js',
      code: 'console.log("Hello World!")',
      extension: 'js',
    }, {
      id: '2',
      name: 'main.js',
      relativePath: 'src/main.js',
      code: 'console.log("Hello Main!")',
      extension: 'js',
    }]
    const expectedState: FilesState = {
      ...initialState,
      userFiles,
      activeFilesIds: [],
    }
    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  })

  it('should add a new file id when action is addActiveFile', () => {
    const expectedState: FilesState = {
      ...initialState,
      activeFilesIds: ['1'],
    }
    expect(filesReducer(initialState, addActiveFile('1'))).toEqual(expectedState);
  })

  it('should remove a file id when action is removeActiveFile', () => {
    const state: FilesState = {
      ...initialState,
      activeFilesIds: ['1', '2'],
    }
    const expectedState: FilesState = {
      ...initialState,
      activeFilesIds: ['2'],
    }
    expect(filesReducer(state, removeActiveFile('1'))).toEqual(expectedState);
  })

  it("should set the editor's active file id when action is setEditorActiveFile", () => {
    const expectedState: FilesState = {
      ...initialState,
      editorActiveFileId: '1',
    }
    expect(filesReducer(initialState, setEditorActiveFile('1'))).toEqual(expectedState);
  })

  it("should set the editor's active file id to be null when action is setEditorActiveFile", () => {
    const expectedState: FilesState = {
      ...initialState,
      editorActiveFileId: null,
    }
    expect(filesReducer(initialState, setEditorActiveFile(null))).toEqual(expectedState);
  })

  it('should update the code of a file when action is updateFileCode', () => {
    const state = {
      ...initialState,
      userFiles: [{
        id: '1',
        name: 'haha',
        relativePath: 'src/index.js',
        code: 'console.log("haha")',
        extension: 'js',
      }]
    }
    const expectedState: FilesState = {
      ...initialState,
      userFiles: [{
        id: '1',
        name: 'haha',
        relativePath: 'src/index.js',
        code: 'console.log("yes")',
        extension: 'js',
      }]
    }
    expect(filesReducer(state, updateFileCode({ fileId: '1', newCode: 'console.log("yes")' }))).toEqual(expectedState);
  })

  it('should not update the state when the file is not found', () => {
    const state = {
      ...initialState,
      userFiles: [{
        id: '1',
        name: 'haha',
        relativePath: 'src/index.js',
        code: 'console.log("haha")',
        extension: 'js',
      }]
    }
    expect(filesReducer(state, updateFileCode({ fileId: '2', newCode: 'console.log("yes")' }))).toEqual(state);
  })
})
