const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map(dt => {
          const elements = [];
          elements.push(
            <tr key={dt.title}>
              <th colSpan='2' className='text-left capitalize pt-2'>
                {dt.title}
              </th>
            </tr>
          );
          dt.cells.forEach(([cell_1, cell_2]) => {
            elements.push(
              <tr key={cell_1}>
                <td>{cell_1}</td>
                <td className='text-sm pl-2'>{cell_2}</td>
              </tr>
            );
          });

          return elements;
        })}
      </tbody>
    </table>
  );
};

export default Table;
