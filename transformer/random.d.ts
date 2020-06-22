import { JsonObject } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerRandom extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonObject: JsonFunction<JsonObject>;
}
export default JsonTransformerRandom;
