import Obniz = require('obniz');

const pins = {
  vcc: 0,
  sda: 1,
  scl: 2,
  adr: 3,
  gnd: 4,
  addressmode: 5
};

const obniz = new Obniz(process.env.OBNIZ_ID);

const main = async (): Promise<void> => {
  await obniz.connectWait();
  console.log(obniz.connectionState);

  const sht31 = obniz.wired('SHT31', pins);

  const temp = await sht31.getTempWait();
  const humd = await sht31.getHumdWait();
  console.log('temperature:' + temp);
  console.log('humidity:' + humd);
};

main().then(() => {
  console.log('completed');
})