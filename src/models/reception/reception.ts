import { Prop, Schema } from '../../mongoose-types';

@Schema()
export default class Reception{
    _id: string;

    @Prop({type: String, index: true})
    docId: string;

    @Prop({type: String, index: true})
    patientId: string;

    @Prop({type: [{}]})
    prescriptions: any[]
}
