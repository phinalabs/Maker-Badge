//Get badges
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:3300/api/badges", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


async function connect() {
    let device = await navigator.usb.requestDevice({
        filters: [{ vendorId: 0x2341 }]
    })
    console.log(device.productName)
    console.log(device.manufacturerName)
    return device.open()
}

click.onclick = function () {
    var vendorId = "0x" + document.getElementById("vendor").value;

    navigator.usb
        .requestDevice({ filters: [{ vendorId: vendorId }] })
        .then((device) => {
            console.log(device);
            console.log("Product ID: " + device.productId.toString(16));
            console.log("Vendor ID: " + device.vendorId.toString(16));
        })
        .catch((error) => {
            console.log(error);
        });
};


let device;

navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] })
    .then(selectedDevice => {
        device = selectedDevice;
        return device.open(); // Begin a session.
    })
    .then(() => device.selectConfiguration(1)) // Select configuration #1 for the device.
    .then(() => device.claimInterface(2)) // Request exclusive control over interface #2.
    .then(() => device.controlTransferOut({
        requestType: 'class',
        recipient: 'interface',
        request: 0x22,
        value: 0x01,
        index: 0x02
    })) // Ready to receive data
    .then(() => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
    .then(result => {
        const decoder = new TextDecoder();
        console.log('Received: ' + decoder.decode(result.data));
    })
    .catch(error => { console.error(error); });