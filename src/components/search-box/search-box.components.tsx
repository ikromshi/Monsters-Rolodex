import { ChangeEvent } from "react";
import "./search-box-style.css";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({ className, onChangeHandler, placeholder }: SearchBoxProps) => (
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


/**
interface ISearchBoxProps {
    className: string;
    placeholder?: string;
};
interface ISearchBoxProps { // extending the interface
    onChangeHandler: (a: string) => void;
};

VS

type searchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (a: string) => void;
};

-> const SearchBox = ({ className, placeholder, onChangeHandler}: SearchBoxProps) => {
    ........
};



type CanadianAddress = {
    street: string;
    province: string;
};

type AmericanAddress = {
    street: string;
    state: string;
};

type Address = CanadianAddress | AmericanAddress;

const address: Address = {
    street: "bollocks street",
    state: "Wash",
};

 */

