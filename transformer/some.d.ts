import { JsonArray } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerSome extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonArray: JsonFunction<JsonArray>;
}
export default JsonTransformerSome;
