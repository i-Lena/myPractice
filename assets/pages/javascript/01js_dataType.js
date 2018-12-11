
//入口函数
$(function () {
   //js主体
});

//时间插件   待完善
layui.use(['laydate'],function () {
    var $ = layui.$;
    var nowTime = new Date().valueOf();
    var max = null;

    //-------XXX日期
    var xxx = laydate.render({
       elem: '#idName',
       type: 'date',   //date是年月日日期格式  datetime带时间选择框
        max: num,  //num定义可选时间范围
        min: num,  //num定义可选时间范围
        btns: ['clear','confirm'],
        done: function (value,date) {

        }
    });
    /*
    * 有开始日期和结束日期的
    * */
    //-------开始日期
    var startTime = laydate.render({
        elem: '#idName1',
        type: 'date',   //date是年月日日期格式  datetime带时间选择框
        max: num,  //num定义可选时间范围
        min: num,  //num定义可选时间范围
        btns: ['clear','confirm'],
        done: function (value,date) {
            //限制结束时间不早于开始时间
            if($.trim(value)==''){
                endTime.config.min = date;
                endTime.config.min.month = date.month - 1;
            }
        }
    });
    //-------结束日期
    var endTime = laydate.render({
        elem: '#idName2',
        type: 'date',   //date是年月日日期格式  datetime带时间选择框
        max: num,  //num定义可选时间范围
        min: num,  //num定义可选时间范围
        btns: ['clear','confirm'],
        done: function (value,date) {
            startTime.config.max = date;
            startTime.config.max.month = date.month -1;
        }
    });
});

/*
*线程栅栏
**/
//---先执行部分
{
    //线程1部分
    $("form").dependto('aaa','bbb');
}
//---后执行部分
$("form").dependon('aaa',['bbb'],function () {
    //线程2部分
});

/*
*从后台获取信息进行操作页面DOM
**/
//不需要传参   @xxx  服务名   @url 后台接口  @{}  不需要向后台传参，为空  @data 后台返回数据
$.xxx.get('url',{},function (data) {
    console.info(data);
    //对data进行具体操作
});
//需要传参 @id @name 等后台接收数据的参数名 @myId @myName 等我们要传过去的参数值
$.xxx.get('url',{id: myId,name: myName},function (data) {
    console.info(data);
    //对data进行具体操作
});

//表单渲染
form.render();

/*
* 表格刷新
* */
$("#xxxtable").itable("reload");
$("#xxxtable").itable("reload",{
    where: formValues
});
$("#xxtable").itable('reload',{
    where: {
        id: '',
        id1: '',
        id2: '',
        id3: ''
    }
});
/*
* 回填值修改操作
* */
//表单回填
$("#idName").val(xxx);  //通过#idName .className 属性选择器等具体到操作元素  @xxx 自定义的变量
//文本回填
$("#idName").text(xxx);
//html回填
$("#idName").html(xxx);

/*
* 页面跳转
* */
$.core.redirect("xxxx.html");
$.core.redirect("xxxx.html?id=" + id);
$.core.redirect("xxxx.html?id=" + id + "&name=" + name);

/*
* 下拉框绑定跳转功能
* */
/*html*/

/*js*/
form.on('select(deptSelect)',function (data) {
   var sign = data.value;
   var pages = {
     "0" : "aaa.html",
     "1" : "bbb.html",
     "2" : "ccc.html",
     "3" : "ddd.html",
   };
   $.core.redirect(pages[sign]);
});

/*
* 提交按钮
* */
// button type="button" lay-submit lay-filter="save"
form.on('submit(save)',function (data) {
    //layui-form将表单元素都封装到了data中
   var formValues = data.field;
   //若有需要传递的内容不在formValues中，例如id，可以进行以下赋值
    formValues.id = id;
    formValues.aaa= bbb;  //id,aaa等为后台接收数据的字段名  bbb为赋值
   $.xxx.post('url',formValues,function (data) {
        //提交后的返回信息 可以根据返回信息进行关闭弹窗或跳转页面等操作
   });
});

/*
* 查询按钮
* */
// button type="button" lay-submit lay-filter="search"
form.on('submit(search)',function (data) {
    console.info(data);
    var formValues = data.field;
    $("#xxx").itable("reload",{
       where: formValues
    });
});

/*
*   清除按钮
* */
// button type="reset" btn="clear"
//@xxtable需要帅新的表格  @where里面的字段 id,id1,id2……等为表格的字段
$("[btn]").click(function () {
    switch ($(this).attr("btn")) {
        case "clear" :
            $("#xxtable").itable('reload',{
               where: {
                   id: '',
                   id1: '',
                   id2: '',
                   id3: ''
               }
            });
            break;
    }
});

/*
* 加载表格
* */
// @xxxtable 需要更新的表格 @url 接口 field : 'id' id为表格中需要展示的字段 templet：'#id'
showTable();
function showTable() {
    $("#xxxtable").itable({
        url: 'url接口',
        cols: [
            {type: 'checkbox',fixed: 'left',width:'5%'},
            {field: 'id',title: '事件ID',width:'5%',templet: '#qryInfo'},
            {field: 'name',title: '事件名字',width:'5%'},
            {field: '操作',title: '操作',width:'5%',templet: 'optDetail'},
        ],
        serv: 'xxx'
    });
}

/*
* 弹窗
* */
function openWindow(id) {
    $.core.openWindow({
       title: '弹窗标题',
       content: 'url/xxx.html?id=' + id,
       area: ['800px','600px'],
       offset: '50px'
    });
}

/*
* 从列表中选中一行进行编辑
* */
//@xxxtable 要操作的表格  @getSelectedRows在框架service中已封装的
function edit() {
    var rows = $("#xxxtable").itable('getSelectedRows');
    var len = rows.length;
    if(len == 0) {
        $.core.alert("请选中要修改的行！");
    }
    if(len > 1) {
        $.core.alert("每次只能选择一个要修改的事件！");
    }
    if(len == 1) {
        var id = rows[0].id;
        var type = rows[0].type;
        if(type == 'xxx') {
            $.core.redirect("xxx.html?id=" + id);
        }else {
            $.core.alert("只能修改XXX事件");
        }
    }
}

/*
* 关闭弹窗
* */
function closeDialog() {
    //frame中弹出的必须要再指向到frame中
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
    //以下刷新不是很必要
    parent.frames[0].$("#xxxtable").itable('reload');
}

/*
* 数据加载提示
* */
var loadingIndex = $.core.loading("数据加载中，请稍后...");
//加载完后关闭
$.core.close(loadingIndex);

/*
* 链接下载 （点击链接进行文件的下载）
* */
//@service 服务名字
downloadFile(fileId);
function downloadFile(fileId) {
    // var url = window.location.host;
    var urls = $.cookie("_app_wifi_io") == "o" ? $.config.modules['service'].host.outer : $.config.modules['service'].host.inner;
    //不知道干吗用，但是不能删
    if($("#_down").length == 0){
        $("body").append("<a id = '_dowm' />");
    }
    //传参
    var download_url = urls + "url/xxx?fileId=" + fileId;
    $("#_down").attr("href",download_url);
    $("#_down")[0].click();
}

/*
* 下载按钮（点击按钮进行文件下载）
* */
//@serv 服务名字
$("[btn]").click(function () {
   switch ($(this).attr("btn")) {
       case "downLoad" :
           var urls = $.cookie('_app_wifi_io') == "o" ? $.config.modules["serv"].host.outer : $.config.modules['serv'].inner;
           if($("#_down").length == 0) {
               $("body").append("<a id='_down' />");
           }
           //传参
           var id = $(this).parent().data("fileId");
           var name = $(this).parent().data("fileName");
           var download_url = urls + "url?id=" + id + "&name=" + name;
           $("#_down").attr("href",download_url);
           $("#_down")[0].click();
           break;
   }
});

/*
* 导出按钮（点击按钮进行Excel导出）
* */
form.on("submit(exportExcel)",function (data) {
    var formValue = data.field;
    var urls = $.cookie('_app_wifi_io') == "o" ? $.config.modules["serv"].host.outer : $.config.modules['serv'].inner;
    if($("#_down").length == 0) {
        $("body").append("<a id='_down' />");
    }
    //传参
    var id = $(this).parent().data("fileId");
    var name = $(this).parent().data("fileName");
    var download_url = urls + "url?id=" + id + "&name=" + name;
    $("#_down").attr("href",download_url);
    $("#_down")[0].click();
});