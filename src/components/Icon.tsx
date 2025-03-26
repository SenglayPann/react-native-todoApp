import SvgIcon from 'react-native-svg-icon';
import svgs from '../assets/Icons/svgs';
import {Platform} from 'react-native';

type Props = {
  dimension?: number;
} & any;

const Icon = (props: Props) => {
  const {dimension} = props;
  return (
    <SvgIcon
      width={(dimension ?? 28) * (Platform.OS === 'android' ? 1.5 : 1)}
      height={(dimension ?? 28) * (Platform.OS === 'android' ? 1.5 : 1)}
      {...props}
      svgs={svgs}
    />
  );
};

export default Icon;
