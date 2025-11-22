import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX+ 1,

        openWindow: (windowId, data=null) => set((state) => {
            const win = state.windows[windowId];
            if (!win) return;
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex ++;
        }),

        closeWindow: (windowId) => set((state) => {
            const win = state.windows[windowId];
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX-1;
            win.data = null;
        }),

        focusWindow: (windowId) => set((state) => {
            const win = state.windows[windowId];
            win.zIndex = state.nextZIndex++;
        }),
})));

export default useWindowStore;