import { styled } from '@mui/material/styles';
import { UserFile } from 'types/files';

import CustomEditor from '../custom-editor';

interface Props {
  activeFile: UserFile;
  editorActiveFileId: string | null;
}

const CustomTablePanelContainer = styled('div')({ height: '100%' });

const CustomTabPanel = ({ activeFile, editorActiveFileId }: Props) => {
  const { id } = activeFile;

  return (
    <CustomTablePanelContainer role="tabpanel" hidden={editorActiveFileId !== id}>
      <CustomEditor activeFile={activeFile} />
    </CustomTablePanelContainer>
  )
}

export default CustomTabPanel;
