import { CustomBlueTypography, CustomCount, CustomDivider, CustomPurpleTypography, TasksDiv } from './styles';
import { ITask } from './TaskCard';

import styled from 'styled-components/native';
const Container = styled.View`
  flex: 1;
  background-color: #f41111;
  align-items: center;
  justify-content: center;
`;
interface CardHeaderProps {
  tasks: ITask[];
}

export function CardHeader({ tasks }: CardHeaderProps) {
  const createdTasks = tasks.length;

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc;
  }, 0);

  return (
    <Container>
      <CustomDivider>
        <TasksDiv>
          <CustomBlueTypography variant='small'>Tarefas criadas </CustomBlueTypography>
          <CustomCount>{createdTasks}</CustomCount>
        </TasksDiv>

        <TasksDiv>
          <CustomPurpleTypography variant='small'>Concluídas</CustomPurpleTypography>
          <CustomCount>{tasksCompleted + " de "}{createdTasks}</CustomCount>
        </TasksDiv>

      </CustomDivider>
    </Container>
  );
}