// import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
// import { setFilter } from '../../redux/filtersSlice';

const SearchBox = ({ filter, onFilter }) => {
    // const dispatch = useDispatch();
    // const onAddSearchValue = (e) => {
    //     const value = e.target.value.trim();
    //     console.log(value);
    //     const action = setFilter(value);
    //     dispatch(action);
    // }

    const onAddSearchValue = (e) => {
        const value = e.target.value.trim();
        onFilter(value);
    }
    
    return (
        <div className={css.filter}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input}
                type="text"
                value={filter}
                onChange={onAddSearchValue}
            />
        </div>
    );
};

export default SearchBox;