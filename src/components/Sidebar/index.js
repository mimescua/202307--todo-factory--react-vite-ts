import "./Sidebar.css";

function Sidebar({ children }) {
  return (
    <section className="sidebar">
      <div className="profile">
        <h3>Sam Oso</h3>
        <p>samoso@gmail.com</p>
      </div>
      {children}
    </section>
  );
}
export { Sidebar };
