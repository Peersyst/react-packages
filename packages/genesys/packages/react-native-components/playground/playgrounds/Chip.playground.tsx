import { Chip, Col, CrossIcon, Label } from "../../src";
import playground from "../playground";

const Display = () => {
    return (
        <Col gap={20} style={{ width: "100%", height: "100%" }}>
            <Label label="Variants" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip label="Filled" variant="filled" />
                    <Chip label="Outlined" variant="outlined" />
                </Col>
            </Label>
            <Label label="Sizes" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip label="Sm" size="sm" />
                    <Chip label="Md" size="md" />
                    <Chip label="Lg" size="lg" />
                </Col>
            </Label>
            <Label label="Rounded" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip label="Filled" variant="filled" rounded />
                    <Chip label="Outlined" variant="outlined" rounded />
                </Col>
            </Label>
            <Label label="Pressable" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip label="Filled" variant="filled" onPress={() => undefined} />
                    <Chip label="Outlined" variant="outlined" onPress={() => undefined} />
                </Col>
            </Label>
            <Label label="Disabled" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip label="Filled" variant="filled" disabled />
                    <Chip label="Outlined" variant="outlined" disabled />
                </Col>
            </Label>
            <Label label="Prefix and suffix" variant="h5">
                <Col alignItems="flex-start" gap={10}>
                    <Chip
                        label="Filled"
                        variant="filled"
                        size="sm"
                        prefix={<CrossIcon />}
                        suffix={<CrossIcon />}
                    />
                    <Chip
                        label="Filled"
                        variant="filled"
                        size="md"
                        prefix={<CrossIcon />}
                        suffix={<CrossIcon />}
                    />
                    <Chip
                        label="Filled"
                        variant="filled"
                        size="lg"
                        prefix={<CrossIcon />}
                        suffix={<CrossIcon />}
                    />
                </Col>
            </Label>
        </Col>
    );
};

export default playground("Chip", Display);
