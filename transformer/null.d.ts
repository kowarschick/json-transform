import { JsonNull } from './types';
import { JsonFunction } from './types';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerNull extends JsonTransformer {
    constructor(_?: JsonTransformerParameters);
    transformerJsonNull: JsonFunction<JsonNull>;
}
export default JsonTransformerNull;
