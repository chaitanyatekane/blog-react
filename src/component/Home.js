import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Chaitanya");
  const [age, setAge] = useState(19);

  const handleClick = () => {
    console.log(name + age);
    setName("Tekane");
    setAge(20);
    console.log(name + age);
  };

  return (
    <div className="home">
      <h2>
        My name is {name} and I am {age} years old
      </h2>
      <button onClick={handleClick}>Click To Change</button>
      <p>
        {name}
        {age}
      </p>
    </div>
  );
};

export default Home;
