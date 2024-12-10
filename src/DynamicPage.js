import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function DynamicPage() {
  const { id } = useParams();
  const { qs, setQS } = useSearchParams();
  return (
    <div>
      DynamicPage:{id} - name : {qs.length("title")}
    </div>
  );
}
export default DynamicPage;
