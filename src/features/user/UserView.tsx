// - - - - - - - - - Redux Files
// *** Custom Hooks (useAppDispatch & useAppSelector)
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchUsers} from "./userSlice";

// - - - - - - - - - Main Component
const UserView = () => {
  // *** Redux Hooks
  const {loading, data, error} = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  // *** Fetch Users
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // *** Return JSX
  return (
    <div className="user-view w-fit mx-auto">
      <h1 className="user-header text-5xl text-center mb-10 bg-red-300 text-white py-3 rounded-md w-100 mx-auto">
        Users
      </h1>
      <div className="user-view-wrapper">
        {/* Pending */}
        {loading && (
          <p className="bg-green-300 text-[#333] p-1.5 rounded-sm">
            Loading Data...
          </p>
        )}
        {/* Fullfilled */}
        {!loading && error.length === 0 && (
          <div className="users bg-[#333] p-2.5 rounded-sm flex flex-col gap-2.5">
            {data.map((data) => (
              <div
                key={data.id}
                className="bg-green-300 text-[#333] p-1.5 rounded-sm"
              >
                {data.id} _ {data.name}
              </div>
            ))}
          </div>
        )}
        {/* Rejected */}
        {!loading && error.length !== 0 && (
          <div className="users bg-red-500 text-white p-2.5 rounded-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserView;
