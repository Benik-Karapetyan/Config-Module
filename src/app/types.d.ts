export interface Message {
  show: boolean;
  text?: string;
  type?: string;
}

export interface AppState {
  loading: boolean;
  message: Message;
}

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export interface RootState {
  general: GeneralState;
  tasks: Task[];
}
