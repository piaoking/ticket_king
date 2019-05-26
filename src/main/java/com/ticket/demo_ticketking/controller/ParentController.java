package com.ticket.demo_ticketking.controller;

import com.ticket.demo_ticketking.po.TbParent;
import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.po.TbSession;
import com.ticket.demo_ticketking.service.IParentService;
import com.ticket.demo_ticketking.vo.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("parent")
public class ParentController {
    @Autowired
    private IParentService iParentService;

    @RequestMapping("/par")
    public  String queryParent(Model model){
        List<TbParent> tbParents = iParentService.queryParent();
        model.addAttribute("tbParents",tbParents);
        return "parent";

    }
    @RequestMapping("/places")
    @ResponseBody
    public JsonResult saveSee(TbParent tbParent){
        System.out.println("添加");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbParent){
            iParentService.savaParent(tbParent);
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("添加失败");
        }
        return jsonResult;

    }


        @RequestMapping("/parentById/{parentId}")
        public String queryshowId(@PathVariable("parentId") Integer parentId, Model model) throws Exception {
            System.out.println("sssss");
            TbParent tbParent = iParentService.queryParentById(parentId);
            model.addAttribute("parentupdate",tbParent);
            return "parentupdate";
}
    /**
     * 更新
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping("/updateparent")
    @ResponseBody
    public  JsonResult updateparent(TbParent tbParent ) throws Exception {
        System.out.println("修改");
        JsonResult jsonResult = new JsonResult();
        if (null !=tbParent){
            iParentService.updateParent(tbParent);
            System.out.println("---->"+tbParent.toString());
            jsonResult.setCode(1);
        }else {
            jsonResult.setCode(0);
            jsonResult.setMsg("更新失败");
        }
        System.out.println(jsonResult.toString()+"更新成功");
        return jsonResult;

    }
}
