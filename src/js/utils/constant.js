/**
 * Created by AnThen on 2016-12-14.
 */
//是否使用mock数据
let isMock=true;

//系统更新页面配置参数
let systemUpdate={
    //过滤条件请求
    fetchFilterAction:'api/filter',
    //列表请求
    fetchListAction:'api/list'
};
//制作更新包页面配置参数
let updatePackge={
    //预览图片请求
    previewAction:'http://localhost:9090/java_web_project/file.do?status=insert',
    //打包请求
    packAction:'http://localhost:9090/java_web_project/img.do?status=insert',
    //上传一条记录
    saveRecorderAction:'http://localhost:9090/java_web_project/img.do?status=insert'
};
//系统更新详情页面配置参数
let systemUpdateInfo={
    //过滤条件请求
    fetchPreviewAction:'api/filter',
    //列表请求
    fetchListAction:'api/list'
};
//系统更新日志页面配置参数
let systemUpdateLog={
    //列表请求
    fetchListAction:'api/list'
};
export {
    //是否mock数据
    isMock,
    systemUpdate,
    updatePackge,
    systemUpdateInfo,
    systemUpdateLog
}
