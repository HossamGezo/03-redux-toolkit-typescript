// - - - - - - - - - Redux Files
// *** Custom Hooks (useAppDispatch & useAppSelector)
import {useAppDispatch, useAppSelector} from "../../app/hooks";
// *** Icecream Actions (icecreamOrdered & icecreamRestoked)
import {icecreamOrdered, icecreamRestoked} from "./icecreamSlice";

// - - - - - - - - - Main Component
const IcecreamView = () => {
  // *** Redux Hooks
  const numberOfIcecreams = useAppSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useAppDispatch();
  // *** Return JSX
  return (
    <div className="icecream-view w-fit mx-auto">
      <h1 className="icecream-header text-5xl text-center mb-10 bg-red-300 text-white py-3 rounded-md w-100 mx-auto max-sm:max-w-90">
        Buy Icecream
      </h1>
      <div className="icecream-view-wrapper flex items-center gap-5 max-md:flex-col">
        <p className="number-of-icecreams bg-[#333] text-white min-w-75 text-center rounded-sm py-1">
          Number Of Icecreams Are:
          <span className="text-pink-300 ml-3">{numberOfIcecreams}</span>
        </p>
        <div className="btns flex gap-5">
          <button
            className="bg-green-400 px-2.5 py-1 rounded-sm text-[#333] cursor-pointer hover:bg-green-600 hover:text-white active:bg-green-500 transition-colors duration-75 w-40"
            type="button"
            onClick={() => dispatch(icecreamOrdered())}
          >
            Buy Icecream
          </button>
          <button
            className="bg-green-400 px-2.5 py-1 rounded-sm text-[#333] cursor-pointer hover:bg-green-600 hover:text-white active:bg-green-500 transition-colors duration-75 w-40"
            type="button"
            onClick={() => dispatch(icecreamRestoked(2))}
          >
            Restoked Icecream
          </button>
        </div>
      </div>
    </div>
  );
};

export default IcecreamView;
