import { readFiles } from './index';
import { readFile } from 'utils/read-file';
import { AppDispatch, RootState } from 'types/store';
import { UserFile } from 'types/files';

jest.mock('utils/read-file');

describe('readFiles thunk', () => {
  let dispatch: AppDispatch & jest.Mock;
  let getState: jest.Mock<RootState>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  it('should read two files', async () => {
    const userFiles: UserFile[] = [{
      id: '1',
      name: 'index.js',
      code: 'console.log("hello world")',
      extension: 'js',
      relativePath: 'src/index.js',
    }, {
      id: '2',
      name: 'index.js',
      code: 'console.log("hello world1")',
      extension: 'js',
      relativePath: 'src/index.js',
    }]
    // @ts-ignore
    readFile.mockReturnValueOnce(Promise.resolve(userFiles[0]));
    // @ts-ignore
    readFile.mockReturnValueOnce(Promise.resolve(userFiles[1]));
    const fileZero = new File([], 'fileZero');
    const fileOne = new File([], 'fileOne');
    const tempIterator = function* test() {
      yield fileZero;
      yield fileOne;
    };
    const fileList = {
      0: fileZero,
      1: fileOne,
      length: 2,
      item(index: number) {
        return (fileList as FileList)[index]
      },
      [Symbol.iterator]: tempIterator,
    };
    await readFiles(fileList)(dispatch, getState, undefined);
    expect(dispatch).toHaveBeenCalledTimes(3);
    const [[firstAction], [secondAction], [thirdAction]] = dispatch.mock.calls
    expect(firstAction.type).toEqual('files/readFiles/pending');
    expect(secondAction).toEqual({ type: 'files/setFiles', payload: userFiles });
    expect(thirdAction.type).toEqual('files/readFiles/fulfilled');
  })
})
