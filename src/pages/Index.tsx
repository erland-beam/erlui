export const IndexPage = () => {
  return (
    <div class='flex flex-col h-screen items-center justify-center px-4 index-gradient'>
      <h1 class='mb-2 text-3xl font-bold'>Connect to a playground</h1>
      <form
        action=''
        class='flex items-center text-lg w-full max-w-128 min-w-64 border-2 border-solid border-rose rounded-full'
      >
        <input
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
          <span class='i-material-symbols:power-plug-outline-rounded w-8 h-8'></span>
        </button>
      </form>
    </div>
  );
};
