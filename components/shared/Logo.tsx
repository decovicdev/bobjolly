import Image from './Image';

interface LogoProps {}

const Logo: React.FC<LogoProps> = (props) => {
  return <Image src='images/logo.png' alt='logo' />;
};
export default Logo;
