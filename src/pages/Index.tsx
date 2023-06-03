import { useNavigate } from '@solidjs/router';
import { PlaygroundManager } from 'erland.ts';

import { usePlaygroundContext } from '../contexts/Playground';

export const IndexPage = () => {
  const [, setPlayground] = usePlaygroundContext()!;
  const navigate = useNavigate();

  const connectToPlayground = async (playgroundURL: string | URL) => {
    const manager = new PlaygroundManager(playgroundURL);
    await manager.connect();
    setPlayground(manager);
  };

  return (
    <div class='flex flex-col h-screen items-center justify-center px-4 index-gradient'>
      <h1 class='text-center mb-2 text-3xl font-bold'>
        Connect to a playground
      </h1>
      <form
        onsubmit={async (event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const formData = new FormData(form);

          await connectToPlayground(formData.get('playground-url')!.toString());

          navigate('/playground');
        }}
        class='flex items-center text-lg w-full max-w-128 min-w-64 border-2 border-solid border-rose rounded-full'
      >
        <input
          name='playground-url'
          type='url'
          pattern='wss?.*'
          placeholder='ws://localhost:8080'
          required
          title='Playground WebSocket url'
          class='w-full bg-transparent leading-16 pl-7 rounded-l-full outline-none'
        />
        <button
          type='submit'
          title='Connect to the playground'
          class='display-inherit py-4 px-7 rounded-r-full'
        >
          <span
            class={
              'relative i-material-symbols:power-plug-outline-rounded w-8 h-8'
            }
          ></span>
        </button>
      </form>
    </div>
  );
};
