export const BACKEND_BASE_PATH = "http://localhost:8000";

const ApiPath = {
    Auth: {
        register: "/auth/register",
        login: "/auth/login",
        currentUser: "/auth/current-user"
    },
    Shop: {
        products: "/products",
        cartItem: "/cart-items",
        
    }
}



export default ApiPath;