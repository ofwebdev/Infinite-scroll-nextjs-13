import Cookies from 'js-cookie';

const QUERY = 'query';

const setQuery = (value:string) => Cookies.set(QUERY, value);
const getQuery = () => Cookies.get(QUERY) || '';


export {setQuery, getQuery}
