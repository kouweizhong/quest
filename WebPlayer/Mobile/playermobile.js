﻿function panesVisible(visible) {
//    if (visible) {
//        $("#gamePanes").show();
//        $("#gameContent").css("width", "700px");
//        $("#txtCommand").css("width", "680px");
//        $("#updating").css("margin-left", "185px");
//        $("#gamePanel").css("width", "700px");
//    }
//    else {
//        $("#gamePanes").hide();
//        $("#gameContent").css("width", "910px");
//        $("#txtCommand").css("width", "890px");
//        $("#updating").css("margin-left", "405px");
//        $("#gamePanel").css("width", "910px");
//    }
}

function scrollToEnd() {
    var newScrollTop = beginningOfCurrentTurnScrollPosition - 15;
    if ($("#gameBorder").height() > $(window).height()) {
        $('html, body').animate({ scrollTop: newScrollTop }, 200);
    }
}

function setBackground(col) {
    $("#gameBorder").css("background-color", col);
    $("#txtCommandDiv").css("background-color", col);
    $("body").css("background-color", col);
}

function setPanelHeight() {
}

function setPanelContents(html) {
}

var resizeTimer;

function ui_init() {
    //    resizeUI();
    //    $(window).resize(function () {
    //        clearTimeout(resizeTimer);
    //        resizeTimer = setTimeout(function () {
    //            resizeUI();
    //        }, 100);
    //    });
    //    document.addEventListener("orientationChanged", resizeUI);

    SetMenuFontSize("20px");
    _allowMenuFontSizeChange = false;

    var options = [
        { title: "Game", action: { type: "fn", callback: "tabMenu('game');"} },
        { title: "Inventory", action: { type: "fn", callback: "tabMenu('inventory');"} },
        { title: "Objects", action: { type: "fn", callback: "tabMenu('objects');"} },
        { title: "Exits", action: { type: "fn", callback: "tabMenu('exits');"} },
        { title: "More", action: { type: "fn", callback: "tabMenu('more');"} }
    ];
    $("#tabButton").jjmenu("both", options, {}, { show: "fadeIn", speed: 100, xposition: "left", yposition: "auto", "orientation": "auto" });
}

function tabMenu(id) {
    $("div[id^=jjmenu]").remove();
    alert(id);
}

function resizeUI() {
}

function beginWait() {
    _waitMode = true;
    $("#txtCommand").fadeOut(400, function () {
        $("#endWaitLink").fadeTo(400, 1);
    });
    markScrollPosition();
}

function sessionTimeout() {
    disableInterface();
    $("#sessionTimeoutDiv").show();
}

function gameFinished() {
    disableInterface();
}

function disableInterface() {
    $("#txtCommandDiv").hide();
    $("#gamePanesRunning").hide();
    $("#gamePanesFinished").show();
}