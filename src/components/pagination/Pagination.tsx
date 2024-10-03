import { useNavigate } from "react-router-dom";
type PaginationProps = {
  page?: string;
};
const Pagination: React.FC<PaginationProps> = ({ page }) => {
  const nums = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const currentPage = page ? parseInt(page, 10) : 0;

  return (
    <div className="bg-gradient-to-b from-[#0000] to-red-950 py-6 w-full flex justify-center">
      <nav className="mt-6 flex justify-center">
        <ul className="inline-flex -space-x-px text-lg">
          {/* Botón Previous */}
          <li>
            <p
              onClick={() => {
                if (currentPage > 0) navigate(`/pages/${currentPage - 1}`);
              }}
              className={`flex items-center justify-center px-4 py-2 leading-tight text-white bg-blue-900 border-2 border-red-600 rounded-l-lg hover:text-yellow-500 hover:bg-red-700 transition duration-300 cursor-pointer ${
                currentPage === 42 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              &#9664; Previous
            </p>
          </li>

          {/* Números de página */}
          <li className="flex">
            {nums.map((_, i) => {
              const num = currentPage + i;
              return (
                <p
                  key={i}
                  onClick={() => {
                    navigate(`/pages/${num}`);
                  }}
                  className={`flex items-center justify-center px-4 py-2 leading-tight text-white bg-blue-900 border-2 border-red-600 hover:text-yellow-500 hover:bg-red-700 cursor-pointer transition duration-300 ${
                    num === currentPage
                      ? "bg-yellow-500 text-black shadow-lg"
                      : ""
                  }`}
                >
                  {num}
                </p>
              );
            })}
          </li>

          {/* Botón Next */}
          <li>
            <p
              onClick={() => {
                if (currentPage < 42) navigate(`/pages/${currentPage + 1}`);
              }}
              className={`flex items-center justify-center px-4 py-2 leading-tight text-white bg-blue-900 border-2 border-red-600 rounded-r-lg hover:text-yellow-500 hover:bg-red-700 transition duration-300 cursor-pointer ${
                currentPage === 42 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              Next &#9654;
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
