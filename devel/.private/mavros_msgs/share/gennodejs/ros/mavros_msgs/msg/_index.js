
"use strict";

let ParamValue = require('./ParamValue.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let Tunnel = require('./Tunnel.js');
let GPSINPUT = require('./GPSINPUT.js');
let Mavlink = require('./Mavlink.js');
let DebugValue = require('./DebugValue.js');
let MountControl = require('./MountControl.js');
let GPSRTK = require('./GPSRTK.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let ActuatorControl = require('./ActuatorControl.js');
let StatusText = require('./StatusText.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let LogEntry = require('./LogEntry.js');
let FileEntry = require('./FileEntry.js');
let HilGPS = require('./HilGPS.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let TerrainReport = require('./TerrainReport.js');
let LogData = require('./LogData.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let Trajectory = require('./Trajectory.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let Thrust = require('./Thrust.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let VehicleInfo = require('./VehicleInfo.js');
let HilControls = require('./HilControls.js');
let ESCStatus = require('./ESCStatus.js');
let Param = require('./Param.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let WaypointList = require('./WaypointList.js');
let GPSRAW = require('./GPSRAW.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let PositionTarget = require('./PositionTarget.js');
let Vibration = require('./Vibration.js');
let RCIn = require('./RCIn.js');
let ManualControl = require('./ManualControl.js');
let HilSensor = require('./HilSensor.js');
let VFR_HUD = require('./VFR_HUD.js');
let ESCInfo = require('./ESCInfo.js');
let HomePosition = require('./HomePosition.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let Altitude = require('./Altitude.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let BatteryStatus = require('./BatteryStatus.js');
let RadioStatus = require('./RadioStatus.js');
let RTCM = require('./RTCM.js');
let CommandCode = require('./CommandCode.js');
let State = require('./State.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let RTKBaseline = require('./RTKBaseline.js');
let RCOut = require('./RCOut.js');
let WaypointReached = require('./WaypointReached.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let CellularStatus = require('./CellularStatus.js');
let ExtendedState = require('./ExtendedState.js');
let LandingTarget = require('./LandingTarget.js');
let Waypoint = require('./Waypoint.js');

module.exports = {
  ParamValue: ParamValue,
  CamIMUStamp: CamIMUStamp,
  Tunnel: Tunnel,
  GPSINPUT: GPSINPUT,
  Mavlink: Mavlink,
  DebugValue: DebugValue,
  MountControl: MountControl,
  GPSRTK: GPSRTK,
  OnboardComputerStatus: OnboardComputerStatus,
  ActuatorControl: ActuatorControl,
  StatusText: StatusText,
  WheelOdomStamped: WheelOdomStamped,
  LogEntry: LogEntry,
  FileEntry: FileEntry,
  HilGPS: HilGPS,
  ESCInfoItem: ESCInfoItem,
  TerrainReport: TerrainReport,
  LogData: LogData,
  ESCTelemetryItem: ESCTelemetryItem,
  Trajectory: Trajectory,
  CameraImageCaptured: CameraImageCaptured,
  Thrust: Thrust,
  TimesyncStatus: TimesyncStatus,
  EstimatorStatus: EstimatorStatus,
  ESCStatusItem: ESCStatusItem,
  PlayTuneV2: PlayTuneV2,
  VehicleInfo: VehicleInfo,
  HilControls: HilControls,
  ESCStatus: ESCStatus,
  Param: Param,
  NavControllerOutput: NavControllerOutput,
  WaypointList: WaypointList,
  GPSRAW: GPSRAW,
  OverrideRCIn: OverrideRCIn,
  PositionTarget: PositionTarget,
  Vibration: Vibration,
  RCIn: RCIn,
  ManualControl: ManualControl,
  HilSensor: HilSensor,
  VFR_HUD: VFR_HUD,
  ESCInfo: ESCInfo,
  HomePosition: HomePosition,
  HilStateQuaternion: HilStateQuaternion,
  GlobalPositionTarget: GlobalPositionTarget,
  HilActuatorControls: HilActuatorControls,
  MagnetometerReporter: MagnetometerReporter,
  Altitude: Altitude,
  AttitudeTarget: AttitudeTarget,
  ADSBVehicle: ADSBVehicle,
  OpticalFlowRad: OpticalFlowRad,
  BatteryStatus: BatteryStatus,
  RadioStatus: RadioStatus,
  RTCM: RTCM,
  CommandCode: CommandCode,
  State: State,
  CompanionProcessStatus: CompanionProcessStatus,
  RTKBaseline: RTKBaseline,
  RCOut: RCOut,
  WaypointReached: WaypointReached,
  ESCTelemetry: ESCTelemetry,
  CellularStatus: CellularStatus,
  ExtendedState: ExtendedState,
  LandingTarget: LandingTarget,
  Waypoint: Waypoint,
};
