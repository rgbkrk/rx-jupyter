import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/map';

/**
 * Creates the AJAX settings for a call to the kernelspecs API.
 *
 * @param {Object}  serverConfig  - The server configuration
 *
 * @return  {Object}  The settings to be passed to the AJAX request
 */
export function createSettingsForList(serverConfig) {
  const url = `${serverConfig.endpoint}/api/kernelspecs`;
  return {
    url,
    crossDomain: serverConfig.crossDomain,
    responseType: 'json',
  };
}

/**
 * Creates an AjaxObservable for listing avaialble kernelspecs.
 *
 * @param {Object}  serverConfig  - The server configuration
 *
 * @return  {Object}  An Observable with the request response
 */
export function list(serverConfig) {
  return ajax(createSettingsForList(serverConfig));
}
