import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

function Welcome() {
  return (
    <section className="page-welcome">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Get started with Nbyula today
          </h1>
          <p className="max-w-2xl my-8 font-light text-gray-500 lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400">
            Alone we can do so little; together we can do so much. With Nbyula
            growing exponentially, terraformers are looking forward to expanding
            their team. Could you help them build a customizable job board?
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center mr-5"
          >
            <Button>Log in</Button>
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center justify-center"
          >
            <Button color="dark">Register</Button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;