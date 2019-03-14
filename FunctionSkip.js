/*********************************************************************
 * @license Function-Skip.js v0.1.0
 * Copyright (c) 2019 evin101
 * Released under the MIT license.
 * https://github.com/evin101/rpgmakermv-plugins/blob/master/LICENSE
 *********************************************************************/
 
/*:
 * @plugindesc This plug-in replaces the processing of the specified function with a blank function and skips the processing.
 * @author evin101
 * 
 * @param Target1
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target2
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target3
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target4
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target5
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target6
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target7
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target8
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target9
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target10
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target11
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target12
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target13
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target14
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target15
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target16
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target17
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target18
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target19
 * @desc Target function of the skips.
 * @default 
 * 
 * @param Target20
 * @desc Target function of the skips.
 * @default 
 * 
 * @help This plugin does not provide plugin commands.
 *
 */
/*:ja
 * @plugindesc このプラグインは指定した関数の処理をブランクに置き換えて処理をスキップします。
 * @author evin101
 * 
 * @param Target1
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target2
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target3
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target4
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target5
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target6
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target7
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target8
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target9
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target10
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target11
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target12
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target13
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target14
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target15
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target16
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target17
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target18
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target19
 * @desc スキップ対象の関数
 * @default 
 * 
 * @param Target20
 * @desc スキップ対象の関数
 * @default 
 * 
 * @help このプラグインにはプラグインコマンドはありません。
 *
 */

 (function() {

    // ------------------------------------------------------------------------------
    // get plugin name from document.currentScript;
    // ------------------------------------------------------------------------------
    var getPluginName = function() {
        var pluginPath = document.currentScript.src;
        var pluginFile = pluginPath.split('/').pop();
        pluginFile = pluginFile.split(/(\?|#)/)[0];
        return pluginFile.lastIndexOf('.') >= 0 ? pluginFile.substring(0, pluginFile.lastIndexOf('.')) : pluginFile;
    }

    // ------------------------------------------------------------------------------
    // Read Plugin parameters
    // ------------------------------------------------------------------------------
    var prefix = 'Target';
    var parameters = PluginManager.parameters(getPluginName());
   
    var targets = [];
    for (var key in parameters) {
        if (!key.startsWith(prefix)) continue;
        if (parameters[key] && parameters[key].trim().length > 0) {
            targets.push(parameters[key].trim());
        }
    }

    // ------------------------------------------------------------------------------
    // Inject blank code to targets
    // ------------------------------------------------------------------------------
    for (var index = 0; index < targets.length; index++) {
        var target = targets[index];
        var original = eval(target);
        if (original && typeof original === 'function') {
            eval(target + ' = function() {};');
        }
    }
 })();