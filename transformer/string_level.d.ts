import { JsonString } from './interfaces';
import { JsonFunction } from './interfaces';
import { JsonTransformer, JsonTransformerParameters } from './transformer';
export declare class JsonTransformerStringLevel extends JsonTransformer<JsonString> {
    constructor(options?: JsonTransformerParameters);
    transformerJsonStringBefore: JsonFunction<JsonString>;
}
export default JsonTransformerStringLevel;
