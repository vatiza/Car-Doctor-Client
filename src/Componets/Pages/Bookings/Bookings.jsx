import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import BookingTable from "./BookingTable";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleRemove = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfull");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center font-bold text-warning">
        My Bookings :{bookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Remove</th>
              <th>Service Name</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((bookking) => (
              <BookingTable
                key={bookking._id}
                booking={bookking}
                handleRemove={handleRemove}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
