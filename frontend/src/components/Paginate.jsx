import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false }) => {
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const path = !isAdmin
      ? `/page/${pageNumber}`
      : `/admin/productlist/${pageNumber}`;
    navigate(path);
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            onClick={() => handlePageChange(x + 1)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
