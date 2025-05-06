gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDTitleObjects4= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects4= [];
gdjs.MainMenuCode.GDLoadingScreenObjects1= [];
gdjs.MainMenuCode.GDLoadingScreenObjects2= [];
gdjs.MainMenuCode.GDLoadingScreenObjects3= [];
gdjs.MainMenuCode.GDLoadingScreenObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDByButtonObjects1= [];
gdjs.MainMenuCode.GDByButtonObjects2= [];
gdjs.MainMenuCode.GDByButtonObjects3= [];
gdjs.MainMenuCode.GDByButtonObjects4= [];
gdjs.MainMenuCode.GDGetTemplateButtonObjects1= [];
gdjs.MainMenuCode.GDGetTemplateButtonObjects2= [];
gdjs.MainMenuCode.GDGetTemplateButtonObjects3= [];
gdjs.MainMenuCode.GDGetTemplateButtonObjects4= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects1= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects2= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects3= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects4= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects1= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects2= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects3= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects4= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects1= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects2= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects3= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects4= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects1= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects2= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects3= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects4= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects3= [];
gdjs.MainMenuCode.GDNewSpriteObjects4= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects3Objects = Hashtable.newFrom({"ByButton": gdjs.MainMenuCode.GDByButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects3Objects = Hashtable.newFrom({"ByButton": gdjs.MainMenuCode.GDByButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects2Objects = Hashtable.newFrom({"ByButton": gdjs.MainMenuCode.GDByButtonObjects2});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ByButton"), gdjs.MainMenuCode.GDByButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88270388);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDByButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDByButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDByButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("ScaleIn", 1.2, 1.2, "easeOutBack", 150, false, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "HoverButton", false, 7, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ByButton"), gdjs.MainMenuCode.GDByButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDByButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDByButtonObjects3[i].getBehavior("Tween").isPlaying("ScaleIn")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDByButtonObjects3[k] = gdjs.MainMenuCode.GDByButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDByButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88272316);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDByButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDByButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDByButtonObjects3[i].getBehavior("Tween").addObjectScaleTween("ScaleOut", 1, 1, "easeOutBack", 150, false, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ByButton"), gdjs.MainMenuCode.GDByButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDByButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88273948);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.window.openURL("https://vegetato.itch.io", runtimeScene);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects3Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects3});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLoadingScreenObjects3Objects = Hashtable.newFrom({"LoadingScreen": gdjs.MainMenuCode.GDLoadingScreenObjects3});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88275892);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88277364);
}
}
}
if (isConditionTrue_0) {
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = 0;

{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDLoadingScreenObjects3Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MainMenuCode.GDLoadingScreenObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLoadingScreenObjects3[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDLoadingScreenObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLoadingScreenObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingScreen"), gdjs.MainMenuCode.GDLoadingScreenObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLoadingScreenObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLoadingScreenObjects3[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLoadingScreenObjects3[k] = gdjs.MainMenuCode.GDLoadingScreenObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDLoadingScreenObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDLoadingScreenObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLoadingScreenObjects3[i].getBehavior("Opacity").setOpacity(gdjs.MainMenuCode.GDLoadingScreenObjects3[i].getBehavior("Opacity").getOpacity() + (7));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingScreen"), gdjs.MainMenuCode.GDLoadingScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDLoadingScreenObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDLoadingScreenObjects2[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDLoadingScreenObjects2[k] = gdjs.MainMenuCode.GDLoadingScreenObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDLoadingScreenObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88280540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTemplateButtonObjects2Objects = Hashtable.newFrom({"GetTemplateButton": gdjs.MainMenuCode.GDGetTemplateButtonObjects2});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("GetTemplateButton"), gdjs.MainMenuCode.GDGetTemplateButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGetTemplateButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTemplateButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGetTemplateButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTemplateButtonObjects2[k] = gdjs.MainMenuCode.GDGetTemplateButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTemplateButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88282900);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTemplateButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGetTemplateButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTemplateButtonObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GetTemplateButton"), gdjs.MainMenuCode.GDGetTemplateButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGetTemplateButtonObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTemplateButtonObjects1[k] = gdjs.MainMenuCode.GDGetTemplateButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGetTemplateButtonObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGetTemplateButtonObjects1[k] = gdjs.MainMenuCode.GDGetTemplateButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(88284436);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGetTemplateButtonObjects1 */
{gdjs.evtTools.window.openURL("https://vegetato.itch.io/match-3-template/purchase", runtimeScene);
}{for(var i = 0, len = gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGetTemplateButtonObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList2(runtimeScene);
}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Main menu.ogg", 0, true, 60, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MainMenuCode.eventsList3(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects1.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects2.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDByButtonObjects1.length = 0;
gdjs.MainMenuCode.GDByButtonObjects2.length = 0;
gdjs.MainMenuCode.GDByButtonObjects3.length = 0;
gdjs.MainMenuCode.GDByButtonObjects4.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects3.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;

gdjs.MainMenuCode.eventsList4(runtimeScene);
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects1.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects2.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDByButtonObjects1.length = 0;
gdjs.MainMenuCode.GDByButtonObjects2.length = 0;
gdjs.MainMenuCode.GDByButtonObjects3.length = 0;
gdjs.MainMenuCode.GDByButtonObjects4.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects1.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects2.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects3.length = 0;
gdjs.MainMenuCode.GDGetTemplateButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
