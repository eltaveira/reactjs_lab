function capitalizeFirstLetter(str) {
  return str && str.length > 0
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : str;
}

export { capitalizeFirstLetter };
