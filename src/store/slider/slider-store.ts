import { StateCreator } from "zustand";

export type SliderSlice = {
    sliderIndex: number;
    setSliderIndex: (index: number) => void;
};

export const createSliderSlice: StateCreator<
    SliderSlice,
    [],
    [],
    SliderSlice
> = (set) => ({
    sliderIndex: 3,
    setSliderIndex: (index) => {
        set({ sliderIndex: index });
        console.log(index);
    },
});
