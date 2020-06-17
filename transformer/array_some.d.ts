import { JsonArray } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerArraySome extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonArray: JsonFunction<JsonArray>;
}
export default JsonTransformerArraySome;
