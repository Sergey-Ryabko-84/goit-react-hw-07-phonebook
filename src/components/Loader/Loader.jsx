import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

export const Loader = () => (
  <SpinnerWrapper>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#2b4055d0"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </SpinnerWrapper>
);