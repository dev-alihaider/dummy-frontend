const FlowerSearchBar = () => {
  return (
    <div className="relative rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.33317 2.33317C4.57175 2.33317 2.33317 4.57175 2.33317 7.33317C2.33317 10.0946 4.57175 12.3332 7.33317 12.3332C10.0946 12.3332 12.3332 10.0946 12.3332 7.33317C12.3332 4.57175 10.0946 2.33317 7.33317 2.33317ZM0.666504 7.33317C0.666504 3.65127 3.65127 0.666504 7.33317 0.666504C11.0151 0.666504 13.9998 3.65127 13.9998 7.33317C13.9998 8.87376 13.4773 10.2923 12.5997 11.4212L17.0891 15.9106C17.4145 16.236 17.4145 16.7637 17.0891 17.0891C16.7637 17.4145 16.236 17.4145 15.9106 17.0891L11.4212 12.5997C10.2923 13.4773 8.87376 13.9998 7.33317 13.9998C3.65127 13.9998 0.666504 11.0151 0.666504 7.33317Z"
            fill="#94A3B8"
          />
        </svg>
      </div>
      <input
        type="text"
        name="location-search"
        id="location-search"
        className="block h-[2.75rem] w-[220px] rounded-r-md border border-[#94A3B8] bg-transparent px-3 py-1 pl-10 text-gray-900 ring-0 placeholder:text-[#94A3B8] focus:outline-0 sm:text-sm sm:leading-6"
        placeholder="Search by flowers"
      />
    </div>
  );
};

export default FlowerSearchBar;
