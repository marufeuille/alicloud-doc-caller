chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "openManual") {
        openManual();
    }
}); 

function openManual() {
   const curr = location.href;
   const page = [
    ["https://ecs-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/25365.htm"],
    ["https://fc.console.aliyun.com/overview/ap-northeast-1", "https://jp.alibabacloud.com/help/product/50980.htm?spm=a21mg.m28257.a1.4.480f2f9fSCZJDD"],
    ["https://ess-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/25855.htm"],
    ["https://slb.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/27537.htm"],
    ["https://cs.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/25972.htm"],
    ["https://rds-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/26090.htm"],
    ["https://kvstore-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/26340.htm"],
    ["https://kvstore-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/26528.htm"],
    ["https://oss.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/31815.htm"],
    ["https://ots-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/27278.htm"],
    ["https://cms-ap-northeast-1.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/28572.htm"],
    ["https://ram.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/28625.htm"],
    ["https://cdn.console.aliyun.com/", "https://jp.alibabacloud.com/help/product/27099.htm"]
   ];
   let target_url = page.filter( (item) => {
     return curr.startsWith(item[0])
   });
   if (target_url.length == 0) {
       target_url = "https://jp.alibabacloud.com/help";
   }
   else {
       target_url = target_url[0][1];
   }
   console.log(target_url)
   window.open(target_url)
}

