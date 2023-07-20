import React, { useEffect, useState } from 'react'
import WithParams from '../../components/WithParams';
import axios from 'axios';



function Store(props) {
  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      try {
          const response = await axios.get(`https://some-data.onrender.com/stores/${props.params.id}`);
          const data = response.data;
          setStore(data);
      } catch (error) {
          setError('Error While Fetching')
      } finally {
          setIsLoading(false);
      }
  };

  useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.params.id]);

  return (
      <div>
          {!isLoading && (
              <div className="store__details">
                  <h1>Details:</h1>
                  <p>Store Id: {store.id}</p>
                  <p>Store Name: {store.name}</p>
                  <p>Store Location: {store.cities}</p>
                  <span className="error__message">{error}</span>
              </div>
          )}
      </div>
  );
}

export default WithParams(Store);

/**
 * WithParams 
 * صراحتاً هاي بحسها عبارى عن موصل بتنقلك 
 * البروبس إللي في المكان الل أجت منو
 * 
 * الان مش ال إي دي وصلك كل الهتعملو إنك هتعمل ركوست طلب 
 * هتجيب الداتا تبع العنصر هاد او ال إي دي هاد او البووست هاد
 * #مش هنختلف
 *   طبعاُ أحنا الركوست هاد هنحطو بدالة كمبوننت دد ماونت 
 * 
 * طبعاُ ما بدنا ننسى انو لازمنا ستيت خاصة بالصفحة هاد إللي هي بوست بيج 
 * اول اشي لزمنا بالستيت بوست ورح يكون فاضي و إز لودنق أكيد 
 * وإز إيدتنق عشان اعدل فيما بعد
 * 
 */