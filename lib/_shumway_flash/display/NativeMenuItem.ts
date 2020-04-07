import { release, somewhatImplemented } from "../../base/utilities/Debug";
import { EventDispatcher } from "../../as3webFlash/events/EventDispatcher";

/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: NativeMenuItem
export class NativeMenuItem extends EventDispatcher {
  
  // Called whenever the class is initialized.
  static classInitializer: any = null;

  // List of static symbols to link.
  static classSymbols: string [] = null; // [];
  
  // List of instance symbols to link.
  static instanceSymbols: string [] = null; // [];
  
  constructor () {
    super();
    this._enabled = true;
  }

  _enabled: boolean;
  get enabled(): boolean {
    release || somewhatImplemented("public flash.display.NativeMenuItem::get enabled");
    return this._enabled;
  }
  set enabled(isSeparator: boolean) {
    isSeparator = !!isSeparator;
    release || somewhatImplemented("public flash.display.NativeMenuItem::set enabled");
    this._enabled = isSeparator;
  }
}