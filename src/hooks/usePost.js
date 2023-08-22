import {useQuery} from 'react-query';
import axios from 'axios';

const fetchPost = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const usePost = () => useQuery('posts', fetchPost);
export default usePost;
