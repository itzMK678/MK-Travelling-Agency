const DetailPage = ({ params }) => {
  const { id } = params;

  const packages = {
    1: { name: "Hunza Valley" },
    2: { name: "Murree Tour" },
  };

  const pkg = packages[id];

  return (
    <div>
      <h1>{pkg.name}</h1>
      <p>This is detail page for ID: {id}</p>
    </div>
  );
};

export default DetailPage;