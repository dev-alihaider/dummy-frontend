const LocationSearchBar = () => {
  return (
    <div className="relative rounded-md shadow-sm">
      <input
        type="text"
        name="location-search"
        id="location-search"
        className="block h-[2.75rem] w-[220px] rounded-l-md border border-r-0 border-[#94A3B8] bg-transparent px-3 py-1 text-gray-900 ring-0 placeholder:text-[#94A3B8] focus:outline-0 sm:text-sm sm:leading-6"
        placeholder="Location"
      />
    </div>
  );
};

export default LocationSearchBar;
