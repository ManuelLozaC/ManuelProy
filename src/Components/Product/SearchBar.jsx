const SearchBar = () => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <input type="text" placeholder="Busqcar..." style={{ marginRight: '10px' }} />
            <label>
                <input type="checkbox" />
                Solo productos con stock
            </label>
        </div>
    );
};

export default SearchBar;
