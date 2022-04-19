import { useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { debounce } from 'lodash';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateFileCode } from 'store/slices/files';
import type { UserFile } from 'types/files';
import Loading from 'components/common/loading';

interface Props {
  activeFile: UserFile;
}

const supportedExtensions: Record<string, string> = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  rb: 'ruby',
  java: 'java',
  go: 'go',
  html: 'html',
  php: 'php',
  css: 'css',
  json: 'json',
};

const CustomEditor = ({ activeFile }: Props) => {
  const { code: originalCode, id, extension } = activeFile;
  const [code, setCode] = useState(originalCode);
  const dispath = useAppDispatch();
  const darkMode = useAppSelector(state => state.darkMode);
  const language = supportedExtensions[extension];

  // eslint-disable-next-line
  const debouncedSave = useCallback(debounce((fileId: string, newCode: string) => {
    dispath(updateFileCode({ fileId, newCode }));
  }, 1000),  [])

  const handleChange = (newCode?: string) => {
    setCode(newCode ?? '');
    debouncedSave(id, newCode ?? '');
  };

  return (
    <Editor
      width='100%'
      height="100%"
      language={language}
      theme={darkMode ? 'vs-dark' : 'light'}
      value={code}
      loading={<Loading />}
      onChange={handleChange}
    />
  )
}

export default CustomEditor
