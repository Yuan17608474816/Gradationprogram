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
        /// <summary>
        /// 科室导航
        /// </summary>
        /// <returns></returns>
        public ActionResult Pan_InqDoc()
        {
            return View();
        }
        /// <summary>
        /// 症状自诊
        /// </summary>
        /// <returns></returns>
        public ActionResult SelDiaOfSym()
        {
            return View();
        }
        /// <summary>
        /// 找医生(科室)
        /// </summary>
        /// <returns></returns>
        public ActionResult SeaDoc()
        {
            return View();
        }
        /// <summary>
        /// 找医生(疾病)
        /// </summary>
        /// <returns></returns>
        public ActionResult SeaDocL()
        {
            return View();
        }
        /// <summary>
        /// 找医生(医院)
        /// </summary>
        /// <returns></returns>
        public ActionResult SeaDocH()
        {
            return View();
        }
        /// <summary>
        /// 找医院
        /// </summary>
        /// <returns></returns>
        public ActionResult FindHos()
        {
            return View();
        }
        /// <summary>
        /// 疾病知识库
        /// </summary>
        /// <returns></returns>
        public ActionResult DisKnDa()
        {
            return View();
        }
        /// <summary>
        /// 门诊出诊表
        /// </summary>
        /// <returns></returns>
        public ActionResult OutVisFor()
        {
            return View();
        }
        /// <summary>
        /// 查询服务
        /// </summary>
        /// <returns></returns>
        public ActionResult InqSer()
        {
            return View();
        }
        /// <summary>
        /// 感谢信
        /// </summary>
        /// <returns></returns>
        public ActionResult ThNoto()
        {
            return View();
        }
        /// <summary>
        /// 患者问答
        /// </summary>
        /// <returns></returns>
        public ActionResult PatQueAnR()
        {
            return View();
        }
        /// <summary>
        /// 健康科普
        /// </summary>
        /// <returns></returns>
        public ActionResult PoScHe()
        {
            return View();
        }
    }
}