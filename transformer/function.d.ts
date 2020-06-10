import { JsonTransformerParameters } from './interfaces';
import { JsonTransformerString, JsonTransformerArray, JsonTransformerMap } from './interfaces';
import { JsonTransformer } from './root';
export declare class JsonTransformerFunction extends JsonTransformer {
    constructor(options?: JsonTransformerParameters);
    private v_functions_before;
    private v_functions_after;
    protected transformStringBefore: JsonTransformerString;
    protected transformArrayBefore: JsonTransformerArray;
    protected transformMapBefore: JsonTransformerMap;
    protected transformStringAfter: JsonTransformerString;
    protected transformArrayAfter: JsonTransformerArray;
    protected transformMapAfter: JsonTransformerMap;
}
export default JsonTransformerFunction;
