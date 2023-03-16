import { useParams } from "react-router-dom"
import FormEditPlan from "../../components/Forms/FormEditPlan"


export default function PlanEditPage() {

    const { planId } = useParams()


    return (<>
        <FormEditPlan planId={planId} />
    </>)
}