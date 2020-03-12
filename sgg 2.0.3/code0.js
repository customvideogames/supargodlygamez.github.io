gdjs.startUPCode = {};
gdjs.startUPCode.GDlogoObjects1= [];
gdjs.startUPCode.GDlogoObjects2= [];
gdjs.startUPCode.GDshadowObjects1= [];
gdjs.startUPCode.GDshadowObjects2= [];
gdjs.startUPCode.GDtitleObjects1= [];
gdjs.startUPCode.GDtitleObjects2= [];
gdjs.startUPCode.GDbgObjects1= [];
gdjs.startUPCode.GDbgObjects2= [];
gdjs.startUPCode.GDloaderObjects1= [];
gdjs.startUPCode.GDloaderObjects2= [];

gdjs.startUPCode.conditionTrue_0 = {val:false};
gdjs.startUPCode.condition0IsTrue_0 = {val:false};
gdjs.startUPCode.condition1IsTrue_0 = {val:false};


gdjs.startUPCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.startUPCode.condition0IsTrue_0.val = false;
{
gdjs.startUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.startUPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "load.mp3", true, 100, 1);
}}

}


{


gdjs.startUPCode.condition0IsTrue_0.val = false;
{
gdjs.startUPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "cool");
}if (gdjs.startUPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


}; //End of gdjs.startUPCode.eventsList0x5b6e18


gdjs.startUPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startUPCode.GDlogoObjects1.length = 0;
gdjs.startUPCode.GDlogoObjects2.length = 0;
gdjs.startUPCode.GDshadowObjects1.length = 0;
gdjs.startUPCode.GDshadowObjects2.length = 0;
gdjs.startUPCode.GDtitleObjects1.length = 0;
gdjs.startUPCode.GDtitleObjects2.length = 0;
gdjs.startUPCode.GDbgObjects1.length = 0;
gdjs.startUPCode.GDbgObjects2.length = 0;
gdjs.startUPCode.GDloaderObjects1.length = 0;
gdjs.startUPCode.GDloaderObjects2.length = 0;

gdjs.startUPCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['startUPCode'] = gdjs.startUPCode;
