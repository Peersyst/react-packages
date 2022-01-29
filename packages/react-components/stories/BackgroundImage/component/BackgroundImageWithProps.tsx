import { BackgroundImage } from '../../../src';
import { BackgroundImageProps } from '../../../src/BackgroundImage/BackgroundImage.types';

export default function BackgroundImageWithProps(
  props: BackgroundImageProps
): JSX.Element {
  return <BackgroundImage {...props} />;
}
