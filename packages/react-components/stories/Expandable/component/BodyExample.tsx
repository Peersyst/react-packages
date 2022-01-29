import { Expandable } from '../../../src';

const BodyExample = () => (
  <Expandable.Body style={{ minHeight: '120px' }}>
    <Expandable.Header>Header</Expandable.Header>
    <Expandable.Content>Content</Expandable.Content>
    <Expandable.Footer>Footer</Expandable.Footer>
  </Expandable.Body>
);

export default BodyExample;
