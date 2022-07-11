import { Expandable } from "@peersyst/react-components";
import { ExpandableProvider } from "@peersyst/react-components";

const BodyExample = () => (
    <ExpandableProvider value={{ open: true, toggle: () => undefined }}>
        <Expandable.Body>
            <Expandable.Header>Header</Expandable.Header>
            <Expandable.Content>Content</Expandable.Content>
            <Expandable.Footer>Footer</Expandable.Footer>
        </Expandable.Body>
    </ExpandableProvider>
);

export default BodyExample;
