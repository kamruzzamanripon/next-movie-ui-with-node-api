
const AiFormInput = () => {
  return (
    <div>
      <div className="bg-gray-200 p-5 rounded-md dark:bg-black">
        <div className="text-center mb-8 relative">
          <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
            Hello, I am here to help Make Movie
          </h1>
          <p className="dark:text-white">
            Please, write your idea below input box
          </p>
          <img
            src="robot-1.webp"
            alt
            className="rounded-full w-48 h-48 absolute top-0 right-0 right-[240px]"
          />
        </div>
        
        <br /><br /><br /><br />
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type your Idea
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

export default AiFormInput;
