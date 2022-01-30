import { Expandable } from "../../../src";

const ExpandableExample = () => (
    <Expandable>
        <Expandable.Display>Display</Expandable.Display>
        <Expandable.Body>
            <Expandable.Header>Header</Expandable.Header>
            <Expandable.Content>Content</Expandable.Content>
            <Expandable.Footer>Footer</Expandable.Footer>
        </Expandable.Body>
    </Expandable>
);

export default ExpandableExample;
