const base = {
    get() {
        return {
            url : "http://localhost:8080/shetuanguanli/",
            name: "shetuanguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shetuanguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生社团管理系统"
        } 
    }
}
export default base
