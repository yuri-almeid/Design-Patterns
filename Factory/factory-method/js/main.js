class Device {
  constructor(props) {
    this.oneClick = props.oneClick;
    this.version = props.version;
    this.code = props.code;
  }
}

class Freezer extends Device {
  constructor(props) {
    super(props);
    this.quantity = props.quantity;
  }
}

class Door extends Device {
  constructor(props) {
    super(props);
    this.button = props.button;
    this.kin = props.kin;
    this.smartLed = props.smartLed;
  }
}

class DeviceFactory {
  static createDevice() {
    throw new Error('Abstract method');
  }
}

class FreezerFactory extends DeviceFactory {
  static createDevice(props) {
    return new Freezer(props);
  }
}

class DoorFactory extends DeviceFactory {
  static createDevice(props) {
    return new Door(props);
  }
}


let device = FreezerFactory.createDevice({
  oneClick: true,
  quantity: 1,
  version: '1.0',
  code: '12345'
})

console.log(device);