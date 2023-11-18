
// ChatSearchForm.js

import React from 'react';

const ChatSearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-chats" className="sr-only">
        Search chats
      </label>
      <div className="flex max-w-3xl gap-x-2">
        <input
          id="search-chats"
          type="search"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-600 sm:text-base"
          placeholder="Search chats"
          rows="1"
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-3 py-1 text-slate-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
          <span className="sr-only">Search chats</span>
        </button>
      </div>
    </form>
  );
};

export default ChatSearchForm;

