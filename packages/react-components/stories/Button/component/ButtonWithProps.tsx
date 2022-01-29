import { Button } from '../../../src';
import { ButtonProps } from '../../../src/Button/Button.types';

export default function ButtonWithProps(props: ButtonProps): JSX.Element {
  return <Button {...props} />;
}
