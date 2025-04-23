declare module "react-slick" {
  import { ComponentType } from "react";
  import { Settings } from "react-slick";

  interface SlickSliderProps extends Settings {
    ref?: any;
  }

  const Slider: ComponentType<SlickSliderProps>;
  export default Slider;
}
