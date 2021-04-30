export interface RootState {
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  done: boolean;
}
