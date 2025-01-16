const ProductRow = ({ name, price, stocked }) => {
    let rowStyle = {};
    if (!stocked) {
        rowStyle = { color: 'red' };
    }

    return (
        <tr style={rowStyle}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
};

export default ProductRow;
