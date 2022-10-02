import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../compoents/Spinner';
import Card from '../../compoents/Card';

/** avoid repeat call api in react strict mode */
let didInit = false;

function FrontEndPagination() {
  const [totalUserData, setTotalUserData] = useState([]);
  const [page, setPage] = useState(1);
  const perPageCount = 9;
  const totalPage = Math.ceil(totalUserData.length / perPageCount);
  const currentDataLength = page * perPageCount;
  const [hasMore, setHasMore] = useState(totalPage > 1);

  const loadFunc = () => {
    const newPage = page + 1;
    setPage(newPage);
    if (newPage >= totalPage) setHasMore(false);
  };

  useEffect(() => {
    if (didInit) return;
    didInit = true;
    const fetchData = async () => {
      const res = await fetch(`https://randomuser.me/api/?results=500`);
      const data = await res.json();
      console.log(data)
      setTotalUserData(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="Wrapper">
        <InfiniteScroll
          pageStart={1}
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={<Spinner />}
          useWindow={false}
        >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {totalUserData.slice(0, currentDataLength).map((item) => (
              <Card 
                picture={item.picture.large}
                name={`${item?.name?.first} ${item?.name?.last}`}
                phone={item.phone}
                cell={item.cell}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default FrontEndPagination;