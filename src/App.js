import "./App.css";

function App() {
  const title = "Welcome to new blog";
  const likes = 50;
  const link = "https://www.google.com/";

  // whatever you are outputting to screen all gets converted into string
  // we cannot output boolean and object
  // const persons = { name: "rahul", age: 20 };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{persons}</p> */}
        <p>{10}</p>
        <p>{"hello chaitanya"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link} target="_blank">
          Go To Google
        </a>
      </div>
    </div>
  );
}

export default App;
