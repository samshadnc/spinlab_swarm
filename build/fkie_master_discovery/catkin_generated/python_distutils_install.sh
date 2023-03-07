#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/spin/catkin_ws/src/multimaster/fkie_master_discovery"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/spin/catkin_ws/install/lib/python3/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/spin/catkin_ws/install/lib/python3/dist-packages:/home/spin/catkin_ws/build/fkie_master_discovery/lib/python3/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/spin/catkin_ws/build/fkie_master_discovery" \
    "/usr/bin/python3" \
    "/home/spin/catkin_ws/src/multimaster/fkie_master_discovery/setup.py" \
     \
    build --build-base "/home/spin/catkin_ws/build/fkie_master_discovery" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/spin/catkin_ws/install" --install-scripts="/home/spin/catkin_ws/install/bin"
