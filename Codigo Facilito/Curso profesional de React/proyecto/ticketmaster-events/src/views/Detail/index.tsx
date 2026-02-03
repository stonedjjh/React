import { useParams } from "react-router";

const Detail = () => {
  const { eventId: id } = useParams<{ eventId: string }>();

  return <div>Detail con id {id}</div>;
};

export default Detail;
