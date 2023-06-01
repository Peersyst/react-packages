import { View } from "react-native";
import { Expandable, Typography } from "../../src";
import playground from "../playground";

const Display = (): JSX.Element => {
    return (
        <View style={{ width: 300 }}>
            <Expandable>
                <Expandable.Display>DISPLAY</Expandable.Display>
                <Expandable.Content>
                    <Typography variant="body1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ex elit.\n\nQuisque eget molestie nulla. Vivamus in augue vel ex volutpat lobortis. Donec eros nisl, efficitur sed ultricies quis, commodo accumsan nisl.`}</Typography>
                </Expandable.Content>
            </Expandable>
        </View>
    );
};

export default playground("Expandable", Display);
