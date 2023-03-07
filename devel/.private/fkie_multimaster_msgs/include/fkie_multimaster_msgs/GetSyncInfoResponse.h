// Generated by gencpp from file fkie_multimaster_msgs/GetSyncInfoResponse.msg
// DO NOT EDIT!


#ifndef FKIE_MULTIMASTER_MSGS_MESSAGE_GETSYNCINFORESPONSE_H
#define FKIE_MULTIMASTER_MSGS_MESSAGE_GETSYNCINFORESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <fkie_multimaster_msgs/SyncMasterInfo.h>

namespace fkie_multimaster_msgs
{
template <class ContainerAllocator>
struct GetSyncInfoResponse_
{
  typedef GetSyncInfoResponse_<ContainerAllocator> Type;

  GetSyncInfoResponse_()
    : hosts()  {
    }
  GetSyncInfoResponse_(const ContainerAllocator& _alloc)
    : hosts(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector< ::fkie_multimaster_msgs::SyncMasterInfo_<ContainerAllocator> , typename std::allocator_traits<ContainerAllocator>::template rebind_alloc< ::fkie_multimaster_msgs::SyncMasterInfo_<ContainerAllocator> >> _hosts_type;
  _hosts_type hosts;





  typedef boost::shared_ptr< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetSyncInfoResponse_

typedef ::fkie_multimaster_msgs::GetSyncInfoResponse_<std::allocator<void> > GetSyncInfoResponse;

typedef boost::shared_ptr< ::fkie_multimaster_msgs::GetSyncInfoResponse > GetSyncInfoResponsePtr;
typedef boost::shared_ptr< ::fkie_multimaster_msgs::GetSyncInfoResponse const> GetSyncInfoResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator1> & lhs, const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator2> & rhs)
{
  return lhs.hosts == rhs.hosts;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator1> & lhs, const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace fkie_multimaster_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "d5261ec56e202860a07fb47b41e1b2a8";
  }

  static const char* value(const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xd5261ec56e202860ULL;
  static const uint64_t static_value2 = 0xa07fb47b41e1b2a8ULL;
};

template<class ContainerAllocator>
struct DataType< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "fkie_multimaster_msgs/GetSyncInfoResponse";
  }

  static const char* value(const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "fkie_multimaster_msgs/SyncMasterInfo[] hosts\n"
"\n"
"================================================================================\n"
"MSG: fkie_multimaster_msgs/SyncMasterInfo\n"
"string masteruri\n"
"string[] nodes\n"
"fkie_multimaster_msgs/SyncTopicInfo[] publisher\n"
"fkie_multimaster_msgs/SyncTopicInfo[] subscriber\n"
"fkie_multimaster_msgs/SyncServiceInfo[] services\n"
"================================================================================\n"
"MSG: fkie_multimaster_msgs/SyncTopicInfo\n"
"string topic\n"
"string node\n"
"string nodeuri\n"
"================================================================================\n"
"MSG: fkie_multimaster_msgs/SyncServiceInfo\n"
"string service\n"
"string serviceuri\n"
"string node\n"
"string nodeuri\n"
;
  }

  static const char* value(const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.hosts);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct GetSyncInfoResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::fkie_multimaster_msgs::GetSyncInfoResponse_<ContainerAllocator>& v)
  {
    s << indent << "hosts[]" << std::endl;
    for (size_t i = 0; i < v.hosts.size(); ++i)
    {
      s << indent << "  hosts[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::fkie_multimaster_msgs::SyncMasterInfo_<ContainerAllocator> >::stream(s, indent + "    ", v.hosts[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // FKIE_MULTIMASTER_MSGS_MESSAGE_GETSYNCINFORESPONSE_H
