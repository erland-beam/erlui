import { PlaygroundManager } from 'erland.ts';
import {
  Accessor,
  JSX,
  Setter,
  createContext,
  createSignal,
  useContext,
} from 'solid-js';

const createPlaygroundStore = (initialValue?: PlaygroundManager) => {
  return createSignal<typeof initialValue>(initialValue);
};

type PlaygroundContextType = ReturnType<typeof createPlaygroundStore>;

export const PlaygroundContext = createContext<PlaygroundContextType>();

export const PlaygroundContextProvider = (props: { children: JSX.Element }) => {
  const [playground, setPlayground] = createPlaygroundStore();

  return (
    <PlaygroundContext.Provider value={[playground, setPlayground]}>
      {props.children}
    </PlaygroundContext.Provider>
  );
};

export const usePlaygroundContext = () => useContext(PlaygroundContext)!;
