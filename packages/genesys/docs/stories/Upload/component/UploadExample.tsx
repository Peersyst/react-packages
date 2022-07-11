import { CSSProperties, useState } from "react";
import { Image, Upload, Col, Typography } from "@peersyst/react-components";

const styles: CSSProperties = {
    width: "200px",
    height: "200px",
    borderRadius: "5px",
};

const UploadExample = () => {
    const [file, setFiles] = useState<File | undefined>(undefined);

    return (
        <Upload onChange={(file) => setFiles(file as File)} fileTypes="image">
            {(drag) =>
                file ? (
                    <Image src={URL.createObjectURL(file)} alt="uploaded-file" style={styles} />
                ) : (
                    <Col
                        justifyContent="center"
                        alignItems="center"
                        style={{
                            ...styles,
                            border: `1px solid ${drag ? "red" : "white"}`,
                            opacity: 0.5,
                        }}
                    >
                        {!drag ? (
                            <>
                                <Typography variant="body1">Upload an image</Typography>
                                <Typography variant="body1">or drop it here</Typography>
                            </>
                        ) : (
                            <Typography variant="body1">Drop to upload</Typography>
                        )}
                    </Col>
                )
            }
        </Upload>
    );
};

export default UploadExample;
