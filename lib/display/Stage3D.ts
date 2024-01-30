import { Context3D } from '../display3D/Context3D'
import { EventDispatcher } from '../events/EventDispatcher'
import { ContextMode, Stage as AwayStage } from '@awayjs/stage'
import { Context3DProfile } from '../display3D/Context3DProfile';

export class Stage3D extends EventDispatcher {
	private _adaptee: AwayStage;

	constructor() {
		super();
	}

	// JS -> AS Bindings

	// AS -> JS Bindings

	_context3D: Context3D;

	public get context3D(): Context3D{
		return this._context3D
	}

	public get x(): number {
		return this._adaptee.x;
	}

	public set x(value: number) {
		this._adaptee.x = value;
	}

	public get y(): number {
		return this._adaptee.y;
	}

	public set y(value: number) {
		this._adaptee.y = value;
	}

	public get visible(): boolean {
		return this._adaptee.visible;
	}

	public set visible(value: boolean) {
		this._adaptee.visible = value;
	}

	private convertStringToContext3DProfile(profileString: string): Context3DProfile | undefined {
		// Convert the string to uppercase (assuming the enum values are in uppercase)
		const profileUpperCase = profileString.toUpperCase();
	  
		// Use the enum as a lookup mechanism
		const profileEnumValue: Context3DProfile | undefined = Context3DProfile[profileUpperCase as keyof typeof Context3DProfile];
	  
		return profileEnumValue;
	  }

	public requestContext3D(context3DRenderMode: string = 'auto', profile: string = "baseline"): void {
		this._adaptee.requestContext(false, this.convertStringToContext3DProfile(profile), ContextMode.AUTO)
	}
}
