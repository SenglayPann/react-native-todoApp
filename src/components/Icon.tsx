import SvgIcon from 'react-native-svg-icon';
import svgs from '../assets/Icons/svgs';

type Props = {
  dimension?: number;
} & any;

const Icon = (props: Props) => {
  const {dimension} = props;
  return (
    <SvgIcon
      width={dimension ?? 28}
      height={dimension ?? 28}
      {...props}
      svgs={svgs}
    />
  );
};

export default Icon;
