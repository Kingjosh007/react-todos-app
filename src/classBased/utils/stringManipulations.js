const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
const capitalizeEveryWord = (str) => str.split(' ').map((word) => capitalize(word)).join(' ');

export { capitalize, capitalizeEveryWord };
