import { View } from "react-native";
import { Expandable, Typography } from "../../src";
import playground from "../playground";

const Display = (): JSX.Element => {
    return (
        <View style={{ width: 300 }}>
            <Expandable>
                <Expandable.Display>DISPLAY</Expandable.Display>
                <Expandable.Content>
                    <Typography variant="h6">CONTENT</Typography>
                </Expandable.Content>
            </Expandable>
        </View>
    );
};

export default playground("Expandable", Display);
