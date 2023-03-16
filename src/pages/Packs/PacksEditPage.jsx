import { useParams } from "react-router-dom"
import FormEditPack from "../../components/Forms/FormEditPack"


export default function PacksEditPage() {

    const { packId } = useParams()


    return (<>
        <FormEditPack packId={packId} />
    </>)
}
