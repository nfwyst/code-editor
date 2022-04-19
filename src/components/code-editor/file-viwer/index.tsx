import { TreeView, TreeItem } from '@mui/lab';
import { styled } from '@mui/material/styles';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Folder from '@mui/icons-material/Folder';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import selectTreeViewData from 'store/selectors/select-tree-view-data';
import type { TreeViewNode } from 'types/files';
import { openFile } from 'store/thunks/open-file';

import ExtensionIcon from '../extension-icon';
import { isEmpty } from 'ramda';

const FileViewr = () => {
  const fileViwerData = useAppSelector(selectTreeViewData);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: TreeViewNode) => {
    dispatch(openFile(node));
  }

  const renderTree = (node: TreeViewNode) => {
    const { id, name, extension, children } = node;
    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={name}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
        sx={{
          padding: '2px',
          // @ts-ignore
          color: (theme) => theme.font,
        }}
      >
      {
        children ? children.map(renderTree) : null
      }
      </TreeItem>
    )
  }

  if (isEmpty(fileViwerData)) {
    return <EmptyMesage>没有文件</EmptyMesage>;
  }

  return (
    <TreeView
      sx={{ height: '100%', width: '100%' }}
      defaultCollapseIcon={<FolderOpenIcon />}
      defaultExpandIcon={<Folder />}
    >{
      renderTree(fileViwerData)}
    </TreeView>
  )
}

const EmptyMesage = styled('div')(({ theme }) => ({
  // @ts-ignore
  color: theme.font,
}));

export default FileViewr
