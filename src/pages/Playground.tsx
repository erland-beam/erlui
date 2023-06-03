import { createEffect } from 'solid-js';
import { usePlaygroundContext } from '../contexts/Playground';

export const PlaygroundPage = () => {
  const [playground] = usePlaygroundContext();

  createEffect(() => console.log(playground()));

  return (
    <>
      <h1>Haii :3</h1>
      <p>Check browser console for logs :3</p>
    </>
  );
};
