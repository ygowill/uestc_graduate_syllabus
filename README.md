# UESTC 研究生课表一键导出
研究生系统的课表功能实在是过于孱弱，打印居然是生成一个pdf，话说这年头真有人打印出来吗。。。

于是只好写了一个脚本，帮助大家一键导出ics文件。ics文件的好处就在于这是一个通用的日历格式，可以在各个平台上使用。下面也会说明如何使用。

如果在使用过程中发现了什么问题，欢迎提pr~


## 环境要求

浏览器：Chrome

插件：[Tampermonkey](https://www.tampermonkey.net/)



## 使用方法

1. 在chrome中安装完tampermonkey之后，点击[此处](https://greasyfork.org/zh-CN/scripts/422597-uestc-%E7%A0%94%E7%A9%B6%E7%94%9F%E8%AF%BE%E8%A1%A8ics%E5%AF%BC%E5%87%BA)进入Greasy Fork安装本插件。

2. 进入研究生系统 -> 个人课表查询，可以在右上角找到导出ics的按钮，如下图所示，点击即可导出下载。![img](https://greasyfork.s3.us-east-2.amazonaws.com/2o5d0zmn7naqyxq4nwj3gy0oleh1)

## 各平台导入方法

### MacOS用户

可以直接点击导出的ics文件加入日历

### IOS用户

#### 方法1

1. 在电脑上导出后，打开奶牛快传，上传之后获取下载链接
2. 在手机上的Safari上打开上述链接，点击下载全部。
3. 允许该网站的日历邀请
4. 点右上角的导入全部



#### 方法2

1. 访问该[网站](https://routinehub.co/shortcut/7005/)，或手机扫描下面的二维码添加快捷指令(Shortcut)，对于初次使用快捷指令的用户而言，请随便选一个原来就有的快捷指令的执行一遍，然后打开设置中的允许不守信任的快捷指令，才可以运行这个快捷指令。

   ![image-20210305172914057](https://gitee.com/ygowill/pic_bed/raw/master/blog/20210305172914.png)

2. 然后利用QQ或者微信将电脑上导出的ICS文件发送到手机，选择用其他应用打开后，点下面的ICS To Calendar

3. 点右上角导入全部

### Windows用户

可以直接用**日历**应用打开

### Android用户

可以在电脑上通过QQ，微信等应用将导出的ics文件传到手机，点击即可加入日历



### IOS日历效果

![7A82CF4D0B55C0786C1C05B5D3A621FA](https://gitee.com/ygowill/pic_bed/raw/master/blog/20210304135702.png)