export interface UserFile {
  id: string;
  name: string;
  relativePath: string;
  code: string;
  extension: string;
}

export interface TreeViewNode {
  id: string;
  name: string;
  children?: TreeViewNode[];
  extension?: string;
}
