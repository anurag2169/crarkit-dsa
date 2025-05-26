import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-50 dark:bg-gray-900 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-blue-600 rounded-md rotate-45"></div>
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-sm flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">⚡︎</span>
                </div>
              </motion.div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                CrackIt
              </h1>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="https://x.com/anurag270569/"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anuragdubey2169/"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zm7.5 0h5V14.5c0-2.73 3.5-2.95 3.5 0V24h5v-10c0-6.5-7.5-6.27-10-3.08V7h-5v17z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            &copy; {currentYear} CrackIt. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0"
          >
            Made with ❤️ for engineers
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
