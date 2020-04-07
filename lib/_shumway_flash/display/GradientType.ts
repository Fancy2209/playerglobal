import { ASObject } from "../../avm2/nat/ASObject";

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
// Class: GradientType
export class GradientType extends ASObject {
  
  static classInitializer: any = null;
  static classSymbols: string [] = null; // [];
  static instanceSymbols: string [] = null; // [];
  
  constructor () {
    super();
  }
  
  // JS -> AS Bindings
  static LINEAR: string = "linear";
  static RADIAL: string = "radial";
  
  //80pro: todo:
  static Linear: number = 0;
  static Radial: number = 1;
  
  // AS -> JS Bindings

  static fromNumber(n: number): string {
    switch (n) {
      case GradientType.Linear:
        return GradientType.LINEAR;
      case GradientType.Radial:
        return GradientType.RADIAL;
      default:
        return null;
    }
  }

  static toNumber(value: string): number {
    switch (value) {
      case GradientType.LINEAR:
        return GradientType.Linear;
      case GradientType.RADIAL:
        return GradientType.Radial;
      default:
        return -1;
    }
  }
}