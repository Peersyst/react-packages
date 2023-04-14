import playground from "../playground";
import { Typography } from "@peersyst/react-native-components";

const Welcome = () => (
    <Typography variant="h5" textAlign="center" style={{ padding: 10, lineHeight: 45 }}>
        Welcome to the Playground ⚽️
    </Typography>
);

export default playground("Welcome", Welcome);
