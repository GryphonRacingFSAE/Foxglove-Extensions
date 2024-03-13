/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface rlmAccel0xf0 {
  xAccel: number;
  yAccel: number;
  zAccel: number;
}

export interface rlmGyro0xf1 {
  xRot: number;
  yRot: number;
  zRot: number;
}

export interface rlmPosition0xf2 {
  LATITUDE: number;
  LONGITUDE: number;
}

export interface rlmTrajectory0xf3 {
  SPEED: number;
  DIRECTION: number;
}

export interface rlmTime0xf4 {
  TIME: number;
}

function createBaserlmAccel0xf0(): rlmAccel0xf0 {
  return { xAccel: 0, yAccel: 0, zAccel: 0 };
}

export const rlmAccel0xf0 = {
  encode(message: rlmAccel0xf0, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.xAccel !== 0) {
      writer.uint32(13).float(message.xAccel);
    }
    if (message.yAccel !== 0) {
      writer.uint32(21).float(message.yAccel);
    }
    if (message.zAccel !== 0) {
      writer.uint32(29).float(message.zAccel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): rlmAccel0xf0 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaserlmAccel0xf0();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.xAccel = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.yAccel = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.zAccel = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): rlmAccel0xf0 {
    return {
      xAccel: isSet(object.XACCEL) ? globalThis.Number(object.XACCEL) : 0,
      yAccel: isSet(object.YACCEL) ? globalThis.Number(object.YACCEL) : 0,
      zAccel: isSet(object.ZACCEL) ? globalThis.Number(object.ZACCEL) : 0,
    };
  },

  toJSON(message: rlmAccel0xf0): unknown {
    const obj: any = {};
    if (message.xAccel !== 0) {
      obj.XACCEL = message.xAccel;
    }
    if (message.yAccel !== 0) {
      obj.YACCEL = message.yAccel;
    }
    if (message.zAccel !== 0) {
      obj.ZACCEL = message.zAccel;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<rlmAccel0xf0>, I>>(base?: I): rlmAccel0xf0 {
    return rlmAccel0xf0.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<rlmAccel0xf0>, I>>(object: I): rlmAccel0xf0 {
    const message = createBaserlmAccel0xf0();
    message.xAccel = object.xAccel ?? 0;
    message.yAccel = object.yAccel ?? 0;
    message.zAccel = object.zAccel ?? 0;
    return message;
  },
};

function createBaserlmGyro0xf1(): rlmGyro0xf1 {
  return { xRot: 0, yRot: 0, zRot: 0 };
}

export const rlmGyro0xf1 = {
  encode(message: rlmGyro0xf1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.xRot !== 0) {
      writer.uint32(13).float(message.xRot);
    }
    if (message.yRot !== 0) {
      writer.uint32(21).float(message.yRot);
    }
    if (message.zRot !== 0) {
      writer.uint32(29).float(message.zRot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): rlmGyro0xf1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaserlmGyro0xf1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.xRot = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.yRot = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.zRot = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): rlmGyro0xf1 {
    return {
      xRot: isSet(object.XROT) ? globalThis.Number(object.XROT) : 0,
      yRot: isSet(object.YROT) ? globalThis.Number(object.YROT) : 0,
      zRot: isSet(object.ZROT) ? globalThis.Number(object.ZROT) : 0,
    };
  },

  toJSON(message: rlmGyro0xf1): unknown {
    const obj: any = {};
    if (message.xRot !== 0) {
      obj.XROT = message.xRot;
    }
    if (message.yRot !== 0) {
      obj.YROT = message.yRot;
    }
    if (message.zRot !== 0) {
      obj.ZROT = message.zRot;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<rlmGyro0xf1>, I>>(base?: I): rlmGyro0xf1 {
    return rlmGyro0xf1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<rlmGyro0xf1>, I>>(object: I): rlmGyro0xf1 {
    const message = createBaserlmGyro0xf1();
    message.xRot = object.xRot ?? 0;
    message.yRot = object.yRot ?? 0;
    message.zRot = object.zRot ?? 0;
    return message;
  },
};

function createBaserlmPosition0xf2(): rlmPosition0xf2 {
  return { LATITUDE: 0, LONGITUDE: 0 };
}

export const rlmPosition0xf2 = {
  encode(message: rlmPosition0xf2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.LATITUDE !== 0) {
      writer.uint32(13).float(message.LATITUDE);
    }
    if (message.LONGITUDE !== 0) {
      writer.uint32(21).float(message.LONGITUDE);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): rlmPosition0xf2 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaserlmPosition0xf2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.LATITUDE = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.LONGITUDE = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): rlmPosition0xf2 {
    return {
      LATITUDE: isSet(object.LATITUDE) ? globalThis.Number(object.LATITUDE) : 0,
      LONGITUDE: isSet(object.LONGITUDE) ? globalThis.Number(object.LONGITUDE) : 0,
    };
  },

  toJSON(message: rlmPosition0xf2): unknown {
    const obj: any = {};
    if (message.LATITUDE !== 0) {
      obj.LATITUDE = message.LATITUDE;
    }
    if (message.LONGITUDE !== 0) {
      obj.LONGITUDE = message.LONGITUDE;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<rlmPosition0xf2>, I>>(base?: I): rlmPosition0xf2 {
    return rlmPosition0xf2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<rlmPosition0xf2>, I>>(object: I): rlmPosition0xf2 {
    const message = createBaserlmPosition0xf2();
    message.LATITUDE = object.LATITUDE ?? 0;
    message.LONGITUDE = object.LONGITUDE ?? 0;
    return message;
  },
};

function createBaserlmTrajectory0xf3(): rlmTrajectory0xf3 {
  return { SPEED: 0, DIRECTION: 0 };
}

export const rlmTrajectory0xf3 = {
  encode(message: rlmTrajectory0xf3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SPEED !== 0) {
      writer.uint32(13).float(message.SPEED);
    }
    if (message.DIRECTION !== 0) {
      writer.uint32(21).float(message.DIRECTION);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): rlmTrajectory0xf3 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaserlmTrajectory0xf3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.SPEED = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.DIRECTION = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): rlmTrajectory0xf3 {
    return {
      SPEED: isSet(object.SPEED) ? globalThis.Number(object.SPEED) : 0,
      DIRECTION: isSet(object.DIRECTION) ? globalThis.Number(object.DIRECTION) : 0,
    };
  },

  toJSON(message: rlmTrajectory0xf3): unknown {
    const obj: any = {};
    if (message.SPEED !== 0) {
      obj.SPEED = message.SPEED;
    }
    if (message.DIRECTION !== 0) {
      obj.DIRECTION = message.DIRECTION;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<rlmTrajectory0xf3>, I>>(base?: I): rlmTrajectory0xf3 {
    return rlmTrajectory0xf3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<rlmTrajectory0xf3>, I>>(object: I): rlmTrajectory0xf3 {
    const message = createBaserlmTrajectory0xf3();
    message.SPEED = object.SPEED ?? 0;
    message.DIRECTION = object.DIRECTION ?? 0;
    return message;
  },
};

function createBaserlmTime0xf4(): rlmTime0xf4 {
  return { TIME: 0 };
}

export const rlmTime0xf4 = {
  encode(message: rlmTime0xf4, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TIME !== 0) {
      writer.uint32(13).float(message.TIME);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): rlmTime0xf4 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaserlmTime0xf4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.TIME = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): rlmTime0xf4 {
    return { TIME: isSet(object.TIME) ? globalThis.Number(object.TIME) : 0 };
  },

  toJSON(message: rlmTime0xf4): unknown {
    const obj: any = {};
    if (message.TIME !== 0) {
      obj.TIME = message.TIME;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<rlmTime0xf4>, I>>(base?: I): rlmTime0xf4 {
    return rlmTime0xf4.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<rlmTime0xf4>, I>>(object: I): rlmTime0xf4 {
    const message = createBaserlmTime0xf4();
    message.TIME = object.TIME ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
