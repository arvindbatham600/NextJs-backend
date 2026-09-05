import Image from "next/image";
import axios from "axios";
import UserCard from "./components/UserCard";

// writing a function to fetch the user details 
async function fetchUserDetails() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
   const response = await axios.get(
     //  "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
     "http://localhost:3000/api/user"
   );
   return response.data;
 }
export default async function Home() {
  // call the function here and fetch the data 
  const userData = await fetchUserDetails();
  // console.log('user information:', userData); 
  return (
    <div>
      Hello from Next.js Full stack application
      {/* // trying to pass the client component userData */}
      <UserCard userDetails={userData} />
    </div>
  );
}
