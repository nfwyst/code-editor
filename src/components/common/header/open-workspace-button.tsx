import { useRef } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from 'store/hooks';
import { readFiles } from 'store/thunks/read-files';

const OpenWorkSpaceStyledButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.commonColors.white,
}));

const InputFile = styled('input')(({ theme }) => ({
  display: 'none',
}))

const OpenWorkSpaceButton = () => {
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleOpenWorkSpace = () => {
    directoryInputRef.current?.click();
  }

  const handleUploadFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const files = event.target.files;
      if (files) {
        await dispatch(readFiles(files));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <OpenWorkSpaceStyledButton onClick={handleOpenWorkSpace}>打开工作台</OpenWorkSpaceStyledButton>
      {/* @ts-ignore */}
      <InputFile ref={directoryInputRef} type="file" directory="" webkitdirectory="" onChange={handleUploadFiles}  />
    </div>
  )
}

export default OpenWorkSpaceButton;
