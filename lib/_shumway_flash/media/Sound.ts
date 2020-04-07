import { LoaderInfo } from "../display/LoaderInfo";
import { ISecurityDomain } from "../../avm2/nat/ISecurityDomain";
import { SymbolData, Symbol } from "../symbol";
import { EventDispatcher } from "../events/EventDispatcher";
import { assert, release, somewhatImplemented, notImplemented, warning } from "../../base/utilities/Debug";
import { ID3Info } from "./ID3Info";
import { URLRequest } from "../net/URLRequest";
import { SoundLoaderContext } from "./SoundLoaderContext";
import { URLStream } from "../net/URLStream";
import { ByteArray } from "../../avm2/natives/byteArray";
import { SoundChannel } from "./SoundChannel";
import { isNullOrUndefined } from "../../base/utilities";
import { SoundTransform } from "./SoundTransform";
import { axCoerceString } from "../../avm2/run/axCoerceString";
import { Telemetry } from '../../base/utilities/Telemetry';

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
// Class: Sound

declare var Blob;
declare var URL;
declare var decodeMP3;

function getAudioDescription(soundData, onComplete) {
  var audioElement = document.createElement('audio');
  if (!audioElement.canPlayType(soundData.mimeType)) {
    onComplete({
      duration: 0
    });
    return;
  }
  audioElement.preload = 'metadata'; // for mobile devices
  var blob = new Blob([soundData.data], {type: soundData.mimeType});
  audioElement.src = URL.createObjectURL(blob);
  audioElement.load();
  audioElement.addEventListener("loadedmetadata", function () {
    onComplete({
      duration: this.duration * 1000
    });
  });
}

class SoundData {
  sampleRate: number;
  channels: number;
  pcm: any;
  end: number;
  completed: boolean;
  data: any;
  mimeType: string;
}

export class Sound extends EventDispatcher {
  
  // Called whenever the class is initialized.
  static classInitializer: any = null;

  _symbol: SoundSymbol;
  applySymbol() {
    release || assert(this._symbol);
    this._playQueue = [];
    this._url = null;
    this._length = 0;
    this._bytesTotal = 0;
    this._bytesLoaded = 0;
    this._id3 = new ID3Info();

    this._isURLInaccessible = false;
    this._isBuffering = false;

    var symbol = this._symbol;
    if (symbol) {
      var soundData = new SoundData();
      soundData.sampleRate = symbol.sampleRate;
      soundData.channels = symbol.channels;
      soundData.completed = true;
      if (symbol.pcm) {
        soundData.pcm = symbol.pcm;
        soundData.end = symbol.pcm.length;
      }
      if (symbol.packaged) {
        soundData.data = symbol.packaged.data.buffer;
        soundData.mimeType = symbol.packaged.mimeType;
      }
      var self = this;
      getAudioDescription(soundData, function (description) {
        self._length = description.duration;
      });
      this._soundData = soundData;
    }
  }

  static initializeFromPCMData(sec: ISecurityDomain, data: any): Sound {
    var sound = new Sound();
    sound._symbol = data;
    sound.applySymbol();
    return sound;
  }

  // List of static symbols to link.
  static classSymbols: string [] = null; // [];
  
  // List of instance symbols to link.
  static instanceSymbols: string [] = null; // ["load"];
  
  constructor (stream?: URLRequest, context?: SoundLoaderContext) {
    super();
    if (this._symbol) {
      this.applySymbol();
    }


    //Telemetry.instance.reportTelemetry({topic: 'feature', feature: Telemetry.Feature.SOUND_FEATURE});

    this._playQueue = [];
    this._url = null;
    this._length = 0;
    this._bytesTotal = 0;
    this._bytesLoaded = 0;
    this._id3 = new ID3Info();

    this._isURLInaccessible = false;
    this._isBuffering = false;
    this.load(stream, context);
  }

  private _playQueue: any[];
  private _soundData: SoundData;
  private _stream: URLStream;
  private _url: string;
  _isURLInaccessible: boolean;
  private _length: number;
  _isBuffering: boolean;
  private _bytesLoaded: number /*uint*/;
  private _bytesTotal: number /*int*/;
  private _id3: ID3Info;

  get url(): string {
    return this._url;
  }
  get isURLInaccessible(): boolean {
    release || somewhatImplemented("public flash.media.Sound::get isURLInaccessible");
    return this._isURLInaccessible;
  }
  get length(): number {
    return this._length;
  }
  get isBuffering(): boolean {
    release || somewhatImplemented("public flash.media.Sound::get isBuffering");
    return this._isBuffering;
  }
  get bytesLoaded(): number /*uint*/ {
    return this._bytesLoaded;
  }
  get bytesTotal(): number /*int*/ {
    return this._bytesTotal;
  }
  get id3(): ID3Info {
    return this._id3;
  }
  loadCompressedDataFromByteArray(bytes: ByteArray, bytesLength: number /*uint*/): void {
    bytes = bytes; bytesLength = bytesLength >>> 0;
    release || notImplemented("public flash.media.Sound::loadCompressedDataFromByteArray"); return;
  }
  loadPCMFromByteArray(bytes: ByteArray, samples: number /*uint*/, format: string = "float", stereo: boolean = true, sampleRate: number = 44100): void {
    bytes = bytes; samples = samples >>> 0; format = axCoerceString(format); stereo = !!stereo; sampleRate = +sampleRate;
    release || notImplemented("public flash.media.Sound::loadPCMFromByteArray"); return;
  }
  play(startTime: number = 0, loops: number /*int*/ = 0, sndTransform: SoundTransform = null): SoundChannel {
    console.log("TODO: Sound.play");
    /*startTime = +startTime; loops = loops | 0;
    var channel = new SoundChannel();
    channel._sound = this;
    channel._soundTransform = isNullOrUndefined(sndTransform) ?
                              new SoundTransform() :
                              sndTransform;
    this._playQueue.push({
      channel: channel,
      startTime: startTime
    });
    if (disableAudioOption.value) {
      return channel;
    }
    if (this._soundData) {
      if (!webAudioOption.value && !webAudioMP3Option.value) {
        channel._playSoundDataViaAudio(this._soundData, startTime, loops);
      } else if (!this._soundData.pcm) {
        if (this._soundData.mimeType === 'audio/mpeg' && webAudioMP3Option.value) {
          SWF.MP3DecoderSession.processAll(new Uint8Array(this._soundData.data)).then(function (result) {
            this._soundData.pcm = result.data;
            this._soundData.end = result.data.length;
            channel._playSoundDataViaChannel(this._soundData, startTime, loops);
          }.bind(this), function (reason) {
            warning('Unable to decode MP3 data: ' + reason);
          });
        } else {
          warning('Unable to decode packaged sound data of type: ' + this._soundData.mimeType);
        }
      } else {
        channel._playSoundDataViaChannel(this._soundData, startTime, loops);
      }
    }*/
    return null;//channel;
  }
  close(): void {
    release || somewhatImplemented("public flash.media.Sound::close");
  }
  extract(target: ByteArray, length: number, startPosition: number = -1): number {
    target = target; length = +length; startPosition = +startPosition;
    release || notImplemented("public flash.media.Sound::extract"); return;
  }
  load(request: URLRequest, context?: SoundLoaderContext): void {
    if (!request) {
      return;
    }
    console.log("TODO:Sound.load");
/*
    var checkPolicyFile: boolean = context ? context.checkPolicyFile : false;
    var bufferTime: number = context ? context.bufferTime : 1000;

    var _myThis = this;
    var stream = this._stream = new URLStream();
    var data = new ByteArray();
    var dataPosition = 0;
    var playUsingWebAudio = webAudioOption.value;
    var mp3DecodingSession = null;
    var soundData = new SoundData();
    soundData.completed = false;

    stream.addEventListener("progress", function (event) {
      _myThis._bytesLoaded = event.axGetPublicProperty("bytesLoaded");
      _myThis._bytesTotal = event.axGetPublicProperty("bytesTotal");

      if (playUsingWebAudio && !mp3DecodingSession) {
        // initialize MP3 decoding
        mp3DecodingSession = decodeMP3(soundData, function (duration, final) {
          if (_myThis._length === 0) {
            // once we have some data, trying to play it
            _myThis._soundData = soundData;

            _myThis._playQueue.forEach(function (item) {
              item.channel._playSoundDataViaChannel(soundData, item.startTime);
            });
          }
          // estimate duration based on bytesTotal and current loaded data time
          _myThis._length = final ? duration * 1000 : Math.max(duration,
            mp3DecodingSession.estimateDuration(_myThis._bytesTotal)) * 1000;
        });
      }

      var bytesAvailable = stream.bytesAvailable;
      stream.readBytes(data, dataPosition, bytesAvailable);
      if (mp3DecodingSession) {
        mp3DecodingSession.pushData(new Uint8Array((<any> data)._buffer, dataPosition, bytesAvailable));
      }
      dataPosition += bytesAvailable;

      _this.dispatchEvent(event);
    });

    stream.addEventListener("complete", function (event) {
      _this.dispatchEvent(event);
      soundData.data = (<any> data)._buffer;
      soundData.mimeType = 'audio/mpeg';
      soundData.completed = true;

      if (!playUsingWebAudio) {
        _this._soundData = soundData;

        getAudioDescription(soundData, function (description) {
          _this._length = description.duration;
        });

        _this._playQueue.forEach(function (item) {
          item.channel._playSoundDataViaAudio(soundData, item.startTime);
        });
      }

      if (mp3DecodingSession) {
        mp3DecodingSession.close();
      }
    });

    stream.load(request);
      */
  }
}

export class SoundSymbol extends Symbol {
  channels: number;
  sampleRate: number;
  pcm: Float32Array;
  packaged;

  constructor(data: SymbolData, sec: ISecurityDomain) {
    super(data, Sound.axClass);
  }

  static FromData(data: any, loaderInfo: LoaderInfo): SoundSymbol {
    var symbol = new SoundSymbol(data, loaderInfo.sec);
    symbol.channels = data.channels;
    symbol.sampleRate = data.sampleRate;
    symbol.pcm = data.pcm;
    symbol.packaged = data.packaged;
    return symbol;
  }
}