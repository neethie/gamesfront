import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createSliderSlice, SliderSlice } from "./slider/slider-store";
import { createUISlice, UISlice } from "./ui/ui-store";

type AppStore = SliderSlice & UISlice;

export const useAppStore = create<AppStore>()(
    devtools((...a) => ({
        ...createUISlice(...a),
        ...createSliderSlice(...a),
    }))
);
