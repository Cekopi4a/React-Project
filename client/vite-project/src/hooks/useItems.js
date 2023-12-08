import { useState } from "react";
import * as itemService from '../service/itemService';

export default function useItems() {
    const [items,setItems] = useState([]);

    useEffect(() => {
        itemService.getAll()
        .then(result => setItems(result));
     },[]);

     return{
        id,
        items,
      }

}