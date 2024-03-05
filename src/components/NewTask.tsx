import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import { CustomButton, FormWrapper } from './styles';
import { GestureResponderEvent } from 'react-native';

interface NewTaskProps {
  createTask: (text: string) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
  const [text, setText] = useState('');

  function handleCreateTask(e: GestureResponderEvent) {
    e.preventDefault();
    if (text.length > 0) {
      createTask(text);
      setText('');
    }

  }

  return (
    <FormWrapper>
      <input placeholder='Adicione uma nova tarefa' type="text" id="ftask" name="ftask"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <CustomButton onPress={(event) => handleCreateTask(event)}>
        Criar
        <PlusCircle size={24} />
      </CustomButton>
    </FormWrapper>
  );
}