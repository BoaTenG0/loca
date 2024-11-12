import { create } from 'zustand'

interface GeneralTypes<T extends object> {
  zusState: T
  zusUpdateState: <K extends keyof T>(key: K, value: T[K]) => void
}

// Usage example:
// const { zusState, zusUpdateState } = useGeneralStore((state) => ({ zusState: state.zusState, zusUpdateState: state.zusUpdateState }));
// zusUpdateState("key", "value")
//zusState.key

export const useGeneralStore = create<GeneralTypes<any>>((set) => ({
  zusState: {},
  zusUpdateState: (key, value) =>
    set((state) => ({
      zusState: {
        ...state.zusState,
        [key]: value,
      },
    })),
}))
