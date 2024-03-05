import { TasksDivItem } from './styles';
import { Trash } from 'phosphor-react'
import unchecked from '../assets/unchecked.png';
import checked from '../assets/checked.png';
import { ITask } from './TaskCard';
import { Image, Pressable } from 'react-native';



interface TasksProps {
  item: ITask,
  checkedTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Task({ item, checkedTask, deleteTask }: TasksProps) {
  return (
    <>
      <TasksDivItem key={item.toString()} checked={item.checked} >
        {
          item.checked ?
            <Pressable onPress={() => {
              checkedTask(item.id);
            }}>
              <Image src={checked} />
            </Pressable>
            :
            <Pressable onPress={() => {
              checkedTask(item.id);
            }}>
              <Image src={unchecked} />
            </Pressable>
        }
        <label htmlFor={item.text}> {item.text}</label><br></br>
        <Trash
          onClick={() => {
            deleteTask(item.id);
          }}
        ></Trash>
      </TasksDivItem>
    </>
  );
}