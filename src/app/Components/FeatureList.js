

const FeatureList = () => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {/* Feature 1 */}
      <div className="p-6 bg-black rounded-lg shadow-md border-2 hover:border-gray-700 hover:animate-bounce">
        <h2 className="text-white underline decoration-sky-500 text-xl font-semibold mb-4">Feature 1</h2>
        <p className="text-gray-700">Description of feature 1.</p>
      </div>

      {/* Feature 2 */}
      <div className="p-6 bg-black rounded-lg shadow-md border-2 hover:border-gray-700 hover:animate-bounce">
        <h2 className="text-white underline decoration-stone-300	 text-xl font-semibold mb-4">Feature 2</h2>
        <p className="text-gray-700">Description of feature 2.</p>
      </div>

      {/* Feature 3 */}
      <div className="p-6 bg-black rounded-lg shadow-md border-2 hover:border-gray-700 hover:animate-bounce">
        <h2 className="text-white underline decoration-indigo-500 text-xl font-semibold mb-4">Feature 3</h2>
        <p className="text-gray-700">Description of feature 3.</p>
      </div>
    </div>
  );
};

export default FeatureList;
