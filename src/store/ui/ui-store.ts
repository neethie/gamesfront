import { StateCreator } from "zustand";

export type UISlice = {
    // Sidebar
    isSidebarOpen: boolean;
    toggleSidebar: () => void;

    // Mobile
    isMobile: boolean;

    // User Menu
    isUserMenuOpen: boolean;
    toggleUserMenu: () => void;

    // Modal
    isModalOpen: boolean;
    toggleModal: () => void;
};

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    isSidebarOpen: false,
    toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

    isMobile: window.innerWidth < 768,

    isUserMenuOpen: false,
    toggleUserMenu: () =>
        set((state) => ({ isUserMenuOpen: !state.isUserMenuOpen })),

    isModalOpen: false,
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
});
