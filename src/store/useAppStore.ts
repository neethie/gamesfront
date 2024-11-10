import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createSliderSlice, SliderSlice } from "./slider/slider-store";
import { createUISlice, UISlice } from "./ui/ui-store";
import { createUserSlice, UserSlice } from "./user/user-store";

type AppStore = SliderSlice & UISlice & UserSlice;

export const useAppStore = create<AppStore>()(
    devtools((...a) => ({
        ...createUISlice(...a),
        ...createSliderSlice(...a),
        ...createUserSlice(...a),
    }))
);
