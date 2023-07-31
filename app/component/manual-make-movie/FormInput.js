const FormInput = () => {
  return (
    <div>
      <div className="text-center mb-8 relative">
        <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
          Manual Movie Maker
        </h1>
        <img
          src="storytelling-08.gif"
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
            Movie Title
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
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Category
          </label>
          <select
            name
            id
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="movieData.category"
          >
            <option>Choose category</option>
            <option value="sad">cat-2</option>
            <option value="ss">cat-3</option>
          </select>
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
            v-model="movieData.description"
            defaultValue={""}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Movie Poster
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
            Make Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
