const getLanguages = (country) => {
  let result = "";
  for (let language of country.languages) {
    result += language.name + ", ";
  }
  // remove the space and comma on the last item
  return result.slice(0, -2);
};

export default getLanguages;
