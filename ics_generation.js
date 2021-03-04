// ==UserScript==
// @name         UESTC 研究生课表ics导出
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  一键导出课表的ics文件，方便各系统加入原生日历应用
// @author       ygowill
// @match        https://yjsjy.uestc.edu.cn/pyxx/pygl/xskbcx/index/1
// @grant        none
// ==/UserScript==
 
(function () {
    'use strict';
 
    /*! ics.js Wed Aug 20 2014 17:23:02 */
    var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}
 
    var ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};
 
 
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
 
    const start_monday_date = new Date("2021-03-01");
    let week_date_table = [];
    for (let i = 0; i < 20; i++) {
        let week_arr = []
        for (let j = 0; j < 7; j++) {
            let tmp_date = new Date(start_monday_date);
            tmp_date.setDate(tmp_date.getDate() + 7 * i + j);
            week_arr.push(tmp_date);
        }
        week_date_table.push(week_arr);
    }
 
    let timeTable = [
        ["08:30", "09:15"], // startTime, endTime
        ["09:20", "10:05"],
        ["10:20", "11:05"],
        ["11:10", "11:55"],
        ["14:30", "15:15"],
        ["15:20", "16:05"],
        ["16:20", "17:05"],
        ["17:10", "17:55"],
        ["19:30", "20:15"],
        ["20:20", "21:05"],
        ["21:10", "21:55"],
        ["22:00", "22:45"]
    ];
 
    function generate_button() {
        let tool_bar = document.getElementsByClassName("widget-toolbar")[0];
        let return_button = document.querySelector("#main-container > div > div > div.page-content > div > div.widget-header.widget-header-large > div > button:nth-child(2)");
        let download_ics = document.createElement("button");
        download_ics.type = "button";
        download_ics.style = "margin-top: 5px; margin-right: 5px;";
        download_ics.className = "btn btn-xs btn-return ";
        download_ics.innerHTML = "<i class=\"icon-hdd  align-top bigger-150\"></i>导出ics文件";
        download_ics.addEventListener("click", parse_table, false);
        tool_bar.insertBefore(download_ics, return_button);
    }
 
    function parse_table() {
        let cal = ics();
        let table = document.querySelector("#tbl > tbody");
        let table_line_list = table.getElementsByTagName("tr");
        let week_map = new Map();
        for (let no = 1; no < 7; no++) { // no==0 为表头
            for (let day = 0; day < 7; day++) { // day==0 为节标号
                if (typeof (table_line_list[no]) == "undefined") {
                    continue;
                }
                let course_info = table_line_list[no].getElementsByTagName("td")[day + 1].innerText;
                if (course_info.trim() === "") {
                    continue;
                }
                let course_map = new Map();
                let course_list = course_info.split("，");
                for (let course of course_list) { // info example: "0808126007/大数据分析与挖掘(全英文)/40/2/邵俊明/1-10周/(1~2)/品学楼B107"
                    let c_list = course.split("/");
                    let course_id = c_list[0].trim();
                    let week_str = c_list[5];
                    week_str = week_str.substring(0, week_str.length - 1);
                    let time_str = c_list[6];
                    time_str = time_str.substring(1, time_str.length - 1);
                    let start_week = parseInt(week_str.split("-")[0]);
                    let end_week = parseInt(week_str.split("-")[1]);
                    if (!course_map.has(course_id)) {
                        course_map.set(course_id, new Map());
                        course_map.get(course_id).set("course_id", course_id);
                        course_map.get(course_id).set("name", c_list[1]);
                        course_map.get(course_id).set("teacher", c_list[4]);
                        course_map.get(course_id).set("start_time", timeTable[parseInt(time_str.split("~")[0]) - 1][0]);
                        course_map.get(course_id).set("end_time", timeTable[parseInt(time_str.split("~")[1]) - 1][1]);
                        course_map.get(course_id).set("location", c_list[7]);
                    }
 
                    if (week_map.has(course_id)) {
                        week_map.get(course_id).set("min", Math.min(start_week, week_map.get(course_id).get("min")));
                        week_map.get(course_id).set("max", Math.max(end_week, week_map.get(course_id).get("max")));
                    } else {
                        week_map.set(course_id, new Map());
                        week_map.get(course_id).set("min", start_week);
                        week_map.get(course_id).set("max", end_week);
                    }
                }
 
                for (let course of course_map.values()) {
                    const start_week = parseInt(week_map.get(course.get("course_id")).get("min"));
                    const end_week = parseInt(week_map.get(course.get("course_id")).get("max"));
 
                    for (let i=start_week;i<=end_week;i++) {
                        let description = "任课教师：" + course.get("teacher") + "  周：" + start_week + "-" + end_week;
                        // 起止时间
                        let start_time = new Date(start_monday_date);
                        start_time.setDate(start_time.getDate() + (i - 1) * 7 + day);
                        start_time.setHours(course.get("start_time").split(":")[0]);
                        start_time.setMinutes(course.get("start_time").split(":")[1]);
 
                        let end_time = new Date(start_monday_date);
                        end_time.setDate(end_time.getDate() + (i - 1) * 7 + day);
                        end_time.setHours(course.get("end_time").split(":")[0]);
                        end_time.setMinutes(course.get("end_time").split(":")[1]);
 
                        cal.addEvent(course.get("name"), description, course.get("location"), start_time.toUTCString(), end_time.toUTCString());
                    }
                }
            }
        }
        cal.download();
    }
 
    generate_button();
})();
