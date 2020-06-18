import { JsonString } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerLevel extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerLevel;
