import { getAuthorizationHeader } from "../../helpers/authHelpers";
import { CartItemRequestType } from "../../models/Cart";
import ApiPath from "../endpoint";
import getPath from "../utils";

export async function getProductList(): Promise<any> {
    const response = await fetch(getPath(ApiPath.Shop.products), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...getAuthorizationHeader(),
        },
    });
    if (response.status === 200) {
        const data = await response.json();

        return {
            body: data, 
            isSuccess: true,
        }
    }
    return {
        isSuccess: false,
    }
} 

export async function addCartItem(cartItem: CartItemRequestType): Promise<any> {
    const response = await fetch(getPath(ApiPath.Shop.cartItem), {
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: {
            "Content-Type": "application/json",
            ...getAuthorizationHeader(),
        },
    });
    if (response.status === 201) {
        const data = await response.json();

        return {
            body: data, 
            isSuccess: true,
        }
    }
    return {
        isSuccess: false,
    }
}