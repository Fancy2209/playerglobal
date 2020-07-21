
import { EventDispatcher } from "./events/EventDispatcher";
import { DisplayObject } from "./display/DisplayObject";
import { DisplayObjectContainer } from "./display/DisplayObjectContainer";
import { InteractiveObject } from "./display/InteractiveObject";
import { Stage } from "./display/Stage";
import { Loader } from "./display/Loader";
import { LoaderInfo } from "./display/LoaderInfo";
import { MovieClip } from "./display/MovieClip";
import { Sprite } from "./display/Sprite";
import { Shape } from "./display/Shape";
import { Bitmap } from "./display/Bitmap";
import { BitmapData } from "./display/BitmapData";
import { SimpleButton } from "./display/SimpleButton";
import { ColorTransform } from "./geom/ColorTransform";
import { Matrix } from "./geom/Matrix";
import { Matrix3D } from "./geom/Matrix3D";
import { Orientation3D } from "./geom/Orientation3D";
import { PerspectiveProjection } from "./geom/PerspectiveProjection";
import { Point } from "./geom/Point";
import { Rectangle } from "./geom/Rectangle";
import { Transform } from "./geom/Transform";
import { Utils3D } from "./geom/Utils3D";
import { Vector3D } from "./geom/Vector3D";
import { LoaderContext } from './system/LoaderContext';
import { ApplicationDomain } from './system/ApplicationDomain';
import { System } from './system/System';
import { Graphics } from "./display/Graphics";
import { Event } from "./events/Event";
import { URLLoader } from "./net/URLLoader";
import { TextField } from './text/TextField';
import { TextFormat } from './text/TextFormat';
import { Sound } from './media/Sound';
import { SoundChannel } from './media/SoundChannel';
import { SoundTransform } from './media/SoundTransform';
import { SharedObject } from './net/SharedObject';
import { URLRequest } from './net/URLRequest';

import { SecurityDomain } from './system/SecurityDomain';

import { XMLDocument, XMLNode, ASClass, registerNativeClass, registerNativeFunction } from '@awayfl/avm2';

// todo: this classes rely on the flash module, should be merged into our as3web module:

import { IOErrorEvent } from "./events/IOErrorEvent";
import { ErrorEvent } from "./events/ErrorEvent";
import { TextEvent } from "./events/TextEvent";
import { fscommand } from "./system/FSCommand";
import { Security } from './system/Security';
import { Scene } from "./display/Scene";
import { Keyboard } from "./ui/Keyboard";
import { KeyboardEvent } from "./events/KeyboardEvent";
import { MouseEvent } from "./events/MouseEvent";

import { BevelFilter } from "./filters/BevelFilter";
import { BitmapFilter } from "./filters/BitmapFilter";
import { BlurFilter } from "./filters/BlurFilter";
import { ColorMatrixFilter } from "./filters/ColorMatrixFilter";
import { ConvolutionFilter } from "./filters/ConvolutionFilter";
import { DisplacementMapFilter } from "./filters/DisplacementMapFilter";
import { DropShadowFilter } from "./filters/DropShadowFilter";
import { GlowFilter } from "./filters/GlowFilter";
import { GradientBevelFilter } from "./filters/GradientBevelFilter";
import { GradientGlowFilter } from "./filters/GradientGlowFilter";
import { Capabilities } from "./system/Capabilities";
import { ExternalInterface } from "./external/ExternalInterface";
import { Timer } from "./utils/Timer";
import { TimerEvent } from "./events/TimerEvent";
import { ProgressEvent } from "./events/ProgressEvent";
import { SoundMixer } from "./media/SoundMixer";
import { TextSnapshot } from "./text/TextSnapshot";
import { URLVariables } from "./net/URLVariables";
import { release } from '@awayfl/swf-loader';

/*
import { NativeMenu } from "./display/NativeMenu";

*/
import { NativeMenuItem } from "./display/NativeMenuItem";
import { ContextMenu } from "./ui/ContextMenu";
import { ContextMenuItem } from "./ui/ContextMenuItem";
import { ContextMenuBuiltInItems } from "./ui/ContextMenuBuiltInItems";
import { ContextMenuClipboardItems } from "./ui/ContextMenuClipboardItems";


import { FrameLabel } from "./display/FrameLabel";

import { Mouse } from "./ui/Mouse";
/*
import { URLRequest } from "./net/URLRequest";
import { ApplicationDomain } from "./system/ApplicationDomain";
import { SharedObject } from "./net/SharedObject";
import { URLVariables } from "./net/URLVariables";
import { Symbol } from "./symbol";
import { ByteArray, ObjectEncoding } from "../avm2/natives/byteArray";
import { AccessibilityProperties } from "./accessibility/AccessibilityProperties";
import { Accessibility } from "./accessibility/Accessibility";
import { LoaderContext } from "./system/LoaderContext";
import { JPEGLoaderContext } from "./system/JPEGLoaderContext";
import { System } from "../avm2/natives/system";
import { AVM1Movie } from "./display/AVM1Movie";
import { MorphShape } from "./display/MorphShape";
import { GradientType } from "./display/GradientType";
import { SpreadMethod } from "./display/SpreadMethod";
import { InterpolationMethod } from "./display/InterpolationMethod";
import { LineScaleMode } from "./display/LineScaleMode";
import { CapsStyle } from "./display/CapsStyle";
import { JointStyle } from "./display/JointStyle";
import { Point } from "./geom/Point";
import { Rectangle } from "./geom/Rectangle";
import { Matrix } from "./geom/Matrix";
import { Matrix3D } from "./geom/Matrix3D";
import { Vector3D } from "./geom/Vector3D";
import { Transform } from "./geom/Transform";
import { ColorTransform } from "./geom/ColorTransform";
import { PerspectiveProjection } from "./geom/PerspectiveProjection";
import { KeyboardEvent } from "./events/KeyboardEvent";
import { MouseEvent } from "./events/MouseEvent";
import { HTTPStatusEvent } from "./events/HTTPStatusEvent";
import { UncaughtErrorEvents } from "./events/UncaughtErrorEvents";
import { Keyboard } from "./ui/Keyboard";
import { MouseCursorData } from "./ui/MouseCursorData";
*/
import { GameInput } from "./ui/GameInput";
import { GameInputControl } from "./ui/GameInputControl";
import { GameInputControlType } from "./ui/GameInputControlType";
import { GameInputDevice } from "./ui/GameInputDevice";
import { GameInputFinger } from "./ui/GameInputFinger";
import { GameInputHand } from "./ui/GameInputHand";
/*
import { Font } from "./text/Font";
import { TextField } from "./text/TextField";
import { StaticText } from "./text/StaticText";
import { StyleSheet } from "./text/StyleSheet";
import { TextFormat } from "./text/TextFormat";
import { TextRun } from "./text/TextRun";
*/
import { TextLineMetrics } from "./text/TextLineMetrics";
/*
import { Sound } from "./media/Sound";
import { SoundChannel } from "./media/SoundChannel";
import { SoundTransform } from "./media/SoundTransform";
import { StageVideo } from "./media/StageVideo";
import { Video } from "./media/Video";
*/
import { TouchEvent } from "./events/TouchEvent";
import { MultitouchInputMode } from "./ui/MultitouchInputMode";
import { Multitouch } from "./ui/Multitouch";
import { GameInputEvent } from "./events/GameInputEvent";
/*
import { AsyncErrorEvent } from "./events/AsyncErrorEvent";
import { NetStatusEvent } from "./events/NetStatusEvent";
import { StatusEvent } from "./events/StatusEvent";
import { GestureEvent } from "./events/GestureEvent";
import { ID3Info } from "./media/ID3Info";
import { Microphone } from "./media/Microphone";
import { Camera } from "./media/Camera";
import { FileFilter } from "./net/FileFilter";
import { FileReference } from "./net/FileReference";
import { NetConnection } from "./net/NetConnection";
import { NetStream } from "./net/NetStream";
import { NetStreamInfo } from "./net/NetStreamInfo";
import { Responder } from "./net/Responder";
import { URLRequestHeader } from "./net/URLRequestHeader";
import { URLStream } from "./net/URLStream";
import { FileReferenceList } from "./net/FileReferenceList";
*/

import { LocalConnection } from "./net/LocalConnection";

/*
import { Socket } from "./net/Socket";
import { Security } from "./system/Security";
*/

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

function M(name: string, asClass: ASClass) {
	registerNativeClass(name, asClass);
}


export function initLink() {
	release || console.log("init link");

	M("flash.display.Stage", Stage);
	M("flash.display.DisplayObject", DisplayObject);
	M("flash.display.InteractiveObject", InteractiveObject);
	M("flash.display.DisplayObjectContainer", DisplayObjectContainer);
	M("flash.display.Sprite", Sprite);
	M("flash.display.MovieClip", MovieClip);
	M("flash.display.Shape", Shape);
	M("flash.display.Bitmap", Bitmap);
	M("flash.display.BitmapData", BitmapData);
	M("flash.display.Loader", Loader);
	M("flash.display.LoaderInfo", LoaderInfo);
	M("flash.display.Graphics", Graphics);
	M("flash.display.SimpleButton", SimpleButton);
	M("flash.display.Scene", Scene);

	M("flash.events.Event", Event);
	M("flash.ui.Keyboard", Keyboard);
	M("flash.events.KeyboardEvent", KeyboardEvent);
	M("flash.text.TextField", TextField);
	// M("flash.display.MorphShape", MorphShape);
	// M("flash.display.NativeMenu", NativeMenu);
	M("flash.display.NativeMenuItem", NativeMenuItem);
	M("flash.display.FrameLabel", FrameLabel);
	// M("flash.display.AVM1Movie", AVM1Movie);

	// M("flash.display.GradientType", GradientType);
	// M("flash.display.SpreadMethod", SpreadMethod);
	// M("flash.display.InterpolationMethod", InterpolationMethod);
	// M("flash.display.LineScaleMode", LineScaleMode);
	// M("flash.display.CapsStyle", CapsStyle);
	// M("flash.display.JointStyle", JointStyle);

	M("flash.filters.BevelFilter", BevelFilter);
	M("flash.filters.BitmapFilter", BitmapFilter);
	M("flash.filters.BlurFilter", BlurFilter);
	M("flash.filters.ColorMatrixFilter", ColorMatrixFilter);
	M("flash.filters.ConvolutionFilter", ConvolutionFilter);
	M("flash.filters.DisplacementMapFilter", DisplacementMapFilter);
	M("flash.filters.DropShadowFilter", DropShadowFilter);
	M("flash.filters.GlowFilter", GlowFilter);
	M("flash.filters.GradientBevelFilter", GradientBevelFilter);
	M("flash.filters.GradientGlowFilter", GradientGlowFilter);

	M("flash.geom.Point", Point);
	M("flash.geom.Rectangle", Rectangle);
	M("flash.geom.Matrix", Matrix);
	M("flash.geom.Matrix3D", Matrix3D);
	M("flash.geom.Vector3D", Vector3D);
	M("flash.geom.Transform", Transform);
	M("flash.geom.ColorTransform", ColorTransform);
	// M("flash.geom.PerspectiveProjection", PerspectiveProjection);

	M("flash.events.EventDispatcher", EventDispatcher);
	M("flash.events.MouseEvent", MouseEvent);
	M("flash.events.ErrorEvent", ErrorEvent);
	M("flash.events.IOErrorEvent", IOErrorEvent);
	// M("flash.events.GestureEvent", GestureEvent);
	M("flash.events.TextEvent", TextEvent);
	M("flash.events.TimerEvent", TimerEvent);
	M("flash.events.ProgressEvent", ProgressEvent);
	// M("flash.events.StatusEvent", StatusEvent);
	// M("flash.events.NetStatusEvent", NetStatusEvent);
	// M("flash.events.HTTPStatusEvent", HTTPStatusEvent);
	// M("flash.events.AsyncErrorEvent", AsyncErrorEvent);
	// M("flash.events.UncaughtErrorEvents", UncaughtErrorEvents);

	M("flash.external.ExternalInterface", ExternalInterface);

	
	M("flash.ui.ContextMenu", ContextMenu);
	M("flash.ui.ContextMenuItem", ContextMenuItem);
	M("flash.ui.ContextMenuBuiltInItems", ContextMenuBuiltInItems);
	M("flash.ui.ContextMenuClipboardItems", ContextMenuClipboardItems);
	M("flash.ui.Mouse", Mouse);
	// M("flash.ui.MouseCursorData", MouseCursorData);

	M("flash.ui.GameInput", GameInput);
	M("flash.events.GameInputEvent", GameInputEvent);
	M("flash.ui.GameInputControl", GameInputControl);
	M("flash.ui.GameInputControlType", GameInputControlType);
	M("flash.ui.GameInputDevice", GameInputDevice);
	M("flash.ui.GameInputFinger", GameInputFinger);
	M("flash.ui.GameInputHand", GameInputHand);
	M("flash.ui.Multitouch",  <any>Multitouch);
	M("flash.ui.MultitouchInputMode",  <any>MultitouchInputMode);
	M("flash.events.TouchEvent", TouchEvent);

	// M("flash.text.Font", Font);
	// M("flash.text.StaticText", StaticText);
	// M("flash.text.StyleSheet", StyleSheet);
	M("flash.text.TextFormat", TextFormat);
	// M("flash.text.TextRun", TextRun);
	M("flash.text.TextSnapshot", TextSnapshot);
	M("flash.text.TextLineMetrics", TextLineMetrics);

	M("flash.media.Sound", Sound);
	M("flash.media.SoundChannel", SoundChannel);
	M("flash.media.SoundMixer", SoundMixer);
	M("flash.media.SoundTransform", SoundTransform);
	// M("flash.media.Video", Video);
	// M("flash.media.StageVideo", StageVideo);
	// M("flash.media.ID3Info", ID3Info);
	// M("flash.media.Microphone", Microphone);
	// M("flash.media.Camera", Camera);

	// M("flash.net.FileFilter", FileFilter);
	// M("flash.net.FileReference", FileReference);
	// M("flash.net.FileReferenceList", FileReferenceList);
	// M("flash.net.NetConnection", NetConnection);
	// M("flash.net.NetStream", NetStream);
	// M("flash.net.NetStreamInfo", NetStreamInfo);
	// M("flash.net.Responder", Responder);
	M("flash.net.URLRequest", URLRequest);
	// M("flash.net.URLRequestHeader", URLRequestHeader);
	// M("flash.net.URLStream", URLStream);
	M("flash.net.URLLoader", URLLoader);
	M("flash.net.SharedObject", SharedObject);
	// M("flash.net.ObjectEncoding", ObjectEncoding);
	M("flash.net.LocalConnection", LocalConnection);
	// M("flash.net.Socket", Socket);
	M("flash.net.URLVariables", URLVariables);

	M("flash.system.Capabilities", Capabilities);
	M("flash.system.Security", Security);
	M("flash.system.System", System);
	M("flash.system.SecurityDomain", SecurityDomain);
	M("flash.system.ApplicationDomain", ApplicationDomain);
	// M("flash.system.JPEGLoaderContext", JPEGLoaderContext);
	M("flash.system.LoaderContext", LoaderContext);

	// M("flash.accessibility.Accessibility", Accessibility);
	// M("flash.accessibility.AccessibilityProperties", AccessibilityProperties);

	M("flash.utils.Timer", Timer);
	// M("flash.utils.ByteArray", ByteArray);

	M("flash.xml.XMLNode", XMLNode);
	M("flash.xml.XMLDocument", XMLDocument);

	registerNativeFunction('flash.system.fscommand', fscommand);

	// needed by externalInterface when doing "eval"

	window["__flash__toXML"] = function __flash__toXML(obj) {
		switch (typeof obj) {
			case 'boolean':
				return obj ? '<true/>' : '<false/>';
			case 'number':
				return '<number>' + obj + '</number>';
			case 'object':
				if (obj === null) {
					return '<null/>';
				}
				if ('hasOwnProperty' in obj && obj.hasOwnProperty('length')) {
					// array
					var xml = '<array>';
					for (var i = 0; i < obj.length; i++) {
						xml += '<property id="' + i + '">' + __flash__toXML(obj[i]) + '</property>';
					}
					return xml + '</array>';
				}
				var xml = '<object>';
				for (var key in obj) {
					xml += '<property id="' + key + '">' + __flash__toXML(obj[key]) + '</property>';
				}
				return xml + '</object>';
			case 'string':
				return '<string>' + obj.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</string>';
			case 'undefined':
				return '<undefined/>';
		}
	};
}

