// displaying all the user details in this card
'use client'

interface userCardProps {
    userDetails: {
        name: string;
        email: string;
        address: {
            city: string;
            state: string;
            houseNumber: string;
        }
    }
}

const UserCard = ({userDetails}: userCardProps) => {
  const { name, email, address } = userDetails;
  return (
    <div className=" h-screen flex justify-center items-center p-4">
      <div className="bg-white text-black p-4 rounded shadow-md">
        <p> Name: {name}</p>
        <p> Email: {email}</p>
        <p>
          {" "}
          Address: {address.city}, {address.state}, {address.houseNumber}
        </p>
      </div>
    </div>
  );
};

export default UserCard;