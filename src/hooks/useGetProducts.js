import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /* fetch(API)
            .then((res) => res.json())
            .then((response) => {
                setProducts(response);
                setIsLoading(false);
            });
    }, []);

    return { products, isLoading }; */
    const fetchData = async () => {
        const response = await axios(API);
        setProducts(response.data);
    }
    fetchData();
}, [API])
return products;
};

export default useGetProducts;
