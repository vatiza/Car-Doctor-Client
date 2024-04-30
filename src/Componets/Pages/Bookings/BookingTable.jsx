const BookingTable = ({ booking,handleRemove }) => {
  const { _id, img, customerFname, email, date, price, services } = booking;


  return (
    <tr>
      <th>
        <button
          onClick={() => {
            handleRemove(_id);
          }}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{services}</div>
            <div className="text-sm opacity-50">$ {price}</div>
          </div>
        </div>
      </td>
      <td>
        {customerFname}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingTable;
