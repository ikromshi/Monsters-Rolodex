import "./search-box-style.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => (
    <input 
        className={`search-box ${className}`} 
        type="search" 
        placeholder={placeholder} 
        onChange={onChangeHandler} /**
        * don't have to pass the event, since the function {} is a reference to onSearchChange
        */
    />
)

export {SearchBox as default};