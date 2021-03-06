import "reflect-metadata";
export declare const CamembertFormKey: unique symbol;
/**
 * Camembert form decorator
 *
 * @param middleware the middleware method to execute, the last parameter will be the form instance filled. Handy
 * if you want to validated your form before enter into the controller action.
 *
 * @returns {(target:Object)=>undefined}
 * @constructor
 */
export declare function CamembertForm(middleware: (req: any, res: any, next: any, form: Object) => void): (target: Object) => void;
