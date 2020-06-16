import { JsonString, JsonFunction } from './interfaces';
import { JsonTransformerParameters } from './transformer';
import { JsonTransformerStringTemplate } from './string_template';
export declare class JsonTransformerStringTemplateAfter extends JsonTransformerStringTemplate {
    constructor(_?: JsonTransformerParameters);
    transformerJsonStringAfter: JsonFunction<JsonString>;
}
export default JsonTransformerStringTemplate;
