import { JsonString } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerTemplate extends JsonTransformer {
    constructor({ init, ..._ }?: JsonTransformerParameters);
    transformerJsonString: JsonFunction<JsonString>;
}
export default JsonTransformerTemplate;
