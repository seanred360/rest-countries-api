const getCurrencies = (country) => {
  let result = "";
  for (let currency of country.currencies) {
    result += currency.name + ", ";
  }
  // remove the space and comma on the last item
  return result.slice(0, -2);
};

export default getCurrencies;
