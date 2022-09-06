import { Button, Grid } from "@peersyst/react-components";
import { useState } from "react";

export default function G(): JSX.Element {
    const [a, setA] = useState(true);

    return (
        <>
            <Button onClick={() => setA(!a)}>A</Button>
            <Grid
                cols={3}
                rowGap={60}
                colGap={10}
                breakpoints={
                    a
                        ? [
                              { maxWidth: 1200, cols: 3, rowGap: 20, colGap: 20 },
                              { maxWidth: 900, cols: 2, rowGap: 30 },
                              {
                                  maxWidth: 800,
                                  cols: 1,
                                  rowGap: 10,
                                  colGap: 10,
                                  justifyContent: "flex-start",
                              },
                          ]
                        : [
                              { maxWidth: 1200, cols: 2, rowGap: 20, colGap: 20 },
                              { maxWidth: 900, cols: 1, rowGap: 30 },
                              {
                                  maxWidth: 800,
                                  cols: 3,
                                  rowGap: 10,
                                  colGap: 10,
                                  justifyContent: "flex-start",
                              },
                          ]
                }
            >
                {[...Array(10)].map((e, i) => (
                    <div
                        key={i.toString()}
                        style={{
                            width: "200px",
                            height: "200px",
                            backgroundColor: `rgb(${(i + 2) * 10}, ${i * 24}, ${(i + 1) * 30})`,
                        }}
                    />
                ))}
            </Grid>
        </>
    );
}
