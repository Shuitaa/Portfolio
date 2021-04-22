function SearchInput() {
  return (
    <div className="search">
      {/* <input type="text" className="search__input" placeholder="Search"/> */}
      <div className="search__container">
        <div>
          <span className="search__icon"></span>
          <span>Search</span>
        </div>
      </div>
      <div className="results"></div>
    </div>
  );
}

export default SearchInput;
