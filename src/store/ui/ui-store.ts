import { create, StateCreator } from "zustand";

interface State {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    isMobile: boolean;
}

export const useUIStore = create<State>()((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isMobile: window.innerWidth < 768,
}));

export type UISlice = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    isMobile: boolean;
};

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isMobile: window.innerWidth < 768,
});
