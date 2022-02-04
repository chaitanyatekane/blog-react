const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Chaitanya's Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "5px",
          }}
        >
          {/* inline styling - dynamic value{} - javascript object{} - and key value pairs*/}
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
