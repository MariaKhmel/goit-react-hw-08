import { useSelector } from "react-redux";
import { selectError } from "../../redux/selectors";

const ErrorMessage = () => {
  const error = useSelector(selectError);
  return (
    <>
      <div>Something went wrong... </div>
      <p>{error}</p>
    </>
  );
};

export default ErrorMessage;
