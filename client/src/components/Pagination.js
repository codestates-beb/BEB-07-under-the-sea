// 개조 필요함
// 라이브러리 사용 고려도 괜찮을듯 아래 링크 참조
// https://www.npmjs.com/package/react-js-pagination

const Pagination = ({ totalPage, limit, page, setPage }) => {
    const [currentPageArray, setCurrentPageArray] = useState([]);
    const [totalPageArray, setTotalPageArray] = useState([]);
  
    useEffect(() => {
      if (page % limit === 1) {
        setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
      } else if (page % limit === 0) {
        setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
      }
    }, [page]);
  
    useEffect(() => {
      const slicedPageArray = sliceArrayByLimit(totalPage, limit);
      setTotalPageArray(slicedPageArray);
      setCurrentPageArray(slicedPageArray[0]);
    }, [totalPage]);
  
    return (
      <PaginationWrapper>
        <FaAngleDoubleLeft onClick={() => setPage(1)} disabled={page === 1} />
        <FaAngleLeft onClick={() => setPage(page - 1)} disabled={page === 1} />
        <ButtonWrapper>
          {currentPageArray?.map((i) => (
            <PageButton
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </PageButton>
          ))}
        </ButtonWrapper>
        <FaAngleRight
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        />
        <FaAngleDoubleRight
          onClick={() => setPage(totalPage)}
          disabled={page === totalPage}
        />
      </PaginationWrapper>
    );
  };
  
  export default Pagination;