export default getMessage = (message) => {
  return {
    type: "GET_MESSAGE",
    payload: message
  };
}