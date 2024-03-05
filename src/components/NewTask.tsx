import { useState } from 'react';
import { PlusCircle } from 'phosphor-react'
import { CustomButton, CustomTextInput, FormWrapper } from './styles';
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
      <CustomTextInput placeholder='Adicione uma nova tarefa' id="ftask"
        value={text}
        onChangeText={text => setText(text)}
      />
      <CustomButton onPress={(event) => handleCreateTask(event)}>
        <PlusCircle size={24} />
      </CustomButton>
    </FormWrapper>
  );
}