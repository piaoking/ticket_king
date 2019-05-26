package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.vo.City;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.po.TbParent;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.CityService;
import com.ticket.demo_ticketking.service.HomeService;
import com.ticket.demo_ticketking.service.ParentService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private ParentService parentService;

    @Autowired
    private HomeService homeService;

    @Autowired
    private CityService cityService;

    @RequestMapping("/parent")
    public String queryParent( Integer cityId , String time , Model model) throws Exception {
        List<City> cityList = homeService.queryTicketByCity(cityId, time);
        List<TbParent> tbParents = parentService.queryParent();
        List<TbCity> tbCities = cityService.queryCity();
        model.addAttribute("cities",tbCities);
        model.addAttribute("cityList",cityList);
        model.addAttribute("parentList",tbParents);
        return "shouye";
    }

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public JsonResult queryUserById(HttpSession session) throws Exception {
        JsonResult jsonResult = new JsonResult();
        Integer userId = (Integer) session.getAttribute("userId");
        if (userId == null){
            jsonResult.setCode(0);
        }else {
            TbUser tbUser = homeService.queryUserById(userId);
            jsonResult.setCode(1);
            String userTel = tbUser.getUserTel();
            jsonResult.setMsg(userTel);
        }
        System.out.println(jsonResult);
        return jsonResult;
    }
}
