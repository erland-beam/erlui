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
    <div class='flex h-screen flex-col items-center justify-center px-4'>
      <h1 class='mb-2 text-center text-3xl font-bold'>
        Connect to a playground
      </h1>
      <form
        onsubmit={async (event) => {
          event.preventDefault();

          const form = event.target as HTMLFormElement;
          const formData = new FormData(form);

          await connectToPlayground(formData.get('playground-url')!.toString());

          navigate('/erlui/playground');
        }}
        class='max-w-128 min-w-64 border-rose flex w-full items-center rounded-full border-2 border-solid text-lg'
      >
        <input
          name='playground-url'
          type='url'
          pattern='wss?.*'
          placeholder='ws://localhost:8080'
          required
          title='Playground WebSocket url'
          class='leading-16 w-full rounded-l-full bg-transparent pl-7 outline-none'
        />
        <button
          type='submit'
          title='Connect to the playground'
          class='display-inherit group rounded-r-full px-7 py-4'
        >
          <span class='i-material-symbols:power-plug-outline-rounded transition-250 relative h-8 w-8 group-hover:rotate-45'></span>
        </button>
      </form>
    </div>
  );
};
