// To parse this data:
//
//   import { Convert, IStreamSchemaPlugIn, OStreamSchemaPlugIn, PlugInRequest, ResultSchemaPlugIn } from "./file";
//
//   const iStreamSchemaPlugIn = Convert.toIStreamSchemaPlugIn(json);
//   const oStreamSchemaPlugIn = Convert.toOStreamSchemaPlugIn(json);
//   const plugInRequest = Convert.toPlugInRequest(json);
//   const resultSchemaPlugIn = Convert.toResultSchemaPlugIn(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IStreamSchemaPlugIn {
    $schema: string;
    $ref:    string;
    $defs:   IStreamSchemaPlugInDefs;
}

export interface IStreamSchemaPlugInDefs {
    Angular:               Angular;
    GeoLocation:           GeoLocation;
    GeoLocationBase:       GeoLocationBase;
    IStreamBattery:        IStreamBattery;
    IStreamGeoLocation:    IStreamGeoLocation;
    IStreamGimbal:         IStreamGimbal;
    IStreamSchema:         IStreamSchema;
    IStreamSignalStrength: IStreamSignalStrength;
}

export interface Angular {
    properties:           AngularProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface AngularProperties {
    yaw:   Pitch;
    roll:  Pitch;
    pitch: Pitch;
}

export interface Pitch {
    type:        TypeEnum;
    title?:      string;
    description: string;
    items?:      Items;
}

export interface Items {
    type?: TypeEnum;
    $ref?: string;
}

export enum TypeEnum {
    Array = "array",
    Integer = "integer",
    Number = "number",
    String = "string",
}

export interface GeoLocation {
    properties:           GeoLocationProperties;
    additionalProperties: boolean;
    type:                 string;
}

export interface GeoLocationProperties {
    geolocation: AngularClass;
    angular:     AngularClass;
}

export interface AngularClass {
    $ref: string;
}

export interface GeoLocationBase {
    properties:           GeoLocationBaseProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface GeoLocationBaseProperties {
    latitude:  Pitch;
    longitude: Pitch;
    altitude:  Pitch;
}

export interface IStreamBattery {
    properties:           IStreamBatteryProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface IStreamBatteryProperties {
    vehicleId:          Pitch;
    channelId:          Pitch;
    IStreamType:        Type;
    time:               Pitch;
    percent:            Pitch;
    voltage:            Pitch;
    current:            Pitch;
    cellVoltages:       Pitch;
    numberOfDischarges: Pitch;
    fullChargeCapacity: Pitch;
    designCapacity:     Pitch;
    temperature:        Pitch;
}

export interface Type {
    type: TypeEnum;
    enum: string[];
}

export interface IStreamGeoLocation {
    properties:           IStreamGeoLocationProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface IStreamGeoLocationProperties {
    vehicleId:   Pitch;
    channelId:   Pitch;
    IStreamType: Type;
    time:        Pitch;
    position:    AngularClass;
    velocity:    AngularClass;
}

export interface IStreamGimbal {
    properties:           IStreamGimbalProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface IStreamGimbalProperties {
    vehicleId:   Pitch;
    channelId:   Pitch;
    IStreamType: Type;
    time:        Pitch;
    gimbal:      AngularClass;
}

export interface IStreamSchema {
    properties:           IStreamSchemaProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface IStreamSchemaProperties {
    IStreamBattery:        AngularClass;
    IStreamGeoLocation:    AngularClass;
    IStreamGimbal:         AngularClass;
    IStreamSignalStrength: AngularClass;
}

export interface IStreamSignalStrength {
    properties:           IStreamSignalStrengthProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface IStreamSignalStrengthProperties {
    vehicleId:   Pitch;
    channelId:   Pitch;
    IStreamType: Type;
    time:        Pitch;
    level:       Pitch;
    dbm:         Pitch;
    standard:    Pitch;
    upLink:      Pitch;
    downLink:    Pitch;
}

export interface OStreamSchemaPlugIn {
    $schema: string;
    $ref:    string;
    $defs:   OStreamSchemaPlugInDefs;
}

export interface OStreamSchemaPlugInDefs {
    Angular:            Angular;
    ClickBox:           ClickBox;
    ClickPolygon:       ClickPolygon;
    GeoInfo:            GeoInfo;
    GeoLocation:        GeoLocation;
    GeoLocationBase:    GeoLocationBase;
    GeoPolygon:         GeoPolygon;
    HeatmapInfo:        HeatmapInfo;
    Marker:             MarkerClass;
    OStreamAlphaBitmap: OStream;
    OStreamGeoInfos:    OStream;
    OStreamHeatmap:     OStream;
    OStreamScalar:      OStreamScalar;
    OStreamSchema:      OStreamSchema;
    OStreamVisual:      OStreamVisual;
    VoBox:              Vo;
    VoClickMap:         VoClickMap;
    VoImage:            Vo;
    VoPoint:            VoPoint;
    VoPolygon:          VoPolygon;
    VoVector:           Vo;
    VoVertex:           VoVertex;
}

export interface ClickBox {
    properties:           ClickBoxProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface ClickBoxProperties {
    xmin:      Xmax;
    ymin:      Xmax;
    xmax:      Xmax;
    ymax:      Xmax;
    clickable: Pitch;
}

export interface Xmax {
    type: TypeEnum;
}

export interface ClickPolygon {
    properties:           ClickPolygonProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface ClickPolygonProperties {
    triangleStripVertexes: Pitch;
    clickable:             Pitch;
}

export interface GeoInfo {
    properties:           GeoInfoProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface GeoInfoProperties {
    position:    Position;
    velocity:    Position;
    geoInfoType: GeoInfoTypeClass;
    imageUrl:    Pitch;
    clickable:   Pitch;
    marker:      Marker;
}

export interface GeoInfoTypeClass {
    type:  TypeEnum;
    enum:  string[];
    title: string;
}

export interface Marker {
    $ref:        string;
    description: string;
}

export interface Position {
    $ref:        string;
    title:       string;
    description: string;
}

export interface GeoPolygon {
    properties:           GeoPolygonProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface GeoPolygonProperties {
    name:      Xmax;
    positions: Positions;
    imageUrl:  Xmax;
    clickable: Pitch;
    labelType: GeoInfoTypeClass;
    outline:   Fill;
    fill:      Fill;
}

export interface Fill {
    type:  TypeEnum;
    enum:  number[];
    title: string;
}

export interface Positions {
    items: AngularClass;
    type:  TypeEnum;
}

export interface HeatmapInfo {
    properties:           HeatmapInfoProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface HeatmapInfoProperties {
    scalingUnit:   Pitch;
    scalingFactor: Pitch;
}

export interface MarkerClass {
    properties:           MarkerProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface MarkerProperties {
    type:    GeoInfoTypeClass;
    bearing: Pitch;
}

export interface OStream {
    properties:           OStreamAlphaBitmapProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface OStreamAlphaBitmapProperties {
    jobId:        ChannelID;
    vehicleId:    ChannelID;
    topicId:      Pitch;
    channelId:    ChannelID;
    oStreamType:  Type;
    time:         Pitch;
    desc:         Pitch;
    imageUrl:     Pitch;
    clickMap?:    AngularClass;
    geoInfos?:    Pitch;
    geoPolygons?: Pitch;
    heatmapInfo?: AngularClass;
}

export interface ChannelID {
    type:        TypeEnum;
    description: Description;
}

export enum Description {
    LeaveItEmptyFillBySystem = "leave it empty Fill by system",
    TextFieldDisplayOnUI = "Text field display on UI",
}

export interface OStreamScalar {
    properties:           OStreamScalarProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface OStreamScalarProperties {
    jobId:       ChannelID;
    vehicleId:   ChannelID;
    topicId:     Pitch;
    channelId:   ChannelID;
    oStreamType: Type;
    time:        Pitch;
    desc:        Pitch;
    imageUrl:    Pitch;
    title:       Pitch;
    yaxis:       Pitch;
    ymin:        Pitch;
    ymax:        Pitch;
    clickable:   Pitch;
    labelType:   GeoInfoTypeClass;
}

export interface OStreamSchema {
    properties:           OStreamSchemaProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface OStreamSchemaProperties {
    oStreamGeoInfos:    AngularClass;
    oStreamHeatmap:     AngularClass;
    oStreamAlphaBitmap: AngularClass;
    oStreamScalar:      AngularClass;
    oStreamVisual:      AngularClass;
}

export interface OStreamVisual {
    properties:           OStreamVisualProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface OStreamVisualProperties {
    jobId:       ChannelID;
    vehicleId:   ChannelID;
    topicId:     Pitch;
    channelId:   ChannelID;
    oStreamType: Type;
    time:        Pitch;
    desc:        Pitch;
    imageUrl:    Pitch;
    refWidth:    Pitch;
    refHeight:   Pitch;
    points:      Positions;
    vectors:     Positions;
    boxes:       Positions;
    images:      Positions;
    polygons:    Positions;
}

export interface Vo {
    properties:           VoBoxProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface VoBoxProperties {
    name:             ChannelID;
    xmin:             Xmax;
    ymin:             Xmax;
    filterValue:      Pitch;
    visualObjectType: Type;
    clickable:        Pitch;
    xmax:             Xmax;
    ymax:             Xmax;
    labelType:        GeoInfoTypeClass;
    outline:          Fill;
    fill?:            Fill;
    imageUrl?:        Pitch;
}

export interface VoClickMap {
    properties:           VoClickMapProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface VoClickMapProperties {
    clickBoxes:    Positions;
    clickPolygons: Positions;
}

export interface VoPoint {
    properties:           VoPointProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface VoPointProperties {
    name:             ChannelID;
    xmin:             Xmax;
    ymin:             Xmax;
    filterValue:      Pitch;
    visualObjectType: Type;
    clickable:        Pitch;
    labelType:        GeoInfoTypeClass;
    outline:          Fill;
    marker:           AngularClass;
}

export interface VoPolygon {
    properties:           VoPolygonProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface VoPolygonProperties {
    name:                  ChannelID;
    filterValue:           Pitch;
    visualObjectType:      Type;
    clickable:             Pitch;
    triangleStripVertexes: Pitch;
    labelType:             GeoInfoTypeClass;
    outline:               Fill;
    fill:                  Fill;
}

export interface VoVertex {
    properties:           VoVertexProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface VoVertexProperties {
    x: Xmax;
    y: Xmax;
}

export interface PlugInRequest {
    $schema: string;
    $id:     string;
    $ref:    string;
    $defs:   PlugInRequestDefs;
}

export interface PlugInRequestDefs {
    ChannelRouting: ChannelRouting;
    PlugInRequest:  PlugInRequestClass;
    TelemetryFeed:  TelemetryFeed;
}

export interface ChannelRouting {
    properties:           ChannelRoutingProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface ChannelRoutingProperties {
    id:         Pitch;
    jsonFolder: Pitch;
}

export interface PlugInRequestClass {
    properties:           PlugInRequestProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface PlugInRequestProperties {
    id:              ID;
    orgProfileFile:  Pitch;
    jobParamFile:    Pitch;
    userProfileFile: Pitch;
    telemetryFeeds:  Pitch;
    inputChannels:   Pitch;
    outputChannels:  Pitch;
}

export interface ID {
    type:  TypeEnum;
    title: string;
}

export interface TelemetryFeed {
    properties:           TelemetryFeedProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface TelemetryFeedProperties {
    cameraFeedsImageFolders: Pitch;
    cameraFeedsVideoFolders: Pitch;
    exifImageFolders:        Pitch;
    gimbalsFolder:           Pitch;
    geolocationFolder:       Pitch;
    signalStrengthFolder:    Pitch;
    batteryFolder:           Pitch;
}

export interface ResultSchemaPlugIn {
    $schema: string;
    $ref:    string;
    $defs:   ResultSchemaPlugInDefs;
}

export interface ResultSchemaPlugInDefs {
    LocalGeoTiff: LocalGeoTiff;
    PublicMap:    PublicMap;
    ResultBase:   ResultBase;
    ResultMap:    ResultMap;
    ResultSchema: ResultSchema;
}

export interface LocalGeoTiff {
    properties:           LocalGeoTiffProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface LocalGeoTiffProperties {
    time:     Pitch;
    imageUrl: Pitch;
}

export interface PublicMap {
    properties:           PublicMapProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface PublicMapProperties {
    time:       Pitch;
    remoteRoot: Xmax;
}

export interface ResultBase {
    properties:           ResultBaseProperties;
    additionalProperties: boolean;
    type:                 string;
}

export interface ResultBaseProperties {
    "public-root": Pitch;
}

export interface ResultMap {
    properties:           ResultMapProperties;
    additionalProperties: boolean;
    type:                 string;
}

export interface ResultMapProperties {
    "public-root": Pitch;
    geoTiffs:      Pitch;
    publicMaps:    Pitch;
}

export interface ResultSchema {
    properties:           ResultSchemaProperties;
    additionalProperties: boolean;
    type:                 string;
    required:             string[];
}

export interface ResultSchemaProperties {
    resultBase: AngularClass;
    resultMap:  AngularClass;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toIStreamSchemaPlugIn(json: string): IStreamSchemaPlugIn {
        return cast(JSON.parse(json), r("IStreamSchemaPlugIn"));
    }

    public static iStreamSchemaPlugInToJson(value: IStreamSchemaPlugIn): string {
        return JSON.stringify(uncast(value, r("IStreamSchemaPlugIn")), null, 2);
    }

    public static toOStreamSchemaPlugIn(json: string): OStreamSchemaPlugIn {
        return cast(JSON.parse(json), r("OStreamSchemaPlugIn"));
    }

    public static oStreamSchemaPlugInToJson(value: OStreamSchemaPlugIn): string {
        return JSON.stringify(uncast(value, r("OStreamSchemaPlugIn")), null, 2);
    }

    public static toPlugInRequest(json: string): PlugInRequest {
        return cast(JSON.parse(json), r("PlugInRequest"));
    }

    public static plugInRequestToJson(value: PlugInRequest): string {
        return JSON.stringify(uncast(value, r("PlugInRequest")), null, 2);
    }

    public static toResultSchemaPlugIn(json: string): ResultSchemaPlugIn {
        return cast(JSON.parse(json), r("ResultSchemaPlugIn"));
    }

    public static resultSchemaPlugInToJson(value: ResultSchemaPlugIn): string {
        return JSON.stringify(uncast(value, r("ResultSchemaPlugIn")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "IStreamSchemaPlugIn": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
        { json: "$defs", js: "$defs", typ: r("IStreamSchemaPlugInDefs") },
    ], false),
    "IStreamSchemaPlugInDefs": o([
        { json: "Angular", js: "Angular", typ: r("Angular") },
        { json: "GeoLocation", js: "GeoLocation", typ: r("GeoLocation") },
        { json: "GeoLocationBase", js: "GeoLocationBase", typ: r("GeoLocationBase") },
        { json: "IStreamBattery", js: "IStreamBattery", typ: r("IStreamBattery") },
        { json: "IStreamGeoLocation", js: "IStreamGeoLocation", typ: r("IStreamGeoLocation") },
        { json: "IStreamGimbal", js: "IStreamGimbal", typ: r("IStreamGimbal") },
        { json: "IStreamSchema", js: "IStreamSchema", typ: r("IStreamSchema") },
        { json: "IStreamSignalStrength", js: "IStreamSignalStrength", typ: r("IStreamSignalStrength") },
    ], false),
    "Angular": o([
        { json: "properties", js: "properties", typ: r("AngularProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "AngularProperties": o([
        { json: "yaw", js: "yaw", typ: r("Pitch") },
        { json: "roll", js: "roll", typ: r("Pitch") },
        { json: "pitch", js: "pitch", typ: r("Pitch") },
    ], false),
    "Pitch": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: u(undefined, r("Items")) },
    ], false),
    "Items": o([
        { json: "type", js: "type", typ: u(undefined, r("TypeEnum")) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "GeoLocation": o([
        { json: "properties", js: "properties", typ: r("GeoLocationProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
    ], false),
    "GeoLocationProperties": o([
        { json: "geolocation", js: "geolocation", typ: r("AngularClass") },
        { json: "angular", js: "angular", typ: r("AngularClass") },
    ], false),
    "AngularClass": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "GeoLocationBase": o([
        { json: "properties", js: "properties", typ: r("GeoLocationBaseProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "GeoLocationBaseProperties": o([
        { json: "latitude", js: "latitude", typ: r("Pitch") },
        { json: "longitude", js: "longitude", typ: r("Pitch") },
        { json: "altitude", js: "altitude", typ: r("Pitch") },
    ], false),
    "IStreamBattery": o([
        { json: "properties", js: "properties", typ: r("IStreamBatteryProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "IStreamBatteryProperties": o([
        { json: "vehicleId", js: "vehicleId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("Pitch") },
        { json: "IStreamType", js: "IStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "percent", js: "percent", typ: r("Pitch") },
        { json: "voltage", js: "voltage", typ: r("Pitch") },
        { json: "current", js: "current", typ: r("Pitch") },
        { json: "cellVoltages", js: "cellVoltages", typ: r("Pitch") },
        { json: "numberOfDischarges", js: "numberOfDischarges", typ: r("Pitch") },
        { json: "fullChargeCapacity", js: "fullChargeCapacity", typ: r("Pitch") },
        { json: "designCapacity", js: "designCapacity", typ: r("Pitch") },
        { json: "temperature", js: "temperature", typ: r("Pitch") },
    ], false),
    "Type": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "IStreamGeoLocation": o([
        { json: "properties", js: "properties", typ: r("IStreamGeoLocationProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "IStreamGeoLocationProperties": o([
        { json: "vehicleId", js: "vehicleId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("Pitch") },
        { json: "IStreamType", js: "IStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "position", js: "position", typ: r("AngularClass") },
        { json: "velocity", js: "velocity", typ: r("AngularClass") },
    ], false),
    "IStreamGimbal": o([
        { json: "properties", js: "properties", typ: r("IStreamGimbalProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "IStreamGimbalProperties": o([
        { json: "vehicleId", js: "vehicleId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("Pitch") },
        { json: "IStreamType", js: "IStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "gimbal", js: "gimbal", typ: r("AngularClass") },
    ], false),
    "IStreamSchema": o([
        { json: "properties", js: "properties", typ: r("IStreamSchemaProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "IStreamSchemaProperties": o([
        { json: "IStreamBattery", js: "IStreamBattery", typ: r("AngularClass") },
        { json: "IStreamGeoLocation", js: "IStreamGeoLocation", typ: r("AngularClass") },
        { json: "IStreamGimbal", js: "IStreamGimbal", typ: r("AngularClass") },
        { json: "IStreamSignalStrength", js: "IStreamSignalStrength", typ: r("AngularClass") },
    ], false),
    "IStreamSignalStrength": o([
        { json: "properties", js: "properties", typ: r("IStreamSignalStrengthProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "IStreamSignalStrengthProperties": o([
        { json: "vehicleId", js: "vehicleId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("Pitch") },
        { json: "IStreamType", js: "IStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "level", js: "level", typ: r("Pitch") },
        { json: "dbm", js: "dbm", typ: r("Pitch") },
        { json: "standard", js: "standard", typ: r("Pitch") },
        { json: "upLink", js: "upLink", typ: r("Pitch") },
        { json: "downLink", js: "downLink", typ: r("Pitch") },
    ], false),
    "OStreamSchemaPlugIn": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
        { json: "$defs", js: "$defs", typ: r("OStreamSchemaPlugInDefs") },
    ], false),
    "OStreamSchemaPlugInDefs": o([
        { json: "Angular", js: "Angular", typ: r("Angular") },
        { json: "ClickBox", js: "ClickBox", typ: r("ClickBox") },
        { json: "ClickPolygon", js: "ClickPolygon", typ: r("ClickPolygon") },
        { json: "GeoInfo", js: "GeoInfo", typ: r("GeoInfo") },
        { json: "GeoLocation", js: "GeoLocation", typ: r("GeoLocation") },
        { json: "GeoLocationBase", js: "GeoLocationBase", typ: r("GeoLocationBase") },
        { json: "GeoPolygon", js: "GeoPolygon", typ: r("GeoPolygon") },
        { json: "HeatmapInfo", js: "HeatmapInfo", typ: r("HeatmapInfo") },
        { json: "Marker", js: "Marker", typ: r("MarkerClass") },
        { json: "OStreamAlphaBitmap", js: "OStreamAlphaBitmap", typ: r("OStream") },
        { json: "OStreamGeoInfos", js: "OStreamGeoInfos", typ: r("OStream") },
        { json: "OStreamHeatmap", js: "OStreamHeatmap", typ: r("OStream") },
        { json: "OStreamScalar", js: "OStreamScalar", typ: r("OStreamScalar") },
        { json: "OStreamSchema", js: "OStreamSchema", typ: r("OStreamSchema") },
        { json: "OStreamVisual", js: "OStreamVisual", typ: r("OStreamVisual") },
        { json: "VoBox", js: "VoBox", typ: r("Vo") },
        { json: "VoClickMap", js: "VoClickMap", typ: r("VoClickMap") },
        { json: "VoImage", js: "VoImage", typ: r("Vo") },
        { json: "VoPoint", js: "VoPoint", typ: r("VoPoint") },
        { json: "VoPolygon", js: "VoPolygon", typ: r("VoPolygon") },
        { json: "VoVector", js: "VoVector", typ: r("Vo") },
        { json: "VoVertex", js: "VoVertex", typ: r("VoVertex") },
    ], false),
    "ClickBox": o([
        { json: "properties", js: "properties", typ: r("ClickBoxProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ClickBoxProperties": o([
        { json: "xmin", js: "xmin", typ: r("Xmax") },
        { json: "ymin", js: "ymin", typ: r("Xmax") },
        { json: "xmax", js: "xmax", typ: r("Xmax") },
        { json: "ymax", js: "ymax", typ: r("Xmax") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
    ], false),
    "Xmax": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
    ], false),
    "ClickPolygon": o([
        { json: "properties", js: "properties", typ: r("ClickPolygonProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ClickPolygonProperties": o([
        { json: "triangleStripVertexes", js: "triangleStripVertexes", typ: r("Pitch") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
    ], false),
    "GeoInfo": o([
        { json: "properties", js: "properties", typ: r("GeoInfoProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "GeoInfoProperties": o([
        { json: "position", js: "position", typ: r("Position") },
        { json: "velocity", js: "velocity", typ: r("Position") },
        { json: "geoInfoType", js: "geoInfoType", typ: r("GeoInfoTypeClass") },
        { json: "imageUrl", js: "imageUrl", typ: r("Pitch") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "marker", js: "marker", typ: r("Marker") },
    ], false),
    "GeoInfoTypeClass": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "enum", js: "enum", typ: a("") },
        { json: "title", js: "title", typ: "" },
    ], false),
    "Marker": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "Position": o([
        { json: "$ref", js: "$ref", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
    ], false),
    "GeoPolygon": o([
        { json: "properties", js: "properties", typ: r("GeoPolygonProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "GeoPolygonProperties": o([
        { json: "name", js: "name", typ: r("Xmax") },
        { json: "positions", js: "positions", typ: r("Positions") },
        { json: "imageUrl", js: "imageUrl", typ: r("Xmax") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "labelType", js: "labelType", typ: r("GeoInfoTypeClass") },
        { json: "outline", js: "outline", typ: r("Fill") },
        { json: "fill", js: "fill", typ: r("Fill") },
    ], false),
    "Fill": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "enum", js: "enum", typ: a(0) },
        { json: "title", js: "title", typ: "" },
    ], false),
    "Positions": o([
        { json: "items", js: "items", typ: r("AngularClass") },
        { json: "type", js: "type", typ: r("TypeEnum") },
    ], false),
    "HeatmapInfo": o([
        { json: "properties", js: "properties", typ: r("HeatmapInfoProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "HeatmapInfoProperties": o([
        { json: "scalingUnit", js: "scalingUnit", typ: r("Pitch") },
        { json: "scalingFactor", js: "scalingFactor", typ: r("Pitch") },
    ], false),
    "MarkerClass": o([
        { json: "properties", js: "properties", typ: r("MarkerProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "MarkerProperties": o([
        { json: "type", js: "type", typ: r("GeoInfoTypeClass") },
        { json: "bearing", js: "bearing", typ: r("Pitch") },
    ], false),
    "OStream": o([
        { json: "properties", js: "properties", typ: r("OStreamAlphaBitmapProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "OStreamAlphaBitmapProperties": o([
        { json: "jobId", js: "jobId", typ: r("ChannelID") },
        { json: "vehicleId", js: "vehicleId", typ: r("ChannelID") },
        { json: "topicId", js: "topicId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("ChannelID") },
        { json: "oStreamType", js: "oStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "desc", js: "desc", typ: r("Pitch") },
        { json: "imageUrl", js: "imageUrl", typ: r("Pitch") },
        { json: "clickMap", js: "clickMap", typ: u(undefined, r("AngularClass")) },
        { json: "geoInfos", js: "geoInfos", typ: u(undefined, r("Pitch")) },
        { json: "geoPolygons", js: "geoPolygons", typ: u(undefined, r("Pitch")) },
        { json: "heatmapInfo", js: "heatmapInfo", typ: u(undefined, r("AngularClass")) },
    ], false),
    "ChannelID": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "description", js: "description", typ: r("Description") },
    ], false),
    "OStreamScalar": o([
        { json: "properties", js: "properties", typ: r("OStreamScalarProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "OStreamScalarProperties": o([
        { json: "jobId", js: "jobId", typ: r("ChannelID") },
        { json: "vehicleId", js: "vehicleId", typ: r("ChannelID") },
        { json: "topicId", js: "topicId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("ChannelID") },
        { json: "oStreamType", js: "oStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "desc", js: "desc", typ: r("Pitch") },
        { json: "imageUrl", js: "imageUrl", typ: r("Pitch") },
        { json: "title", js: "title", typ: r("Pitch") },
        { json: "yaxis", js: "yaxis", typ: r("Pitch") },
        { json: "ymin", js: "ymin", typ: r("Pitch") },
        { json: "ymax", js: "ymax", typ: r("Pitch") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "labelType", js: "labelType", typ: r("GeoInfoTypeClass") },
    ], false),
    "OStreamSchema": o([
        { json: "properties", js: "properties", typ: r("OStreamSchemaProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "OStreamSchemaProperties": o([
        { json: "oStreamGeoInfos", js: "oStreamGeoInfos", typ: r("AngularClass") },
        { json: "oStreamHeatmap", js: "oStreamHeatmap", typ: r("AngularClass") },
        { json: "oStreamAlphaBitmap", js: "oStreamAlphaBitmap", typ: r("AngularClass") },
        { json: "oStreamScalar", js: "oStreamScalar", typ: r("AngularClass") },
        { json: "oStreamVisual", js: "oStreamVisual", typ: r("AngularClass") },
    ], false),
    "OStreamVisual": o([
        { json: "properties", js: "properties", typ: r("OStreamVisualProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "OStreamVisualProperties": o([
        { json: "jobId", js: "jobId", typ: r("ChannelID") },
        { json: "vehicleId", js: "vehicleId", typ: r("ChannelID") },
        { json: "topicId", js: "topicId", typ: r("Pitch") },
        { json: "channelId", js: "channelId", typ: r("ChannelID") },
        { json: "oStreamType", js: "oStreamType", typ: r("Type") },
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "desc", js: "desc", typ: r("Pitch") },
        { json: "imageUrl", js: "imageUrl", typ: r("Pitch") },
        { json: "refWidth", js: "refWidth", typ: r("Pitch") },
        { json: "refHeight", js: "refHeight", typ: r("Pitch") },
        { json: "points", js: "points", typ: r("Positions") },
        { json: "vectors", js: "vectors", typ: r("Positions") },
        { json: "boxes", js: "boxes", typ: r("Positions") },
        { json: "images", js: "images", typ: r("Positions") },
        { json: "polygons", js: "polygons", typ: r("Positions") },
    ], false),
    "Vo": o([
        { json: "properties", js: "properties", typ: r("VoBoxProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "VoBoxProperties": o([
        { json: "name", js: "name", typ: r("ChannelID") },
        { json: "xmin", js: "xmin", typ: r("Xmax") },
        { json: "ymin", js: "ymin", typ: r("Xmax") },
        { json: "filterValue", js: "filterValue", typ: r("Pitch") },
        { json: "visualObjectType", js: "visualObjectType", typ: r("Type") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "xmax", js: "xmax", typ: r("Xmax") },
        { json: "ymax", js: "ymax", typ: r("Xmax") },
        { json: "labelType", js: "labelType", typ: r("GeoInfoTypeClass") },
        { json: "outline", js: "outline", typ: r("Fill") },
        { json: "fill", js: "fill", typ: u(undefined, r("Fill")) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, r("Pitch")) },
    ], false),
    "VoClickMap": o([
        { json: "properties", js: "properties", typ: r("VoClickMapProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "VoClickMapProperties": o([
        { json: "clickBoxes", js: "clickBoxes", typ: r("Positions") },
        { json: "clickPolygons", js: "clickPolygons", typ: r("Positions") },
    ], false),
    "VoPoint": o([
        { json: "properties", js: "properties", typ: r("VoPointProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "VoPointProperties": o([
        { json: "name", js: "name", typ: r("ChannelID") },
        { json: "xmin", js: "xmin", typ: r("Xmax") },
        { json: "ymin", js: "ymin", typ: r("Xmax") },
        { json: "filterValue", js: "filterValue", typ: r("Pitch") },
        { json: "visualObjectType", js: "visualObjectType", typ: r("Type") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "labelType", js: "labelType", typ: r("GeoInfoTypeClass") },
        { json: "outline", js: "outline", typ: r("Fill") },
        { json: "marker", js: "marker", typ: r("AngularClass") },
    ], false),
    "VoPolygon": o([
        { json: "properties", js: "properties", typ: r("VoPolygonProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "VoPolygonProperties": o([
        { json: "name", js: "name", typ: r("ChannelID") },
        { json: "filterValue", js: "filterValue", typ: r("Pitch") },
        { json: "visualObjectType", js: "visualObjectType", typ: r("Type") },
        { json: "clickable", js: "clickable", typ: r("Pitch") },
        { json: "triangleStripVertexes", js: "triangleStripVertexes", typ: r("Pitch") },
        { json: "labelType", js: "labelType", typ: r("GeoInfoTypeClass") },
        { json: "outline", js: "outline", typ: r("Fill") },
        { json: "fill", js: "fill", typ: r("Fill") },
    ], false),
    "VoVertex": o([
        { json: "properties", js: "properties", typ: r("VoVertexProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "VoVertexProperties": o([
        { json: "x", js: "x", typ: r("Xmax") },
        { json: "y", js: "y", typ: r("Xmax") },
    ], false),
    "PlugInRequest": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "$id", js: "$id", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
        { json: "$defs", js: "$defs", typ: r("PlugInRequestDefs") },
    ], false),
    "PlugInRequestDefs": o([
        { json: "ChannelRouting", js: "ChannelRouting", typ: r("ChannelRouting") },
        { json: "PlugInRequest", js: "PlugInRequest", typ: r("PlugInRequestClass") },
        { json: "TelemetryFeed", js: "TelemetryFeed", typ: r("TelemetryFeed") },
    ], false),
    "ChannelRouting": o([
        { json: "properties", js: "properties", typ: r("ChannelRoutingProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ChannelRoutingProperties": o([
        { json: "id", js: "id", typ: r("Pitch") },
        { json: "jsonFolder", js: "jsonFolder", typ: r("Pitch") },
    ], false),
    "PlugInRequestClass": o([
        { json: "properties", js: "properties", typ: r("PlugInRequestProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "PlugInRequestProperties": o([
        { json: "id", js: "id", typ: r("ID") },
        { json: "orgProfileFile", js: "orgProfileFile", typ: r("Pitch") },
        { json: "jobParamFile", js: "jobParamFile", typ: r("Pitch") },
        { json: "userProfileFile", js: "userProfileFile", typ: r("Pitch") },
        { json: "telemetryFeeds", js: "telemetryFeeds", typ: r("Pitch") },
        { json: "inputChannels", js: "inputChannels", typ: r("Pitch") },
        { json: "outputChannels", js: "outputChannels", typ: r("Pitch") },
    ], false),
    "ID": o([
        { json: "type", js: "type", typ: r("TypeEnum") },
        { json: "title", js: "title", typ: "" },
    ], false),
    "TelemetryFeed": o([
        { json: "properties", js: "properties", typ: r("TelemetryFeedProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "TelemetryFeedProperties": o([
        { json: "cameraFeedsImageFolders", js: "cameraFeedsImageFolders", typ: r("Pitch") },
        { json: "cameraFeedsVideoFolders", js: "cameraFeedsVideoFolders", typ: r("Pitch") },
        { json: "exifImageFolders", js: "exifImageFolders", typ: r("Pitch") },
        { json: "gimbalsFolder", js: "gimbalsFolder", typ: r("Pitch") },
        { json: "geolocationFolder", js: "geolocationFolder", typ: r("Pitch") },
        { json: "signalStrengthFolder", js: "signalStrengthFolder", typ: r("Pitch") },
        { json: "batteryFolder", js: "batteryFolder", typ: r("Pitch") },
    ], false),
    "ResultSchemaPlugIn": o([
        { json: "$schema", js: "$schema", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
        { json: "$defs", js: "$defs", typ: r("ResultSchemaPlugInDefs") },
    ], false),
    "ResultSchemaPlugInDefs": o([
        { json: "LocalGeoTiff", js: "LocalGeoTiff", typ: r("LocalGeoTiff") },
        { json: "PublicMap", js: "PublicMap", typ: r("PublicMap") },
        { json: "ResultBase", js: "ResultBase", typ: r("ResultBase") },
        { json: "ResultMap", js: "ResultMap", typ: r("ResultMap") },
        { json: "ResultSchema", js: "ResultSchema", typ: r("ResultSchema") },
    ], false),
    "LocalGeoTiff": o([
        { json: "properties", js: "properties", typ: r("LocalGeoTiffProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "LocalGeoTiffProperties": o([
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "imageUrl", js: "imageUrl", typ: r("Pitch") },
    ], false),
    "PublicMap": o([
        { json: "properties", js: "properties", typ: r("PublicMapProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "PublicMapProperties": o([
        { json: "time", js: "time", typ: r("Pitch") },
        { json: "remoteRoot", js: "remoteRoot", typ: r("Xmax") },
    ], false),
    "ResultBase": o([
        { json: "properties", js: "properties", typ: r("ResultBaseProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
    ], false),
    "ResultBaseProperties": o([
        { json: "public-root", js: "public-root", typ: r("Pitch") },
    ], false),
    "ResultMap": o([
        { json: "properties", js: "properties", typ: r("ResultMapProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
    ], false),
    "ResultMapProperties": o([
        { json: "public-root", js: "public-root", typ: r("Pitch") },
        { json: "geoTiffs", js: "geoTiffs", typ: r("Pitch") },
        { json: "publicMaps", js: "publicMaps", typ: r("Pitch") },
    ], false),
    "ResultSchema": o([
        { json: "properties", js: "properties", typ: r("ResultSchemaProperties") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "type", js: "type", typ: "" },
        { json: "required", js: "required", typ: a("") },
    ], false),
    "ResultSchemaProperties": o([
        { json: "resultBase", js: "resultBase", typ: r("AngularClass") },
        { json: "resultMap", js: "resultMap", typ: r("AngularClass") },
    ], false),
    "TypeEnum": [
        "array",
        "integer",
        "number",
        "string",
    ],
    "Description": [
        "leave it empty Fill by system",
        "Text field display on UI",
    ],
};
