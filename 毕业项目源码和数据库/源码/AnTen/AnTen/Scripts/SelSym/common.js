/**
 * 骞存湀鏃ヤ笅鎷夎彍鍗�
 * @param selYear
 * @param selMonth
 * @param selDay
 * @param year
 * @param month
 * @param day
 * @returns {DateSelector}
 */
function DateSelector(selYear, selMonth, selDay, year, month, day) {
    this.selYear = selYear;
    this.selMonth = selMonth;
    this.selDay = selDay;
    this.InitYearSelect(year);
    this.InitMonthSelect(month);
    this.InitDaySelect(day);
}

// 澧炲姞涓€涓渶澶у勾浠界殑灞炴€�
DateSelector.prototype.MinYear = 1900;
// 澧炲姞涓€涓渶澶у勾浠界殑灞炴€�
DateSelector.prototype.MaxYear = (new Date()).getFullYear();
// 鍒濆鍖栧勾浠�
DateSelector.prototype.InitYearSelect = function (year) {
    // 寰幆娣诲姞OPION鍏冪礌鍒板勾浠絪elect瀵硅薄涓�
    for (var i = this.MaxYear; i >= this.MinYear; i--) {
        // 鏂板缓涓€涓狾PTION瀵硅薄
        var op = window.document.createElement("OPTION");
        if (year != "" && year != "0000") {
            if (year == i) {
                op.selected = "selected";
            }
        }
        // 璁剧疆OPTION瀵硅薄鐨勫€�
        op.value = i;
        // 璁剧疆OPTION瀵硅薄鐨勫唴瀹�
        op.innerHTML = i;
        // 娣诲姞鍒板勾浠絪elect瀵硅薄
        this.selYear.appendChild(op);
    }
}

// 鍒濆鍖栨湀浠�
DateSelector.prototype.InitMonthSelect = function (month) {
    // 寰幆娣诲姞OPION鍏冪礌鍒版湀浠絪elect瀵硅薄涓�
    for (var i = 1; i < 13; i++) {
        // 鏂板缓涓€涓狾PTION瀵硅薄
        var op = window.document.createElement("OPTION");
        if (month != "" && month != "00") {
            if (month == i) {
                op.selected = "selected";
            }
        }
        if (i < 10) {
            i = "0" + i;
        }
        // 璁剧疆OPTION瀵硅薄鐨勫€�
        op.value = i;
        // 璁剧疆OPTION瀵硅薄鐨勫唴瀹�
        op.innerHTML = i;
        // 娣诲姞鍒版湀浠絪elect瀵硅薄
        this.selMonth.appendChild(op);
    }
}

// 鏍规嵁骞翠唤涓庢湀浠借幏鍙栧綋鏈堢殑澶╂暟
DateSelector.DaysInMonth = function (year, month) {
    var date = new Date(year, month, 0);
    return date.getDate();
}

// 鍒濆鍖栧ぉ鏁�
DateSelector.prototype.InitDaySelect = function (day) {
    // 浣跨敤parseInt鍑芥暟鑾峰彇褰撳墠鐨勫勾浠藉拰鏈堜唤
    var year = parseInt(this.selYear.value);
    var month = parseInt(this.selMonth.value);
    // 鑾峰彇褰撴湀鐨勫ぉ鏁�
    var daysInMonth = DateSelector.DaysInMonth(year, month);
    // 娓呯┖鍘熸湁鐨勯€夐」
    this.selDay.options.length = 0;
    // 寰幆娣诲姞OPION鍏冪礌鍒板ぉ鏁皊elect瀵硅薄涓�
    for (var i = 1; i <= daysInMonth; i++) {
        // 鏂板缓涓€涓狾PTION瀵硅薄
        var op = window.document.createElement("OPTION");
        if (day != "" && day != "00") {
            if (day == i) {
                op.selected = "selected";
            }
        }
        if (i < 10) {
            i = "0" + i;
        }
        // 璁剧疆OPTION瀵硅薄鐨勫€�
        op.value = i;
        // 璁剧疆OPTION瀵硅薄鐨勫唴瀹�
        op.innerHTML = i;
        // 娣诲姞鍒板ぉ鏁皊elect瀵硅薄
        this.selDay.appendChild(op);
    }
}


//###############################################//
//鍔熻兘锛氳幏鍙栧嚑澶╀箣鍚庣殑鏃ユ湡
//鍙傛暟锛歴tarDate: 寮€濮嬫棩鏈�
//鍙傛暟锛歛ddNum: 澶╂暟
//###############################################//
function getNextDateNum(starDate, addNum) {
    if (null == starDate || null == addNum) {
        return "";
    } else {
        var tempStr = new String(starDate);
        var port = "-";
        if (tempStr.indexOf("-") != -1) {
            port = "-";
        } else {
            return alert("鏃ユ湡鏍煎紡鏈夎!");
        }
        addNum = new Number(addNum);
        tempStr = tempStr.substring(0, 10);
        var date = new Date(tempStr.split(port)[0], tempStr.split(port)[1], tempStr.split(port)[2]);
        date.setDate(date.getDate() + addNum);
        //鍒ゆ柇鏈堝拰鏃ユ槸鍚﹀皬浜�10
        var month = (date.getMonth());
        var day = date.getDate();
        if (month < 10) {//鏈�
            month = "0" + month;
        }
        if (day < 10) {//澶�
            day = "0" + day;
        }
        if (port == "-") {
            tempStr = date.getFullYear().toString() + port.toString() + month.toString() + port.toString() + day.toString();
        }
        return tempStr;
    }
}

//###############################################//
//鍔熻兘锛氳幏鍙栧嚑澶╀箣鍚庣殑鏃ユ湡
//鍙傛暟锛歴tarDate: 寮€濮嬫棩鏈�
//鍙傛暟锛歛ddNum: 澶╂暟
//###############################################//
function getEarlyDateNum(starDate, addNum) {
    if (null == starDate || null == addNum) {
        return "";
    } else {
        var tempStr = new String(starDate);
        var port = "-";
        if (tempStr.indexOf("-") != -1) {
            port = "-";
        } else {
            return alert("鏃ユ湡鏍煎紡鏈夎!");
        }
        addNum = new Number(addNum);
        tempStr = tempStr.substring(0, 10);
        var date = new Date(tempStr.split(port)[0], tempStr.split(port)[1], tempStr.split(port)[2]);
        date.setDate(date.getDate() - addNum);
        //鍒ゆ柇鏈堝拰鏃ユ槸鍚﹀皬浜�10
        var month = (date.getMonth());

        var day = date.getDate();
        if (month < 10) {//鏈�
            month = "0" + month;
        }
        if (day < 10) {//澶�
            day = "0" + day;
        }
        if (port == "-") {
            tempStr = date.getFullYear().toString() + port.toString() + month.toString() + port.toString() + day.toString();
        }
        return tempStr;
    }
}

//Luhm鏍￠獙瑙勫垯锛�16浣嶉摱琛屽崱鍙凤紙19浣嶉€氱敤锛�:
// 1.灏嗘湭甯︽牎楠屼綅鐨� 15锛堟垨18锛変綅鍗″彿浠庡彸渚濇缂栧彿 1 鍒� 15锛�18锛夛紝浣嶄簬濂囨暟浣嶅彿涓婄殑鏁板瓧涔樹互 2銆�
// 2.灏嗗浣嶄箻绉殑涓崄浣嶅叏閮ㄧ浉鍔狅紝鍐嶅姞涓婃墍鏈夊伓鏁颁綅涓婄殑鏁板瓧銆�
// 3.灏嗗姞娉曞拰鍔犱笂鏍￠獙浣嶈兘琚� 10 鏁撮櫎銆�
//鏂规硶姝ラ寰堟竻鏅帮紝鏄撶悊瑙ｏ紝闇€瑕佸湪椤甸潰寮曠敤Jquery.js    
//bankno涓洪摱琛屽崱鍙� banknoInfo涓烘樉绀烘彁绀轰俊鎭殑DIV鎴栧叾浠栨帶浠�
function luhmCheck(bankno) {
    var lastNum = bankno.substr(bankno.length - 1, 1);//鍙栧嚭鏈€鍚庝竴浣嶏紙涓巐uhm杩涜姣旇緝锛�
    var first15Num = bankno.substr(0, bankno.length - 1);//鍓�15鎴�18浣�
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) {    //鍓�15鎴�18浣嶅€掑簭瀛樿繘鏁扮粍
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array();  //濂囨暟浣�*2鐨勭Н <9
    var arrJiShu2 = new Array(); //濂囨暟浣�*2鐨勭Н >9
    var arrOuShu = new Array();  //鍋舵暟浣嶆暟缁�
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) {//濂囨暟浣�
            if (parseInt(newArr[j]) * 2 < 9)
                arrJiShu.push(parseInt(newArr[j]) * 2);
            else
                arrJiShu2.push(parseInt(newArr[j]) * 2);
        }
        else //鍋舵暟浣�
            arrOuShu.push(newArr[j]);
    }
    var jishu_child1 = new Array();//濂囨暟浣�*2 >9 鐨勫垎鍓蹭箣鍚庣殑鏁扮粍涓綅鏁�
    var jishu_child2 = new Array();//濂囨暟浣�*2 >9 鐨勫垎鍓蹭箣鍚庣殑鏁扮粍鍗佷綅鏁�
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }
    var sumJiShu = 0; //濂囨暟浣�*2 < 9 鐨勬暟缁勪箣鍜�
    var sumOuShu = 0; //鍋舵暟浣嶆暟缁勪箣鍜�
    var sumJiShuChild1 = 0; //濂囨暟浣�*2 >9 鐨勫垎鍓蹭箣鍚庣殑鏁扮粍涓綅鏁颁箣鍜�
    var sumJiShuChild2 = 0; //濂囨暟浣�*2 >9 鐨勫垎鍓蹭箣鍚庣殑鏁扮粍鍗佷綅鏁颁箣鍜�
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }
    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }
    for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    //璁＄畻鎬诲拰
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
    //璁＄畻Luhm鍊�
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhm = 10 - k;
    if (lastNum == luhm) {
        return true;
    } else {
        return false;
    }
}

/**
 * 韬唤璇佸垽鏂�
 * @param num
 * @returns {Boolean}
 */
function IDCardCheck(num) {

    //韬唤璇佸彿鐮佷负15浣嶆垨鑰�18浣嶏紝15浣嶆椂鍏ㄤ负鏁板瓧锛�18浣嶅墠17浣嶄负鏁板瓧锛屾渶鍚庝竴浣嶆槸鏍￠獙浣嶏紝鍙兘涓烘暟瀛楁垨瀛楃X銆�   
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
        fadeText('杈撳叆鐨勮韩浠借瘉鍙烽暱搴︿笉瀵癸紝鎴栬€呭彿鐮佷笉绗﹀悎瑙勫畾锛�');
        return false;
    }
    //鏍￠獙浣嶆寜鐓SO 7064:1983.MOD 11-2鐨勮瀹氱敓鎴愶紝X鍙互璁や负鏄暟瀛�10銆� 
    //涓嬮潰鍒嗗埆鍒嗘瀽鍑虹敓鏃ユ湡鍜屾牎楠屼綅 
    var len, re;
    len = num.length;
    if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = num.match(re);

        //妫€鏌ョ敓鏃ユ棩鏈熸槸鍚︽纭� 
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            fadeText('杈撳叆鐨勮韩浠借瘉鍙烽噷鍑虹敓鏃ユ湡涓嶅锛�');
            return false;
        }
        else {
            //灏�15浣嶈韩浠借瘉杞垚18浣� 
            //鏍￠獙浣嶆寜鐓SO 7064:1983.MOD 11-2鐨勮瀹氱敓鎴愶紝X鍙互璁や负鏄暟瀛�10銆� 
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            num += arrCh[nTemp % 11];
            return true;
        }
    }
    if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = num.match(re);

        //妫€鏌ョ敓鏃ユ棩鏈熸槸鍚︽纭� 
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
        if (!bGoodDay) {
            // alert(dtmBirth.getYear());
            // alert(arrSplit[2]);
            fadeText('杈撳叆鐨勮韩浠借瘉鍙烽噷鍑虹敓鏃ユ湡涓嶅锛�');
            return false;
        }
        else {
            //妫€楠�18浣嶈韩浠借瘉鐨勬牎楠岀爜鏄惁姝ｇ‘銆� 
            //鏍￠獙浣嶆寜鐓SO 7064:1983.MOD 11-2鐨勮瀹氱敓鎴愶紝X鍙互璁や负鏄暟瀛�10銆� 
            var valnum;
            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
            var nTemp = 0, i;
            for (i = 0; i < 17; i++) {
                nTemp += num.substr(i, 1) * arrInt[i];
            }
            valnum = arrCh[nTemp % 11];
            if (valnum != num.substr(17, 1)) {
                fadeText('18浣嶈韩浠借瘉鐨勬牎楠岀爜涓嶆纭紒'); //搴旇涓猴細 + valnum
                return false;
            }
            return true;
        }
    }
    return false;
}


//鍒ゆ柇鎵嬫満
function IsCellPhone(tel) {
    var patrn = /^(13|15|18|14|17)+[0-9]{9}$/;
    if (!patrn.exec(tel)) return false;
    return true;

}

// 鍒ゆ柇閭欢
function IsEmail(email) {
    var patrn = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!patrn.exec(email)) {
        return false;
    } else {
        return true;
    }
}

//妫€娴嬩紶鐪熷拰鐢佃瘽
function IsFax(fax) {
    // var patrn =/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    // if(!patrn.exec(fax)) return false;
    return true;
}

var array_time = new Array();
/**
 * 鍊掕鏃禞S宸ュ叿
 * @param divId 瑕佸啓鍏ョ殑DIV浣嶇疆锛屽彲浠ユ槸ID锛屼篃鍙互鏄痗lass  闇€瑕佸啓鏄庢槸ID杩樻槸class 姣斿锛� 鈥�#123鈥� 鎴栤€樸€�123鈥� 
 * @param endtime 缁撴潫鏃堕棿銆傛爣鍑嗙殑鏃堕棿鏍煎紡
 * @param startText  闇€瑕佸湪鍊掕鍓嶅姞鐨勫墠缂€鍚嶇О  鏈€鍚庢樉绀烘晥鏋滀负锛� startText 0鏃�00鍒�00绉�
 */
function initCountDownShow(divId, endtime, startText) {
    var currentDate = new Date();
    var EndTime = new Date(endtime);
    var days = EndTime - currentDate;
    var aEndTimeMsg = parseInt(days / 1000);//绮剧‘鍒扮
    var id = array_time.length;
    array_time[id] = aEndTimeMsg;
    if (aEndTimeMsg > 0) {
        var div = '<strong id="' + id + 'HH"></strong>鏃� <strong id="' + id + 'MM"></strong>鍒� <strong id="' + id + 'SS"></strong>绉�';
        $(divId).append(div);
        setInterval("CountDownShow(" + id + ")", 1000);
    } else {
        var div = '宸茶繃鏈�';
        $(divId).append(div);
    }
}


function CountDownShow(id) {
    var EndTimeMsg = array_time[id];
    h = Math.floor(EndTimeMsg / 60 / 60);
    m = Math.floor((EndTimeMsg - h * 60 * 60) / 60);
    s = Math.floor((EndTimeMsg - h * 60 * 60 - m * 60));
    // document.getElementById(id+"DD").innerHTML = parseInt(h/24);
    document.getElementById(id + "HH").innerHTML = h;
    document.getElementById(id + "MM").innerHTML = m;
    document.getElementById(id + "SS").innerHTML = s;
    EndTimeMsg--;
    array_time[id] = EndTimeMsg;
    if (EndTimeMsg < 0) {
        document.getElementById(id + "DD").innerHTML = "0";
        document.getElementById(id + "HH").innerHTML = "00";
        document.getElementById(id + "MM").innerHTML = "00";
        document.getElementById(id + "SS").innerHTML = "00";;
    }
}

//js mb5鍔犲瘑
var hexcase = 0; function hex_md5(a) { if (a == "") return a; return rstr2hex(rstr_md5(str2rstr_utf8(a))) } function hex_hmac_md5(a, b) { return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a), str2rstr_utf8(b))) } function md5_vm_test() { return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72" } function rstr_md5(a) { return binl2rstr(binl_md5(rstr2binl(a), a.length * 8)) } function rstr_hmac_md5(c, f) { var e = rstr2binl(c); if (e.length > 16) { e = binl_md5(e, c.length * 8) } var a = Array(16), d = Array(16); for (var b = 0; b < 16; b++) { a[b] = e[b] ^ 909522486; d[b] = e[b] ^ 1549556828 } var g = binl_md5(a.concat(rstr2binl(f)), 512 + f.length * 8); return binl2rstr(binl_md5(d.concat(g), 512 + 128)) } function rstr2hex(c) { try { hexcase } catch (g) { hexcase = 0 } var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; var b = ""; var a; for (var d = 0; d < c.length; d++) { a = c.charCodeAt(d); b += f.charAt((a >>> 4) & 15) + f.charAt(a & 15) } return b } function str2rstr_utf8(c) { var b = ""; var d = -1; var a, e; while (++d < c.length) { a = c.charCodeAt(d); e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0; if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) { a = 65536 + ((a & 1023) << 10) + (e & 1023); d++ } if (a <= 127) { b += String.fromCharCode(a) } else { if (a <= 2047) { b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63)) } else { if (a <= 65535) { b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63)) } else { if (a <= 2097151) { b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63)) } } } } } return b } function rstr2binl(b) { var a = Array(b.length >> 2); for (var c = 0; c < a.length; c++) { a[c] = 0 } for (var c = 0; c < b.length * 8; c += 8) { a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (c % 32) } return a } function binl2rstr(b) { var a = ""; for (var c = 0; c < b.length * 32; c += 8) { a += String.fromCharCode((b[c >> 5] >>> (c % 32)) & 255) } return a } function binl_md5(p, k) { p[k >> 5] |= 128 << ((k) % 32); p[(((k + 64) >>> 9) << 4) + 14] = k; var o = 1732584193; var n = -271733879; var m = -1732584194; var l = 271733878; for (var g = 0; g < p.length; g += 16) { var j = o; var h = n; var f = m; var e = l; o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936); l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586); m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819); n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330); o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897); l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426); m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341); n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983); o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416); l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417); m = md5_ff(m, l, o, n, p[g + 10], 17, -42063); n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162); o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682); l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101); m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290); n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329); o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510); l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632); m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713); n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302); o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691); l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083); m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335); n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848); o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438); l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690); m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961); n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501); o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467); l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784); m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473); n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734); o = md5_hh(o, n, m, l, p[g + 5], 4, -378558); l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463); m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562); n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556); o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060); l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353); m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632); n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640); o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174); l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222); m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979); n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189); o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487); l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835); m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520); n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651); o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844); l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415); m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905); n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055); o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571); l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606); m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523); n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799); o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359); l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744); m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380); n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649); o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070); l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379); m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259); n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551); o = safe_add(o, j); n = safe_add(n, h); m = safe_add(m, f); l = safe_add(l, e) } return Array(o, n, m, l) } function md5_cmn(h, e, d, c, g, f) { return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d) } function md5_ff(g, f, k, j, e, i, h) { return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h) } function md5_gg(g, f, k, j, e, i, h) { return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h) } function md5_hh(g, f, k, j, e, i, h) { return md5_cmn(f ^ k ^ j, g, f, e, i, h) } function md5_ii(g, f, k, j, e, i, h) { return md5_cmn(k ^ (f | (~j)), g, f, e, i, h) } function safe_add(a, d) { var c = (a & 65535) + (d & 65535); var b = (a >> 16) + (d >> 16) + (c >> 16); return (b << 16) | (c & 65535) } function bit_rol(a, b) { return (a << b) | (a >>> (32 - b)) };

function pdcolor(rgb) {
    if (rgb >= 0) {
        return rgb;
        //濡傛灉鏄竴涓猦ex鍊煎垯鐩存帴杩斿洖
    } else {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) { return ("0" + parseInt(x).toString(16)).slice(-2); }
        rgb = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        return rgb;
    }

}


//楠岃瘉鏄惁涓轰腑鏂�   
function isChinese(obj) {
    var reg = /^[\u0391-\uFFE5]+$/;
    if (obj != "" && !reg.test(obj)) {
        obj = "";
        return false;
    } else {
        return true;
    }
}

var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 鍔犳潈鍥犲瓙   
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 韬唤璇侀獙璇佷綅鍊�.10浠ｈ〃X   
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //鍘绘帀瀛楃涓插ご灏剧┖鏍�                     
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //杩涜15浣嶈韩浠借瘉鐨勯獙璇�    
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 寰楀埌韬唤璇佹暟缁�   
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //杩涜18浣嶈韩浠借瘉鐨勫熀鏈獙璇佸拰绗�18浣嶇殑楠岃瘉
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
/**  
 * 鍒ゆ柇韬唤璇佸彿鐮佷负18浣嶆椂鏈€鍚庣殑楠岃瘉浣嶆槸鍚︽纭�  
 * @param a_idCard 韬唤璇佸彿鐮佹暟缁�  
 * @return  
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 澹版槑鍔犳潈姹傚拰鍙橀噺   
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 灏嗘渶鍚庝綅涓簒鐨勯獙璇佺爜鏇挎崲涓�10鏂逛究鍚庣画鎿嶄綔   
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 鍔犳潈姹傚拰   
    }
    valCodePosition = sum % 11;                // 寰楀埌楠岃瘉鐮佹墍浣嶇疆   
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**  
  * 楠岃瘉18浣嶆暟韬唤璇佸彿鐮佷腑鐨勭敓鏃ユ槸鍚︽槸鏈夋晥鐢熸棩  
  * @param idCard 18浣嶄功韬唤璇佸瓧绗︿覆  
  * @return  
  */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 杩欓噷鐢╣etFullYear()鑾峰彇骞翠唤锛岄伩鍏嶅崈骞磋櫕闂   
    if (temp_date.getFullYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**  
 * 楠岃瘉15浣嶆暟韬唤璇佸彿鐮佷腑鐨勭敓鏃ユ槸鍚︽槸鏈夋晥鐢熸棩  
 * @param idCard15 15浣嶄功韬唤璇佸瓧绗︿覆  
 * @return  
 */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 瀵逛簬鑰佽韩浠借瘉涓殑浣犲勾榫勫垯涓嶉渶鑰冭檻鍗冨勾铏棶棰樿€屼娇鐢╣etYear()鏂规硶   
    if (temp_date.getYear() != parseFloat(year)
        || temp_date.getMonth() != parseFloat(month) - 1
        || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
//鍘绘帀瀛楃涓插ご灏剧┖鏍�   
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//楠岃瘉鍙兘鏁板瓧   
function isfigure(zmnum) {
    if (zmnum.length >= 15) {
        var zmnumReg = /^[0-9]*$/;
        if (zmnum != "" && !zmnumReg.test(zmnum)) {
            zmnum = "";
            return false;
        } else if (zmnum != "") {
            return true;
        }
    } else {
        return false;
    }
}

//楠岃瘉鍙兘鏄瓧姣嶅拰鏁板瓧   
function ispw(zmnum) {
    if (zmnum.length < 20 && zmnum.length >= 6) {
        var zmnumReg = /^[0-9a-zA-Z]*$/;
        if (zmnum != "" && !zmnumReg.test(zmnum)) {
            zmnum = "";
            return 2; //鏍煎紡鏈夎  
        } else if (zmnum != "") {
            return '6';//楠岃瘉閫氳繃6 
        }
    } else {
        return '1';//瀵嗙爜涓嶅6浣�
    }
}

/**
 * JS鎻愮ず妗�
 * info 鎻愮ず淇℃伅鍐呭
 * isback 榛樿0鍒锋柊鏈〉闈� 1杩斿洖涓婁竴椤� 2涓嶆墽琛屼换浣曡繑鍥炶烦杞搷浣�
 * logo 1 10 姝ｇ‘ 2閿欒 3绂佹鎵ц 4闂 5闃绘鎵ц 7閿� 8 鑻︾瑧 9寰瑧 11 闂归挓 12 瀵硅瘽姘旀场 16鍔犺浇涓�
 * title 鎻愮ず妗嗘爣棰�
 * time 璺宠浆銆佸埛鏂般€佽繑鍥� 寤惰繜鏃堕棿
 * linkurl 璺宠浆閾炬帴
 */
function noticeBox(option) {
    var opt = {
        info: (option.info != "" && option.info != null) ? option.info : "",
        isback: (option.isback != "" && option.isback != null) ? option.isback : 0,
        logo: (option.logo != "" && option.logo != null) ? option.logo : 5,
        title: (option.title != "" && option.title != null) ? option.title : "鎻愮ず淇℃伅",
        time: (option.litimenk != "" && option.time != null && option.time >= 100) ? option.time : 3000,
        linkurl: (option.linkurl != "" && option.linkurl != null) ? option.linkurl : ""
    }
    if (opt.linkurl != "") {
        layer.alert(opt.info, opt.logo, opt.title);
        window.setTimeout(function () {
            location.href = opt.linkurl;
        }, opt.time);
    } else {
        layer.alert(opt.info, opt.logo, opt.title);
        if (opt.isback == 1) {
            window.setTimeout(function () {
                history.back(-1);
            }, opt.time);
        } else if (opt.isback == 0) {
            window.setTimeout(function () {
                self.location.reload();
            }, opt.time);
        }
    }
}