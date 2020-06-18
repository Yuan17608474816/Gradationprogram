using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AnTen.Controllers
{
    public class AT_PMainController : Controller
    {
        // GET: AT_PMain
        public ActionResult DefMain()
        {
            return View();
        }
        /// <summary>
        /// 患者首页
        /// </summary>
        /// <returns></returns>
        public ActionResult PanMain()
        {
            return View();
        }
        public ActionResult Pan_InqDoc()
        {
            return View();
        }
        public ActionResult Virture()
        {
            return View();
        }
    }
}