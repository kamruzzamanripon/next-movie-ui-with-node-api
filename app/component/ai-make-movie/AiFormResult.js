const AiFormResult = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-md dark:bg-black my-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          This is your Search Result
        </h1>
      </div>
      <div className="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border">
        <div className="mb-6">
          <img
            src="banner-one.jpg"
            alt="result-image"
            className="rounded-md border border-2 border-x-1"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Title
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Movie Title..."
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Category
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Movie category Name..."
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Short Description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Movie short description..."
            defaultValue={""}
          />
        </div>
        <div className="text-right">
          <button className="bg-black text-white p-3 rounded-md dark:border">
            Save your Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiFormResult;
