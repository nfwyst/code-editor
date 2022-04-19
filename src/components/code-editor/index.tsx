import type { SyntheticEvent } from 'react';
import { AppBar, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { setEditorActiveFile } from "store/slices/files";
import selectActiveFiles from "store/selectors/select-active-files";
import CustomTabLabel from "./custom-tab-label";
import CustomTabPanel from "./custom-tab-panel";

const EmptyMessage = styled("div")(({ theme }) => ({
  // @ts-ignore
  color: theme.font,
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CodeEditorContainer = styled("div")({
  flex: 1,
  height: '100%',
  overflow: 'hidden',
})

const CodeEditor = () => {
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFileId = useAppSelector(state => state.files.editorActiveFileId);

  const onTabClick = (event: SyntheticEvent<Element, Event>, tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];
    if (activeFile?.id !== editorActiveFileId) {
      dispatch(setEditorActiveFile(activeFile.id));
    }
  }

  if (!activeFiles) {
    return <EmptyMessage>请选择一个文件</EmptyMessage>
  }

  const tabValue = activeFiles.findIndex(file => file.id === editorActiveFileId) ?? 0;

  return (
    <CodeEditorContainer>
      <AppBar position="static" color='default'>
        <Tabs
          textColor='primary'
          indicatorColor='primary'
          variant='scrollable'
          value={tabValue}
          onChange={onTabClick}
        >
          {activeFiles.map(activeFile => {
            return (
              <Tab
                key={activeFile.id}
                label={<CustomTabLabel activeFile={activeFile} />}
              />
            )
          })}
        </Tabs>
      </AppBar>
      {activeFiles.map(activeFile => {
        return (
          <CustomTabPanel
            key={activeFile.id}
            activeFile={activeFile}
            editorActiveFileId={editorActiveFileId}
          />
        )
      })}
    </CodeEditorContainer>
  )
}

export default CodeEditor;

