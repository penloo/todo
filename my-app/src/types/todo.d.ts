interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: number;
  complete: boolean;
  edited: boolean;
}
