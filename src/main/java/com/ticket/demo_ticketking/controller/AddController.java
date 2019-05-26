package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbAdd;
import com.ticket.demo_ticketking.po.TbCity;
import com.ticket.demo_ticketking.service.IAddService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/save")
public class AddController {
    @Autowired
    private IAddService iAddService;

    @RequestMapping("/indexs")
    public String queryUser(Model model){
        List<TbAdd> tbAdds = iAddService.queryAdd();
        model.addAttribute("TbAdd",tbAdds);
        return "add";

    }
    @RequestMapping("/add")
    @ResponseBody
    public JsonResult saveSee(TbAdd tbAdd){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbAdd){
            iAddService.savaAdd(tbAdd);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }

    @RequestMapping("/addById/{addId}")
    public String cityById(@PathVariable("addId") Integer addId, Model model) throws Exception {
        System.out.println("sssss");
        TbAdd tbAdd = iAddService.queryAddById(addId);
        model.addAttribute("addupdate", tbAdd);
        return "addupdate";
    }

    @RequestMapping("/updateadd")
    @ResponseBody
    public  JsonResult updateadd(TbAdd tbAdd ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbAdd){
            iAddService.updateAdd(tbAdd);
            System.out.println("---->"+tbAdd.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }


}
