import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
    return (
        <div>
            <h1>Tabla de productos con filtro</h1>
            <SearchBar />
            <ProductTable />
        </div>
    );
};

export default FilterableProductTable;
