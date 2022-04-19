import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

import paths from 'routes/paths';

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.commonColors.white,
}))

const CodeEditorButton = () => {
  const navigate = useNavigate();
  const onGoCodeEditor = () => {
    navigate(paths.codeEditor);
  }

  return (
    <CodeEditorStyledButton onClick={onGoCodeEditor}>
      代码编辑器
    </CodeEditorStyledButton>
  )
}

export default CodeEditorButton
