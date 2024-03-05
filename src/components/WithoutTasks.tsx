import { CustomSimpleGrayTypography, CustomSimpleTypography, SimpleDivider } from './styles';
import clipBoard from '../assets/clipboard.svg'
import { Image } from 'react-native';


export function WithoutTasks() {

  return (
    <>
      <SimpleDivider>
        <Image source={clipBoard} />
      </SimpleDivider>
      <CustomSimpleTypography >
        Você ainda não tem tarefas cadastradas
      </CustomSimpleTypography>
      <CustomSimpleGrayTypography >
        Crie tarefas e organize seus itens a fazer
      </CustomSimpleGrayTypography>
    </>
  );
}