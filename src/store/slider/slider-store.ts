import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
    sliderIndex: number;
    setSliderIndex: (index: number) => void;
}

export const useSliderStore = create<State>()(
    devtools((set) => ({
        sliderIndex: 1,
        setSliderIndex: (index) => set({ sliderIndex: index }),
    }))
);

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
