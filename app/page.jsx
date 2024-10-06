import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>
        AI-Powered Prompts
      </span>
    </h1>
    <p className='desc text-center'>
      Promptify is an open-source AI prompting tool for the modern world to
      discover, create, and share creative prompts.
    </p>

    <Feed />
  </section>
);

export default Home;
