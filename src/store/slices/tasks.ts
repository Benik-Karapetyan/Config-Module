import {createSlice, PayloadAction, Draft} from "@reduxjs/toolkit";
import {v1 as uuid} from 'uuid';
import {Task} from "../../types";

const initialState: Task[] = [
  {
    id: uuid(),
    title: 'Go to home!',
    done: false
  },
  {
    id: uuid(),
    title: 'Go to School!',
    done: false
  },
  {
    id: uuid(),
    title: 'Go to work!',
    done: false
  }
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    create: {
      reducer: (state: Draft<Task[]>, {payload}: PayloadAction<Task>) => {
        state.push(payload);
      },
      prepare: ({title}: {title: string}) => ({
        payload: {
          id: uuid(),
          title,
          done: false
        }
      })
    },
    edit: (state: Draft<Task[]>, {payload}: PayloadAction<{ id: string, title: string }>) => {
      const task = state.find(task => task.id === payload.id);

      if (task) {
        task.title = payload.title;
      }
    },
    toggle: (state: Draft<Task[]>, {payload}: PayloadAction<{ id: string, done: boolean }>) => {
      const task = state.find(task => task.id === payload.id);

      if (task) {
        task.done = payload.done;
      }
    },
    remove: (state: Draft<Task[]>, {payload}: PayloadAction<{ id: string }>) => {
      const index = state.findIndex(task => task.id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const {
  create: createTaskActionCreator,
  edit: updateTaskActionCreator,
  remove: removeTaskActionCreator,
  toggle: toggleTaskActionCreator
} = tasksSlice.actions

export default tasksSlice;
