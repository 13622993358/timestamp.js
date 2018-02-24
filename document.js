//1.替换某个位置字符串:
var a = "aaccss";
var b = replace(a[1],'*');


//2.判断屏幕高度:
var a = $(window).height();
if(a < 530){
	// 屏幕高度大于530时执行的函数
}


//3.hash值的设置与获取:
var hash = window.location.hash;//获取
location.hash = "tab1";//设置


//4.input发生变化时
$('#phone').on('input propertychange',function(){
	// 发生变化时执行的函数
});


//5.设置input为不可输入
$('input').attr("disabled","disabled");


//6.字符串转url编码
var a = '水君子';
var b = encodeURIComponent(a);


//7.跳转上一个页面
window.location.href = document.referrer;


// 8.获取选中下拉框的值
$("select option:checked").text();


// 9.时间戳转字符串函数
function formatDate(nows){
	var now = new Date(nows);
	var year = now.getFullYear();
	var months = now.getMonth()+1;
	var month = months < 10 ? '0'+months : months;
	var dates = now.getDate();
	var date = dates < 10 ? '0'+dates : dates;
	var hours = now.getHours();
	var hour = hours < 10 ? '0'+hours : hours;
	var minute = now.getMinutes()+0;
	var min = minute < 10 ? '0'+minute : minute;
	var seconds = now.getSeconds();
	var second = seconds < 10 ? '0'+seconds : seconds;
	return year+'年'+month+'月'+date+'日 '+hour+':'+min+':'+second;
}
// 10 switch判断
var a = '';
var b = '10';
switch(b){
	case "5": a = '现在是5';
	break;
	case "10": a = '现在是10';
	break;
}
console.log(a)//现在是10


// 11 获取从某个位置到某个位置字符串
var a = 'aabbccdd';
var b = a.substring(1,5);//只传一个为当前数字及之后的所有，从0开始计算
console.log(b)//abbc 


// 12  获取url中的参数
function getUrl(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r !== null){
		return unescape(r[2]);//unescape解码
	}else{
		return null;
	}
};


// 13 获取cookie
function getCookie(c_name){
	// 浏览器中cookie的数量大于0时
    if (document.cookie.length>0){
    	// 查看当前函数传入名称的对应cookie
        c_start=document.cookie.indexOf(c_name + "=")
        // 如果对应名称的Cookie位置不等于-1表示存在
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
};


// 14 删除cookie
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var ck = getCookie(name);
	if(ck != null) {
		document.cookie = name + "=" + ck + ";expires=" + exp.toGMTString();//其实就是把cookie的有效期设置在现在之前
	}
};


// 15 设置cookie
function setCookie(c_name,value,expiredays){
	//添加当前日期
	var exDate = new Date();
	//cookie有效期等于当前日期加函数传入的日期
	exDate.setDate(exDate.getDate()+expiredays);
	//cookie等于传入名称=传入文字编码 + 有效期
	document.cookie = c_name + '=' + escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
};


// 16 签名
function getSign(params,secretKey) {
	// 如果传入的是字符串
	if(typeof params == "string") {
		// 执行paramsStrSort方法
		return paramsStrSort(params,secretKey);
	}//如果传入的是数组
	else if(typeof params == "object") {
		// 新建数组
		var arr = [];
		// 遍历所有的params到i中
		for (var i in params) {
			arr.push((i + '=' + params[i]));
		}
		// 执行paramsStrSort方法
		return paramsStrSort(arr.join(("&")));
	}
};
function paramsStrSort(paramsStr,secretKey) {
    var urlStr = paramsStr.split("&").sort().join("&");
    // 最后加上密钥
    var newUrl = urlStr + '&key=' + secretKey;
    console.log(newUrl);
    // 需借助MD5插件
    return hex_md5(newUrl);
};

	// 签名使用示例
	var secretKey = "2e0804e3-3286-4bd9-aa49-738c2e65db94";
	var Params = "phone="+phone+"&timestamp="+timestamp+"&userId="+userId;
	var sign =  getSign(Params,secretKey);


// 17 获取今天的星期
function getWeek(){
	var a = new Array("日", "一", "二", "三", "四", "五", "六");
	var week = new Date().getDay();
	return  '星期'+a[week];
} 


// 18 ajaxPost
function ajaxPost(uurl,data,callback) {
    $.ajax({
        url: uurl,
        type: 'POST',
        data:data,
        dataType: 'JSON',
        success: function (res) {
            callback(res);
        }, error: function (xhr, textStatus, errorThrown) {
                alert('请求失败');
        }
    });
};
	// ajaxPost使用示例
	var url = 'www.baidu.com';
	var postData = {
		'phone':'13622993358',
		'name':'郑壮鹏'
	}
	ajaxPost(url,postData,function(res){
		//成功后的回调
	})


// 19 ajaxGet
function ajaxGet (uurl,data, callback) {
    $.ajax({
        url: uurl,
        type: 'GET',
        data:data,
        dataType: 'JSON',
        success: function (res) {
            callback(res);
        }, error: function (xhr, textStatus, errorThrown) {
            alert('请求失败');
        }
    });
};


// 20 验证码倒计时
function settime(val,countdown) {
        if (countdown == 0) { 
          $(val).val("重新获取验证码"); 
          $('#getCode').css({
            backgroundColor:'#00C4DB'
          });
         $('#getCode').attr("disabled", false);
          return;
        } else {
          $(val).val("重新发送(" + countdown + ")"); 
          countdown--; 
          $('#getCode').css({
            backgroundColor:'#949494'
          })
         $('#getCode').attr("disabled", true);
        } 
        setTimeout(function() { 
        settime(val,countdown); 
        },1000); 
    }; 
	//验证码倒计时使用示例
	<input type="buttom" value="点击发送验证码" id="getCode">
	var getCode = $('#getCode');
	settime(getCode,60);


// 21 手机端电话呼叫
$("#call").on('click',function(){
		$(this).attr("href", "tel:13622993358");
});


// 22 上传图片时先显示在页面中
function getObjectURL(file) {
    var url = null ; 
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
} 
	 // 上传图片显示页面示例

	 	//html代码	 
	 	 <form id="uploadForm1" enctype="multipart/form-data">
     		<input type="file" name="avatar" id="imageFile1">
		 </form>
		 <img src="" alt="" id="preview1">

	 	// js代码
	 	// 上传图片发生变化时执行
		 $("#uploadForm1").change(function () {
		 	// 获得上传的文件
			 var imageFile1 = document.getElementById('imageFile1').files[0];
			 // 将上传的文件执行getObjectURL方法
			 var strsrc=getObjectURL(imageFile1);
			 // 设置图片位置为方法返回的位置。
			 $("#preview1").attr("src",strsrc);
		 }


 // 23 ajax滚动加载
 var page = 1;
 var size = 10;
 function scroll(page,size){
 	$(window).scroll(function() {  
      //当滚轮滚动到文档最末位，也就是拉到了最底下  
        if( $(window).scrollTop() == $(document).height() - $(window).height() ) { 
        	page++;
        	// ajax代码
         }
   });
 }


// 24 轮播图自动播放
 	var index = 0;//图片初始下标
 	var time = 3000;//自动播放时间1000=1秒
 	setInterval(sild,time);//定时器
 	function sild(){
		var sildlength = $('.slideshow>ul>li');//图片容器
		// 当图片下标大于图片数时，回到第一张
		if (index > sildlength.length) {
    	 index = 0;
		} else {
      	index += 1;
		}
		// 当前下标图片显示，其余图片隐藏
		sildlength.eq(index).css({
			display:'block'
		}).siblings().css({
			display:'none'
		});
		return index;
	};


// 25 手机端手指滑动 如果使用zepto需修改e参数e.changedTouches[0].pageX;
    var slideshow = $('.slideshow');//滑动区域
    var startX;//开始滑动值
    var midwayX;//过程滑动值
    var offset = 50;//最低滑动值
    // 开始滑动时的X坐标
    slideshow.on('touchstart', function (e) {
        startX = e.originalEvent.targetTouches[0].pageX;
    });
    //记录滑动过程中的X坐标
    slideshow.on('touchmove', function (e) {
        midwayX = e.originalEvent.targetTouches[0].pageX;
    });
    
    //开始小于结束表示下一张不然表示上一张
    slideshow.on('touchend',function (e){
    	var endX = Math.abs(startX-midwayX);//结束时的坐标等于开始减过程中的坐标
    	if(end > offset) {	//大于最低滑动值时执行
    		if(startX >= endX){
        		// 向右滑执行的函数
        	}else{
        		// 向左滑执行的函数
        	}
    	}
    });
