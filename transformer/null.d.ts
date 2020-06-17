import { JsonNull } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerNull extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonNull: JsonFunction<JsonNull>;
}
export default JsonTransformerNull;
