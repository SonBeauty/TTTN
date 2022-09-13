    // Them san pham vao gio hang

    export const addCart = (product)=>{
        return{
            type: "ADDITEM",
            payload: product
        }
    }
    export const delCart = (product)=>{
        return{
            type: "DELITEM",
            payload: product
        }
    }
    export const increase = (product)=>{
        return{
            type:"INCREASE",
            payload:product
        }
    }
    export const decrease = (product)=>{
        return{
            type:"DECREASE",
            payload:product
        }
    }