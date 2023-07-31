const FormInput = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-md dark:bg-black">
      <div className="text-center mb-8 relative">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          Create Category
        </h1>
        <img
          src="AS0007464_07.gif"
          alt
          className="rounded-full w-48 h-48 absolute -top-5 right-0 sm::hidden"
        />
      </div>
      <div className="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category Name
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Movie Title..."
            v-model="movieData.title"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category Image
          </label>
          <input
            type="file"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Movie Title..."
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md dark:border"
          >
            Make Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
