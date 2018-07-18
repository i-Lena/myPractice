// 表单元素的预先载入
$(function () {
    preLoadSelect();
});

//----------------------------------------select 下拉框 预先载入-----------------------------------------
function preLoadSelect() {
    var mydata1 = {
        "code":"0000",
        "message":"操作成功！",
        "name" : "科室",
        "data":
            [
                {"id":36979,"enumTypeId":472,"enumItemValue":"0","enumItemName":"信息科","remark":""},
                {"id":36980,"enumTypeId":472,"enumItemValue":"1","enumItemName":"保密科","remark":""},
                {"id":36981,"enumTypeId":472,"enumItemValue":"2","enumItemName":"急诊科","remark":""},
                {"id":36982,"enumTypeId":472,"enumItemValue":"3","enumItemName":"呼吸科","remark":""},
            ],
        "count":0
    };
    console.log(mydata1);
    console.log(mydata1.data);
    var selectDept = mydata1.data;
    for( var key in selectDept) {
        $("select[name='dept']").append("<option value=\" + selectDept[key].enumItemValue + \">" + selectDept[key].enumItemName + "</option>");
    }
};
// ----------------------------------------radio 单选按钮 预先载入---------------------------------------
/*function preLoadRadio() {
    var mydata2 = {
        "code":"0000",
        "message":"操作成功！",
        "name" : "科室",
        "data":
            [
                {"id":36979,"enumTypeId":472,"enumItemValue":"0","enumItemName":"信息科","remark":""},
                {"id":36980,"enumTypeId":472,"enumItemValue":"1","enumItemName":"保密科","remark":""},
                {"id":36981,"enumTypeId":472,"enumItemValue":"2","enumItemName":"急诊科","remark":""},
                {"id":36982,"enumTypeId":472,"enumItemValue":"3","enumItemName":"呼吸科","remark":""},
            ],
        "count":0
    };
    console.log(mydata1);
    console.log(mydata1.data);
    var selectDept = mydata1.data;
    for( var key in selectDept) {

    }
};*/
