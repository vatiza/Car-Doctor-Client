const BookingTable = ({ booking }) => {
  const { img, customerFname, email, date, price, services } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
