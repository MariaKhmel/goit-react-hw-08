import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.searchbox}>
      <p>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={filterValue}
      />
    </div>
  );
};

export default SearchBox;
