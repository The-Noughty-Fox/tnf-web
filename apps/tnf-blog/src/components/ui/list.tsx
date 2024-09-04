type ListProps = {
  items: string[];
};

export const List = ({ items }: ListProps) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {items.map((item) => (
        <li key={item} className="flex gap-x-4 py-5">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
};
