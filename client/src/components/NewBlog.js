'use client';
import { useState } from 'react';

function NewBlog() {
  return (
    <>
      <h1 className="text-white">
        What do you wanna write about today?
      </h1>
      <div className="py-12">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-gray-800 border-b border-gray-700">
              <form>
                <div className="mb-4">
                  <label className="text-xl text-gray-300">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-600 p-2 w-full bg-gray-700 text-white"
                    name="title"
                    id="title"
                    value=""
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="text-xl text-gray-300">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <textarea
                    name="content"
                    className="border-2 border-gray-600 p-2 w-full bg-gray-700 text-white"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="text-xl text-gray-300">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 border-gray-600 p-2 w-full bg-gray-700 text-white"
                    name="author"
                    id="author"
                    value=""
                    required
                  />
                </div>

                <div className="flex p-1">
                  <select
                    className="border-2 border-gray-600 border-r p-2 bg-gray-700 text-white"
                    name="action"
                  >
                    <option>Save and Publish</option>
                    <option>Save Draft</option>
                  </select>
                  <button
                    role="submit"
                    className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                    required
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewBlog;
