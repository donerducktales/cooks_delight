import { create } from "zustand";

type State = {
   value: string;
   result: any[];
   valueRequest: string
}

type Action = {
   setValueRequest: () => void;
   setSearchValue: (newValue: string) => void;
   fetchResults: (searchValue: string) => Promise<void>;
}

const useSearchStore = create<State & Action>((set) => ({
   value: '',
   result: [],
   valueRequest: '',
   setValueRequest: () => set((state) => ({valueRequest: state.value})),
   setSearchValue: (newValue) => set(() => ({value: newValue})),
   fetchResults: async (searchValue) => {
      const response = await fetch(`/api/search?searchValue=${searchValue}`);
      const data = await response.json();
      set({result: data});
   }
}))

export default useSearchStore;