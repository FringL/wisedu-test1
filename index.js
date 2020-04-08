$.ajax({
    url: "data.json",//json文件位置
    type: "GET",//请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) {//请求成功完成后要执行的方法 
        if (data.code == 1 && data.msg == "成功") {
            console.log(data.msg);  
            data.result.forEach(article => {
                //文章标题
                var articleTitle = article.title;

                //计算发布时间
                var writeTime = new Date(article.time);
                var nowTime = new Date();
                var monthDifference = nowTime.getMonth() - writeTime.getUTCMonth();
                var articleTime = null;
                if (monthDifference < 1){
                    var dayDifference = nowTime.getDay() - writeTime.getDay();
                    if (dayDifference < 1){
                        var hourDifference = nowTime.getHours() - writeTime.getHours();
                        if(hourDifference < 1){
                            var minuteDifference = nowTime.getMinutes() - writeTime.g
                        }
                    }
                    else{
                        articleTime = dayDifference + "天前发布";
                    }
                } else if (monthDifference <= 12){
                    articleTime = monthDifference - 1 + "个月前发布";
                } else{
                    articleTime = "一年以前发布";
                }
                //console.log(articleTime);

                //计算阅读人数(同一篇文章已读，阅读数加一)
                var readTimes = 0;
                data.result.forEach(article => {
                   if(article.status == "1" ){
                       readTimes++;
                    }
                });
                var articleRead = readTimes + "人已阅读";
                console.log(articleRead);

                //图片url
                var articleImage = article.img;

                document.getElementById("articles").innerHTML+="<div class=\"split-line\"></div><li class=\"article\"><br><div class=\"article-content\"><span class=\"article-time\">" + articleTime +  "</span><br><span class=\"article-read\">" + articleRead + "</span><br><img class=\"article-image\" src=\"" + articleImage + "\"></div><br><a class=\"article-title\" href=\"\">" + articleTitle +"</a><br></li>";
            });
        }   
    }
 })