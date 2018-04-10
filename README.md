# 时间戳操作：</br>
默认13位，10位数要*1000;</br>

引入timestamp.js 不依赖其他任何框架</br>

```
<script src="timestamp.js"></script>
```
内置4个方法</br>
1.	Z.formatDate(timestamp)
2.	Z.formatDay(timestamp)
3.	Z.formatM(timestamp);
4.	Z.formatM(timestamp);

```
<script>

// 默认13位，10位数要*1000;
var timestamp = 1523263824*1000;

// 完整日期
var data = Z.formatDate(timestamp);
console.log(data);//2018-04-27 00:00

// 年月日
var day = Z.formatDay(timestamp);
console.log(day);//2018-04-27

// 月日
var month = Z.formatM(timestamp);
console.log(month)//04-27

	// 多久之前
var ago = Z.getAgo(1523263824000);
console.log(ago);//19小时前
</script>

```
