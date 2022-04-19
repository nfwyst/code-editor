import type { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import type { UserFile } from 'types/files';
import { useAppDispatch } from 'store/hooks';
import { closeFile } from 'store/thunks/close-file';

import ExtensionIcon from '../extension-icon';

interface Props {
  activeFile: UserFile;
}

const CustomTabLabelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
});

const FileName = styled('div')(({ theme }) => ({
  padding: '0 5px',
  marginRight: '10px',
  // @ts-ignore
  color: theme.font,
}));

const CustomTabLabel = ({ activeFile }: Props) => {
  const { id, name, extension } = activeFile;
  const dispatch = useAppDispatch();

  const onClose = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(closeFile(id))
  }

  return (
    <CustomTabLabelContainer>
      <ExtensionIcon extension={extension} />
      <FileName>{name}</FileName>
      <CloseIcon
        onClick={onClose}
        // @ts-ignore
        sx={{ position: 'absolute', right: '5px', cursor: 'pointer', color: (theme) => theme.font }}
      />
    </CustomTabLabelContainer>
  )
}

export default CustomTabLabel;
