async function connect(){
    let device = await navigator.usb.requestDevice({
        filters:[{vendorId: 0x2341}]
    })
    console.log(device.productName)
    console.log(device.manufacturerName)
    return device.open()
}