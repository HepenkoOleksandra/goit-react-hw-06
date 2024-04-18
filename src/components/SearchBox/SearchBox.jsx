import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
    return (
        <div className={css.filter}>
            <span className={css.span}>Find contacts by name</span>
            <input className={css.input}
                type="text"
                value={value}
                onChange={(e) => { onFilter(e.target.value) }}
            />
        </div>
    );
};

export default SearchBox;