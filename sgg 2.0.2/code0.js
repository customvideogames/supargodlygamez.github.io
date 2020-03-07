gdjs.homeCode = {};
gdjs.homeCode.GDbgObjects1= [];
gdjs.homeCode.GDbgObjects2= [];
gdjs.homeCode.GDversionObjects1= [];
gdjs.homeCode.GDversionObjects2= [];
gdjs.homeCode.GDSuperBoiObjects1= [];
gdjs.homeCode.GDSuperBoiObjects2= [];
gdjs.homeCode.GDlogoObjects1= [];
gdjs.homeCode.GDlogoObjects2= [];
gdjs.homeCode.GDbikeRacurObjects1= [];
gdjs.homeCode.GDbikeRacurObjects2= [];
gdjs.homeCode.GDtitle1Objects1= [];
gdjs.homeCode.GDtitle1Objects2= [];
gdjs.homeCode.GDtitle2Objects1= [];
gdjs.homeCode.GDtitle2Objects2= [];
gdjs.homeCode.GDtitle3Objects1= [];
gdjs.homeCode.GDtitle3Objects2= [];
gdjs.homeCode.GDTheOutsiderObjects1= [];
gdjs.homeCode.GDTheOutsiderObjects2= [];

gdjs.homeCode.conditionTrue_0 = {val:false};
gdjs.homeCode.condition0IsTrue_0 = {val:false};
gdjs.homeCode.condition1IsTrue_0 = {val:false};
gdjs.homeCode.condition2IsTrue_0 = {val:false};


gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDSuperBoiObjects1Objects = Hashtable.newFrom({"SuperBoi": gdjs.homeCode.GDSuperBoiObjects1});gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDbikeRacurObjects1Objects = Hashtable.newFrom({"bikeRacur": gdjs.homeCode.GDbikeRacurObjects1});gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDTheOutsiderObjects1Objects = Hashtable.newFrom({"TheOutsider": gdjs.homeCode.GDTheOutsiderObjects1});gdjs.homeCode.eventsList0xb4be0 = function(runtimeScene) {

{

gdjs.homeCode.GDSuperBoiObjects1.createFrom(runtimeScene.getObjects("SuperBoi"));

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDSuperBoiObjects1Objects, runtimeScene, true, false);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://supargodlygamez.github.io/superBoi1.html", runtimeScene);
}}

}


{

gdjs.homeCode.GDbikeRacurObjects1.createFrom(runtimeScene.getObjects("bikeRacur"));

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDbikeRacurObjects1Objects, runtimeScene, true, false);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://supargodlygamez.github.io/bikeRacur.html", runtimeScene);
}}

}


{

gdjs.homeCode.GDTheOutsiderObjects1.createFrom(runtimeScene.getObjects("TheOutsider"));

gdjs.homeCode.condition0IsTrue_0.val = false;
gdjs.homeCode.condition1IsTrue_0.val = false;
{
gdjs.homeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.homeCode.mapOfGDgdjs_46homeCode_46GDTheOutsiderObjects1Objects, runtimeScene, true, false);
}if ( gdjs.homeCode.condition0IsTrue_0.val ) {
{
gdjs.homeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.homeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://supargodlygamez.github.io/theoutsdr.html", runtimeScene);
}}

}


}; //End of gdjs.homeCode.eventsList0xb4be0


gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDbgObjects1.length = 0;
gdjs.homeCode.GDbgObjects2.length = 0;
gdjs.homeCode.GDversionObjects1.length = 0;
gdjs.homeCode.GDversionObjects2.length = 0;
gdjs.homeCode.GDSuperBoiObjects1.length = 0;
gdjs.homeCode.GDSuperBoiObjects2.length = 0;
gdjs.homeCode.GDlogoObjects1.length = 0;
gdjs.homeCode.GDlogoObjects2.length = 0;
gdjs.homeCode.GDbikeRacurObjects1.length = 0;
gdjs.homeCode.GDbikeRacurObjects2.length = 0;
gdjs.homeCode.GDtitle1Objects1.length = 0;
gdjs.homeCode.GDtitle1Objects2.length = 0;
gdjs.homeCode.GDtitle2Objects1.length = 0;
gdjs.homeCode.GDtitle2Objects2.length = 0;
gdjs.homeCode.GDtitle3Objects1.length = 0;
gdjs.homeCode.GDtitle3Objects2.length = 0;
gdjs.homeCode.GDTheOutsiderObjects1.length = 0;
gdjs.homeCode.GDTheOutsiderObjects2.length = 0;

gdjs.homeCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['homeCode'] = gdjs.homeCode;
