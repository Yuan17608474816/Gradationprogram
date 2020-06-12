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
        public ActionResult PanMain()
        {
            return View();
        }
    }
}