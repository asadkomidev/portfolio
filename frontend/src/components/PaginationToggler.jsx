import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export const PaginationToggler = ({ data, pageIdx, setPageidx }) => {
  return (
    <div className="mt-20">
      <span className="isolate inline-flex rounded-md ">
        <button
          disabled={pageIdx === 1}
          onClick={() => setPageidx(pageIdx - 1)}
          type="button"
          className={`${
            pageIdx === 1
              ? 'bg-gray-200 text-gray-400 dark:bg-black dark:text-gray-800 dark:ring-zinc-700'
              : 'bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'
          } relative inline-flex items-center rounded-full px-2 py-2 ring-1 ring-inset ring-gray-300  focus:z-10`}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon
            className="h-5 w-5   transition group-hover:stroke-zinc-700  dark:text-zinc-500 dark:group-hover:stroke-zinc-400"
            aria-hidden="true"
          />
        </button>
        <div className="flex items-center justify-center px-2">
          <span className="text-zinc-700 dark:text-zinc-200">{`${pageIdx} of ${
            data && data.meta.pagination.pageCount
          }`}</span>
        </div>
        <button
          disabled={pageIdx === (data && data?.meta?.pagination?.pageCount)}
          onClick={() => setPageidx(pageIdx + 1)}
          type="button"
          className={`${
            pageIdx === (data && data?.meta?.pagination?.pageCount)
              ? 'bg-gray-200 text-gray-400 dark:bg-black dark:text-gray-800 dark:ring-zinc-700'
              : 'bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'
          } relative -ml-px inline-flex items-center rounded-full px-2 py-2 ring-1 ring-inset ring-gray-300 focus:z-10`}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon
            className="h-5 w-5 transition  group-hover:stroke-zinc-700 dark:text-zinc-500  dark:group-hover:stroke-zinc-400"
            aria-hidden="true"
          />
        </button>
      </span>
    </div>
  )
}
