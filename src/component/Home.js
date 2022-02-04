const Home = () => {
  const handleClick = () => {
    console.log("Button 100 Clicked");
  };

  const handleClick2 = (name) => {
    console.log(`${name} Clicked Me`);
  };

  const handleClick3 = (e) => {
    console.log(e.target);
  };

  const handleClick4 = (name, e) => {
    console.log(`${name} Clicked Me & ${e.target}`);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>100</button>
      <button onClick={() => handleClick2("Rahul")}>200</button>
      <button onClick={handleClick3}>300</button>
      <button onClick={(e) => handleClick4("Deepak", e)}>400</button>
    </div>
  );
};

export default Home;
