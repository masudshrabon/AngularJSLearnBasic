using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GoToLink1()
        {
            return View();
        }
        public ActionResult GoToLink2()
        {
            return View();
        }
        public ActionResult GoToLink3()
        {
            return View();
        }
    }
}