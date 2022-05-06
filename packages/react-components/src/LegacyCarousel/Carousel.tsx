import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselProps } from "./Carousel.types";

export default function Carousel(props: CarouselProps): JSX.Element {
    return <ReactMultiCarousel {...props} />;
}