import { Image } from 'react-native';
import rocketIcon from '../assets/rocket.png';
import { CustomBlueTypography, CustomPurpleTypography, CustomHeader } from './styles';


export function Header() {
  return (
    <CustomHeader>
      <Image src={rocketIcon} />
      <CustomBlueTypography variant='medium'>to</CustomBlueTypography>
      <CustomPurpleTypography variant='medium'>do</CustomPurpleTypography>
    </CustomHeader>
  );
}