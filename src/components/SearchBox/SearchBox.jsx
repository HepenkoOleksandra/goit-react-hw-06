import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
   const onAddSearchValue = (e) => { onFilter(e.target.value) }
    
    return (
        <div className={css.filter}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input}
                type="text"
                value={value}
                onChange={onAddSearchValue}
            />
        </div>
    );
};

export default SearchBox;