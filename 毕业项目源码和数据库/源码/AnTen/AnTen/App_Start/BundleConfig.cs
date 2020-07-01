using System.Web;
using System.Web.Optimization;

namespace AnTen
{
    public class BundleConfig
    {
        // 有关捆绑的详细信息，请访问 https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备就绪，请使用 https://modernizr.com 上的生成工具仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            //_LayoutPage_Pan所需样式与js
            bundles.Add(new StyleBundle("~/AnTen/css").Include(

                    "~/Content/LayoutPage/global.css",
                    "~/Content/LayoutPage/lyc.css",
                        "~/Content/PMain/slick.css",
                    "~/Content/LayoutPage/page.css",
                        "~/Scripts/PMain/jquery.min.js",
                    "~/Scripts/PMain/global.js",
                        "~/Scripts/PMain/jquery.mousewheel.js",
                    "~/Content/LayoutPage/jquery.mCustomScrollbar.css",
                     "~/scripts/selsym/cityswitch.js",
                        "~/Scripts/PMain/jquery.mCustomScrollbar.min.js",
                    "~/Scripts/PMain/slick.js"
                    ));
        }
    }
}
