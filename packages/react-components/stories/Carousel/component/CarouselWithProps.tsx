import React from 'react';
import { Carousel } from '../../../src';
import { ResponsiveType, StateCallBack } from 'react-multi-carousel';

export interface CarouselProps {
  responsive: ResponsiveType;
  deviceType?: string;
  ssr?: boolean;
  slidesToSlide?: number;
  draggable?: boolean;
  arrows?: boolean;
  renderArrowsWhenDisabled?: boolean;
  swipeable?: boolean;
  removeArrowOnDeviceType?: string | Array<string>;
  children: any;
  customLeftArrow?: React.ReactElement<any> | null;
  customRightArrow?: React.ReactElement<any> | null;
  customDot?: React.ReactElement<any> | null;
  customButtonGroup?: React.ReactElement<any> | null;
  infinite?: boolean;
  minimumTouchDrag?: number;
  afterChange?: (previousSlide: number, state: StateCallBack) => void;
  beforeChange?: (nextSlide: number, state: StateCallBack) => void;
  sliderClass?: string;
  itemClass?: string;
  itemAriaLabel?: string;
  containerClass?: string;
  className?: string;
  dotListClass?: string;
  keyBoardControl?: boolean;
  centerMode?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showDots?: boolean;
  renderDotsOutside?: boolean;
  renderButtonGroupOutside?: boolean;
  partialVisible?: boolean;
  partialVisbile?: boolean;
  customTransition?: string;
  transitionDuration?: number;
  focusOnSelect?: boolean;
  additionalTransfrom?: number;
  pauseOnHover?: boolean;
}

export default function CarouselWithProps(props: CarouselProps): JSX.Element {
  return <Carousel {...props} />;
}
