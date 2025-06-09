import { useContext } from "react";
import UserContext from "../context/userDetailContext";

const NewProfileCard = () =>
{
   const user = useContext(UserContext);
   return(
    <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-80'>
        <img src={user.avatar} alt='User Avatar' className='w-24 h-24 rounded-full shadow-md mb-4 object-cover' />
        <h2 className='text-xl font-semibold text-gray-900'>{user.name}</h2>
        <p className="text-gray-600 text-center mt-2">{user.bio}</p>
        <div className="mt-4">
            <p className="text-gray-500 text-sm">LOcation:{user.loction}</p>
            <p className="text-green-500 text-sm">Email:{user.email}</p>
        </div>
    </div>
   );
};

export default NewProfileCard;
