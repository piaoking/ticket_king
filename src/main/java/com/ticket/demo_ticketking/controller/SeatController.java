package com.ticket.demo_ticketking.controller;


import com.google.gson.Gson;
import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.service.SeatService;
import com.ticket.demo_ticketking.vo.SeatVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.ArrayList;

@Controller
@CrossOrigin
@RequestMapping("/seat")
public class SeatController {
    @Autowired
    private SeatService seatService;
    @Autowired
    private StringRedisTemplate stringRedisTemplate;
    private ArrayList<SeatVO> seatVOList = new ArrayList<>();
    private Integer seatNum = 0;
    private String place;
    private String seats;
    @RequestMapping("/chioceseat")
    public String querySeat(long placeId,Model model) throws Exception {
           place = Long.toString(placeId);
      seats =stringRedisTemplate.boundValueOps(place).get();
        TbPlace tbPlace = null;
        if(seats == null||"".equals(seats)){
            seats = seatService.querySeat(placeId).getPlaceSeat();
            stringRedisTemplate.boundValueOps(place).set(seats);
        }
//        seats =stringRedisTemplate.boundValueOps(place).get();
//        System.out.println(seats);
//        JSONArray jsonArray = JSONArray.fromObject(seats);
//        System.out.println("json格式-："+jsonArray);
//        for(int i = 0;i< jsonArray.size();i++){
//            JSONObject jsonObject = jsonArray.getJSONObject(i);
//            seatVOList.add((SeatVO) jsonObject.toBean(jsonObject,SeatVO.class));

//        }
//        for (int j =0;j<seatVOList.size();j++){
//        if(seatVOList.get(j).getStyle()==0){
//            seatNum++;
//        }
//            System.out.println("第"+j+"个座位"+seatVOList.get(j));
//        }
        model.addAttribute("tbPlace",seats);
        return "在线选座";
    }
    @RequestMapping("/addseat")
    public String addSeat(int row,int col){
        int row1 =  row-1;
        int col1 = col-1;
        System.out.println(row+"----"+col);
        String seat1 = stringRedisTemplate.boundValueOps(place).get();
        Gson gson = new Gson();
        long[][] longs = gson.fromJson(seat1, long[][].class);
        for (int i = 0;i<longs.length;i++){
            for(int j=0;j<longs[i].length;j++){
                longs[row1][col1] = 0;
            }
        }
        seats = gson.toJson(longs);
        stringRedisTemplate.boundValueOps(place).set(seats);
        return null;
    }
}
