import { FormEvent, useState } from "react";
import "./Search.scss";

interface SearchProps {
    getTypeOfProduct(product: string): void;
}

const Search: React.FC<SearchProps> = ({getTypeOfProduct}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const cleanInput = event.currentTarget.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    // https://stackoverflow.com/questions/65582975/make-a-search-filter-with-react-and-typescript

    return (
        <div className="search">
            <input
                value={searchTerm}
                onInput={handleInput}
                className="search__input"
                type="text"
            />
            {getTypeOfProduct(searchTerm) as unknown as string}
        </div>
    );
};

export default Search;
