import { FormEvent, useState } from "react";
import "./Search.scss";

interface SearchProps {
    getTypeOfProductInSearch(product: string): void;
}

const Search: React.FC<SearchProps> = ({getTypeOfProductInSearch}) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const cleanInput = event.currentTarget.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    return (
        <div className="search">
            <input
                value={searchTerm}
                onInput={handleInput}
                className="search__input"
                type="text"
            />
            {getTypeOfProductInSearch(searchTerm) as unknown as string}
        </div>
    );
};

export default Search;
