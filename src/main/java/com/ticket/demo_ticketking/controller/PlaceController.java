package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.service.IPlaceService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/place")
public class PlaceController {
    @Autowired
    private IPlaceService iPlaceService;
    @RequestMapping("pla")
    public  String queryPlace(Model model){
        List<TbPlace> tbPlaces = iPlaceService.queryPlace();
        model.addAttribute("tbPlaces",tbPlaces);
        return "place";

    }
    @RequestMapping("/places")
    @ResponseBody
    public JsonResult saveSee(TbPlace tbPlace){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbPlace){
            iPlaceService.savaPlace(tbPlace);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;
    }

    @RequestMapping("/placeById/{placeId}")
    public String queryshowId(@PathVariable("placeId") Integer placeId, Model model) throws Exception {
        System.out.println("sssss");
        TbPlace tbPlace = iPlaceService.queryPlaceById(placeId);
        model.addAttribute("placeupdate",tbPlace);
        return "placeupdate";
    }

    /**
     * 更新
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateplace")
    @ResponseBody
    public  JsonResult updateplace(TbPlace tbPlace) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbPlace){
            iPlaceService.updatePlace(tbPlace);
            System.out.println("---->"+tbPlace.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
