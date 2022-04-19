import { styled } from '@mui/material/styles';

import Layout from "components/common/layout"
import FileViwer from 'components/code-editor/file-viwer';
import CodeEditorComponent from 'components/code-editor';

const CodeEditorContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  // @ts-ignore
  backgroundColor: theme.background,
}))

const FileViwerContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '300px',
  overflow: 'auto',
  borderRight: '1px dashed black',
}))

const CodeEditorComponentContainer = styled('div')(({ theme }) => ({
  flex: 3,
  height: '100%',
}));

const CodeEditor = () => {
  return (
    <Layout>
      <CodeEditorContainer>
        <FileViwerContainer>
          <FileViwer />
        </FileViwerContainer>
        <CodeEditorComponentContainer>
          <CodeEditorComponent />
        </CodeEditorComponentContainer>
      </CodeEditorContainer>
    </Layout>
  )
}

export default CodeEditor
