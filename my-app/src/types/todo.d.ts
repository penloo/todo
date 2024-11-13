interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: number;
  compelte: boolean;
  edited: boolean;
}
