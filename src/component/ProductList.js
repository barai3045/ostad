async function getData(){
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    return data;
}
const ProductList = async () => {
    let data = await getData()
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default ProductList;