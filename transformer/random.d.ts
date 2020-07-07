import { JsonObject } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerRandom extends JsonTransformer {
    constructor({ init, ..._ }?: JsonTransformerParameters);
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerRandom;
