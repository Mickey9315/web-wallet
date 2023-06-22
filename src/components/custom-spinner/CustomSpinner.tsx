import Image from '../image/Image';

type Props = {
  size: number;
};

const CustomSpinner = ({ size }: Props) => (
  <Image src="/assets/spinner.svg" sx={{ width: size, height: size }} />
);

export default CustomSpinner;
