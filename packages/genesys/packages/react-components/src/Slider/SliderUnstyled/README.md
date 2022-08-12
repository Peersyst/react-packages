# MUI SliderUnstyled

As this component is really complex and MUI has an outstanding one, we decided to include their Slider in our package instead of building it from scratch.

This implied installing prop-types and clsx packages (which are quite light). As well as including some utils and hooks required by the Slider. Those utils and hooks can be found in this folder and in the following locations (as they can be useful to use in our library):
* react-components/src/utils/(composeClasses|generateUtilityClass|generateUtilityClasses|visuallyHidden)
* react-hooks/src/(useEnhancedEffect|useEventCallback|useIsFocusVisible)
