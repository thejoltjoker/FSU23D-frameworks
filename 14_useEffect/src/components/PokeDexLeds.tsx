const PokeDexLeds = () => {
  return (
    <div className="flex rounded-2xl border-2 border-b-8 border-red-800 p-4">
      <div className="m-1 size-16 rounded-full border-4 border-white bg-sky-500 outline outline-1 outline-gray-900"></div>
      <div className="m-1 size-4 rounded-full border-2 border-red-200 bg-rose-600 outline outline-1 outline-gray-900"></div>
      <div className="m-1 size-4 rounded-full border-2 border-yellow-200 bg-yellow-500 outline outline-1 outline-gray-900"></div>
      <div className="m-1 size-4 rounded-full border-2 border-green-200 bg-green-600 outline outline-1 outline-gray-900"></div>
    </div>
  );
};

export default PokeDexLeds;
