import React, { useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../compoents/Spinner';
import Comment from '../../compoents/Comments';

function BackendPagination() {
  const pageDataLimit = 9;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const prevPage = useRef(null);

  const fetchComments = async () => {
    /** avoid repeat call api at 1st page */
    if (page === prevPage.current) return;
    prevPage.current = page;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${pageDataLimit}`);
    const data = await res.json();
    return data;
  };

  const loadFunc = async () => {
    const newPageData = await fetchComments();
    if (newPageData) {
      setItems([...items, ...newPageData]);
      setPage(page + 1);
      const hasMoreData = !(newPageData.length === 0 || newPageData.length < pageDataLimit);
      setHasMore(hasMoreData);
    } else setHasMore(false);
  };

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
                    {items.map((item) => (<Comment key={item.id} item={item} />))}
                </div>
            </div>
        </InfiniteScroll>
    </div>
  );
}

export default BackendPagination;