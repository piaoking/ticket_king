package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.service.ICityService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/city")
public class CityController {
    @Autowired
    private ICityService iCityService;

    @RequestMapping("/po")
    public  String querycity(Model model){
        List<TbCity> tbCities = iCityService.queryCity();
        model.addAttribute("tbCities",tbCities);
        return "city";

    }
    @RequestMapping("/citys")
    @ResponseBody
    public JsonResult saveSee(TbCity tbCity){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbCity){
            iCityService.savaCity(tbCity);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }
    @RequestMapping("/cityById/{cityId}")
    public String cityById(@PathVariable("cityId") Integer cityId, Model model) throws Exception {
        System.out.println("sssss");
        TbCity tbCity = iCityService.queryCityById(cityId);
        model.addAttribute("cityupdate", tbCity);
        return "cityupdate";
    }

    @RequestMapping("/updatecity")
    @ResponseBody
    public  JsonResult updatecity(TbCity tbCity ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbCity){
            iCityService.updateCity(tbCity);
            System.out.println("---->"+tbCity.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
