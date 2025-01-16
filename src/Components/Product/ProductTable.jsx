import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = () => {
    return (
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow category="Frutas" />
                <ProductRow name="Manzana" price="$1" stocked />
                <ProductRow name="Dragonfruit" price="$1" stocked />
                <ProductRow name="Passionfruit" price="$2" />
                <ProductCategoryRow category="Vegetaes" />
                <ProductRow name="Espinaca" price="$2" stocked />
                <ProductRow name="Calabaza" price="$4" />
                <ProductRow name="Arvejas" price="$1" stocked />
            </tbody>
        </table>
    );
};

export default ProductTable;
