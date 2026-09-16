import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:fixed lg:h-[calc(100vh-3rem)] z-20 bg-[#f4f6fa] dark:bg-[#1a1a1a] m-4 lg:ml-10 lg:my-6 p-4 lg:px-7 lg:py-5 flex flex-col justify-between rounded-[2rem] shadow-sm">
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 text-center">
          Ahmed Farghally
        </h2>

        <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-4 relative shadow-sm h-[200px]">
          <Image
            src="/img/avatars/man5_big.jpg"
            alt="Ahmed Farghally"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <span className="block text-[13px] text-slate-500 dark:text-slate-400 mb-1">
              Job Title:
            </span>
            <p className="text-[17px] text-slate-800 dark:text-white leading-tight">
              UI/UX designer
              <br />
              frontend designer
            </p>
          </div>

          <div>
            <span className="block text-[13px] text-slate-500 dark:text-slate-400 mb-1">
              No. Phone:
            </span>
            <p className="text-[17px] text-slate-800 dark:text-white leading-tight">
              +201065962515
              <br />
              +201144954837
            </p>
          </div>

          <div>
            <span className="block text-[13px] text-slate-500 dark:text-slate-400 mb-1">
              Email:
            </span>
            <p className="text-[17px] text-slate-800 dark:text-white leading-tight">
              ahmed.fr1988@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-3 pb-2">
        <a
          href="https://www.linkedin.com/in/ahmed-farghally/"
          target="_blank"
          className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://www.behance.net/ahmedfarghally"
          target="_blank"
          className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3 0-3h-3.584v3zm0 5.988h3.922c2.898 0 3.385-3.21 0-3.21h-3.922v3.21z" />
          </svg>
        </a>
        <a
          href="https://github.com/Ahmedfarghally1988"
          target="_blank"
          className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
