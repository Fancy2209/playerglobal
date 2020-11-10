import { ASObject, axCoerceString } from '@awayfl/avm2';

export class TabStop extends ASObject {

	static forceNativeConstructor: boolean = true;
	static forceNativeMethods: boolean = true;

	constructor(
		alignment: string = 'start',
		position: number = 0,
		decimalAlignmentToken: string = '') {
		alignment = axCoerceString(alignment);
		position = +position;
		decimalAlignmentToken = axCoerceString(decimalAlignmentToken);
		super();
		console.warn('[TabStop] not implemented');
	}

	// JS -> AS Bindings

	// AS -> JS Bindings

	// _alignment: string;
	// _position: number;
	// _decimalAlignmentToken: string;
	public get alignment(): string {
		console.warn('[TabStop] - get alignment not implemented');
		return;
	}

	public set alignment(value: string) {
		value = axCoerceString(value);
		console.warn('[TabStop] - set alignment not implemented');
	}

	public get position(): number {
		console.warn('[TabStop] - get position not implemented');
		return;
	}

	public set position(value: number) {
		value = +value;
		console.warn('[TabStop] - set position not implemented');
	}

	public get decimalAlignmentToken(): string {
		console.warn('[TabStop] - get decimalAlignmentToken not implemented');
		return;
	}

	public set decimalAlignmentToken(value: string) {
		value = axCoerceString(value);
		console.warn('[TabStop] - set decimalAlignmentToken not implemented');
	}
}