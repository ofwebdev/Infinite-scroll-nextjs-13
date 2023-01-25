import Cookies from 'js-cookie';

const QUERY = 'query';

const setQuery = (value:string) => Cookies.set(QUERY, value);
const getQuery = (value:string) => Cookies.get(QUERY) || '';


export {setQuery, getQuery}
