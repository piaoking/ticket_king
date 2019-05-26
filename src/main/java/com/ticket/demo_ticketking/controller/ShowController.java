package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.po.TbShow;
import com.ticket.demo_ticketking.po.TbSon;
import com.ticket.demo_ticketking.service.IShowService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/show")
public class ShowController {
    @Autowired
    private IShowService iShowService;

    @RequestMapping("/sho")
    public String queryShow(Model model){
        List<TbShow> tbShows = iShowService.queryCity();
        model.addAttribute("tbShows",tbShows);
        return "show";

    }
    @ResponseBody
    @RequestMapping("/saveshow")
    public JsonResult savaShow(TbShow tbShow){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null!=tbShow){
            iShowService.saveShow(tbShow);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;
    }

    /**
     * id查询
     * @param
     * @param model
     * @return
     */
    @RequestMapping("/showById/{showId}")
    public String queryshowId(@PathVariable("showId") Integer showId, Model model) throws Exception {
        System.out.println("sssss");
        TbShow tbShow = iShowService.queryShowsId(showId);
        model.addAttribute("showupdate",tbShow);
        return "showupdate";
    }

    /**
     * 更新
     * @param tbShow
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateshow")
    @ResponseBody
    public  JsonResult updateshow(TbShow tbShow) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbShow){
            iShowService.updateShows(tbShow);
            System.out.println("---->"+tbShow.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }


}
