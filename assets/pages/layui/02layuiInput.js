var form = layui.form;
var verifies = {
    identify:{
        regex:/(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        // regex:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        error:"身份证不合法，请重新输入或修改!",
        clear:false
        //delay:true // 是否延迟判断
    },
    yesno:{
        regex:/(^0|1$)/,
        error:"请输入合法值![0：否，1：是]",
        clear:true
    },
    preTime:{
        regex:/[\d]{4}[\d]{2}[\d]{2}/g,
        error:"请输入正确的时间格式",
        clear:false
    },
    currentPlace:{
        regex:/(^1|2$)/,
        error:"请输入合法值![1：城镇，2：农村]",
        clear:true
    },
    edu: {
        regex:/(^[1-6]$)/,
        error:"请输入合法值![1：文盲，2：小学，3：初中（技校），4：高中（中专），5：大专及本科，6：研究生及以上]",
        clear:true
    }

};

$(function () {
    /*---------------------------------------------------载入----------------------------------------------------------------------------*/
    /*$.bds.get("/bdsInfoManagement/getGravidaEnum",{},function (data) {
        console.info(data);

        /!*1.现居地*!/
        var currentAddressInfo = data.currentAddressInfo;
        console.info(currentAddressInfo);
        for(var key in currentAddressInfo) {
            var $curAdressItem = $("#curAdressClone div").clone(true);
            /!*添加数据*!/
            $curAdressItem.find(".curAdressCode").text(data.currentAddressInfo[key].enumItemValue);
            $curAdressItem.find(".curAdressText").text(data.currentAddressInfo[key].enumItemName);
            $("#curAdress").append($curAdressItem);
        }

        /!*4.孕妇文化程度*!/
        var eduLevel = data.gravidaEducationalLevelInfo;
        console.info(eduLevel);
        for(var key in eduLevel) {
            var $eduLevelItem = $("#eduClone div").clone(true);
            /!*添加数据*!/
            $eduLevelItem.find(".eduCode").text(data.gravidaEducationalLevelInfo[key].enumItemValue);
            $eduLevelItem.find(".eduText").text(data.gravidaEducationalLevelInfo[key].enumItemName);
            $("#eduLevel").append($eduLevelItem);
        }
        /!*5.职业*!/
        var occupation = data.gravidaCareerInfo;
        console.info(occupation)
        for(var key in occupation){
            var $occupationItem = $("#occClone div").clone(true);
            /!*添加数据*!/
            $occupationItem.find(".occCode").text(data.gravidaCareerInfo[key].enumItemValue);
            $occupationItem.find(".occText").text(data.gravidaCareerInfo[key].enumItemName);
            $("#occupation").append($occupationItem);
            $("#occupation div:eq(0)").removeClass("ml30");
        }
        //添加其他输入框
        var flag = data.gravidaCareerInfo[key].enumItemValue;
        var $div = "<div class='inlineBlock ml30'><input type='text' class='layui-input w100' name='' flag='" + flag + "'></div>"
        $("#occupation").append($div);

        /!*6.曾经怀孕*!/
        var pregnancyResultInfo = data.pregnancyResultInfo;
        console.info(pregnancyResultInfo);
        for(var key in pregnancyResultInfo) {
            var $pregResultItem = $("#pregClone div:eq(0)").clone(true);
            /!*添加数据*!/
            $pregResultItem.find("label").text(data.pregnancyResultInfo[key].enumItemName);
            var flag = data.pregnancyResultInfo[key].enumItemValue;
            $pregResultItem.find("input").attr("flag",flag);
            $pregResultItem.find("input").attr("name","preg" + flag);
            $("#pregResult").append($pregResultItem);
        }
        /!*7.是否孕育过出生缺陷儿*!/
        /!*8.怀孕后头3个月是否患过以下疾病*!/
        var sickThreeMonthLaterInfo = data.sickThreeMonthLaterInfo;
        console.info(sickThreeMonthLaterInfo);
        for(var key in sickThreeMonthLaterInfo){
            var $pregDisItem = $("#pregDisClone div:eq(0)").clone(true);
            /!*添加数据*!/
            $pregDisItem.find("label").text(data.sickThreeMonthLaterInfo[key].enumItemName);
            var flag = data.sickThreeMonthLaterInfo[key].enumItemValue;
            $pregDisItem.find("input").attr("flag",flag);
            $pregDisItem.find("input").attr("name","pregDis" + flag);
            $("#pregDisease").append($pregDisItem);
        }
        /!*9.怀孕后头3个月服药*!/
        /!*10.孕妇出生缺陷疾病史（如先心病、并指/趾、多指/趾、唇腭裂、外耳畸形、唐氏综合征等）*!/
        /!*11.丈夫出生缺陷疾病史*!/
        /!*12.双方亲属出生缺陷疾病史*!/
        /!*13.口服叶酸*!/
        var oralFolicAcidDateInfo = data.oralFolicAcidDateInfo;
        console.info(oralFolicAcidDateInfo);
        for(var key in oralFolicAcidDateInfo) {
            var $folateItem = $("#folateClone div:eq(0)").clone(true);
            /!*添加数据*!/
            $folateItem.find("label").text(data.oralFolicAcidDateInfo[key].enumItemName);
            var flag = data.oralFolicAcidDateInfo[key].enumItemValue;
            $folateItem.find("input").attr("flag",flag);
            $folateItem.find("input").attr("name","folate" + flag);
            $("#folate").append($folateItem);
        }
        /!*14.孕前是否偏食*!/
        /!*15.怀孕前半年至怀孕后头3个月，生活或工作环境中是否接触以下因素（可多选）*!/
        var badEnvironmentInfo = data.badEnvironmentInfo;
        console.info(badEnvironmentInfo);
        for(var key in badEnvironmentInfo){
            var $factosItem = $("#factorsClone div:eq(0)").clone(true);
            /!*添加数据*!/
            $factosItem.find("label").text(data.badEnvironmentInfo[key].enumItemName);
            var flag = data.badEnvironmentInfo[key].enumItemValue;
            $factosItem.find("input").attr("flag",flag);
            $factosItem.find("input").attr("name","factors" + flag);
            $("#factors").append($factosItem);
        }

        /!*20.本人饮酒情况 21.丈夫饮酒情况*!/
        var drinkTypeInfo = data.drinkTypeInfo;
        console.info(drinkTypeInfo);
        for(var key in drinkTypeInfo) {
            var $drinkTypeItem1 = $("#drinkTypeClone div[class='femaleBeforeDrink']").clone(true);
            var $drinkTypeItem2 = $("#drinkTypeClone div[class='femaleAfterDrink']").clone(true);
            var $drinkTypeItem3 = $("#drinkTypeClone div[class='maleBeforeDrink']").clone(true);
            var $drinkTypeItem4 = $("#drinkTypeClone div[class='maleAfterDrink']").clone(true);

            /!*添加数据   ---*!/
            $drinkTypeItem1.find("label").text(data.drinkTypeInfo[key].enumItemName);
            $drinkTypeItem2.find("label").text(data.drinkTypeInfo[key].enumItemName);
            $drinkTypeItem3.find("label").text(data.drinkTypeInfo[key].enumItemName);
            $drinkTypeItem4.find("label").text(data.drinkTypeInfo[key].enumItemName);
            var flag = data.drinkTypeInfo[key].enumItemValue;
            $drinkTypeItem1.find("input").attr("flag",flag);
            $drinkTypeItem2.find("input").attr("flag",flag);
            $drinkTypeItem3.find("input").attr("flag",flag);
            $drinkTypeItem4.find("input").attr("flag",flag);
            $drinkTypeItem1.find("input:eq(0)").attr("name","femaleBeforeDrink" + flag);
            $drinkTypeItem1.find("input:eq(1)").attr("name","femaleBeforeDrink" + flag + "Num");
            $drinkTypeItem2.find("input").attr("name","femaleAfterDrink" + flag);
            $drinkTypeItem3.find("input").attr("name","maleBeforeDrink" + flag);
            $drinkTypeItem4.find("input").attr("name","maleAfterDrink" + flag);
            $("#femaleBeforeDrink").append($drinkTypeItem1);
            $("#femaleAfterDrink").append($drinkTypeItem2);
            $("#maleBeforeDrink").append($drinkTypeItem3);
            $("#maleAfterDrink").append($drinkTypeItem4);
        }
        /!*21.丈夫饮酒情况*!/

        /!*线程栅栏*!/
        //$("form").dependto("formLoad", loadItem);


    });*/
    var icon = $.config.layer.icon.warn;
    /*-----------------验证规则--------------------------*/
    /*线程栅栏*/
    /*$("form").dependon("formLoad",['loadItem'],function () {

    });*/
    /*回车事件，跳转下一个*/
    $("input:not(.auto-jump)").keydown(function () {
        if(event.keyCode == 13 || event.keyCode == 108) {  //控制键盘回车 13   数字键盘回车 108
            verifyDom(this,function(dom) {
                //此处要加判断  跳几个
                focusNextInput(dom)
            })
        }
    })
    $(".auto-jump").bind("input",autoJump);
    $(".auto-jump").bind("propertychange",autoJump);
    /*------------------------------------表单提交-----------------------------------------------*/
    form.on("button(save)", function (data) {
        console.info(data);
    });

});
/*方法*/
//自动跳转
function autoJump(){
    verifyDom(this, function (dom) {
        focusNextInput(dom);
    })
}
//验证
var timeoutfn = null;
function verifyDom(dom, callBack) {
    var name = $(dom).attr("auto-verify");
    var verify = verifies[ name ];
    if(verify){
        // 是否延迟判断
        // if(verify["delay"]){
        //     if(timeoutfn){
        //         clearTimeout(timeoutfn);
        //     }
        //     timeoutfn = setTimeout(function () {
        //         _excuteVerfiy(dom, callBack)
        //     },500)
        // }else{
        //     _excuteVerfiy(dom, callBack)
        // }
        // 与延迟判断互斥
        _excuteVerfiy(dom, callBack);
    }else{
        if(callBack){
            callBack(dom);
        }
    }

}
//执行验证
function _excuteVerfiy(dom, callBack) {
    var name = $(dom).attr("auto-verify");
    var verify = verifies[ name ];
    if(verify){
        if(verify["regex"].test($(dom).val())){
            var tipso = $(dom).data("tipso");
            if(tipso){
                layer.close(tipso);
            }
            if(callBack){
                callBack(dom);
            }
        }else{
            var tipso = $(dom).data("tipso");
            if(!tipso){
                tipso = layer.tips(verify["error"], dom, {
                    tips: [2, '#e35549'],
                    time: 0
                });
                $(dom).data("tipso", tipso);
            }
            if(verify["clear"]){
                $(dom).val("")
            }
            $(dom).focus();
        }
    }else{
        if(callBack){
            callBack(dom);
        }
    }
}

//jQuery实现在一个输入框按回车键后光标跳到下一个输入框
function focusNextInput(thisInput,step)
{
    step = step ? step : 1;
    var inputs = document.getElementsByTagName("input");
    for(var i = 0;i<inputs.length;i++){
        // 如果是最后一个，则焦点回到第一个
        if(i==(inputs.length-1)){
            inputs[0].focus();
            break;
        }else if(thisInput == inputs[i]){
            inputs[i+step].focus();
            break;
        }
    }
}
//正则验证身份证号
/*function isCardNo(card) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(reg.test(card) === false){
        $.core.msg("输入不合法!",function () {},{time:1000});
    }else{
        focusNextInput();
    }
    // {
    //     alert("身份证输入不合法");
    //     return  false;
    // }
}*/

/*------------------------------------表单提交-----------------------------------------------*/
/*function submitBtnClick() {
    document.baseInfoSubmit.submit();
}*/

