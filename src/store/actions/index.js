
export const setDataByCategory = (shoppingData) => (dispatch) => {
    dispatch({
            type: "SET_DATA_BY_CATEGORY",
            payload: {shoppingData}
    })
}

