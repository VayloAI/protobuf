// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.4
//   protoc               v3.21.9
// source: proto/stg.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../google/protobuf/timestamp.js";

export const protobufPackage = "";

export enum DetectProcessStatus {
  SUCCESS = 0,
  WAITING = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}

export function detectProcessStatusFromJSON(object: any): DetectProcessStatus {
  switch (object) {
    case 0:
    case "SUCCESS":
      return DetectProcessStatus.SUCCESS;
    case 1:
    case "WAITING":
      return DetectProcessStatus.WAITING;
    case 2:
    case "FAILED":
      return DetectProcessStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DetectProcessStatus.UNRECOGNIZED;
  }
}

export function detectProcessStatusToJSON(object: DetectProcessStatus): string {
  switch (object) {
    case DetectProcessStatus.SUCCESS:
      return "SUCCESS";
    case DetectProcessStatus.WAITING:
      return "WAITING";
    case DetectProcessStatus.FAILED:
      return "FAILED";
    case DetectProcessStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AudioGenderDetectRequest {
  file: Uint8Array;
}

export interface AudioGenderDetectResult {
  id: number;
  file_id: string;
  male_prob?: number | null | undefined;
  female_prob?: number | null | undefined;
  status: DetectProcessStatus;
  created_at: Date | null;
}

export interface AudioGenderSelectRequest {
  file_id: string;
}

function createBaseAudioGenderDetectRequest(): AudioGenderDetectRequest {
  return { file: new Uint8Array(0) };
}

export const AudioGenderDetectRequest: MessageFns<AudioGenderDetectRequest> = {
  encode(message: AudioGenderDetectRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.file.length !== 0) {
      writer.uint32(10).bytes(message.file);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AudioGenderDetectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioGenderDetectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.file = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioGenderDetectRequest {
    return { file: isSet(object.file) ? bytesFromBase64(object.file) : new Uint8Array(0) };
  },

  toJSON(message: AudioGenderDetectRequest): unknown {
    const obj: any = {};
    if (message.file.length !== 0) {
      obj.file = base64FromBytes(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioGenderDetectRequest>, I>>(base?: I): AudioGenderDetectRequest {
    return AudioGenderDetectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioGenderDetectRequest>, I>>(object: I): AudioGenderDetectRequest {
    const message = createBaseAudioGenderDetectRequest();
    message.file = object.file ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAudioGenderDetectResult(): AudioGenderDetectResult {
  return { id: 0, file_id: "", male_prob: null, female_prob: null, status: 0, created_at: null };
}

export const AudioGenderDetectResult: MessageFns<AudioGenderDetectResult> = {
  encode(message: AudioGenderDetectResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.file_id !== "") {
      writer.uint32(18).string(message.file_id);
    }
    if (message.male_prob !== undefined && message.male_prob !== null) {
      writer.uint32(25).double(message.male_prob);
    }
    if (message.female_prob !== undefined && message.female_prob !== null) {
      writer.uint32(33).double(message.female_prob);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.created_at !== undefined && message.created_at !== null) {
      Timestamp.encode(toTimestamp(message.created_at), writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AudioGenderDetectResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioGenderDetectResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.file_id = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 25) {
            break;
          }

          message.male_prob = reader.double();
          continue;
        }
        case 4: {
          if (tag !== 33) {
            break;
          }

          message.female_prob = reader.double();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.created_at = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioGenderDetectResult {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      file_id: isSet(object.file_id) ? globalThis.String(object.file_id) : "",
      male_prob: isSet(object.male_prob) ? globalThis.Number(object.male_prob) : null,
      female_prob: isSet(object.female_prob) ? globalThis.Number(object.female_prob) : null,
      status: isSet(object.status) ? detectProcessStatusFromJSON(object.status) : 0,
      created_at: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : null,
    };
  },

  toJSON(message: AudioGenderDetectResult): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.file_id !== "") {
      obj.file_id = message.file_id;
    }
    if (message.male_prob !== undefined && message.male_prob !== null) {
      obj.male_prob = message.male_prob;
    }
    if (message.female_prob !== undefined && message.female_prob !== null) {
      obj.female_prob = message.female_prob;
    }
    if (message.status !== 0) {
      obj.status = detectProcessStatusToJSON(message.status);
    }
    if (message.created_at !== undefined && message.created_at !== null) {
      obj.created_at = message.created_at.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioGenderDetectResult>, I>>(base?: I): AudioGenderDetectResult {
    return AudioGenderDetectResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioGenderDetectResult>, I>>(object: I): AudioGenderDetectResult {
    const message = createBaseAudioGenderDetectResult();
    message.id = object.id ?? 0;
    message.file_id = object.file_id ?? "";
    message.male_prob = object.male_prob ?? undefined;
    message.female_prob = object.female_prob ?? undefined;
    message.status = object.status ?? 0;
    message.created_at = object.created_at ?? null;
    return message;
  },
};

function createBaseAudioGenderSelectRequest(): AudioGenderSelectRequest {
  return { file_id: "" };
}

export const AudioGenderSelectRequest: MessageFns<AudioGenderSelectRequest> = {
  encode(message: AudioGenderSelectRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.file_id !== "") {
      writer.uint32(10).string(message.file_id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AudioGenderSelectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioGenderSelectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.file_id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioGenderSelectRequest {
    return { file_id: isSet(object.file_id) ? globalThis.String(object.file_id) : "" };
  },

  toJSON(message: AudioGenderSelectRequest): unknown {
    const obj: any = {};
    if (message.file_id !== "") {
      obj.file_id = message.file_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioGenderSelectRequest>, I>>(base?: I): AudioGenderSelectRequest {
    return AudioGenderSelectRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioGenderSelectRequest>, I>>(object: I): AudioGenderSelectRequest {
    const message = createBaseAudioGenderSelectRequest();
    message.file_id = object.file_id ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
