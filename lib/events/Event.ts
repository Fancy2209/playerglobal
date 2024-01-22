import { ASObject } from '@awayfl/avm2';
import { release } from '@awayfl/swf-loader';
import { assert, axCoerceString } from '@awayjs/graphics';

export class Event extends ASObject {

	static axClass: typeof Event;

	static _instances: Record<string, Event>;

	static classInitializer: any = function () {
		const self: typeof Event = this;
		self._instances = {};
	};

	static getInstance(type: string, bubbles: boolean = false, cancelable: boolean = false): Event {
		let instance = this._instances[type];
		if (!instance) {
			instance = new Event(type, bubbles, cancelable);
			this._instances[type] = instance;
		}
		instance._bubbles = bubbles;
		instance._cancelable = cancelable;
		return instance;
	}

	static getBroadcastInstance(type: string, bubbles: boolean = false, cancelable: boolean = false): Event {
		let instance = this._instances[type];
		if (!instance) {
			instance = new Event(type, bubbles, cancelable);
			this._instances[type] = instance;
			// Some events are documented as broadcast event in the AS3 docs.
			// We can't set |_isBroadcastEvent| flag in the
			// constructor because if you create custom events with these types they do capture and bubble.
			release || assert(Event.isBroadcastEventType(type));
		}
		instance._isBroadcastEvent = true;
		instance._bubbles = bubbles;
		instance._cancelable = cancelable;
		return instance;
	}

	/**
   * http://stackoverflow.com/questions/16900176/as3enterframe-event-propagation-understanding-issue
   */
	public static isBroadcastEventType(type: string) {
		switch (type) {
			case Event.ENTER_FRAME:
			case Event.EXIT_FRAME:
			case Event.FRAME_CONSTRUCTED:
			case Event.RENDER:
			case Event.ACTIVATE:
			case Event.DEACTIVATE:
				return true;
		}
		return false;
	}

	constructor(type: string, bubbles: boolean = true, cancelable: boolean = true) {
		super();
		this._type = axCoerceString(type);
		this._bubbles = !!bubbles;
		this._cancelable = !!cancelable;

		this._target = null;
		this._currentTarget = null;
		this._eventPhase = null;//80pro: todo: EventPhase.AT_TARGET;

		this._stopPropagation = false;
		this._stopImmediatePropagation = false;
		this._isDefaultPrevented = false;
	}

	// JS -> AS Bindings
	static ACTIVATE: string = 'activate';
	static ADDED: string = 'added';
	static ADDED_TO_STAGE: string = 'addedToStage';
	static CANCEL: string = 'cancel';
	static CHANGE: string = 'change';
	static CLEAR: string = 'clear';
	static CLOSE: string = 'close';
	static COMPLETE: string = 'complete';
	static CONNECT: string = 'connect';
	static COPY: string = 'copy';
	static CUT: string = 'cut';
	static DEACTIVATE: string = 'deactivate';
	static ENTER_FRAME: string = 'enterFrame';
	static FRAME_CONSTRUCTED: string = 'frameConstructed';
	static EXIT_FRAME: string = 'exitFrame';
	static FRAME_LABEL: string = 'frameLabel';
	static ID3: string = 'id3';
	static INIT: string = 'init';
	static MOUSE_LEAVE: string = 'mouseLeave';
	static OPEN: string = 'open';
	static PASTE: string = 'paste';
	static REMOVED: string = 'removed';
	static REMOVED_FROM_STAGE: string = 'removedFromStage';
	static RENDER: string = 'render';
	static RESIZE: string = 'resize';
	static SCROLL: string = 'scroll';
	static TEXT_INTERACTION_MODE_CHANGE: string = 'textInteractionModeChange';
	static SELECT: string = 'select';
	static SELECT_ALL: string = 'selectAll';
	static SOUND_COMPLETE: string = 'soundComplete';
	static TAB_CHILDREN_CHANGE: string = 'tabChildrenChange';
	static TAB_ENABLED_CHANGE: string = 'tabEnabledChange';
	static TAB_INDEX_CHANGE: string = 'tabIndexChange';
	static UNLOAD: string = 'unload';
	static FULLSCREEN: string = 'fullScreen';
	static CONTEXT3D_CREATE: string = 'context3DCreate';
	static TEXTURE_READY: string = 'textureReady';
	static VIDEO_FRAME: string = 'videoFrame';
	static SUSPEND: string = 'suspend';

	static AVM1_INIT: string = 'initialize';
	static AVM1_CONSTRUCT: string = 'construct';
	static AVM1_LOAD: string = 'load';

	//    static CHANNEL_MESSAGE: string = "channelMessage";
	//    static CHANNEL_STATE: string = "channelState";
	//    static WORKER_STATE: string = "workerState";

	// AS -> JS Bindings

	_type: string;
	_bubbles: boolean;
	_cancelable: boolean;

	_target: Object;
	_currentTarget: Object;
	_eventPhase: number /*uint*/;

	_stopPropagation: boolean;
	_stopImmediatePropagation: boolean;
	_isDefaultPrevented: boolean;

	//	todo:
	//	these 2 only exists to prevent errors in types for now, because for some reason
	//	some functions use core/EventBase for type but recieve as3/Event
	public _iAllowedToPropagate: boolean = true;
	public _iAllowedToImmediatlyPropagate: boolean = true;

	/**
   * Some events don't participate in the normal capturing and bubbling phase.
   */
	private _isBroadcastEvent: boolean;

	get type(): string {
		return this._type;
	}

	get bubbles(): boolean {
		return this._bubbles;
	}

	get cancelable(): boolean {
		return this._cancelable;
	}

	get target(): Object {
		return this._target;
	}

	set target(value: Object) {
		this._target = value;
	}

	get currentTarget(): Object {
		return this._currentTarget;
	}

	set currentTarget(value: Object) {
		this._currentTarget = value;
	}

	get eventPhase(): number /*uint*/ {
		return this._eventPhase;
	}

	stopPropagation(): void {
		this._stopPropagation = true;
		if ((<any> this).adaptee) {
			(<any> this).adaptee.stopPropagation();
		}
	}

	stopImmediatePropagation(): void {
		this._stopImmediatePropagation = this._stopPropagation = true;
		if ((<any> this).adaptee) {
			(<any> this).adaptee.stopImmediatePropagation();
		}
	}

	preventDefault(): void {
		if (this._cancelable) {
			this._isDefaultPrevented = true;
		}
	}

	isDefaultPrevented(): boolean {
		return this._isDefaultPrevented;
	}

	isBroadcastEvent(): boolean {
		return !!this._isBroadcastEvent;
	}

	clone(): Event {
		return new Event(this._type, this._bubbles,
			this._cancelable);
	}

	toString(): string {
		return this.formatToString('Event', 'type', 'bubbles', 'cancelable', 'eventPhase');
	}

	formatToString(className: string, ...args: string[]): string {
		let str = '[' + className;
		for (let i: number = 0; i < args.length; i++) {
			const field = args[i];
			let value: Object = this.axGetPublicProperty(field);
			if (typeof value === 'string') {
				value = '"' + value + '"';
			}
			str += ' ' + field + '=' + value;
		}
		return str + ']';
	}
}