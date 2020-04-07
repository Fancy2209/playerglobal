import { DisplayObject, DisplayObjectDirtyFlags } from "./DisplayObject";
import { assert, axCoerceString, PixelSnapping, Bounds } from "@awayjs/graphics";
import { release } from "../../base/utilities/Debug";
import { constructClassFromSymbol } from "../../avm2/constructClassFromSymbol";
import { BitmapSymbol, BitmapData } from './BitmapData';
import { Errors } from '../../avm2/errors';

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
// Class: Bitmap
export class Bitmap extends DisplayObject {
  
  // Called whenever the class is initialized.
  static classInitializer: any = null;

  _symbol: BitmapSymbol;
  applySymbol() {
    release || assert(this._symbol);
    this._initializeFields();
    var symbol = this._symbol;
    var symbolClass = symbol.symbolClass;
    // If the symbol class inherits from Bitmap, we are already within its initializer.
    // Make sure to create a BitmapData instance here to avoid recursively calling the
    // initializer again.
    var bitmapClass = Bitmap.axClass;
    if (bitmapClass.dPrototype.isPrototypeOf((<any>symbolClass).dPrototype)) {
      symbolClass = BitmapData.axClass;
    }
    // TODO: I don't think BitmapData symbol objects can change, so they don't need back
    // references to this Bitmap.
    this._bitmapData = constructClassFromSymbol(symbol, symbolClass);
    this._pixelSnapping = null;
    this._smoothing = null;
    this._setFillAndLineBoundsFromWidthAndHeight(symbol.width * 20 | 0, symbol.height * 20 | 0);
  }

  // List of static symbols to link.
  static classSymbols: string [] = null; // [];
  
  // List of instance symbols to link.
  static instanceSymbols: string [] = null; // [];
  
  constructor (bitmapData: BitmapData = null, pixelSnapping: string = "auto", smoothing: boolean = false) {
    super();
    if (this._symbol && !this._fieldsInitialized) {
      this.applySymbol();
    }
    if (!this._symbol) {
      this.bitmapData = bitmapData;
      this._pixelSnapping = axCoerceString(pixelSnapping);
      this._smoothing = !!smoothing;
    }
  }

  _pixelSnapping: string;
  _smoothing: boolean;
  _bitmapData: BitmapData;

  get pixelSnapping(): string {
    return this._pixelSnapping;
  }

  set pixelSnapping(value: string) {
    console.log("todo: Bitmap.pixelSnapping");
    /*if (PixelSnapping.toNumber(value) < 0) {
      this.sec.throwError("ArgumentError", Errors.InvalidEnumError, "pixelSnapping");
    }*/
    this._pixelSnapping = axCoerceString(value);
  }

  get smoothing(): boolean {
    return this._smoothing;
  }

  set smoothing(value: boolean) {
    this._smoothing = !!value;
  }

  get bitmapData(): BitmapData {
    return this._bitmapData;
  }

  set bitmapData(value: BitmapData) {
    if (this._bitmapData !== value) {
      if (this._bitmapData) {
        this._bitmapData._removeBitmapReferrer(this);
      }
      if (value) {
        value._addBitmapReferrer(this);
      }
    }
    this._bitmapData = value;
    if (value) {
      this._setFillAndLineBoundsFromWidthAndHeight(value.width * 20 | 0, value.height * 20 | 0);
    }
    this._invalidateParentFillAndLineBounds(true, true);
    this._setDirtyFlags(DisplayObjectDirtyFlags.DirtyBitmapData);
  }

  _getContentBounds(includeStrokes: boolean = true): Bounds {
    if (this._bitmapData) {
      return this._bitmapData._getContentBounds();
    }
    return new Bounds(0, 0, 0, 0);
  }

  _containsPointDirectly(localX: number, localY: number,
                          globalX: number, globalY: number): boolean {
    // If this override is reached, the content bounds have already been checked, which is all
    // we need to do.
    release || assert(this._getContentBounds().contains(localX, localY));
    return true;
  }
}
