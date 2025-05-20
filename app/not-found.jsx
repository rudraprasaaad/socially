import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 px-4 rounded-md border-white">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-9xl font-bold text-black dark:text-white mb-4 animate-pulse md:text-[12rem]">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-black dark:border-white rounded-full opacity-20 animate-ping"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 md:text-4xl">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto">
            The page you're looking for seems to have wandered off into the
            digital wilderness.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg 
						 font-medium transition-transform hover:scale-105 hover:bg-gray-900
						 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl active:scale-95"
        >
          Return Home
        </Link>

        <div className="mt-8 flex justify-center space-x-4 text-black dark:text-white">
          <div className="animate-bounce delay-100">•</div>
          <div className="animate-bounce delay-200">•</div>
          <div className="animate-bounce delay-300">•</div>
        </div>
      </div>
    </div>
  );
}
