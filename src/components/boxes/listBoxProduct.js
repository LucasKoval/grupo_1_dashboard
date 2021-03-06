import React , { useState, useEffect } from "react";
import { 
    BASE_API_USERS_URL,
    BASE_API_USERS_LIST_URL,
    BASE_API_PRODUCTS_URL,
    BASE_API_PRODUCTS_LIST_URL,
    BASE_API_MODELS_URL
} from '../../apis/baseUrl';
import Loader from '../../assets/Loader';
import apiCall from '../../apis/apiCall';

function ListBoxProducts(props) {
    let apiUrl = props.apiUrl;
    switch(apiUrl) {
        case 'users':
            apiUrl = BASE_API_USERS_URL;
        break;
        case 'usersList':
            apiUrl = BASE_API_USERS_LIST_URL;
        break;
        case 'products':
            apiUrl = BASE_API_PRODUCTS_URL;
        break;
        case 'productsList':
            apiUrl = BASE_API_PRODUCTS_LIST_URL;
        break;
        case 'models':
           apiUrl = BASE_API_MODELS_URL;
        break;
        case undefined:
            apiUrl = undefined;
        break;
        default:
            apiUrl = BASE_API_PRODUCTS_URL;
        break;
    }

   
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [previousPages, setPreviousPages] = useState(null);
    const [nextPages, setNextPages] = useState(null);
    
    const getPages =()=>{
        apiCall(apiUrl + "?page=" + page)
        .then(response => {
            setProducts(response.data.data.products)
            setPreviousPages(response.data.meta.previousPage)
            setNextPages(response.data.meta.nextPage)

        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }

    useEffect(() => {
        getPages();
    }, []);

    useEffect(() => {
        getPages();
    }, [page, previousPages, nextPages]);


    if (loading) return <Loader />;
    if (error) return "Error!";

    console.log('salio del anterior '+previousPages)
    console.log('salio del siguiente '+nextPages)
    
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <ul class="list-group list-group-flush">
                            {
                                products && 
                                products.map((product) =>{
                                    return <li class="list-group-item">{product.model.name+' - Color:'+product.model.color.name+' - Talle:'+product.size.number+' - Precio:$'+product.price}</li>
                                })
                            }
                            <div aria-label="Page navigation example">
                                <ul class="pagination d-flex justify-content-center">
                                    <li class="page-item"><button class="page-link" onClick={()=>{previousPages && setPage(page - 1 )}}>Previous</button></li>
                                    <li class="page-item"><button class="page-link">{page}</button></li>
                                    <li class="page-item"><button class="page-link" onClick={()=>{nextPages && setPage(page + 1 )}}>Next</button></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ListBoxProducts;