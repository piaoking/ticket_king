package com.ticket.demo_ticketking.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ticket.demo_ticketking.po.TbSon;
import com.ticket.demo_ticketking.service.ISonService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/son")
public class SonContrller {
    /**
     * 查询
     */
    @Autowired
    private ISonService iSonService;

//    @RequestMapping("so")
//    public  String querySon(Model model){
//        List<TbSon> tbSons = iSonService.querySon();
//        model.addAttribute("tbSons",tbSons);
//        return "son";
//
//    }

    /**
     * 添加
     * @param tbSon
     * @return
     */
    @RequestMapping("/song")
    @ResponseBody
    public JsonResult saveSang(TbSon tbSon){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbSon){
            iSonService.savaSon(tbSon);
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
    @RequestMapping("/sonById/{sonId}")
    public String querysonId(@PathVariable("sonId") Integer sonId, Model model)  {
        System.out.println("sssss");
        TbSon tbSon = iSonService.querySonById(sonId);
        model.addAttribute("sonupate",tbSon);
        return "sonupate";
    }

    /**
     * 更新
     * @param tbSon
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateson")
    @ResponseBody
    public  JsonResult updateson(TbSon tbSon) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbSon){
            iSonService.UpdateSon(tbSon);
            System.out.println("---->"+tbSon.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
    @RequestMapping("/so")
    public String queryAllStation(Model model,@RequestParam(defaultValue = "1",value = "pageNum") Integer pageNum){
        PageHelper.startPage(pageNum,10);
        List<TbSon> stationList = iSonService.querySon();
        PageInfo<TbSon> pageInfo = new PageInfo<>(stationList);
        model.addAttribute("pageInfo",pageInfo);
        return "son";
    }

}
