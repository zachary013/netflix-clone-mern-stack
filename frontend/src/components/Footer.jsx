
const Footer = () => {
  return (
    <>
      {/* Footer for larger screens */}
      <footer className="hidden lg:block bg-black text-white px-8 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-1/4 mb-10 lg:mb-0 mr-4">
            <h2 className="text-2xl font-bold mb-4">Netflix</h2>
            <p className="text-gray-400">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            </p>
          </div>
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Netflix</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press Center</a></li>
            </ul>
          </div>
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Account</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Redeem Gift Cards</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Legal & Privacy</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Use</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Statement</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 mt-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <p className="text-gray-400">Netflix Morocco</p>
            <ul className="flex mt-6 lg:mt-0">
              <li className="mr-8">
                <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              </li>
              <li className="mr-8">
                <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              </li>
              <li className="mr-8">
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Footer for smaller screens */}
      <footer className="lg:hidden py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/zachary013"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              Zakariae Azarkan
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/zachary013/netflix-clone-mern-stack"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
