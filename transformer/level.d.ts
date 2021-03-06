import { JsonString } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerLevel extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerLevel;
