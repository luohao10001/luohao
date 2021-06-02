let cd = '[{"type":"pet_feedPetFood","data":{}}]'
let rqq = '[{"type":"carBox_receiveBoxReward","data":{}}]'
let id = ""
let xl1 = '[{"type":"farmland_repair","data":{"farmlandDefId":1}}]'
let xl2 = '[{"type":"farmland_repair","data":{"farmlandDefId":2}}]'
let xl3 = '[{"type":"farmland_repair","data":{"farmlandDefId":3}}]'
let xl4 = '[{"type":"farmland_repair","data":{"farmlandDefId":4}}]'
	@@ -100,143 +105,143 @@ let rw1 = '[{"type":"dailyQuest_receiveReward","data":{"questDefId":2001,"questT
await gjcd();//管家充电
    await $.wait(7000);
await zdcj();//自动抽奖
    await $.wait(10000);
await krqq();//热气球/汽车
  await $.wait(1000);
     await ptjsd1();
   await $.wait(10000);
   await xld1();
   await $.wait(10000);
    await sqd1();
await $.wait(10000);
 await scd1();
  await $.wait(1000);

   await ptjsd2();
   await $.wait(10000);
   await xld2();
   await $.wait(10000);
    await sqd2();
await $.wait(10000);
 await scd2();
  await $.wait(1000);

   await ptjsd3();
   await $.wait(10000);
   await xld3();
   await $.wait(10000);
    await sqd3();
await $.wait(10000);
 await scd3();
  await $.wait(1000);

   await ptjsd4();
   await $.wait(10000);
   await xld4();
   await $.wait(10000);
    await sqd4();
await $.wait(10000);
 await scd4();
  await $.wait(1000);

   await ptjsd5();
   await $.wait(10000);
   await xld5();
   await $.wait(10000);
    await sqd5();
await $.wait(10000);
 await scd5();
  await $.wait(1000);

   await ptjsd6();
   await $.wait(10000);
   await xld6();
   await $.wait(10000);
    await sqd6();
await $.wait(10000);
 await scd6();
  await $.wait(1000);

   await ptjsd7();
   await $.wait(10000);
   await xld7();
   await $.wait(10000);
    await sqd7();
await $.wait(10000);
 await scd7();
  await $.wait(1000);

  await ptjsd8();
   await $.wait(10000);
   await xld8();
   await $.wait(10000);
    await sqd8();
await $.wait(10000);
 await scd8();
  await $.wait(1000);
  await ptjsd9();
   await $.wait(10000);
   await xld9();
   await $.wait(10000);
    await sqd9();
await $.wait(10000);
 await scd9();
  await $.wait(1000);

  await xld1();
 await $.wait(10000);
 await sqd1();
await $.wait(10000);
 await scd1();
await $.wait(1000);
  await xld2();
 await $.wait(10000);
 await sqd2();
await $.wait(10000);
 await scd2();
await $.wait(1000);
  await xld3();
 await $.wait(10000);
 await sqd3();
await $.wait(10000);
 await scd3();
await $.wait(1000);
  await xld4();
 await $.wait(10000);
 await sqd4();
await $.wait(10000);
 await scd4();
await $.wait(1000);
  await xld5();
 await $.wait(10000);
 await sqd5();
await $.wait(10000);
 await scd5();
await $.wait(1000);
  await xld6();
 await $.wait(10000);
 await sqd6();
await $.wait(10000);
 await scd6();
await $.wait(1000);
  await xld7();
 await $.wait(10000);
 await sqd7();
await $.wait(10000);
 await scd7();
await $.wait(1000);
 //await quantijs();
  await xld8();
 await $.wait(10000);
 await sqd8();
await $.wait(10000);
 await scd8();
await $.wait(1000);
  await xld9();
 await $.wait(10000);
 await sqd9();
await $.wait(10000);
 await scd9();
//await $.wait(1000);
   } 
 }} 
	@@ -341,7 +346,7 @@ if(data.match(/pet_feedPetFood/) == 'pet_feedPetFood'){


 } else { 
 $.log(`机器管家充电失败次数`) 

 } 
   } catch (e) { 
	@@ -385,27 +390,27 @@ if(data.match(/carBox_receiveBoxReward/) == 'carBox_receiveBoxReward'){
 }) 
 } 

//修理部分
function xld1(timeout = 0) { 
 return new Promise((resolve) => { 

id = fhxzurl.match(/Token=\S+&/)
 //$.log(id) 
   let url = { 
 url : 'https://sunnytown.hyskgame.com/api/messages?access'+id+'msgtype=farmland_repair', 

body : xl1,
   } 
 $.post(url, async (err, resp, data) => { 

   try { 

if(data.match(/farmland_repair/) == 'farmland_repair'){ 
 $.log(`1号田修理成功`)


 } else { 
 $.log(`1号田无需修理`) 

 } 
   } catch (e) { 
	@@ -416,26 +421,26 @@ if(data.match(/farmland_repair/) == 'farmland_repair'){
 },timeout) 
 }) 
 } 
function xld2(timeout = 0) { 
 return new Promise((resolve) => { 

id = fhxzurl.match(/Token=\S+&/)
//$.log(id) 
   let url = { 
 url : 'https://sunnytown.hyskgame.com/api/messages?access'+id+'msgtype=farmland_repair', 

body : xl2,
   } 
 $.post(url, async (err, resp, data) => { 

   try { 

if(data.match(/farmland_repair/) == 'farmland_repair'){ 
 $.log(`2号田修理成功`)


 } else { 
 $.log(`2号田无需修理`) 

 } 
   } catch (e) { 
	@@ -1234,61 +1239,61 @@ if(data.match(/farmland_speedUpAll/) == 'farmland_speedUpAll'){

$.log(`全体加速成功 剩余次数：`+data.match(/remainingAllTimes":(\d+),/)[1])

 await xld1();
 await $.wait(10000);
 await sqd1();
await $.wait(10000);
 await scd1();
await $.wait(1000);
  await xld2();
 await $.wait(10000);
 await sqd2();
await $.wait(10000);
 await scd2();
await $.wait(1000);
  await xld3();
 await $.wait(10000);
 await sqd3();
await $.wait(10000);
 await scd3();
await $.wait(1000);
  await xld4();
 await $.wait(10000);
 await sqd4();
await $.wait(10000);
 await scd4();
await $.wait(1000);
  await xld5();
 await $.wait(10000);
 await sqd5();
await $.wait(10000);
 await scd5();
await $.wait(1000);
  await xld6();
 await $.wait(10000);
 await sqd6();
await $.wait(10000);
 await scd6();
await $.wait(1000);
  await xld7();
 await $.wait(10000);
 await sqd7();
await $.wait(10000);
 await scd7();
await $.wait(1000);
 await xld8();
 await $.wait(10000);
 await sqd8();
await $.wait(10000);
 await scd8();
 await $.wait(1000);
 await xld9();
 await $.wait(10000);
 await sqd9();
await $.wait(10000);
 await scd9();
 } else { 
 $.log(`全体加速失败或次数不够`) 

 } 
   } catch (e) { 
