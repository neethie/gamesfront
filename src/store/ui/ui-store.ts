import { StateCreator } from "zustand";

export type UISlice = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    isMobile: boolean;

    isUserMenuOpen: boolean;
    toggleUserMenu: () => void;
};

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isMobile: window.innerWidth < 768,

    isUserMenuOpen: false,
    toggleUserMenu: () =>
        set((state) => ({ isUserMenuOpen: !state.isUserMenuOpen })),
});
