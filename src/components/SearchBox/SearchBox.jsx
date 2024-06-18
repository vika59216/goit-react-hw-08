import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const visibleContacts = e => dispatch(changeFilter(e.target.value));


  return (
    <div className={css.findContainer}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter your search query"
        value={filter}
        onChange={visibleContacts}
      />
    </div>
  );
};

export default SearchBox;