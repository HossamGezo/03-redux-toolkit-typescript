// - - - - - - - - - Redux Files
// *** Custom Hooks (useAppDispatch & useAppSelector)
import {useAppDispatch, useAppSelector} from "../../app/hooks";
// *** Cake Actions (cakeOrdered & cakeRestocked)
import {cakeOrdered, cakeReStocked} from "./cakeSlice";

// - - - - - - - - - Main Component
const CakeView = () => {
  // *** Redux Hooks
  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();
  // *** Return JSX
  return (
    <div className="cake-view w-fit mx-auto">
      <h1 className="cake-header text-5xl text-center mb-10 bg-red-300 text-white py-3 rounded-md w-100 mx-auto">
        Buy Cake
      </h1>
      <div className="cake-view-wrapper flex items-center gap-5">
        <p className="number-of-cakes bg-[#333] text-white min-w-75 text-center rounded-sm py-1">
          Number Of Cakes Are:
          <span className="text-pink-300 ml-3">{numberOfCakes}</span>
        </p>
        <button
          className="bg-green-400 px-2.5 py-1 rounded-sm text-[#333] cursor-pointer hover:bg-green-600 hover:text-white active:bg-green-500 transition-colors duration-75 w-40"
          type="button"
          onClick={() => dispatch(cakeOrdered())}
        >
          Buy Cake
        </button>
        <button
          className="bg-green-400 px-2.5 py-1 rounded-sm text-[#333] cursor-pointer hover:bg-green-600 hover:text-white active:bg-green-500 transition-colors duration-75 w-40"
          type="button"
          onClick={() => dispatch(cakeReStocked(2))}
        >
          Restoked Cake
        </button>
      </div>
    </div>
  );
};

export default CakeView;
