class FreezerFactory {
  constructor(props) {
    this.oneClick = props.oneClick;
    this.quantity = props.quantity;
    this.version = props.version;
    this.code = props.code;
  }
}

class DoorFactory {
  constructor(props) {
    this.button = props.button;
    this.kin = props.kin;
    this.smartLed = props.smartLed;
    this.oneClick = props.oneClick;
    this.version = props.version;
    this.code = props.code;
  }
}

class DeviceFactory {
  constructor(type, props) {
    switch (type) {
      case 'freezer':
        return new FreezerFactory(props);
      case 'door':
        return new DoorFactory(props);
    }
  }
}


let device = new DeviceFactory('freezer', {
  oneClick: true,
  quantity: 1,
  version: '1.0',
  code: '12345'
})

console.log(device)