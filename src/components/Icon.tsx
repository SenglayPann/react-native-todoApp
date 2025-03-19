import SvgIcon from 'react-native-svg-icon';
import svgs from '../assets/Icons/svgs';

type Props = {
  width?: number;
  height?: number;
} & any;

const Icon = (props: Props) => {
  const {width, height} = props;
  return (
    <SvgIcon width={width ?? 28} height={height ?? 28} {...props} svgs={svgs} />
  );
};

export default Icon;
