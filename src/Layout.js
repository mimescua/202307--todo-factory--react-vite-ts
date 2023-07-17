function Layout({ children }) {
  return (
    <div className="container">
      <section className="sidebar"></section>
      <main className="main">
        <div className="search"></div>
        {children}
      </main>
    </div>
  );
}

export { Layout };
