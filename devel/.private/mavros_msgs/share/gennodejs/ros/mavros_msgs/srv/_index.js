
"use strict";

let ParamGet = require('./ParamGet.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let CommandAck = require('./CommandAck.js')
let ParamSet = require('./ParamSet.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let FileWrite = require('./FileWrite.js')
let ParamPush = require('./ParamPush.js')
let CommandLong = require('./CommandLong.js')
let CommandTOL = require('./CommandTOL.js')
let FileRename = require('./FileRename.js')
let LogRequestData = require('./LogRequestData.js')
let SetMode = require('./SetMode.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileRemove = require('./FileRemove.js')
let CommandInt = require('./CommandInt.js')
let ParamPull = require('./ParamPull.js')
let WaypointPull = require('./WaypointPull.js')
let FileChecksum = require('./FileChecksum.js')
let SetMavFrame = require('./SetMavFrame.js')
let WaypointPush = require('./WaypointPush.js')
let LogRequestList = require('./LogRequestList.js')
let FileOpen = require('./FileOpen.js')
let StreamRate = require('./StreamRate.js')
let CommandHome = require('./CommandHome.js')
let FileTruncate = require('./FileTruncate.js')
let MountConfigure = require('./MountConfigure.js')
let FileClose = require('./FileClose.js')
let WaypointClear = require('./WaypointClear.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileRead = require('./FileRead.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandBool = require('./CommandBool.js')
let FileList = require('./FileList.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')

module.exports = {
  ParamGet: ParamGet,
  CommandTriggerInterval: CommandTriggerInterval,
  CommandAck: CommandAck,
  ParamSet: ParamSet,
  WaypointSetCurrent: WaypointSetCurrent,
  VehicleInfoGet: VehicleInfoGet,
  FileWrite: FileWrite,
  ParamPush: ParamPush,
  CommandLong: CommandLong,
  CommandTOL: CommandTOL,
  FileRename: FileRename,
  LogRequestData: LogRequestData,
  SetMode: SetMode,
  LogRequestEnd: LogRequestEnd,
  FileRemove: FileRemove,
  CommandInt: CommandInt,
  ParamPull: ParamPull,
  WaypointPull: WaypointPull,
  FileChecksum: FileChecksum,
  SetMavFrame: SetMavFrame,
  WaypointPush: WaypointPush,
  LogRequestList: LogRequestList,
  FileOpen: FileOpen,
  StreamRate: StreamRate,
  CommandHome: CommandHome,
  FileTruncate: FileTruncate,
  MountConfigure: MountConfigure,
  FileClose: FileClose,
  WaypointClear: WaypointClear,
  FileMakeDir: FileMakeDir,
  FileRead: FileRead,
  FileRemoveDir: FileRemoveDir,
  CommandBool: CommandBool,
  FileList: FileList,
  CommandVtolTransition: CommandVtolTransition,
  MessageInterval: MessageInterval,
  CommandTriggerControl: CommandTriggerControl,
};
