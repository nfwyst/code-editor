import { TreeViewNode, UserFile } from "types/files"
import { RootState } from "types/store"

import selectTreeViewData from "./index"

it('should convert an array of user file to the tree view data structure', () => {
  const userFiles: UserFile[] = [
    {
      id: '1',
      name: 'index.jsx',
      relativePath: 'test/subfolder/another-subfolder/index.jsx',
      extension: 'jsx',
      code: 'hahaha',
    },
    {
      id: '2',
      name: 'index2.js',
      relativePath: 'test/subfolder/index2.js',
      extension: 'js',
      code: 'here is index2',
    },
    {
      id: '3',
      name: 'index3.js',
      relativePath: 'test/subfolder2/index3.js',
      extension: 'js',
      code: 'hi here is index3',
    },
    {
      id: '4',
      name: 'index4.ts',
      relativePath: 'test/subfolder3/another-subfolder/index4.ts',
      extension: 'ts',
      code: "hi baby"
    }
  ]
  const expectedResult: TreeViewNode = {
    id: expect.any(String),
    name: 'test',
    children: [{
      id: expect.any(String),
      name: 'subfolder',
      children: [{
        id: expect.any(String),
        name: 'another-subfolder',
        children: [{
          id: '1',
          name: 'index.jsx',
          extension: 'jsx',
        }]
      }, {
        id: '2',
        name: 'index2.js',
        extension: 'js',
      }]
    }, {
      id: expect.any(String),
      name: 'subfolder2',
      children: [{
        id: '3',
        name: 'index3.js',
        extension: 'js',
      }]
    }, {
      id: expect.any(String),
      name: 'subfolder3',
      children: [{
        id: expect.any(String),
        name: 'another-subfolder',
        children: [{
          id: '4',
          name: 'index4.ts',
          extension: 'ts'
        }]
      }]
    }],
  }
  const state = {
    files: {
      userFiles,
    }
  }
  const result = selectTreeViewData(state as RootState);
  expect(result).toEqual(expectedResult);
})
