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

import { ASObject } from "@awayfl/avm2";

// Class: Context3DStencilAction
export class Context3DStencilAction extends ASObject {

		// Called whenever the class is initialized.
		static classInitializer: any = null;

		constructor () {
			super();
		}

		// JS -> AS Bindings
		static KEEP: string = 'keep';
		static ZERO: string = 'zero';
		static INCREMENT_SATURATE: string = 'incrementSaturate';
		static DECREMENT_SATURATE: string = 'decrementSaturate';
		static INVERT: string = 'invert';
		static INCREMENT_WRAP: string = 'incrementWrap';
		static DECREMENT_WRAP: string = 'decrementWrap';
		static SET: string = 'set';

		// AS -> JS Bindings

	}