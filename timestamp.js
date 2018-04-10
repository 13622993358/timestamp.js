/**
 * 作者：水君子
 */
var Z = function() {};
Z.prototype = {
	/*将一个对象的所有属性拷贝给另一个对象*/
	extend:function(tar,source) {
		//遍历对象
		for(var i in source){
			tar[i] = source[i];
		}
		return tar;
	}
}
Z = new Z();
Z.extend(Z,{
	// 年-月-日 时:分
	formatDate: function (nows) {
		var now=new Date(nows);
		var year=now.getFullYear();
		var months=now.getMonth()+1;
    	var month = months < 10 ? '0'+months : months;
		var dates=now.getDate();
    	var date = dates < 10 ? '0'+dates : dates;
		var hours=now.getHours();
    	var hour = hours < 10 ? '0'+hours : hours;
		var minute=now.getMinutes()+0;
		var min = minute<10?'0'+minute:minute;
		var second=now.getSeconds();
		return year+"-"+month+"-"+date+" "+hour+":"+min;
	},
	// 年-月-日
	formatDay:function(now){
		var now=new Date(now);
	    var year=now.getFullYear();
	    var months=now.getMonth()+1;
	    var month = months < 10 ? '0'+months : months;
	    var dates=now.getDate();
	    var date = dates < 10 ? '0'+dates : dates;
	    return year+"-"+month+"-"+date;
	},
	// 月-日
	formatM:function(now){
		var now=new Date(now);
    	var months=now.getMonth()+1;
    	var month = months < 10 ? '0'+months : months;
    	var dates=now.getDate();
    	var date = dates < 10 ? '0'+dates : dates;
    	return month+"-"+date;
	},
	// 时间戳转多久之前
	getAgo:function(dateTimeStamp){
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if(diffValue < 0){return;}
        var monthC =diffValue/month;
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(monthC>=1){
            result="" + parseInt(monthC) + "月前";
        }
        else if(weekC>=1){
            result="" + parseInt(weekC) + "周前";
        }
        else if(dayC>=1){
            result=""+ parseInt(dayC) +"天前";
        }
        else if(hourC>=1){
            result=""+ parseInt(hourC) +"小时前";
        }
        else if(minC>=1){
            result=""+ parseInt(minC) +"分钟前";
        }else
        result="刚刚";
        return result;
    }
})