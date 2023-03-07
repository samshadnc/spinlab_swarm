// Auto-generated. Do not edit!

// (in-package mavros_msgs.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let Waypoint = require('../msg/Waypoint.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class WaypointPushRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.start_index = null;
      this.waypoints = null;
    }
    else {
      if (initObj.hasOwnProperty('start_index')) {
        this.start_index = initObj.start_index
      }
      else {
        this.start_index = 0;
      }
      if (initObj.hasOwnProperty('waypoints')) {
        this.waypoints = initObj.waypoints
      }
      else {
        this.waypoints = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type WaypointPushRequest
    // Serialize message field [start_index]
    bufferOffset = _serializer.uint16(obj.start_index, buffer, bufferOffset);
    // Serialize message field [waypoints]
    // Serialize the length for message field [waypoints]
    bufferOffset = _serializer.uint32(obj.waypoints.length, buffer, bufferOffset);
    obj.waypoints.forEach((val) => {
      bufferOffset = Waypoint.serialize(val, buffer, bufferOffset);
    });
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type WaypointPushRequest
    let len;
    let data = new WaypointPushRequest(null);
    // Deserialize message field [start_index]
    data.start_index = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [waypoints]
    // Deserialize array length for message field [waypoints]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.waypoints = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.waypoints[i] = Waypoint.deserialize(buffer, bufferOffset)
    }
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 45 * object.waypoints.length;
    return length + 6;
  }

  static datatype() {
    // Returns string type for a service object
    return 'mavros_msgs/WaypointPushRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b97216c84680b216429bf6c603ab2e03';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Send waypoints to device
    #
    #  :start_index: will define a partial waypoint update. Set to 0 for full update
    #
    # Returns success status and transfered count
    
    uint16 start_index
    mavros_msgs/Waypoint[] waypoints
    
    ================================================================================
    MSG: mavros_msgs/Waypoint
    # Waypoint.msg
    #
    # ROS representation of MAVLink MISSION_ITEM
    # See mavlink documentation
    
    
    
    # see enum MAV_FRAME
    uint8 frame
    uint8 FRAME_GLOBAL = 0
    uint8 FRAME_LOCAL_NED = 1
    uint8 FRAME_MISSION = 2
    uint8 FRAME_GLOBAL_REL_ALT = 3
    uint8 FRAME_LOCAL_ENU = 4
    uint8 FRAME_GLOBAL_INT = 5
    uint8 FRAME_GLOBAL_RELATIVE_ALT_INT = 6
    uint8 FRAME_LOCAL_OFFSET_NED = 7
    uint8 FRAME_BODY_NED = 8
    uint8 FRAME_BODY_OFFSET_NED = 9
    uint8 FRAME_GLOBAL_TERRAIN_ALT = 10
    uint8 FRAME_GLOBAL_TERRAIN_ALT_INT = 11
    uint8 FRAME_BODY_FRD = 12
    uint8 FRAME_RESERVED_13 = 13
    uint8 FRAME_RESERVED_14 = 14
    uint8 FRAME_RESERVED_15 = 15
    uint8 FRAME_RESERVED_16 = 16
    uint8 FRAME_RESERVED_17 = 17
    uint8 FRAME_RESERVED_18 = 18
    uint8 FRAME_RESERVED_19 = 19
    uint8 FRAME_LOCAL_FRD = 20
    uint8 FRAME_LOCAL_FLU = 21
    
    # see enum MAV_CMD and CommandCode.msg
    uint16 command
    
    bool is_current
    bool autocontinue
    # meaning of this params described in enum MAV_CMD
    float32 param1
    float32 param2
    float32 param3
    float32 param4
    float64 x_lat
    float64 y_long
    float64 z_alt
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new WaypointPushRequest(null);
    if (msg.start_index !== undefined) {
      resolved.start_index = msg.start_index;
    }
    else {
      resolved.start_index = 0
    }

    if (msg.waypoints !== undefined) {
      resolved.waypoints = new Array(msg.waypoints.length);
      for (let i = 0; i < resolved.waypoints.length; ++i) {
        resolved.waypoints[i] = Waypoint.Resolve(msg.waypoints[i]);
      }
    }
    else {
      resolved.waypoints = []
    }

    return resolved;
    }
};

class WaypointPushResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.success = null;
      this.wp_transfered = null;
    }
    else {
      if (initObj.hasOwnProperty('success')) {
        this.success = initObj.success
      }
      else {
        this.success = false;
      }
      if (initObj.hasOwnProperty('wp_transfered')) {
        this.wp_transfered = initObj.wp_transfered
      }
      else {
        this.wp_transfered = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type WaypointPushResponse
    // Serialize message field [success]
    bufferOffset = _serializer.bool(obj.success, buffer, bufferOffset);
    // Serialize message field [wp_transfered]
    bufferOffset = _serializer.uint32(obj.wp_transfered, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type WaypointPushResponse
    let len;
    let data = new WaypointPushResponse(null);
    // Deserialize message field [success]
    data.success = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [wp_transfered]
    data.wp_transfered = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 5;
  }

  static datatype() {
    // Returns string type for a service object
    return 'mavros_msgs/WaypointPushResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '90e0074a42480231d34eed864d14365e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    uint32 wp_transfered
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new WaypointPushResponse(null);
    if (msg.success !== undefined) {
      resolved.success = msg.success;
    }
    else {
      resolved.success = false
    }

    if (msg.wp_transfered !== undefined) {
      resolved.wp_transfered = msg.wp_transfered;
    }
    else {
      resolved.wp_transfered = 0
    }

    return resolved;
    }
};

module.exports = {
  Request: WaypointPushRequest,
  Response: WaypointPushResponse,
  md5sum() { return '96690cb0f07ea4a54cdd6f188e10228e'; },
  datatype() { return 'mavros_msgs/WaypointPush'; }
};
